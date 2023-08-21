const handleResponse = (response) => {
  console.log("Hello from content-script.js");
  console.log(response);
}

const data = {
  message: "Page loaded: ",
  url: window.location.href
};

chrome.runtime.sendMessage(data, handleResponse);

console.log("Content script is running!");

document.getElementById("#proceed").addEventListener("click", () => {
  console.log("Button clicked!");
  chrome.runtime.sendMessage({ message: "Button clicked!" });
}