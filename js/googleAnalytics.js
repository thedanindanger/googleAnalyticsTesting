
//functions to insert google id, user id, and create new sessions

//set new google account, optional name assignment

setAccountNum = function() {
    var n = document.getElementsByName("newAccountNum")[0].value;
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', n, 'auto');
    ga('send', 'pageview');
    //overwrites tracker number for 'ga' objects
}

sendPageView = function() {
    var url = document.getElementsByName("newUrl")[0].value;
    ga('send', 'pageview',
        { page: url });
}



setUserIdNum = function() {
    var id = document.getElementsByName("newUserId")[0].value;
    ga('set', 'userId', id);
}

sendNewSessionEvent = function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'newSession',
        eventAction: 'start',
        eventLabel: 'trigger',
        sessionControl: 'start'
    });
}

    