import { F as head } from "../../../../chunks/index2.js";
import { T as TripleImage } from "../../../../chunks/TripleImage.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Data Analysis with Pandas | Stefanos Portfolio</title>`;
    $$payload2.out.push(`<meta name="description" content="A project that uses Python, Pandas, and Matplotlib to analyze datasets and visualize data with histograms. Explore the code and see data science in action!"/> <meta property="og:title" content="Data Analysis with Pandas | Stefanos Portfolio"/> <meta property="og:description" content="A project that uses Python, Pandas, and Matplotlib to analyze datasets and visualize data with histograms. Explore the code and see data science in action!"/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://your-portfolio-domain.com/projects/data-analysis-with-pandas"/> <meta property="og:image" content="https://your-portfolio-domain.com/dataanshow.png"/>`);
  });
  $$payload.out.push(`<div id="container" class="svelte-uuiqo8"><h1 class="svelte-uuiqo8">Data Analysis with Pandas</h1> <p id="first-p" class="svelte-uuiqo8">This <a href="https://github.com/Stefanos-gif/data-analysis-with-pandas" target="_blank" rel="noopener noreferrer" style="color: #2eff23;">project</a> performs data analysis on a dataset using Pandas and creates a histogram of a specified column.</p></div> <div id="features" class="svelte-uuiqo8"><h2 class="svelte-uuiqo8">Description</h2> <p class="svelte-uuiqo8">This project harnesses Pandas to explore and analyze a dataset and generate a histogram for a designated column.</p> <h3 class="svelte-uuiqo8">Technologies Used</h3> <ul class="svelte-uuiqo8"><li><strong>Pandas</strong> - A powerful data manipulation and analysis library for Python.</li> <li><strong>Python</strong> - A versatile programming language used for backend development.</li> <li><strong>Matplotlib</strong> - A plotting library for the Python programming language and its numerical mathematics extension NumPy.</li></ul></div> <div id="img-container" style="cursor: pointer;" class="svelte-uuiqo8">`);
  TripleImage($$payload, {
    img_url1: "/dataanshow.png",
    img_url2: "/dataanshow.png",
    img_url3: "/dataanshow.png",
    img_height: "53vh",
    aspect_ratio: "1202/908"
  });
  $$payload.out.push(`<!----></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
}
export {
  _page as default
};
