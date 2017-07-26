
//functions to insert google id, user id, and create new sessions

//set new google account, optional name assignment

setAccountNum = function() {
    var n = document.getElementsByName("newAccountNum")[0].value;
    ga('create', n, 'auto');
    //overwrites tracker number for 'ga' objects
}

sendPageView = function() {
    var url = document.getElementsByName("newUrl")[0].value;
    ga('send', 'pageview',
        { page: url });
}



setUserIDNum = function() {
    var url = document.getElementsByName("newUserId")[0].value;
    ga('set', 'userId', id);
}

sendNewSessionEvent = function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'newSession',
        eventAction: 'start',
        eventLabel: 'trigger',
        sessionControl: 'start')
}

    