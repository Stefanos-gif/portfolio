
<script lang="ts">
    export let img_url1;
    export let img_url2;
    export let img_url3;

    export let img_height;
    export let aspect_ratio = "9/11";
</script>

<div
  id="img-hover"
  style="
    position: relative;
    height: {img_height};
    aspect-ratio: {aspect_ratio};
  "
>
    <img style="height: {img_height}; aspect-ratio: {aspect_ratio}" src={img_url1} alt="Image 1" />
    <img style="height: {img_height}; aspect-ratio: {aspect_ratio}" src={img_url2} alt="Image 2" />
    <img style="height: {img_height}; aspect-ratio: {aspect_ratio}" src={img_url3} alt="Image 3" />
</div>

<style>
    #img-hover img {
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

		border-radius: 7px;
		border: solid 5px #55146e;
    }

    #img-hover:hover img {
        transform: scale(1.05);
    }

    #img-hover:hover img:nth-child(1) {
        filter: brightness(0.5);
        transform: rotate(-10deg);
    }

    #img-hover:hover img:nth-child(2) {
        filter: brightness(0.75);
    }

    #img-hover:hover img:nth-child(3) {
        transform: rotate(10deg);
    }
</style>
