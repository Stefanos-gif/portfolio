<slot />

<style>
  :global(:root){
    --proj-color-primary: #7b2ff2;
    --proj-color-secondary: #e9d8ff;
    --proj-neon: #ff00ff;
  }

  /* Core project page layout borrowed from Meteor Counter (non-anim rules only) */
  :global(.wrap){
    width:min(100%,1100px);
    margin-inline:auto;
    padding-inline:clamp(12px,4vw,24px);
  }

  :global(.title){
    display:flex; flex-direction:column; align-items:center; text-align:center; gap:12px;
    padding-block:clamp(12px,4vw,24px);
  }

  :global(.title h1){
    font-size:clamp(2rem,6vw,3rem);
    margin:8px 0;
    text-shadow:4px 4px 2px var(--proj-color-primary);
  }

  :global(.lead){
    background-color:rgba(97,20,128,.5);
    padding:clamp(12px,2.4vw,18px);
    border:5px solid var(--proj-color-primary);
    border-radius:12px;
    width:min(900px,100%);
    line-height:1.55;
  }

  :global(.cta){ display:flex; gap:12px; flex-wrap:wrap; justify-content:center; }

  :global(.btn){
    border:2px solid var(--proj-color-primary);
    background:linear-gradient(90deg,#c77dff22,#ff47f022);
    color:#fff;
    padding:.7rem 1rem; border-radius:10px; font-weight:800; letter-spacing:.02em; cursor:pointer;
    transition:transform .15s ease, box-shadow .2s ease, background .2s ease; text-decoration:none;
  }
  :global(.btn:hover){ transform:translateY(-1px); box-shadow:0 0 18px var(--proj-neon, #ff00ff55); }
  :global(.btn.ghost){ background:transparent; }

  :global(.how){ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:clamp(12px,2vw,20px); }

  :global(.card){
    background:linear-gradient(180deg, rgba(22,11,34,.9), rgba(15,6,25,.95));
    border:5px solid var(--proj-color-primary); border-radius:12px; padding:14px;
    box-shadow:0 0 24px #7b2ff244;
  }

  :global(.card h3){ margin:.2rem 0 .6rem 0; }
  :global(.card ol){ padding-left:1.2rem; margin:0; }

  :global(.embed){ display:flex; flex-direction:column; align-items:center; gap:10px; padding-block:clamp(12px,4vw,24px); }
  :global(.frame-wrap){
    width:100%; border:6px solid var(--proj-neon); border-radius:16px; box-shadow:0 0 28px 6px #ff00ff88, 0 0 64px 12px #ff47f155; overflow:hidden; background:#0b0710;
  }
  :global(.frame-wrap iframe){ display:block; width:100%; height:clamp(420px, 80vh, 1200px); border:0; }

  :global(.fallback a){ color:#2eff23; text-decoration:underline; }

  /* Make project headings more readable by default without touching animations */
  :global(.project-title){ color:#fff !important; font-weight:800; text-shadow:0 2px 10px rgba(0,0,0,0.6); }
  :global(.project-title::after){ content:''; display:block; width:6rem; height:6px; margin:0.6rem auto 0 auto; border-radius:4px; background:linear-gradient(90deg,var(--proj-color-primary),#ff47f0); box-shadow:0 6px 24px rgba(199,125,255,0.18); }

  :global(.card.gallery) { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
  :global(.screenshot-img){ width:48%; max-width:420px; border-radius:10px; cursor:pointer; border:3px solid rgba(123,47,242,0.6); box-shadow:0 12px 30px rgba(123,47,242,0.12); }

  @media (max-width: 768px) {
    :global(.project-title){ font-size:2.2rem; }
    :global(.screenshot-img){ width:90%; max-width:400px; }
    :global(.frame-wrap iframe){ height:clamp(320px, 60vh, 900px); }
  }
</style>