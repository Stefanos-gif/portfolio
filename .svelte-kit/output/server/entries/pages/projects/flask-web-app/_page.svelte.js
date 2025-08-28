import { F as head } from "../../../../chunks/index2.js";
import { T as TripleImage } from "../../../../chunks/TripleImage.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Flask Web Application | Stefanos Portfolio</title>`;
    $$payload2.out.push(`<meta name="description" content="A simple Flask web app for managing tasks. Add, edit, and organize your to-dos with a clean Python backend and modern web interface."/> <meta property="og:title" content="Flask Web Application | Stefanos Portfolio"/> <meta property="og:description" content="A simple Flask web app for managing tasks. Add, edit, and organize your to-dos with a clean Python backend and modern web interface."/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://your-portfolio-domain.com/projects/flask-web-app"/> <meta property="og:image" content="https://your-portfolio-domain.com/flaskshow.png"/>`);
  });
  $$payload.out.push(`<div id="container" class="svelte-uuiqo8"><h1 class="svelte-uuiqo8">Flask Web Application</h1> <p id="first-p" class="svelte-uuiqo8">This is a python <a href="https://github.com/Stefanos-gif/Flask-Web-Application?tab=readme-ov-file#flask-web-application" target="_blank" rel="noopener noreferrer" style="color: #2eff23;">flask web app</a> for managing tasks.</p></div> <div id="features" class="svelte-uuiqo8"><h2 class="svelte-uuiqo8">Description</h2> <p class="svelte-uuiqo8">This project is a simple Flask web application for managing tasks. Users can add, <strong>edit</strong>, and manage their tasks through a web interface.</p> <h3 class="svelte-uuiqo8">Technologies Used</h3> <ul class="svelte-uuiqo8"><li><strong>Flask</strong> - A lightweight WSGI web application framework in Python.</li> <li><strong>Python</strong> - A versatile programming language used for backend development.</li> <li><strong>HTML</strong> - The standard markup language for creating web pages.</li> <li><strong>CSS</strong> - For structuring and styling the web application.</li></ul></div> <div id="img-container" style="cursor: pointer;" class="svelte-uuiqo8">`);
  TripleImage($$payload, {
    img_url1: "/flaskshow.png",
    img_url2: "/flaskshow.png",
    img_url3: "/flaskshow.png",
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
