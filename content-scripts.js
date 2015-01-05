/*globals chrome */

function getState(callback){
  chrome.storage.sync.get('state', function(data) {
    callback(data.state);
  });
}

function toggleCssClass(state){
  var WIDE_CSS_CLASS = 'wide';
  var body = document.querySelector('body');
  var toggle = state ? body.classList.add : body.classList.remove;
  toggle(WIDE_CSS_CLASS);
}

chrome.storage.onChanged.addListener(function (data) {
  var state = data.state.newValue;
  toggleCssClass(state);
});

getState(function(state) {
  toggleCssClass(state);
});
