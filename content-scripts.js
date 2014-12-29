/*globals chrome */

(function () {
  'use strict';

// ==UserScript==
// @name        GitHub Widescreen
// @namespace   https://github.com/sqren/github-widescreen
// @description With this plugin it is possible to toggle the width of Github
// @author      sqren
// @copyright   2015+, sqren (https://github.com/sqren)
// @license     MIT License; http://opensource.org/licenses/mit-license.php
// @version     0.5
// @icon        https://raw.githubusercontent.com/sqren/github-widescreen/master/icon.png
// @homepageURL https://github.com/sqren/github-widescreen
// @supportURL  https://github.com/sqren/github-widescreen/issues
// @include     *github.com*
// @grant       none
// ==/UserScript==

  function updateCssClass(state){
    var WIDE_CSS_CLASS = 'wide';
    var bodyClassList = document.querySelector('body').classList;

    if (state) {
      bodyClassList.add(WIDE_CSS_CLASS);
    } else {
      bodyClassList.remove(WIDE_CSS_CLASS);
    }
  }

  chrome.storage.onChanged.addListener(function (data) {
    var state = data.state.newValue;
    updateCssClass(state);
  });

  chrome.storage.sync.get('state', function(data) {
    var state = data.state;
    updateCssClass(state);
  });

})();
