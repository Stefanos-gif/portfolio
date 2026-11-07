
<script lang="ts">
  export let size: number = 24;
  export let color: string = '#000';
  export let duration: number = 1.5;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill={color}
  class="arrow"
  style="animation-duration: {duration}s;"
>
  
  <path d="M7 10l5 5 5-5H7z" />
</svg>

<style>
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(8px); }
  }

  .arrow {
    display: inline-block;
    
    animation-name: bounce;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
</style>
