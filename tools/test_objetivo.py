#!/usr/bin/env python3
"""Teste de fumaça da Missão Objetivo em celular (390px) e desktop.
Uso: python3 test_objetivo.py <url> <pasta_saida> [--nome "Teste Robo"]"""
import sys, pathlib, json
from playwright.sync_api import sync_playwright

url, out = sys.argv[1], pathlib.Path(sys.argv[2]); out.mkdir(parents=True, exist_ok=True)
LOCAL = None
if not url.startswith("http"):
    LOCAL, url = url, "https://local.test/objetivo"
nome = sys.argv[sys.argv.index("--nome") + 1] if "--nome" in sys.argv else "Teste Robozinho"
errs = []
with sync_playwright() as p:
    import os
    b = p.chromium.launch(proxy={"server": os.environ["https_proxy"]} if os.environ.get("https_proxy") else None)
    for label, vw in (("cel", {"width": 390, "height": 844}), ("pc", {"width": 1280, "height": 900})):
        ctx = b.new_context(viewport=vw, device_scale_factor=2 if label == "cel" else 1, is_mobile=label == "cel", has_touch=label == "cel")
        pg = ctx.new_page()
        if LOCAL:
            pg.route("https://local.test/**", lambda r: r.fulfill(path=LOCAL, content_type="text/html; charset=utf-8"))
        pg.on("pageerror", lambda e: errs.append(f"{label} pageerror: {e}"))
        pg.on("console", lambda m: errs.append(f"{label} console.{m.type}: {m.text}") if m.type == "error" else None)
        pg.goto(url, wait_until="networkidle")
        pg.wait_for_timeout(1200)
        pg.screenshot(path=str(out / f"{label}-0-login.png"))
        if pg.is_visible("#login"):
            pg.fill("#nameIn", "Ze")
            pg.click("#loginForm button[type=submit]")
            pg.wait_for_timeout(300)
            assert "sobrenome" in pg.inner_text("#loginErr"), "validação de sobrenome"
            pg.fill("#nameIn", nome + (" Celular" if label == "cel" else " Computador"))
            pg.click("#loginForm button[type=submit]")
            pg.wait_for_timeout(2500)
        assert not pg.is_visible("#login"), "login não fechou: " + pg.inner_text("#loginErr")
        pg.screenshot(path=str(out / f"{label}-1-lista.png"), full_page=False)
        sw = pg.evaluate("document.documentElement.scrollWidth"); cw = pg.evaluate("document.documentElement.clientWidth")
        if sw > cw: errs.append(f"{label}: rolagem horizontal na lista {sw}>{cw}")
        if label == "cel":
            pg.screenshot(path=str(out / "cel-1b-lista-full.png"), full_page=True)
        # abre cada tópico e confere rolagem horizontal
        ids = pg.evaluate("window.__OBJ.ids")
        for tid in ids:
            pg.evaluate(f"location.hash='rev/{tid}'"); pg.wait_for_timeout(120)
            sw = pg.evaluate("document.documentElement.scrollWidth")
            if sw > cw: errs.append(f"{label}: rolagem horizontal em {tid} {sw}>{cw}")
            tx = pg.inner_text("#rev")
            if "[[" in tx or "√{" in tx or "undefined" in tx or "${" in tx or "<b>" in tx or "</" in tx:
                errs.append(f"{label}: marcação não convertida em {tid}")
            for sec in ("s-base", "s-jeitos", "s-passo", "s-erros", "s-res"):
                if not pg.query_selector("#" + sec): errs.append(f"{label}: falta seção {sec} em {tid}")
        # interação em m-pit
        pg.evaluate("location.hash='rev/m-pit'"); pg.wait_for_timeout(300)
        pg.screenshot(path=str(out / f"{label}-2-topico.png"), full_page=False)
        if label == "cel": pg.screenshot(path=str(out / "cel-2b-topico-full.png"), full_page=True)
        pg.click(".show >> nth=0"); pg.wait_for_timeout(150)
        pg.click(".qq >> nth=0 >> .opt >> nth=0"); pg.wait_for_timeout(200)
        pg.click(".qq >> nth=1 >> .opt >> nth=1"); pg.wait_for_timeout(200)
        pg.click("#mk"); pg.wait_for_timeout(400)
        pg.screenshot(path=str(out / f"{label}-3-respondido.png"), full_page=False)
        pg.evaluate("location.hash='rev/p-conj'"); pg.wait_for_timeout(300)
        if label == "cel": pg.screenshot(path=str(out / "cel-4-conj-full.png"), full_page=True)
        pg.evaluate("location.hash='rev/folha'"); pg.wait_for_timeout(300)
        pg.screenshot(path=str(out / f"{label}-5-folha.png"))
        pg.evaluate("location.hash='rev/kit'"); pg.wait_for_timeout(400)
        tx = pg.inner_text("#rev")
        if "[[" in tx or "√{" in tx or "undefined" in tx or "</" in tx: errs.append(f"{label}: marcação no kit")
        if pg.evaluate("document.querySelectorAll('.kits .bi').length") < 90: errs.append(f"{label}: kit incompleto")
        sw = pg.evaluate("document.documentElement.scrollWidth")
        if sw > cw: errs.append(f"{label}: rolagem horizontal no kit {sw}>{cw}")
        pg.screenshot(path=str(out / f"{label}-6-kit.png"))
        if label == "cel": pg.screenshot(path=str(out / "cel-6b-kit-full.png"), full_page=True)
        pg.evaluate("location.hash='rev/m-pct'"); pg.wait_for_timeout(300)
        pg.click(".tnav button >> text=Jeitos espertos"); pg.wait_for_timeout(700)
        pg.screenshot(path=str(out / f"{label}-7-pct-jeitos.png"))
        if label == "cel": pg.screenshot(path=str(out / "cel-7b-pct-full.png"), full_page=True)
        pg.evaluate("location.hash='placar'"); pg.wait_for_timeout(3500)
        pg.screenshot(path=str(out / f"{label}-6-placar.png"), full_page=True)
        pg.evaluate("location.hash='simu'"); pg.wait_for_timeout(200)
        pg.screenshot(path=str(out / f"{label}-7-simu.png"))
        info = pg.evaluate("({total:document.querySelector('#player .pr')?.innerText, rank:document.querySelector('.rank')?.innerText})")
        print(label, json.dumps(info, ensure_ascii=False))
        # tema escuro
        if label == "cel":
            pg.emulate_media(color_scheme="dark"); pg.evaluate("location.hash='rev/m-ang'"); pg.wait_for_timeout(300)
            pg.screenshot(path=str(out / "cel-8-escuro.png"))
            pg.emulate_media(color_scheme="light")
        ctx.close()
    b.close()
print("ERROS:" if errs else "sem erros", *errs, sep="\n")
