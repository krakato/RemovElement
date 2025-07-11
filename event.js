// background (event) page
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "Remove Element",
    id: "remove-element",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.sendMessage(tab.id, { action: "remove-element" });
});
