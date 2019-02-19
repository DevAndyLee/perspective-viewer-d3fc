/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

window.addEventListener("WebComponentsReady", function () {
    var url = '../data/rates.csv';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        var table = perspective.worker().table(xhr.response);
        var elem = document.getElementsByTagName("perspective-viewer")[0];
        elem.load(table);
    }

    xhr.send(null);
});