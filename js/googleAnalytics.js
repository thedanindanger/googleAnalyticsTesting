
//functions to insert google id, user id, and create new sessions

//set new google account, optional name assignment

setAccountNum = function() {
    
    var n = document.getElementsByName("newAccountNum")[0].value;
    var id = document.getElementsByName("newUserId")[0].value;
    
    // remove previous trackers
    if(typeof ga !== "undefined"){delete ga};
    if(typeof otherTracker !== "undefined"){delete otherTracker};

    // rename tracking object
    window.GoogleAnalyticsObject = 'otherTracker';

    // reload tracking snippet
    $.getScript('//www.google-analytics.com/analytics.js', function() {

    // Creates differnt tracker and sends a pageview using the renamed command queue.
    if(typeof id === "undefined"){
        otherTracker('create', n, 'auto');
        } else {
        otherTracker('create', n, {
            'cookieDomain': 'auto',
            'clientId': id});
        };

      
      otherTracker('send', 'pageview');
    });

    //overwrites tracker number for 'ga' objects
}

sendPageView = function() {
    var url = document.getElementsByName("newUrl")[0].value;
    otherTracker('send', 'pageview',
        { page: url });
}



setUserIdNum = function() {
    var id = document.getElementsByName("newUserId")[0].value;
    otherTracker('set', 'userId', id);
}

sendNewSessionEvent = function() {
    otherTracker('send', {
        hitType: 'event',
        eventCategory: 'newSession',
        eventAction: 'start',
        eventLabel: 'trigger',
        sessionControl: 'start'
    });
}

    