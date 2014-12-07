require('./Polyfills/');
var QueryLoader2 = require('./QueryLoader.js');

//jquery and zepto
if (window.jQuery || window.Zepto) {
    (function ($) {
        'use strict';
        $.fn.queryLoader2 = function(options){
            return this.each(function() {
                (new QueryLoader2(this, options));
            });
        };
    })(window.jQuery || window.Zepto);
}

// component
if (typeof(module) !== 'undefined')
{
    module.exports = QueryLoader2;
}

// requirejs support
if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return QueryLoader2;
    });
}

window.QueryLoader2 = QueryLoader2;

var tmpOverlay = document.createElement("div");
document.querySelector("body").appendChild(tmpOverlay);
tmpOverlay.style.position = "fixed";
tmpOverlay.style.top = 0;
tmpOverlay.style.left = 0;
tmpOverlay.style.width = "100%";
tmpOverlay.style.height = "100%";
tmpOverlay.style.backgroundColor = "#000";