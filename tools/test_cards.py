#!/usr/bin/env python3
"""Testa os flashcards: vira TODOS no celular, confere marcação, rolagem, re-fila e pontos."""
import sys, os, pathlib
from playwright.sync_api import sync_playwright
src, out = sys.argv[1], pathlib.Path(sys.argv[2]); out.mkdir(parents=True, exist_ok=True)
url = src if src.startswith("http") else "https://local.test/objetivo"
errs = []; n = 0
with sync_playwright() as p:
    b = p.chromium.launch(proxy={"server": os.environ["https_proxy"]})
    ctx = b.new_context(viewport={"width": 375, "height": 812}, device_scale_factor=2, is_mobile=True, has_touch=True)
    pg = ctx.new_page()
    if not src.startswith("http"):
        pg.route("https://local.test/**", lambda r: r.fulfill(path=src, content_type="text/html; charset=utf-8"))
    pg.on("pageerror", lambda e: errs.append(f"pageerror: {e}"))
    pg.goto(url + "#cards", wait_until="networkidle"); pg.wait_for_timeout(800)
    pg.evaluate("""()=>{localStorage.setItem('gobj:users',JSON.stringify({'teste-cards':{name:'Teste Cards',s:{}}}));localStorage.setItem('gobj:cur',JSON.stringify('teste-cards'))}""")
    pg.reload(wait_until="networkidle"); pg.wait_for_timeout(1200)
    pg.screenshot(path=str(out / "c0-setup.png"))
    cw = pg.evaluate("document.documentElement.clientWidth")
    topics = pg.evaluate("[...new Set(window.__OBJ.fc.map(i=>i.split(':')[1]))]")
    tall = []
    for ti, t in enumerate(topics):
        pg.evaluate("location.hash='cards'"); pg.wait_for_timeout(60)
        if pg.is_visible("#fNew"): pg.click("#fNew"); pg.wait_for_timeout(50)
        pg.click(f'[data-ft="{t}"]'); pg.wait_for_timeout(100)
        first = True
        while pg.is_visible("#fcard"):
            if pg.is_visible("#fFlip"):
                if n == 0: pg.screenshot(path=str(out / "c1-frente.png"))
                pg.click("#fcard"); pg.wait_for_timeout(560)
            txt = pg.inner_text("#cards")
            if "[[" in txt or "√{" in txt or "undefined" in txt: errs.append(f"marcação em {t}")
            if pg.evaluate("document.documentElement.scrollWidth") > cw: errs.append(f"rolagem horizontal em {t}")
            h = pg.evaluate("(()=>{const f=document.querySelector('.face.back');return f.scrollHeight>f.clientHeight+2?f.scrollHeight:0})()")
            if h: tall.append((t, h))
            if n in (0, 120, 300): pg.screenshot(path=str(out / f"c2-verso-{n}.png"))
            if first and ti % 2 == 0:
                pg.click("#fNo"); first = False
            else:
                pg.click("#fYes")
            n += 1; pg.wait_for_timeout(60)
        if ti == 0: pg.screenshot(path=str(out / "c3-fim.png"), full_page=True)
    print("viradas:", n, "| frente/verso estourando a altura:", tall[:5])
    print(pg.inner_text("#player"))
    pg.evaluate("location.hash='placar'"); pg.wait_for_timeout(300)
    pg.screenshot(path=str(out / "c4-placar.png"), full_page=True)
    pg.emulate_media(color_scheme="dark"); pg.evaluate("location.hash='cards'"); pg.wait_for_timeout(100)
    if pg.is_visible("#fNew"): pg.click("#fNew")
    pg.click('[data-ft="p-fig"]'); pg.wait_for_timeout(100); pg.click("#fcard"); pg.wait_for_timeout(600)
    pg.screenshot(path=str(out / "c5-escuro.png"))
    b.close()
print("ERROS:" if errs else "sem erros", *errs[:30], sep="\n")
