/*! Impact Windows Win live redesign v11 */
(function(){
  if (window.__impactRedesignV11) return;
  window.__impactRedesignV11 = true;
  window.__impactImgFixV2 = true;
  window.__impactImgFixV1 = true;

  var A = {"logoSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 72\" role=\"img\" aria-label=\"Impact windows win - logo\">\n  <rect x=\"2\" y=\"10\" width=\"42\" height=\"52\" rx=\"2\" fill=\"none\" stroke=\"#0e1520\" stroke-width=\"3\"/>\n  <line x1=\"23\" y1=\"10\" x2=\"23\" y2=\"62\" stroke=\"#0e1520\" stroke-width=\"2.5\"/>\n  <line x1=\"2\" y1=\"36\" x2=\"44\" y2=\"36\" stroke=\"#0e1520\" stroke-width=\"2.5\"/>\n  <rect x=\"8\" y=\"16\" width=\"10\" height=\"14\" fill=\"#5d6b7c\" opacity=\"0.9\"/>\n  <rect x=\"28\" y=\"42\" width=\"10\" height=\"14\" fill=\"#5d6b7c\" opacity=\"0.55\"/>\n  <text x=\"58\" y=\"34\" font-family=\"Arial Black, Helvetica, sans-serif\" font-size=\"22\" font-weight=\"800\" letter-spacing=\"1.5\" fill=\"#0e1520\">IMPACT</text>\n  <text x=\"58\" y=\"56\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"700\" letter-spacing=\"3.5\" fill=\"#5d6b7c\">WINDOWS WIN</text>\n</svg>","hero":"https://cdn.jsdelivr.net/gh/azmeer-sheikh/impact-img-fix@main/media/hero.jpg","door_single_white":"https://cdn.jsdelivr.net/gh/azmeer-sheikh/impact-img-fix@main/media/door-single-white.jpg","door_single_bronze":"https://cdn.jsdelivr.net/gh/azmeer-sheikh/impact-img-fix@main/media/door-single-bronze.jpg","door_double_white":"https://cdn.jsdelivr.net/gh/azmeer-sheikh/impact-img-fix@main/media/door-double-white.jpg","door_double_bronze":"https://cdn.jsdelivr.net/gh/azmeer-sheikh/impact-img-fix@main/media/door-double-bronze.jpg","door_special":"https://cdn.jsdelivr.net/gh/azmeer-sheikh/impact-img-fix@main/media/door-special.jpg","project1":"https://cdn.jsdelivr.net/gh/azmeer-sheikh/impact-img-fix@main/media/project-1.jpg","project2":"https://cdn.jsdelivr.net/gh/azmeer-sheikh/impact-img-fix@main/media/project-2.jpg","project3":"https://cdn.jsdelivr.net/gh/azmeer-sheikh/impact-img-fix@main/media/project-3.jpg"};
  var CSS = "\n@import url(\"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap\");\n:root{--ink:#0e1520;--ink2:#0a1018;--cta:#0e1520;--cta2:#1c2736;--slate:#5d6b7c;--paper:#f2f4f7;--line:rgba(255,255,255,.12);--ease:cubic-bezier(.22,1,.36,1);--red-kill:#c8102e}\nhtml{scroll-behavior:smooth}\nbody,#SITE_CONTAINER,#main_MF{font-family:\"DM Sans\",system-ui,sans-serif!important;background:var(--paper)!important}\n#PAGES_CONTAINER,#SITE_PAGES{background:var(--paper)!important}\n.impact-hide,[data-impact-benefits-src],#impact-source-block{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important}\n/* Kill all red CTAs / accents sitewide */\n#SITE_HEADER a[href*=\"free-quote\"],#SITE_HEADER [class*=\"StylableButton\"],#SITE_HEADER .wixui-button,\n#SITE_PAGES a[href*=\"free-quote\"],#SITE_PAGES [class*=\"StylableButton\"],#SITE_PAGES .wixui-button,\na[href*=\"free-quote\"],button[class*=\"StylableButton\"],.wixui-button{\n  background:var(--ink)!important;background-color:var(--ink)!important;border-color:var(--ink)!important;color:#fff!important;\n  box-shadow:none!important;border-radius:2px!important;\n}\n#SITE_HEADER a[aria-current=\"page\"],#SITE_HEADER [aria-current=\"true\"],#SITE_HEADER .wixui-vertical-menu__item--active a,\n#SITE_HEADER a[class*=\"--active\"],#SITE_HEADER [data-state=\"selected\"] a{\n  color:var(--ink)!important;border-bottom:2px solid var(--slate)!important;\n}\n#SITE_HEADER *[style*=\"c8102e\"],#SITE_HEADER *[style*=\"C8102E\"],#SITE_HEADER *[style*=\"200, 16, 46\"]{color:var(--ink)!important;background:transparent!important}\n#impact-topbar{position:relative;z-index:100000;background:var(--ink);color:rgba(255,255,255,.78)}\n.impact-topbar-inner{width:min(1120px,calc(100% - 2rem));margin:0 auto;min-height:34px;display:flex;align-items:center;justify-content:center;gap:1.5rem;flex-wrap:wrap;padding:8px 0;font:500 11px/1.3 \"DM Sans\",system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase}\n#impact-topbar a{color:#fff!important;text-decoration:none!important;font-weight:700}\n#comp-lz96l2of,#comp-lz96l2qp,#comp-mwpvtjmt,#comp-m3d9x3wy{display:none!important;height:0!important;overflow:hidden!important}\n#SITE_HEADER,#SITE_HEADER_WRAPPER{background:#fff!important;border-bottom:1px solid rgba(11,18,32,.08)!important;box-shadow:0 8px 24px rgba(11,18,32,.04)!important}\n#SITE_HEADER>*,#SITE_HEADER [data-testid=\"bgLayers\"],#SITE_HEADER [data-testid=\"bgOverlay\"]{background:transparent!important}\n#SITE_HEADER *,#SITE_HEADER_WRAPPER *{color:var(--ink)!important;font-family:\"DM Sans\",system-ui,sans-serif!important}\n#impact-header-bar{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:1rem;width:min(1120px,calc(100% - 2rem));margin:0 auto;padding:.65rem 0;position:relative;z-index:5}\n#impact-logo-mark{display:inline-flex;align-items:center;text-decoration:none!important;line-height:0;max-width:200px;flex:0 0 auto}\n#impact-logo-mark svg{width:min(180px,46vw);height:auto;display:block}\n#impact-header-cta{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:0 1.15rem;background:var(--ink)!important;color:#fff!important;font:800 11px/1 \"DM Sans\",system-ui,sans-serif;letter-spacing:.1em;text-transform:uppercase;text-decoration:none!important;border-radius:2px;flex:0 0 auto;white-space:nowrap}\n#SITE_HEADER nav a,#SITE_HEADER [data-testid=\"linkElement\"]{font:600 11px/1 \"DM Sans\",system-ui,sans-serif!important;letter-spacing:.04em!important;text-transform:uppercase!important;text-decoration:none!important;opacity:.88;white-space:nowrap}\n#SITE_HEADER nav a:hover{opacity:1;border-bottom:2px solid var(--slate)}\n#impact-hero{position:relative;isolation:isolate;min-height:min(72vh,700px);display:flex;align-items:flex-end;justify-content:center;color:#fff!important;overflow:hidden;background:#0b1220 center/cover no-repeat;margin:0!important}\n#impact-hero:before{content:\"\";position:absolute;inset:0;z-index:0;background:linear-gradient(180deg,rgba(6,10,18,.55) 0%,rgba(6,10,18,.35) 40%,rgba(6,10,18,.92) 100%),linear-gradient(90deg,rgba(6,10,18,.72) 0%,rgba(6,10,18,.28) 55%,transparent 100%)}\n#impact-hero-inner{position:relative;z-index:1;width:min(1100px,calc(100% - 2.5rem));padding:3.5rem 0 3rem;animation:impactFade .75s var(--ease) both}\n#impact-hero .impact-kicker{margin:0 0 .75rem;font:800 clamp(1.1rem,2.4vw,1.35rem)/1 Syne,system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.78)!important}\n#impact-hero h1,#impact-hero h1 *{color:#fff!important;font-family:Syne,system-ui,sans-serif!important;font-weight:700!important;font-size:clamp(1.6rem,4.2vw,2.75rem)!important;letter-spacing:-.02em!important;max-width:18ch;line-height:1.08!important;text-shadow:0 2px 24px rgba(0,0,0,.35)}\n#impact-hero .impact-support{margin:1rem 0 0;max-width:34rem;color:rgba(255,255,255,.9)!important;font-size:1.02rem;line-height:1.55;text-shadow:0 1px 12px rgba(0,0,0,.4)}\n#impact-hero .impact-ctas{display:flex;flex-wrap:wrap;gap:.65rem;margin-top:1.65rem}\n#impact-hero .impact-ctas a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:.85rem 1.3rem;font:700 .8rem/1 \"DM Sans\",system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;border-radius:2px;text-decoration:none!important}\n#impact-hero .impact-ctas a.primary{background:#fff!important;color:var(--ink)!important}\n#impact-hero .impact-ctas a.ghost{background:transparent!important;color:#fff!important;border:1px solid rgba(255,255,255,.5)!important}\n@keyframes impactFade{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}\n#impact-trust{background:#fff;border-bottom:1px solid rgba(11,18,32,.08);padding:1.35rem 0}\n#impact-trust-inner{width:min(1100px,calc(100% - 2.5rem));margin:0 auto;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;text-align:center}\n#impact-trust .it-item{padding:.35rem .5rem}\n#impact-trust .it-n{display:block;font:800 1.05rem/1.1 Syne,system-ui,sans-serif;color:var(--ink);letter-spacing:.02em}\n#impact-trust .it-l{display:block;margin-top:.35rem;font:500 12px/1.35 \"DM Sans\",system-ui,sans-serif;color:var(--slate);letter-spacing:.04em;text-transform:uppercase}\n#impact-benefits{background:var(--ink);color:#fff;padding:3.25rem 0;border-bottom:1px solid rgba(255,255,255,.06)}\n#impact-benefits-inner{width:min(1100px,calc(100% - 2.5rem));margin:0 auto}\n#impact-benefits h2,#impact-benefits h2 *{color:#fff!important;font:700 clamp(1.15rem,2.1vw,1.55rem)/1.15 Syne,system-ui,sans-serif!important;letter-spacing:.05em!important;margin:0 0 1.35rem!important;text-transform:uppercase}\n#impact-benefits ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem}\n#impact-benefits li{position:relative;padding:1.05rem 1.1rem 1.05rem 2.5rem;border:1px solid var(--line);background:linear-gradient(160deg,rgba(255,255,255,.05),rgba(255,255,255,.012));color:rgba(255,255,255,.92)!important;font:500 .98rem/1.4 \"DM Sans\",system-ui,sans-serif}\n#impact-benefits li:before{content:\"\";position:absolute;left:.95rem;top:1.25rem;width:9px;height:9px;border:2px solid var(--slate);border-radius:50%;box-shadow:0 0 0 4px rgba(93,107,124,.18)}\n#SITE_PAGES h2,#SITE_PAGES h2 *{font-family:Syne,system-ui,sans-serif!important;letter-spacing:.02em!important;color:var(--ink)!important}\n#impact-doors-2x2{display:grid!important;grid-template-columns:1fr 1fr!important;gap:14px!important;width:100%!important;padding:0 12px;box-sizing:border-box}\n#impact-doors-2x2 .impact-door-card{display:flex!important;flex-direction:column!important;gap:8px!important;min-width:0!important}\n#impact-doors-2x2 img{width:100%!important;height:160px!important;object-fit:cover!important;display:block!important;border-radius:2px}\n#impact-doors-2x2 .impact-door-label{margin:0;font:700 13px/1.2 Syne,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:var(--ink)!important}\n#SITE_FOOTER,#SITE_FOOTER_WRAPPER{background:var(--ink2)!important;border-top:1px solid rgba(255,255,255,.08)!important;padding:0!important;height:auto!important;min-height:0!important;overflow:visible!important}\n#SITE_FOOTER>:not(#impact-site-footer){display:none!important;height:0!important;overflow:hidden!important;pointer-events:none!important}\n#impact-site-footer{display:block!important;width:100%!important;background:var(--ink2);color:#fff;font-family:\"DM Sans\",system-ui,sans-serif}\n#impact-site-footer:before{content:\"\";display:block;height:2px;background:linear-gradient(90deg,var(--slate),var(--ink))}\n.isf-inner{width:min(1120px,calc(100% - 2.5rem));margin:0 auto;padding:3rem 0 1.5rem}\n.isf-main{display:grid;grid-template-columns:minmax(220px,.9fr) minmax(0,2.2fr);gap:2.5rem 3rem;align-items:start}\n.isf-brand{display:flex;flex-direction:column;gap:.7rem;max-width:280px}\n.isf-name{margin:0;font:800 1.15rem/1.1 Syne,system-ui,sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#fff}\n.isf-tag{margin:0;font:500 14px/1.5 \"DM Sans\",system-ui,sans-serif;color:rgba(255,255,255,.62)}\n.isf-phone{font:700 1.05rem/1 \"DM Sans\",system-ui,sans-serif;color:#fff!important;text-decoration:none!important;width:fit-content}\n.isf-mail{font:500 13px/1.3 \"DM Sans\",system-ui,sans-serif;color:rgba(255,255,255,.65)!important;text-decoration:none!important;width:fit-content}\n.isf-cta{display:inline-flex;align-items:center;justify-content:center;margin-top:.55rem;min-height:42px;padding:0 1.1rem;width:fit-content;background:#fff;color:var(--ink)!important;font:800 11px/1 \"DM Sans\",system-ui,sans-serif;letter-spacing:.1em;text-transform:uppercase;text-decoration:none!important}\n.isf-cols{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1.5rem 1.75rem}\n.isf-col{display:flex;flex-direction:column;gap:.55rem}\n.isf-h{margin:0 0 .15rem;font:700 11px/1.2 Syne,system-ui,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.95)}\n.isf-col a,.isf-col span{font:500 13px/1.35 \"DM Sans\",system-ui,sans-serif;color:rgba(255,255,255,.68)!important;text-decoration:none!important;width:fit-content}\n.isf-col a:hover{color:#fff!important}\n.isf-bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem 1.25rem;margin-top:2.25rem;padding-top:1.1rem;border-top:1px solid rgba(255,255,255,.08)}\n.isf-bar p{margin:0;font:500 12px/1.4 \"DM Sans\",system-ui,sans-serif;color:rgba(255,255,255,.45)}\n.isf-bar nav{display:flex;gap:1rem;flex-wrap:wrap}\n.isf-bar nav a{font:600 11px/1 \"DM Sans\",system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.5)!important;text-decoration:none!important}\n#impact-call-chip{position:fixed;right:18px;bottom:22px;z-index:99998;display:none;align-items:center;gap:8px;background:var(--ink);color:#fff!important;font:800 12px/1 \"DM Sans\",system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;text-decoration:none!important;padding:14px 18px;border-radius:2px;box-shadow:0 14px 34px rgba(14,21,32,.28)}\n#impact-call-chip:before{content:\"\";width:8px;height:8px;border-radius:50%;background:var(--slate);box-shadow:0 0 0 4px rgba(93,107,124,.25)}\n
#SITE_HEADER [class*="menu"] a,[data-testid="linkElement"]{--wixui-menu-item-label-underline-color:#5d6b7c!important;--wixui-menu-item-label-color-selected:#0e1520!important}
#SITE_HEADER a[aria-current="page"],#SITE_HEADER a[aria-current="true"]{color:#0e1520!important;border-bottom:2px solid #5d6b7c!important;box-shadow:none!important}
#SITE_HEADER *[style*="border-bottom"],#SITE_HEADER *[style*="underline"]{border-bottom-color:#5d6b7c!important}
#SITE_HEADER svg[stroke*="c8"],#SITE_HEADER path[stroke*="c8"]{stroke:#5d6b7c!important}
#SITE_HEADER .wixui-vertical-menu__item--active,#SITE_HEADER [data-is-current="true"]{--underline-color:#5d6b7c!important}
body.impact-v11-on a[href]:is([class*="StylableButton"]){background:#0e1520!important}

/* Demote duplicate page CTAs outside hero */\n#SITE_PAGES a[href*=\"free-quote\"]:not(.impact-keep-cta){opacity:.92}\nbody.impact-v11-on #comp-mwpvue2o,body.impact-v11-on #comp-mj4c1me2,body.impact-v11-on #comp-mwpvbh1c{display:none!important;height:0!important}\n@media(max-width:900px){.isf-main{grid-template-columns:1fr;gap:2rem}.isf-cols{grid-template-columns:repeat(2,minmax(0,1fr))}#impact-trust-inner{grid-template-columns:repeat(2,minmax(0,1fr));gap:.85rem}}\n@media(max-width:700px){#impact-benefits ul{grid-template-columns:1fr}}\n@media(max-width:750px){\n  .impact-topbar-inner{gap:.65rem;font-size:10px}\n  #impact-hero{min-height:62vh;background-position:center 30%!important}\n  #impact-hero-inner{padding:2.35rem 0 2rem}\n  #impact-header-bar{padding:.5rem 0;gap:.5rem}\n  #impact-logo-mark svg{width:min(150px,42vw)}\n  #impact-header-cta{min-height:38px;padding:0 .85rem;font-size:10px}\n  #impact-call-chip{display:inline-flex!important;right:12px;bottom:14px;padding:12px 14px;font-size:11px}\n  #comp-mfffr76x{display:none!important;height:0!important}\n  #comp-mfbsog7g,#comp-mfff3gcm{width:100%!important;height:220px!important;min-height:220px!important;overflow:hidden!important}\n  #impact-doors-2x2{grid-template-columns:1fr 1fr!important;gap:10px!important;padding:0 8px}\n  #impact-doors-2x2 img{height:130px!important}\n}\n";

  function qsa(sel, root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }
  function sp(el,k,v){ if(el&&el.style) el.style.setProperty(k,v,'important'); }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function mesh(wrap){
    if(!wrap) return null;
    var ms=wrap.querySelectorAll('[data-testid="mesh-container-content"]');
    if(!ms.length) return wrap;
    for(var i=0;i<ms.length;i++){
      for(var j=0;j<ms[i].children.length;j++){
        if((ms[i].children[j].id||'').indexOf('comp-')===0) return ms[i];
      }
    }
    return ms[0];
  }
  function de(el){
    if(!el) return;
    ['position','left','top','right','bottom','margin-top','transform','height','max-height','overflow','box-sizing','grid-area','grid-row','grid-column']
      .forEach(function(k,i){ sp(el,k,['relative','auto','auto','auto','auto','0','none','auto','none','visible','border-box','auto','auto','auto'][i]); });
  }

  function injectCss(){
    ['impact-redesign-v10','impact-imgfix-css','impact-redesign-v9','impact-redesign-v8'].forEach(function(id){
      var p=document.getElementById(id); if(p) p.remove();
    });
    if(document.getElementById('impact-redesign-v11')) return;
    var s=document.createElement('style');
    s.id='impact-redesign-v11';
    s.textContent=CSS;
    document.head.appendChild(s);
  }

  function killRed(){
    // Force Wix menu CSS vars away from red
    qsa('#SITE_HEADER, #SITE_HEADER_WRAPPER').forEach(function(el){
      el.style.setProperty('--wixui-menu-item-label-underline-color','#5d6b7c','important');
      el.style.setProperty('--wixui-menu-item-label-color-selected','#0e1520','important');
    });
    qsa('#SITE_HEADER a, #SITE_HEADER [data-testid="linkElement"]').forEach(function(el){
      var bb=getComputedStyle(el).borderBottomColor||'';
      var m=bb.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)/);
      if(m && +m[1]>150 && +m[2]<100 && +m[3]<100){
        sp(el,'border-bottom-color','#5d6b7c');
        sp(el,'color','#0e1520');
      }
      // remove inline red styles
      var st=el.getAttribute('style')||'';
      if(/c8102e|C8102E|200,\s*16,\s*46/i.test(st)){
        el.style.color='#0e1520';
        el.style.borderBottomColor='#5d6b7c';
      }
    });

    qsa('a,button,[class*="StylableButton"],.wixui-button,[data-testid="linkElement"]').forEach(function(el){
      var cs=getComputedStyle(el);
      var bg=cs.backgroundColor||'';
      var c=cs.color||'';
      var m=bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if(m){
        var r=+m[1],g=+m[2],b=+m[3];
        if(r>150 && g<90 && b<90){
          sp(el,'background','#0e1520');
          sp(el,'background-color','#0e1520');
          sp(el,'border-color','#0e1520');
          sp(el,'color','#ffffff');
        }
      }
      var mc=c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if(mc){
        var r2=+mc[1],g2=+mc[2],b2=+mc[3];
        if(r2>150 && g2<90 && b2<90 && /Home|free quote|active/i.test((el.textContent||'')+(el.getAttribute('aria-current')||''))){
          sp(el,'color','#0e1520');
          sp(el,'border-bottom-color','#5d6b7c');
        }
      }
    });
  }

  function pickFallback(img){
    var alt=(img.getAttribute('alt')||'').toLowerCase();
    var src=(img.getAttribute('src')||img.currentSrc||'').toLowerCase();
    var key=alt+' '+src;
    if(/logo|4b6b94d0/.test(key)) return null;
    if(/double/.test(key) && /bronze|ddd2|ddd4/.test(key)) return A.door_double_bronze;
    if(/double|ddd2|ddd4/.test(key)) return A.door_double_white;
    if(/bronze|ddd3/.test(key)) return A.door_single_bronze;
    if(/special|design/.test(key)) return A.door_special;
    if(/door|ddd1|entry|ddd/.test(key)) return A.door_single_white;
    if(/project|gallery|slideshow/.test(key)) return A.project1;
    if(/window|home|modern|311cb47|b3f9f4|577026/.test(key)) return A.hero;
    if(img.offsetWidth>80) return A.hero;
    return A.hero;
  }

  function repairImages(){
    qsa('img').forEach(function(img){
      var src=img.getAttribute('src')||img.currentSrc||'';
      if(/logo|4b6b94d0/i.test((img.alt||'')+' '+src)){
        sp(img,'opacity','0'); sp(img,'position','absolute'); sp(img,'width','1px'); sp(img,'height','1px');
        return;
      }
      var clean=src.replace(/,enc_avif(?:,quality_auto)?/gi,',enc_jpg').replace(/enc_avif(?:,quality_auto)?/gi,'enc_jpg');
      if(clean && clean!==src && !/^data:/.test(src) && !/jsdelivr/.test(src)){
        img.setAttribute('src', clean); img.removeAttribute('srcset');
      }
      var apply=function(){
        if(/jsdelivr\.net\/gh\/azmeer-sheikh/.test(img.src||'')) return;
        if(/^data:image/.test(img.src||'') && img.naturalWidth>0) return;
        var fb=pickFallback(img);
        if(!fb) return;
        img.setAttribute('data-impact-fb','1');
        img.removeAttribute('srcset');
        img.src=fb;
      };
      if(img.complete && img.naturalWidth===0) apply();
      img.addEventListener('error', apply);
      setTimeout(function(){ if(img.naturalWidth===0) apply(); }, 500);
    });
    // page background
    qsa('#img_pageBackground_mua1n img, [id*="pageBackground"] img, img[src*="311cb47"]').forEach(function(img){
      img.src=A.hero; img.setAttribute('data-impact-fb','1');
    });
  }

  function bootChrome(){
    if(!document.body) return;
    var topbar=document.getElementById('impact-topbar');
    if(!topbar){
      topbar=document.createElement('div');
      topbar.id='impact-topbar';
      document.body.insertBefore(topbar, document.body.firstChild);
    }
    if(topbar.getAttribute('data-v')!=='11'){
      topbar.innerHTML='<div class="impact-topbar-inner"><span>South Florida Hurricane Protection</span><a href="tel:7865784456">786-578-4456</a><span>Open 24 Hours</span></div>';
      topbar.setAttribute('data-v','11');
    }
    ['comp-lz96l2of','comp-lz96l2qp','comp-mwpvtjmt','comp-m3d9x3wy'].forEach(function(id){
      var el=document.getElementById(id); if(!el) return; el.classList.add('impact-hide'); sp(el,'display','none'); sp(el,'height','0');
    });

    var header=document.getElementById('SITE_HEADER');
    var headerImg=document.querySelector('#SITE_HEADER img');
    var logoSlot=document.getElementById('comp-m3d9e3zh')||(headerImg&&headerImg.closest('[id*="comp-"]'));
    var mark=document.getElementById('impact-logo-mark');
    if(!mark){
      mark=document.createElement('a');
      mark.id='impact-logo-mark';
      mark.href='https://www.impactwindowswin.com/';
      mark.setAttribute('aria-label','Impact Windows Win');
      mark.innerHTML=A.logoSvg;
    }
    if(logoSlot){
      qsa('img', logoSlot).forEach(function(img){ img.classList.add('impact-hide'); });
      if(mark.parentElement!==logoSlot) logoSlot.appendChild(mark);
      sp(logoSlot,'display','flex'); sp(logoSlot,'align-items','center'); sp(logoSlot,'justify-content','flex-start');
    }

    var hdrCta=document.getElementById('impact-header-cta');
    if(!hdrCta){
      hdrCta=document.createElement('a');
      hdrCta.id='impact-header-cta';
      hdrCta.href='https://www.impactwindowswin.com/free-quote';
      hdrCta.textContent='Free Quote';
      hdrCta.className='impact-keep-cta';
      if(header) header.appendChild(hdrCta);
    }
    // Hide duplicate native free-quote buttons in header (keep ours)
    qsa('#SITE_HEADER a[href*="free-quote"]').forEach(function(a){
      if(a.id==='impact-header-cta') return;
      var wrap=a.closest('[id*="comp-"]');
      if(wrap){ wrap.classList.add('impact-hide'); sp(wrap,'display','none'); }
      else { a.classList.add('impact-hide'); }
    });

    if(!document.getElementById('impact-call-chip')){
      var c=document.createElement('a');
      c.id='impact-call-chip';
      c.href='tel:7865784456';
      c.textContent='Call Now';
      document.body.appendChild(c);
    }
  }

  function buildHero(){
    if(document.getElementById('impact-hero')) return true;
    var h1=document.querySelector('#SITE_PAGES h1,#PAGES_CONTAINER h1,main h1,h1');
    if(!h1) return false;
    var hero=document.createElement('section');
    hero.id='impact-hero';
    hero.setAttribute('aria-label','Hurricane impact windows and doors');
    hero.style.backgroundImage='url("'+A.hero+'")';
    hero.innerHTML='<div id="impact-hero-inner"><p class="impact-kicker">IMPACT WINDOWS WIN</p><div id="impact-hero-h1-slot"></div><p class="impact-support">High-quality impact windows &amp; doors built for South Florida storms — Miami-Dade approved, energy-efficient, and backed by warranty.</p><div class="impact-ctas"><a class="primary impact-keep-cta" href="https://www.impactwindowswin.com/free-quote">Free Quote</a><a class="ghost" href="tel:7865784456">Call 786-578-4456</a></div></div>';
    var source=h1.closest("[id*='comp-']")||h1.parentElement;
    if(source){ source.id='impact-source-block'; source.classList.add('impact-hide'); }
    // hide original support paragraph near h1 if duplicated
    var insertAt=document.querySelector('#SITE_HEADER')||document.querySelector('#SITE_HEADER_WRAPPER');
    if(insertAt&&insertAt.parentNode) insertAt.parentNode.insertBefore(hero, insertAt.nextSibling);
    else {
      var pages=document.querySelector('#SITE_PAGES,#PAGES_CONTAINER');
      if(pages&&pages.parentNode) pages.parentNode.insertBefore(hero, pages);
      else document.body.insertBefore(hero, document.body.firstChild);
    }
    hero.querySelector('#impact-hero-h1-slot').appendChild(h1);

    // Trust strip
    if(!document.getElementById('impact-trust')){
      var trust=document.createElement('section');
      trust.id='impact-trust';
      trust.setAttribute('aria-label','Why Impact Windows Win');
      trust.innerHTML='<div id="impact-trust-inner">'+
        '<div class="it-item"><span class="it-n">Miami-Dade</span><span class="it-l">NOA Approved</span></div>'+
        '<div class="it-item"><span class="it-n">South Florida</span><span class="it-l">Local Experts</span></div>'+
        '<div class="it-item"><span class="it-n">24 Hours</span><span class="it-l">Always Open</span></div>'+
        '<div class="it-item"><span class="it-n">Warranty</span><span class="it-l">Peace of Mind</span></div>'+
        '</div>';
      hero.parentNode.insertBefore(trust, hero.nextSibling);
    }

    // Benefits band
    var items=['Miami-Dade & Florida Building Code Approved','Hurricane Impact Rated for Maximum Protection','Warranty Included for Peace of Mind','Energy-Efficient Laminated Glass'];
    qsa('h2').forEach(function(h){
      if(!/BENEFITS OF OUR PRODUCTS/i.test(h.textContent||'')) return;
      if(h.closest('#impact-benefits')) return;
      var root=h.closest("[id*='comp-']")||h.parentElement;
      if(root){ root.setAttribute('data-impact-benefits-src','1'); root.classList.add('impact-hide'); }
      var lis=qsa('li', root).map(function(li){ return (li.textContent||'').replace(/\u00a0/g,' ').trim(); }).filter(Boolean);
      if(lis.length) items=lis;
    });
    if(!document.getElementById('impact-benefits')){
      var band=document.createElement('section');
      band.id='impact-benefits';
      band.innerHTML='<div id="impact-benefits-inner"><h2>BENEFITS OF OUR PRODUCTS</h2><ul>'+items.map(function(t){return '<li>'+esc(t)+'</li>';}).join('')+'</ul></div>';
      var after=document.getElementById('impact-trust')||hero;
      after.parentNode.insertBefore(band, after.nextSibling);
    }
    document.body.classList.add('impact-v11-on');
    return true;
  }

  function demoteExtraCtas(){
    // Hide redundant EXPLORE / duplicate free-quote blocks in page body once hero exists
    if(!document.getElementById('impact-hero')) return;
    qsa('#SITE_PAGES a').forEach(function(a){
      var t=(a.textContent||'').trim();
      if(/^EXPLORE$/i.test(t)){
        var w=a.closest('[id*="comp-"]')||a;
        w.classList.add('impact-hide');
      }
    });
    // Keep at most one visible free-quote in main content besides hero/header/footer
    var quotes=qsa('#SITE_PAGES a[href*="free-quote"]').filter(function(a){
      return !a.closest('#impact-hero') && !a.classList.contains('impact-keep-cta') && a.offsetParent!==null;
    });
    quotes.forEach(function(a,i){
      if(i===0) return; // leave one mid-page if needed
      var w=a.closest('[id*="comp-"]')||a;
      // hide extras in hero-adjacent area
      if(a.closest('#comp-mwpvbh1c') || a.closest('#comp-mj4c1me2') || i>0){
        w.classList.add('impact-hide');
      }
    });
    ['comp-mwpvue2o','comp-mj4c1me2','comp-mwpvbh1c'].forEach(function(id){
      var el=document.getElementById(id); if(el) el.classList.add('impact-hide');
    });
  }

  function stackHome(){
    var mobile=window.matchMedia('(max-width:750px)').matches;
    var shell=document.getElementById('comp-mfffr76x');
    if(shell){ sp(shell,'display','none'); sp(shell,'height','0'); }
    var contentRoot=document.getElementById('comp-mfbsgsc9')||document.getElementById('comp-mfbsgsbn');
    var m=mesh(contentRoot);
    if(m){
      sp(m,'display','flex'); sp(m,'flex-direction','column'); sp(m,'align-items','stretch');
      sp(m,'gap', mobile?'18px':'28px'); sp(m,'height','auto'); sp(m,'overflow','visible'); sp(m,'width','100%');
    }
    var title=document.getElementById('comp-mfhbjwp9');
    var gal=document.getElementById('comp-mfbsog7g');
    if(title&&m&&title.parentNode!==m) m.insertBefore(title, gal||null);
    if(title){ de(title); sp(title,'width','100%'); sp(title,'order','3'); }
    if(gal){ sp(gal,'order','4'); sp(gal,'position','relative'); sp(gal,'width','100%'); if(mobile){ sp(gal,'height','220px'); } }
    var g2=document.getElementById('comp-mfff3gcm');
    if(g2){ sp(g2,'order','5'); sp(g2,'position','relative'); sp(g2,'width','100%'); }
    var doors=document.getElementById('comp-mfff6744');
    if(doors) sp(doors,'order','6');
    ['comp-mwpvbh1c','comp-mwpvbh2w','comp-lza7bi08','comp-mfbsgsbn','comp-mfbsgsc9'].forEach(function(id){
      var el=document.getElementById(id); if(!el) return;
      sp(el,'height','auto'); sp(el,'min-height','0'); sp(el,'max-height','none'); sp(el,'overflow','visible'); sp(el,'width','100%');
    });
  }

  function doors2x2(){
    var wrap=document.getElementById('comp-mfff6744')||document.getElementById('comp-mfff674t');
    if(!wrap) return;
    var m=mesh(wrap); if(!m) return;
    sp(m,'display','flex'); sp(m,'flex-direction','column'); sp(m,'gap','14px'); sp(m,'height','auto'); sp(m,'width','100%');
    var title=document.getElementById('comp-mfhcrn0a');
    if(title){ de(title); sp(title,'width','100%'); sp(title,'order','1'); }
    var grid=document.getElementById('impact-doors-2x2');
    if(!grid){
      grid=document.createElement('div');
      grid.id='impact-doors-2x2';
      if(title&&title.parentNode===m) m.insertBefore(grid, title.nextSibling);
      else m.insertBefore(grid, m.firstChild);
    }
    sp(grid,'display','grid'); sp(grid,'grid-template-columns','1fr 1fr'); sp(grid,'gap','12px'); sp(grid,'width','100%'); sp(grid,'order','2');
    var labels=['White Single Door','White Double Door','Bronze Single Door','Bronze Double Door'];
    var fallbacks=[A.door_single_white,A.door_double_white,A.door_single_bronze,A.door_double_bronze];
    [
      ['comp-mfhcrn0f','comp-mfhcrn0q','comp-mfhcvjkc'],
      ['comp-mfhcrn0h','comp-mfhcrn0s13','comp-mfhcvjkm'],
      ['comp-mfhcygdl','comp-mfhcvjk6'],
      ['comp-mfhcygdq','comp-mfhcvjki']
    ].forEach(function(ids,i){
      var card=document.getElementById('impact-door-card-'+i);
      if(!card){
        card=document.createElement('div');
        card.id='impact-door-card-'+i;
        card.className='impact-door-card';
        grid.appendChild(card);
      }
      sp(card,'display','flex'); sp(card,'flex-direction','column'); sp(card,'gap','6px'); sp(card,'width','100%');
      ids.forEach(function(id){
        var el=document.getElementById(id); if(!el) return;
        if(el.parentNode!==card) card.appendChild(el);
        de(el); sp(el,'width','100%');
        // Relabel SINGLE/DOUBLE headings without changing URLs
        qsa('h2,h3,p,span', el).forEach(function(n){
          var t=(n.textContent||'').trim();
          if(/^(SINGLE|DOUBLE)$/i.test(t)) n.textContent=labels[i];
        });
      });
      if(!card.querySelector('.impact-door-label')){
        var lab=document.createElement('p');
        lab.className='impact-door-label';
        lab.textContent=labels[i];
        card.appendChild(lab);
      }
      qsa('img', card).forEach(function(img){
        sp(img,'width','100%'); sp(img,'height','160px'); sp(img,'object-fit','cover'); sp(img,'display','block');
        if(!img.naturalWidth || img.naturalWidth===0 || /wixstatic/.test(img.src||'')){
          img.setAttribute('data-impact-fb','1');
          img.src=fallbacks[i];
          img.removeAttribute('srcset');
        }
      });
    });
    // Special series label cleanup nearby
    qsa('h2').forEach(function(h){
      if(/SPECIAL SERIES/i.test(h.textContent||'')){
        // keep text — already descriptive
      }
    });
  }

  function fixFooter(){
    var foot=document.getElementById('SITE_FOOTER');
    if(!foot) return;
    Array.prototype.forEach.call(foot.children, function(child){
      if(child.id==='impact-site-footer') return;
      child.classList.add('impact-hide');
      sp(child,'display','none'); sp(child,'height','0');
    });
    sp(foot,'height','auto'); sp(foot,'min-height','0'); sp(foot,'overflow','visible'); sp(foot,'padding','0');
    var siteFooter=document.getElementById('impact-site-footer');
    if(!siteFooter){
      siteFooter=document.createElement('footer');
      siteFooter.id='impact-site-footer';
      foot.appendChild(siteFooter);
    }
    if(siteFooter.getAttribute('data-v')==='11') return;
    var sections=[
      {title:'PRODUCTS', links:[['Single-Hung Windows','/single-hung'],['Horizontal Rolling','/horizontal-rolling'],['Picture Windows','/fixed-picture'],['Casement & Awning','/casement-awning'],['Front Doors','/front'],['Sliding Glass Doors','/sliding-glass']]},
      {title:'SHOP & BUY', links:[['Shop Windows','/shop-windows'],['Shop Doors','/shop-doors'],['Free Quote','/free-quote'],['Financing','/financing']]},
      {title:'RESOURCES', links:[['Windows Gallery','/windows-gallery'],['Doors Gallery','/doors-gallery'],['Documents & NOA','/docs-noa'],['Warranty','/warranty']]},
      {title:'COMPANY', links:[['About','/about'],['Contact Us','/contact-us'],['FAQ','/faq'],['Contractors Login','/contractors-log-in']]}
    ];
    var cols=sections.map(function(sec){
      return '<div class="isf-col"><p class="isf-h">'+esc(sec.title)+'</p>'+sec.links.map(function(l){
        return '<a href="https://www.impactwindowswin.com'+l[1]+'">'+esc(l[0])+'</a>';
      }).join('')+'</div>';
    }).join('');
    siteFooter.innerHTML='<div class="isf-inner"><div class="isf-main"><div class="isf-brand"><p class="isf-name">Impact Windows Win</p><p class="isf-tag">Miami-Dade approved impact windows &amp; doors for South Florida.</p><a class="isf-phone" href="tel:7865784456">786-578-4456</a><a class="isf-mail" href="mailto:info@impactwindowswin.com">info@impactwindowswin.com</a><a class="isf-cta impact-keep-cta" href="https://www.impactwindowswin.com/free-quote">Get a Free Quote</a></div><div class="isf-cols">'+cols+'</div></div><div class="isf-bar"><p>© '+new Date().getFullYear()+' Impact Windows Win</p><nav><a href="https://www.impactwindowswin.com/privacy-policy">Privacy</a><a href="https://www.impactwindowswin.com/terms-of-conditions">Terms</a><a href="https://www.impactwindowswin.com/warranty">Warranty</a></nav></div></div>';
    siteFooter.setAttribute('data-v','11');
  }

  function boot(){
    try{
      injectCss();
      bootChrome();
      repairImages();
      buildHero();
      demoteExtraCtas();
      stackHome();
      doors2x2();
      fixFooter();
      killRed();
      document.documentElement.classList.add('impact-ready');
    }catch(e){ console.error('[impact-v11]', e); }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  [100,400,1000,2500,5000].forEach(function(t){ setTimeout(boot,t); });
  setInterval(function(){
    if(!document.getElementById('impact-hero')) boot();
    else { repairImages(); killRed(); doors2x2(); demoteExtraCtas(); }
  }, 4000);
})();
