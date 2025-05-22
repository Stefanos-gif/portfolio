<script>
  /** 
   * size: overall length of the arrow (default 2rem)
   * color: arrow color
   */
  export let size = "2rem";
  export let color = "var(--color-primary)";
</script>

<div
  class="arrow"
  style="--len: {size}; --col: {color}"
  aria-hidden="true"
/>

<style>
.arrow {
  position: relative;
  width: var(--len);
  height: calc(var(--len) / 8);
  background-color: var(--col);
  margin: auto;
  animation: move 0.8s ease-in-out infinite alternate;
}

.arrow::after {
  /* arrowhead */
  content: "";
  position: absolute;
  right: -calc(var(--len) / 6);
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border: solid var(--col);
  border-width: calc(var(--len) / 16) 0 0 calc(var(--len) / 16);
  width: calc(var(--len) / 4);
  height: calc(var(--len) / 4);
}

@keyframes move {
  from { transform: translateX(0); }
  to   { transform: translateX(8px); }
}
</style>