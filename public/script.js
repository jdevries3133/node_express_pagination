/**
 * This is in the public folder, so it runs on the client! (in the browser)
 */


/**
 * Note: because of our event listener below, this guy won't run until the
 * page totally finishes loading
 */
async function main() {
  const response = await fetch('/api/message');
  const message = await (response).text()
  document.getElementById('message').innerText = `Server says ${message}`;
}


window.addEventListener('DOMContentLoaded', () => {
  main()
});

