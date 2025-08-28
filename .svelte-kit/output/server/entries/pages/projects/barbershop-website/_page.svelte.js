import { F as head } from "../../../../chunks/index2.js";
import { T as TripleImage } from "../../../../chunks/TripleImage.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<meta property="og:title" content="Barbershop Website Project - Stefanos Siathas"/> <meta property="og:description" content="A premium, responsive barbershop website template built with Svelte and Tailwind CSS. Explore features, code, and live demo!"/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://stefanossiathas.com/projects/barbershop-website"/> <meta property="og:image" content="/barbs.png"/>`);
  });
  $$payload.out.push(`<div id="container" class="svelte-1uv02gc"><h1 class="svelte-1uv02gc">The Barbershop Website</h1> <p id="first-p" class="svelte-1uv02gc">This contains a barbershop website template wich will be sold to barbershops and will have its layout changed as they like, if you are interested in this kind of website feel free to contact me on stefanossiathas@gmail.com! Check the website <a href="https://barbershop-website-seven.vercel.app" target="_blank" rel="noopener noreferrer" style="color: #2eff23;">Here</a>!</p></div> <div id="features" class="svelte-1uv02gc"><h2 class="svelte-1uv02gc">Key Features &amp; Architecture</h2> <p class="svelte-1uv02gc">A clean, responsive single-page site for a premium barbershop, built with <strong>Svelte</strong> and <strong>Tailwind CSS</strong> and deployed on Vercel. The layout features:</p> <ul class="svelte-1uv02gc"><li><strong>Navigation Bar</strong> with smooth-scrolling links to Home, About, Services, and Booking.</li> <li><strong>Hero Section</strong> showcasing the shop’s name, tagline (“Quality Cuts, Exceptional Service”), and a prominent “Book Now” call-to-action.</li> <li><strong>About Us</strong> area for history, values, and a concise brand story.</li> <li><strong>Featured Services</strong> gallery highlighting haircuts, beard trims, grooming packages, and retail products.</li> <li><strong>Testimonials Carousel</strong> presenting client quotes for social proof.</li> <li><strong>Contact &amp; Booking</strong> section with address, email, phone, and social-media icons (Facebook, Twitter, Instagram).</li></ul> <p id="sec-p" class="svelte-1uv02gc">Under the hood, it leverages Svelte’s reactivity and a mobile-first Tailwind design, ensuring fast load times and a seamless user experience.</p></div> <div id="img-container" style="cursor: pointer;" class="svelte-1uv02gc">`);
  TripleImage($$payload, {
    img_url1: "/barbs.png",
    img_url2: "/barbs.png",
    img_url3: "/barbs.png",
    img_height: "51vh",
    aspect_ratio: "1502/914"
  });
  $$payload.out.push(`<!----></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div id="container2" class="svelte-1uv02gc"><p id="first-p" class="svelte-1uv02gc">This uses a lot of different coding languages and i suggest you check out the website's code on this <a href="https://github.com/Stefanos-gif/barbershop-website" target="_blank" rel="noopener noreferrer" style="color: #2eff23;">Github</a>!</p></div>`);
}
export {
  _page as default
};
