/*globals chrome */

function updateIcon(state){
	var text, color;

	if (state) {
		color = [255, 0, 0, 255];
		text = 'On';
	} else {
		color = [190, 190, 190, 230];
		text = 'Off';
	}

	chrome.browserAction.setBadgeBackgroundColor({color: color});
	chrome.browserAction.setBadgeText({text: text});
}

function setState(state){
	updateIcon(state);
	chrome.storage.sync.set({state: state});
}

function getState(callback){
	chrome.storage.sync.get('state', function(data) {
		callback(data.state);
	});
}

chrome.browserAction.onClicked.addListener(function () {
	getState(function(state){
		setState(!state);
	});
});

getState(function(state) {
	updateIcon(state);
});
