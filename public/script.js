/**
 * This is in the public folder, so it runs on the client! (in the browser)
 */

let nextUrl = '/api/message';
let prevUrl = '';

/**
 * Click handler for the "next page" button
 */
async function handleNextPage() {
  const messages = await getData()
  putItIntoThemIntoTheDom(messages)
}

/**
 * Click handler for the "previous page" button
 */
async function handlePrevPage() {
  const messages = await getData('prev');
  putItIntoThemIntoTheDom(messages)
}

/**
 * Direction can be `next` or `prev`
 */
async function getData(direction = 'next') {
  const response = await fetch(direction === 'next' ? nextUrl : prevUrl);
  const { data: messages, page } = await response.json();

  nextUrl = page.next;
  prevUrl = page.prev;

  return messages;
}

function putItIntoThemIntoTheDom(messages) {
  document.getElementById("message").innerHTML = `Server says <b>${messages
    .map(({ msg }) => msg)
    .join(", ")}</b>`;
}

/**
 * Note: because of our event listener below, this guy won't run until the
 * page totally finishes loading
 */
async function main() {
  document.getElementById("next").addEventListener("click", handleNextPage);
  document.getElementById("prev").addEventListener("click", handlePrevPage);

  // initial fetch
  const messages = await getData();
  putItIntoThemIntoTheDom(messages);
}

window.addEventListener("DOMContentLoaded", () => {
  main();
});
