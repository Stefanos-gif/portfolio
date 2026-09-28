<script lang="ts">
  import { onMount } from 'svelte';
  export let images: string[] = [];
  let index = 0;
  let container: HTMLElement;
  let imgEl: HTMLImageElement;

  function prev() { index = (index - 1 + images.length) % images.length; }
  function next() { index = (index + 1) % images.length; }

  function openFullscreen() {
    if (!imgEl) return;
    if (imgEl.requestFullscreen) imgEl.requestFullscreen();
  }

  // simple analysis returning dimension and size (fetched via HEAD)
  let analysis = { width: 0, height: 0, sizeKB: null as number | null, name: '' };
  async function analyzeCurrent() {
    if (typeof window === 'undefined' || typeof Image === 'undefined') return;

    const src = images[index];
    analysis.name = src.split('/').pop() || src;
    // load image to get dimensions
    const tmp = new Image();
    tmp.src = src + (src.includes('?') ? '&' : '?') + 'v=' + Date.now();
    await new Promise((res, rej) => { tmp.onload = res; tmp.onerror = rej; });
    analysis.width = tmp.width; analysis.height = tmp.height;
    try {
      const head = await fetch(src, { method: 'HEAD' });
      const len = head.headers.get('content-length');
      analysis.sizeKB = len ? Math.round(Number(len) / 1024) : null;
    } catch (e) {
      analysis.sizeKB = null;
    }
  }

  onMount(() => {
    analyzeCurrent();
  });

  $: if (typeof window !== 'undefined' && images && images.length) analyzeCurrent();
</script>

<div class="carousel" bind:this={container}>
  <div class="viewer">
    <button class="arrow left" aria-label="Previous certificate" on:click={prev}>‹</button>
    <img bind:this={imgEl} src={images[index]} alt={`Certificate ${index + 1}`} on:dblclick={openFullscreen} />
    <button class="arrow right" aria-label="Next certificate" on:click={next}>›</button>
  </div>
  <div class="meta">
    <div class="dots">
      {#each images as img, i}
        <button class:active={i===index} on:click={() => index = i} aria-label={`Show certificate ${i+1}`}></button>
      {/each}
    </div>
    <div class="info">
      <div><strong>File:</strong> {analysis.name}</div>
      <div><strong>Dimensions:</strong> {analysis.width} × {analysis.height}</div>
      <div><strong>Size:</strong> {analysis.sizeKB ? `${analysis.sizeKB} KB` : '—'}</div>
      <div class="controls">
        <button on:click={prev}>Previous</button>
        <button on:click={next}>Next</button>
        <button on:click={openFullscreen}>Open</button>
      </div>
    </div>
  </div>
</div>

<style>
.carousel{width:100%;max-width:880px;margin-inline:auto;background:linear-gradient(180deg,#2b0736b8,#140517aa);border-radius:10px;padding:12px;border:4px solid rgba(167,130,255,.12)}
.viewer{display:flex;align-items:center;justify-content:center;position:relative}
.viewer img{max-width:100%;max-height:56vh;border-radius:8px;object-fit:contain;box-shadow:0 6px 30px rgba(0,0,0,.6)}
.arrow{position:absolute;top:50%;transform:translateY(-50%);background:transparent;border:none;color:#fff;font-size:2.4rem;padding:8px;cursor:pointer}
.arrow.left{left:6px}
.arrow.right{right:6px}
.meta{display:flex;justify-content:space-between;align-items:center;margin-top:8px;color:#eee}
.dots{display:flex;gap:6px}
.dots button{width:10px;height:10px;border-radius:50%;background:#666;border:none}
.dots button.active{background:#a782ff}
.info{font-size:0.95rem;display:flex;gap:12px;align-items:center}
.controls button{margin-left:6px;background:#a782ff;color:#140517;border:none;padding:6px 10px;border-radius:6px;cursor:pointer}
</style>