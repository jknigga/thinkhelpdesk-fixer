// ==UserScript==
// @name         ThinkHelpDesk Fixer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  trying to make ThinkHelpDesk a little better
// @author       Jakob Knigga
// @match        https://www.thinkhelpdesk.com/tru-flex/admin/*
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @updateURL    https://raw.githubusercontent.com/jknigga/thinkhelpdesk-fixer/master/thinkhelpdesk-fixer.userscript.js
// @grant        GM_getResourceText
// ==/UserScript==

(function ($, undefined) {
    $(function () {
        'use strict';
        // this will make it so the page doesn't refresh and be dumb
        setInterval((function(){timerID=-1}),1000);
        
        $(document).ready(function(){
            // removes the bottom confidential notice bar
            $('.ConfidentialNotice').remove();
        });
    });
})(window.jQuery.noConflict(true));
