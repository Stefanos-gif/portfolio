import { F as head } from "../../../../chunks/index2.js";
import { T as TripleImage } from "../../../../chunks/TripleImage.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Python Web Scraper | Stefanos Portfolio</title>`;
    $$payload2.out.push(`<meta name="description" content="A simple Python script that scrapes all links from a webpage and exports them to CSV. Uses BeautifulSoup, Requests, and Python for fast web data extraction."/> <meta property="og:title" content="Python Web Scraper | Stefanos Portfolio"/> <meta property="og:description" content="A simple Python script that scrapes all links from a webpage and exports them to CSV. Uses BeautifulSoup, Requests, and Python for fast web data extraction."/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://your-portfolio-domain.com/projects/python-web-scraper"/> <meta property="og:image" content="https://your-portfolio-domain.com/web.png"/>`);
  });
  $$payload.out.push(`<div id="container" class="svelte-uuiqo8"><h1 class="svelte-uuiqo8">Python Web Scraper</h1> <p id="first-p" class="svelte-uuiqo8">This project is a straightforward <a href="https://github.com/Stefanos-gif/python-web-scraper" target="_blank" rel="noopener noreferrer" style="color: #2eff23;">Python script</a> that extracts every hyperlink from a specified webpage and exports them into a CSV file.</p></div> <div id="features" class="svelte-uuiqo8"><h2 class="svelte-uuiqo8">Description</h2> <p class="svelte-uuiqo8">This project is a simple Python script that scrapes all the links from a specified webpage and saves them to a CSV file.</p> <h3 class="svelte-uuiqo8">Technologies Used</h3> <ul class="svelte-uuiqo8"><li><strong>BeautifulSoup</strong> - A powerful web scraping library for Python.</li> <li><strong>Python</strong> - A versatile programming language used for backend development.</li> <li><strong>Requests</strong> - A simple HTTP library for Python, used for making requests to web pages.</li> <li><strong>CSV</strong> - A module for reading and writing CSV files in Python.</li></ul></div> <div id="img-container" style="cursor: pointer;" class="svelte-uuiqo8">`);
  TripleImage($$payload, {
    img_url1: "/web.png",
    img_url2: "/web.png",
    img_url3: "/web.png",
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
