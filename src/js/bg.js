"use strict";

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if ((tab.url.indexOf('://vk.com') > -1) && (tab.url.indexOf('http') === 0)) {
        console.log(tabId);
        chrome.pageAction.show(tabId);
        chrome.pageAction.setIcon({
            tabId: tabId,
            path: 'images/icons/icon_32.png'
        });
//        currentTabId = tabId;
    }
});

chrome.pageAction.onClicked.addListener(function (tab) {
    console.log(tab);
//    chrome.tabs.sendMessage(tab.id, {action: "showPopup", url:tab.url}, function(response) {});
});

