/**
 * This is in the public folder, so it runs on the client! (in the browser)
 */

/**
 * Note: because of our event listener below, this guy won't run until the
 * page totally finishes loading
 */
async function main() {
  const response = await fetch("/api/message");
  const messages = await response.json();
  document.getElementById("message").innerText = `Server says ${messages
    .map(({ msg }) => msg)
    .join(", ")}`;
}

window.addEventListener("DOMContentLoaded", () => {
  main();
});
