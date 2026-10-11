#!/usr/bin/env python3
"""Testa os simulados: prova completa, persistência, entrega, nota, correção e tempo esgotado."""
import sys, os, pathlib, json
from playwright.sync_api import sync_playwright
src, out = sys.argv[1], pathlib.Path(sys.argv[2]); out.mkdir(parents=True, exist_ok=True)
url = src if src.startswith("http") else "https://local.test/objetivo"
errs = []
def chk(pg, where):
    t = pg.inner_text("#simu")
    if "[[" in t or "√{" in t or "undefined" in t or "NaN" in t: errs.append("marcação/valor estranho em " + where)
    if pg.evaluate("document.documentElement.scrollWidth") > pg.evaluate("document.documentElement.clientWidth"): errs.append("rolagem horizontal em " + where)
with sync_playwright() as p:
    b = p.chromium.launch(proxy={"server": os.environ["https_proxy"]})
    ctx = b.new_context(viewport={"width": 375, "height": 812}, device_scale_factor=2, is_mobile=True, has_touch=True)
    pg = ctx.new_page()
    if not src.startswith("http"):
        pg.route("https://local.test/**", lambda r: r.fulfill(path=src, content_type="text/html; charset=utf-8"))
    pg.on("pageerror", lambda e: errs.append(f"pageerror: {e}"))
    pg.goto(url + "#simu", wait_until="networkidle"); pg.wait_for_timeout(800)
    pg.evaluate("""()=>{localStorage.setItem('gobj:users',JSON.stringify({'teste-simu':{name:'Teste Simu',s:{}}}));localStorage.setItem('gobj:cur',JSON.stringify('teste-simu'))}""")
    pg.reload(wait_until="networkidle"); pg.wait_for_timeout(1000)
    pg.screenshot(path=str(out / "s0-lista.png"), full_page=True)
    gab = {}
    for sid in ("A", "B", "C"):
        gab[sid] = pg.evaluate(f"(()=>{{const m={{A:[SIM_A_POR,SIM_A_MAT],B:[SIM_B_POR,SIM_B_MAT],C:[SIM_C_POR,SIM_C_MAT]}}['{sid}'];return [...m[0],...m[1]].map(x=>x.a)}})()") if False else None
    # Simulado A: responde com a correta em todas menos 3 (Q2, Q17, Q30) e deixa Q10 em branco
    pg.click('[data-ss="A"]'); pg.wait_for_timeout(150); pg.screenshot(path=str(out / "s1-inicio.png")); pg.click("#simGo"); pg.wait_for_timeout(200)
    corr = pg.evaluate("window.__OBJ.simA")
    for i in range(30):
        chk(pg, f"A q{i+1}")
        if i == 0: pg.screenshot(path=str(out / "s2-q1.png"), full_page=True)
        if i == 15: pg.screenshot(path=str(out / "s3-q16.png"), full_page=True)
        if i == 9: pass
        else:
            choice = corr[i] if i not in (1, 16, 29) else (corr[i] + 1) % 5
            pg.click(f'.opt[data-o="{choice}"]'); pg.wait_for_timeout(40)
        if i == 4: pg.click("#simMark"); pg.wait_for_timeout(60)
        if i == 12:
            pg.reload(wait_until="networkidle"); pg.wait_for_timeout(800)
            if pg.evaluate("location.hash") != "#simu": pg.evaluate("location.hash='simu'"); pg.wait_for_timeout(200)
            cur = pg.inner_text(".tags .tag >> nth=0")
            if "Questão 13" not in cur: errs.append("não voltou para a questão 13 depois de recarregar: " + cur)
        if i < 29: pg.click("#simNext"); pg.wait_for_timeout(60)
    pg.screenshot(path=str(out / "s4-folha.png"), full_page=True)
    pg.click("#simEnd"); pg.wait_for_timeout(150); pg.screenshot(path=str(out / "s5-entregar.png"))
    pg.click("#endYes"); pg.wait_for_timeout(400)
    chk(pg, "resultado A")
    sc = pg.inner_text(".score .big")
    print("nota A:", sc.replace("\n", " "), "| esperado 26/30")
    if not sc.startswith("26"): errs.append("placar do simulado errado: " + sc)
    pg.screenshot(path=str(out / "s6-resultado.png"), full_page=True)
    pg.click(".gq.b summary >> nth=0"); pg.wait_for_timeout(100)
    pg.screenshot(path=str(out / "s7-correcao.png"), full_page=True)
    # B e C: percorre todas as questões para conferir renderização
    for sid in ("B", "C"):
        pg.click("#resBack") if pg.is_visible("#resBack") else None
        pg.evaluate("location.hash='simu'"); pg.wait_for_timeout(150)
        pg.click(f'[data-ss="{sid}"]'); pg.wait_for_timeout(100); pg.click("#simGo"); pg.wait_for_timeout(150)
        for i in range(30):
            chk(pg, f"{sid} q{i+1}")
            pg.click('.opt[data-o="0"]'); pg.wait_for_timeout(30)
            if i < 29: pg.click("#simNext"); pg.wait_for_timeout(40)
        if sid == "B":
            pg.click("#simEnd"); pg.wait_for_timeout(100); pg.click("#endYes"); pg.wait_for_timeout(300); chk(pg, "resultado B")
            pg.click("#resBack"); pg.wait_for_timeout(150)
        else:
            # tempo esgotado: volta o relógio 3h e recarrega
            pg.evaluate("""()=>{const u=JSON.parse(localStorage.getItem('gobj:users'));u['teste-simu'].s.simrun.start-=3*3600*1000+2000;localStorage.setItem('gobj:users',JSON.stringify(u))}""")
            pg.reload(wait_until="networkidle"); pg.wait_for_timeout(1500)
            if pg.evaluate("location.hash") != "#simu": pg.evaluate("location.hash='simu'"); pg.wait_for_timeout(400)
            t = pg.inner_text("#simu")
            if "esgotou" not in t: errs.append("tempo esgotado não entregou o C")
            pg.screenshot(path=str(out / "s8-esgotado.png"))
    pg.evaluate("location.hash='simu'"); pg.wait_for_timeout(200)
    if pg.is_visible("#resBack"): pg.click("#resBack"); pg.wait_for_timeout(150)
    pg.screenshot(path=str(out / "s9-lista-depois.png"), full_page=True)
    print(pg.inner_text("#player"))
    b.close()
print("ERROS:" if errs else "sem erros", *errs[:30], sep="\n")
