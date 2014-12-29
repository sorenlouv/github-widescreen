/*globals chrome */

function updateIcon(state){
	var color = state ? [255, 0, 0, 255] : [190, 190, 190, 230];
	var text = state ? 'On' : 'Off';

	chrome.browserAction.setBadgeBackgroundColor({color: color});
	chrome.browserAction.setBadgeText({text: text});
}

function setState(state){
	chrome.storage.sync.set({state: state});
}

function getState(callback){
	chrome.storage.sync.get('state', function(data) {
		callback(data.state);
	});
}

chrome.browserAction.onClicked.addListener(function () {
	getState(function(state){
		var newState = !state;
		updateIcon(newState);
		setState(newState);
	});
});

getState(function(state) {
	updateIcon(state);
});
