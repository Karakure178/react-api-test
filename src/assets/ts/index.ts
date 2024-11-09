import { fixViewport } from "./libs/fixViewport";

/* ===========================================
 * 全体処理用
 * ======================================== */
const main = () => {
  console.log("hello");
  fixViewport();
};

window.addEventListener("DOMContentLoaded", () => {
  main();
});
