<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  export let images: string[] = [];

  let index = 0;
  let fullscreen = false;

  $: currentImage = images[index] ?? '';

  function prev() {
    if (!images.length) return;
    index = (index - 1 + images.length) % images.length;
  }

  function next() {
    if (!images.length) return;
    index = (index + 1) % images.length;
  }

  function openFullscreen() {
    if (!currentImage) return;
    fullscreen = true;
  }

  function closeFullscreen() {
    fullscreen = false;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!fullscreen) return;
    if (event.key === 'Escape') closeFullscreen();
    if (event.key === 'ArrowLeft') prev();
    if (event.key === 'ArrowRight') next();
  }

  function handleDialogKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') closeFullscreen();
  }

  function getImageAlt(indexNumber: number) {
    return `Certificate ${indexNumber + 1}`;
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if images.length}
  <div class="certificate-gallery" aria-label="Certificate gallery">
    <div class="viewer">
      <button class="nav-button prev" type="button" aria-label="Previous certificate" on:click={prev}>‹</button>

      <button class="image-button" type="button" aria-label="View certificate in fullscreen" on:click={openFullscreen}>
        {#key currentImage}
          <img
            class="current-image"
            src={currentImage}
            alt={getImageAlt(index)}
            in:fly={{ x: 28, duration: 260, opacity: 0.25 }}
            out:fly={{ x: -28, duration: 180, opacity: 0.25 }}
          />
        {/key}
      </button>

      <button class="nav-button next" type="button" aria-label="Next certificate" on:click={next}>›</button>
    </div>

    <div class="controls">
      <div class="dots" aria-label="Certificate navigation">
        {#each images as _, i}
          <button
            type="button"
            class:active={i === index}
            aria-label={`Go to certificate ${i + 1}`}
            on:click={() => (index = i)}
          ></button>
        {/each}
      </div>
    </div>
  </div>

  {#if fullscreen}
    <div
      class="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Certificate fullscreen view"
      tabindex="0"
      on:click|self={closeFullscreen}
      on:keydown={handleDialogKeydown}
    >
      <button class="close-button" type="button" aria-label="Close fullscreen view" on:click={closeFullscreen}>×</button>
      <button class="lightbox-nav prev" type="button" aria-label="Previous certificate" on:click|stopPropagation={prev}>‹</button>
      <button class="lightbox-image-button" type="button" aria-label="Open certificate full size" on:click|stopPropagation>
        <img src={currentImage} alt={getImageAlt(index)} in:fly={{ y: 20, duration: 200 }} />
      </button>
      <button class="lightbox-nav next" type="button" aria-label="Next certificate" on:click|stopPropagation={next}>›</button>
    </div>
  {/if}
{/if}

<style>
  .certificate-gallery {
    width: min(100%, 960px);
    margin: 0 auto;
    padding: clamp(10px, 2vw, 18px);
    border-radius: 22px;
    background: linear-gradient(180deg, rgba(43, 7, 54, 0.8), rgba(20, 5, 23, 0.8));
    border: 1px solid rgba(167, 130, 255, 0.2);
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.28);
  }

  .viewer {
    position: relative;
    display: grid;
    place-items: center;
    min-height: clamp(260px, 52vw, 620px);
    border-radius: 16px;
    overflow: hidden;
    background: rgba(8, 4, 12, 0.68);
  }

  .image-button {
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0;
    background: transparent;
    cursor: zoom-in;
  }

  .current-image {
    display: block;
    width: 100%;
    max-height: min(68vh, 640px);
    object-fit: contain;
    border-radius: 14px;
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.34);
  }

  .nav-button,
  .lightbox-nav,
  .close-button {
    border: none;
    cursor: pointer;
    color: #fff;
    background: rgba(17, 10, 22, 0.6);
    backdrop-filter: blur(8px);
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: grid;
    place-items: center;
    width: clamp(38px, 5vw, 52px);
    height: clamp(38px, 5vw, 52px);
    border-radius: 999px;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    z-index: 2;
  }

  .nav-button:hover,
  .lightbox-nav:hover,
  .close-button:hover {
    transform: scale(1.05);
    background: rgba(167, 130, 255, 0.9);
  }

  .nav-button.prev,
  .lightbox-nav.prev {
    left: 12px;
  }

  .nav-button.next,
  .lightbox-nav.next {
    right: 12px;
  }

  .controls {
    display: flex;
    justify-content: center;
    margin-top: 14px;
  }

  .dots {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }

  .dots button {
    width: 11px;
    height: 11px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.35);
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .dots button.active {
    background: #a782ff;
    transform: scale(1.15);
  }

  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: grid;
    place-items: center;
    background: rgba(4, 2, 7, 0.86);
    padding: clamp(18px, 5vw, 48px);
    animation: lightboxFade 0.2s ease;
  }

  @keyframes lightboxFade {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(6px);
    }
  }

  .lightbox-image-button {
    border: 0;
    padding: 0;
    background: transparent;
    cursor: default;
  }

  .lightbox img {
    max-width: min(92vw, 1400px);
    max-height: min(86vh, 900px);
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 18px;
    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.5);
    background: rgba(15, 9, 20, 0.8);
    display: block;
  }

  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: clamp(44px, 6vw, 58px);
    height: clamp(44px, 6vw, 58px);
    border-radius: 50%;
    font-size: clamp(2rem, 4vw, 2.8rem);
  }

  .close-button {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    font-size: 1.8rem;
  }

  @media (max-width: 640px) {
    .certificate-gallery {
      padding: 10px;
      border-radius: 18px;
    }

    .viewer {
      min-height: 280px;
    }

    .nav-button {
      top: auto;
      bottom: 12px;
      transform: none;
    }

    .nav-button.prev {
      left: 10px;
    }

    .nav-button.next {
      right: 10px;
    }

    .lightbox-nav {
      bottom: 18px;
      top: auto;
      transform: none;
    }
  }
</style>