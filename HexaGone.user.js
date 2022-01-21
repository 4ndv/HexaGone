// ==UserScript==
// @name        HexaGone - Classic
// @namespace   https://github.com/4ndv/HexaGone
// @match       https://twitter.com/*
// @grant       none
// @version     1.0
// @author      @libneko
// @description Replaces hexagonal avatar with a classic one
// @downloadURL https://raw.githubusercontent.com/4ndv/HexaGone/main/HexaGone.user.js
// @homepageURL https://github.com/4ndv/HexaGone
// @supportURL  https://github.com/4ndv/HexaGone/issues
// @license     MIT
// ==/UserScript==

let hexagoneTries = 0;

function findAndReplaceMask() {
  console.log('Trying...');
  hexagoneTries += 1;

  const mask = document.querySelector('#hex-hw-shapeclip-clipconfig');

  if (!mask) return false;

  mask.outerHTML = '<clipPath clipPathUnits="objectBoundingBox" id="hex-hw-shapeclip-clipconfig" transform="scale(0.01 0.01)"><circle cy="50" cx="50" r="50"></circle></clipPath>';

  return true;
}

function tryUntilFound() {
  const result = findAndReplaceMask();

  console.log('Result: ' + result);

  if (!result && hexagoneTries <= 10) setTimeout(tryUntilFound, 1000);
}

tryUntilFound();
