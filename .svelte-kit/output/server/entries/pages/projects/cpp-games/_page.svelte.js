import { F as head } from "../../../../chunks/index2.js";
import { T as TripleImage } from "../../../../chunks/TripleImage.js";
function _page($$payload) {
  const IMG_TIC_H = "clamp(220px, 51vh, 560px)";
  const IMG_SCGAME_H = "clamp(220px, 51vh, 560px)";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>C++ Games | Stefanos Portfolio</title>`;
    $$payload2.out.push(`<meta property="og:title" content="C++ Games | Stefanos Portfolio" class="svelte-bt94w3"/> <meta property="og:description" content="Explore Stefanos' collection of C++ games, including a text-based maze and a two-player Tic-Tac-Toe. Each project demonstrates dynamic data structures, user input, and classic game logic in C++." class="svelte-bt94w3"/> <meta property="og:type" content="website" class="svelte-bt94w3"/> <meta property="og:url" content="https://stefanosgif.vercel.app/projects/cpp-games" class="svelte-bt94w3"/> <meta property="og:image" content="https://stefanosgif.vercel.app/tic.png" class="svelte-bt94w3"/> <meta name="description" content="Explore Stefanos' collection of C++ games, including a text-based maze and a two-player Tic-Tac-Toe. Each project demonstrates dynamic data structures, user input, and classic game logic in C++." class="svelte-bt94w3"/>`);
  });
  $$payload.out.push(`<section class="wrap title svelte-bt94w3"><h1 class="svelte-bt94w3">Welcome to my C++ Games</h1> <p class="lead svelte-bt94w3">This contains my C++ Games, which I’ll continue to expand as I improve. I love making simple little games, so feel free to explore the code on the links that I will share for each one.</p></section> <section class="wrap game svelte-bt94w3"><div class="badge svelte-bt94w3"><span class="num svelte-bt94w3">1</span> <div class="fire svelte-bt94w3"><span class="flame f1 svelte-bt94w3"></span><span class="flame f2 svelte-bt94w3"></span><span class="flame f3 svelte-bt94w3"></span><span class="flame f4 svelte-bt94w3"></span><span class="flame f5 svelte-bt94w3"></span></div></div> <div class="osc svelte-bt94w3"><div class="osc-body svelte-bt94w3"></div><div class="osc-head svelte-bt94w3"></div></div> <h2 class="game-title svelte-bt94w3">Tic Tac Toe</h2> <p class="desc svelte-bt94w3">An interactive, text-based maze navigation program demonstrating structured data, user input handling, and simple collision detection: <br class="svelte-bt94w3"/><br class="svelte-bt94w3"/> <strong class="svelte-bt94w3">Maze Representation</strong><br class="svelte-bt94w3"/> The maze is a 10×10 grid stored as a vector&lt;vector&lt;char>>, where '#' denotes walls and ' ' open paths. <br class="svelte-bt94w3"/><br class="svelte-bt94w3"/> <strong class="svelte-bt94w3">Player Struct</strong><br class="svelte-bt94w3"/> A Player struct holds x and y coordinates, initialized at (1,1). <br class="svelte-bt94w3"/><br class="svelte-bt94w3"/> <strong class="svelte-bt94w3">Rendering Function</strong><br class="svelte-bt94w3"/> displayMaze() iterates over the grid, drawing either the maze cell or a 'P' at the player’s current position. <br class="svelte-bt94w3"/><br class="svelte-bt94w3"/> <strong class="svelte-bt94w3">Movement Logic</strong><br class="svelte-bt94w3"/> movePlayer(direction) computes tentative coordinates based on w/a/s/d input, checks for open space, and updates the player’s position if the target cell isn’t a wall. <br class="svelte-bt94w3"/><br class="svelte-bt94w3"/> <strong class="svelte-bt94w3">Main Loop</strong><br class="svelte-bt94w3"/> Continuously renders the maze, prompts for direction, applies movement, and clears the console for real-time navigation. <br class="svelte-bt94w3"/><br class="svelte-bt94w3"/> This project highlights dynamic data structures, control flow, and basic game-loop architecture in C++. Find <a href="https://github.com/Stefanos-gif/tic-tac-toe-game/tree/main" target="_blank" rel="noopener noreferrer" class="svelte-bt94w3">Here</a>!</p> <figure class="img-card svelte-bt94w3">`);
  TripleImage($$payload, {
    img_url1: "/tic.png",
    img_url2: "/tic.png",
    img_url3: "/tic.png",
    img_height: IMG_TIC_H,
    aspect_ratio: "994/859",
    alt: "Tic Tac Toe"
  });
  $$payload.out.push(`<!----></figure></section> <section class="wrap game svelte-bt94w3"><div class="badge svelte-bt94w3"><span class="num svelte-bt94w3">2</span> <div class="fire svelte-bt94w3"><span class="flame f1 svelte-bt94w3"></span><span class="flame f2 svelte-bt94w3"></span><span class="flame f3 svelte-bt94w3"></span><span class="flame f4 svelte-bt94w3"></span><span class="flame f5 svelte-bt94w3"></span></div></div> <div class="osc osc-2 svelte-bt94w3"><div class="osc-body svelte-bt94w3"></div><div class="osc-head svelte-bt94w3"></div></div> <h2 class="game-title svelte-bt94w3">Simple Console Game</h2> <p class="desc svelte-bt94w3">A compact, two-player Tic-Tac-Toe game implemented with clear, modular functions and robust input handling: <br class="svelte-bt94w3"/><br class="svelte-bt94w3"/> <strong class="svelte-bt94w3">Board Representation</strong><br class="svelte-bt94w3"/> A 3×3 char array labeled ‘1’–‘9’ lets players pick moves by slot number. Each turn redraws the grid via drawBoard(). <br class="svelte-bt94w3"/><br class="svelte-bt94w3"/> <strong class="svelte-bt94w3">Core Logic</strong><br class="svelte-bt94w3"/> placeMarker(slot): Converts a slot to row/column indices, checks occupancy, and places the current marker. <br class="svelte-bt94w3"/> winner(): Scans rows, columns, and diagonals for three identical markers, returning the winning player or 0. <br class="svelte-bt94w3"/> swapPlayerAndMarker(): Toggles between Player 1 and Player 2 along with their markers (X/O). <br class="svelte-bt94w3"/><br class="svelte-bt94w3"/> <strong class="svelte-bt94w3">Game Flow</strong><br class="svelte-bt94w3"/> In game(), Player 1 first selects X or O. The loop runs up to nine moves, prompting for valid slots, rejecting invalid or occupied entries, and ending early on a win. Finally, it declares the winner or a tie. <br class="svelte-bt94w3"/><br class="svelte-bt94w3"/> This project showcases procedural design, input validation, and user interaction in C++. Find <a href="https://github.com/Stefanos-gif/simple-console-game" target="_blank" rel="noopener noreferrer" class="svelte-bt94w3">Here</a>!</p> <figure class="img-card svelte-bt94w3">`);
  TripleImage($$payload, {
    img_url1: "/scgame.png",
    img_url2: "/scgame.png",
    img_url3: "/scgame.png",
    img_height: IMG_SCGAME_H,
    aspect_ratio: "988/910",
    alt: "Simple Console Game"
  });
  $$payload.out.push(`<!----></figure></section> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
}
export {
  _page as default
};
