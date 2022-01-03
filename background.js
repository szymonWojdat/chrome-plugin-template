// this triggers when the plugin icon gets clicked
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript({
    // file: 'js file starting from root directory'
    // code: 'js code as string'
  });
})

chrome.runtime.onInstalled.addListener(function() {

  // this creates the context menu in case it's needed
  chrome.contextMenus.create({
    id: "<plugin id>",
    title: "<context menu title>",
    contexts: ["image"] // this determines on what type of content the context menu shows up
  })
})

// this triggers when the plugin item in the context menu gets clicked
// context menu is the one that opens on right mouse click
chrome.contextMenus.onClicked.addListener(function(clickData, tab) {
  // js code here
})
