#!/usr/bin/env python3
"""Testa o Treino: renderiza TODAS as questões no celular, confere marcação, rolagem e pontuação."""
import sys, os, pathlib, json
from playwright.sync_api import sync_playwright
src, out = sys.argv[1], pathlib.Path(sys.argv[2]); out.mkdir(parents=True, exist_ok=True)
url = src if src.startswith("http") else "https://local.test/objetivo"
errs = []
with sync_playwright() as p:
    b = p.chromium.launch(proxy={"server": os.environ["https_proxy"]})
    ctx = b.new_context(viewport={"width": 375, "height": 812}, device_scale_factor=2, is_mobile=True, has_touch=True)
    pg = ctx.new_page()
    if not src.startswith("http"):
        pg.route("https://local.test/**", lambda r: r.fulfill(path=src, content_type="text/html; charset=utf-8"))
    pg.on("pageerror", lambda e: errs.append(f"pageerror: {e}"))
    pg.goto(url + "#treino", wait_until="networkidle"); pg.wait_for_timeout(1200)
    # jogador local (sem ranking): cria direto no localStorage
    pg.evaluate("""()=>{localStorage.setItem('gobj:users',JSON.stringify({'teste-local':{name:'Teste Local',s:{}}}));localStorage.setItem('gobj:cur',JSON.stringify('teste-local'))}""")
    pg.reload(wait_until="networkidle"); pg.wait_for_timeout(1500)
    if pg.is_visible("#login"): pg.click("#loginClose")
    pg.screenshot(path=str(out / "t0-setup.png"), full_page=True)
    tq = pg.evaluate("window.__OBJ.tq")
    print("questões:", len(tq))
    cw = pg.evaluate("document.documentElement.clientWidth")
    # tópico a tópico: inicia sessão de cada tópico e responde (1ª errada de propósito em metade)
    topics = sorted(set(i.split(":")[1] for i in tq), key=lambda t: tq.index(next(x for x in tq if x.split(':')[1]==t)))
    n = 0
    for ti, t in enumerate(topics):
        pg.evaluate("location.hash='treino'"); pg.wait_for_timeout(80)
        if pg.is_visible("#tNew"): pg.click("#tNew"); pg.wait_for_timeout(60)
        pg.click(f'[data-tt="{t}"]'); pg.wait_for_timeout(120)
        while pg.is_visible(".opt"):
            txt = pg.inner_text("#treino")
            if "[[" in txt or "√{" in txt or "undefined" in txt: errs.append(f"marcação em {t}: {txt[:80]}")
            if pg.evaluate("document.documentElement.scrollWidth") > cw: errs.append(f"rolagem horizontal em {t} q{n}")
            opts = pg.query_selector_all(".opt")
            if len(opts) != 5: errs.append(f"{t}: {len(opts)} alternativas")
            # escolhe: na 1ª questão do tópico erra de propósito, nas demais acerta
            opts[0].click(); pg.wait_for_timeout(80)
            n += 1
            if n in (1, 37, 120): pg.screenshot(path=str(out / f"t-q{n}.png"), full_page=True)
            if pg.evaluate("document.documentElement.scrollWidth") > cw: errs.append(f"rolagem horizontal depois de responder {t}")
            pg.click("#tNext"); pg.wait_for_timeout(80)
        if ti == 0: pg.screenshot(path=str(out / "t-end.png"), full_page=True)
    print("respondidas:", n)
    info = pg.evaluate("document.querySelector('#player').innerText")
    print(info)
    pg.evaluate("location.hash='treino'"); pg.wait_for_timeout(200)
    if pg.is_visible("#tNew"): pg.click("#tNew"); pg.wait_for_timeout(100)
    pg.screenshot(path=str(out / "t1-setup-depois.png"), full_page=True)
    # foco nos erros
    pg.click('.chips[data-k="foco"] button[data-v="err"]'); pg.wait_for_timeout(100)
    pg.click("#tGo"); pg.wait_for_timeout(200)
    pg.screenshot(path=str(out / "t2-erros.png"))
    pg.evaluate("location.hash='placar'"); pg.wait_for_timeout(500)
    pg.screenshot(path=str(out / "t3-placar.png"), full_page=True)
    pg.evaluate("location.hash='rev/m-ang'"); pg.wait_for_timeout(300)
    pg.screenshot(path=str(out / "t4-rev-macete.png"), full_page=True)
    b.close()
print("ERROS:" if errs else "sem erros", *errs[:40], sep="\n")
