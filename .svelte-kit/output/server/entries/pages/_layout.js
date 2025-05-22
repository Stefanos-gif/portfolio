import { inject } from "@vercel/analytics";
inject({ mode: "production" });
const load = ({ url }) => {
  const { pathname } = url;
  return { pathname };
};
const prerender = true;
export {
  load,
  prerender
};
