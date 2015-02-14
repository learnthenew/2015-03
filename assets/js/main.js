(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function(e) {
        document.getElementById('mobile_menu_button').addEventListener('click', function(e) {
            var wrap = document.getElementById('wrap');
            if (wrap.className == 'pushedLeft')
                wrap.className = '';
            else
                wrap.className = 'pushedLeft';
        });
    });
})();
