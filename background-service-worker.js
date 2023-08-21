let state = "request-access";
  
const possibleStates = [
  "request-access",
  "enter-password",
  "select-type",
  "perm-or-temp",
  "temp-perm",
  "request-change"
];

const messageListener = (request, sender, sendResponse) => {
  console.log("Hello from background-service-worker.js");
  console.log("Request: ", request);

  sendResponse("Got it!");
}

chrome.runtime.onMessage.addListener(messageListener);

console.log("Service worker is running!");