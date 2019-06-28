/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

var EXAMPLE_NOTES = JSON.stringify([
  {title: "Return $200 to Alice"},
  {title: "Buy soy milk", due: "2014-09-15"}
]);

var EXAMPLE_NOTES =
  "You can insert any text you want here.\n" +
  "Save it to storage and reload the page.\n";

function value(val) {
  var text = document.getElementById("text");
  if (val) {
    text.value = val;
  } else {
    return text.value;
  }
}

function updateStatus(val) {
  document.getElementById("status").innerHTML = "<b>Status:</b> " + val;
}

var Buttons = {
  load: function () {
    var start = performance.now();
    NotesStorage.load().then(function (notes) {
      if (notes) {
        value(notes);
        updateStatus("loaded.");
      } else {
        updateStatus("No saved items found!");
      }
      var end = performance.now();

      document.getElementById("timings").innerHTML = "<b>Load Time:</b> " + (end - start) + " ms";
    }, updateStatus);
  },

  save: function () {
    var start = performance.now();
    var notes = value();

    NotesStorage.save(notes).then(function () {
      updateStatus("Saved.");
      var end = performance.now();
      document.getElementById("timings").innerHTML = "<b>Save Time:</b> " + (end - start) + " ms";
    });
  },

  clear: function () {
    localforage.clear();
    updateStatus("Examples pasted. (Storage cleared.)");
  }
};

addEventListener("DOMContentLoaded", function () {
  NotesStorage.load().then(function (notes) {
    if (notes) {
      value(notes);
      updateStatus("Notes loaded.");
    } else {
      updateStatus("Examples pasted. (No saved items found.)");
    }
  }, updateStatus);
});

addEventListener("click", function (event) {
  switch (event.target.id) {
    case "load":
      Buttons.load();
      break;
    case "save":
      Buttons.save();
      break;
    case "clear":
      Buttons.clear();
      break;
  }
});
