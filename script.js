console.log("Script Loaded");
let msg = document.getElementById("msgbox");

let msgOnline = () => {
  msg.textContent = "Internet Connected";
  msg.style.cssText = "background-color: #e7f6d5; color: #689f38";
};

let msgOffline = () => {
  msg.textContent = "Internet Not Available";
  msg.style.cssText = "background-color: #ffdde0; color: #d32f2f";
};

if (window.navigator.onLine) {
  msgOnline();
} else {
  msgOffline();
}

window.addEventListener("online", msgOnline);
window.addEventListener("offline", msgOffline);
