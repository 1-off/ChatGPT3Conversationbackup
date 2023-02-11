//---------------------------------------------------------------- Download all chats ------------------------------------------------
browser.menus.create({
  id: "backup-all-chat",
  title: "Backup All Chats",
  contexts: ["all"],
});
browser.menus.create({
  id: "backup-all-chat-html",
  title: "Download file as HTML",
  contexts: ["all"],
  parentId: "backup-all-chat",
});

browser.menus.create({
  id: "backup-all-chat-latex",
  title: "Download file as LaTeX",
  contexts: ["all"],
  parentId: "backup-all-chat",
});

browser.menus.create({
  id: "backup-all-chat-markdown",
  title: "Download file as Markdown",
  contexts: ["all"],
  parentId: "backup-all-chat",
});

browser.menus.create({
  id: "backup-all-chat-text",
  title: "Download file as SimpleText",
  contexts: ["all"],
  parentId: "backup-all-chat",
});
// ---------------------------------------------------------------- select some chats ------------------------------------------------
browser.menus.create({
  id: "backup-with-checkboxes",
  title: "Select some chat to backup",
  contexts: ["all"],
});

browser.menus.create({
  id: "backup-with-checkboxes-html",
  title: "Save as HTML",
  parentId: "backup-with-checkboxes",
  contexts: ["all"],
});

browser.menus.create({
  id: "backup-with-checkboxes-latex",
  title: "Save as LaTeX",
  parentId: "backup-with-checkboxes",
  contexts: ["all"],
});

browser.menus.create({
  id: "backup-with-checkboxes-markdown",
  title: "Save as Markdown",
  parentId: "backup-with-checkboxes",
  contexts: ["all"],
});

browser.menus.create({
  id: "backup-with-checkboxes-text",
  title: "Save as SimpleText",
  parentId: "backup-with-checkboxes",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info, tab) => {
  console.log(info.parentMenuItemId, info.menuItemId);
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, { type: info.parentMenuItemId, method:info.menuItemId});
  });
});


// document.getElementById("arrowDown").addEventListener("click", function() {
//   console.log("clicked Down");
//   window.scrollTo(0,document.body.scrollHeight);
//   });
  
// document.getElementById("arrowUp")[0].addEventListener("click", function() {
//   console.log("clicked up");
//     window.scrollTo(0, 0);
//     });
