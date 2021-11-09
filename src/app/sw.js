importScripts('https://push.cfv4.com/landing/serviceworker8.js');

self.addEventListener('install', function(event) {
    try {
        FinPushSw.version();
    } catch (exception) {
        FinPushSwLogger(event, exception);
    }
});

self.addEventListener('push', event => {
    try {
        FinPushSw.open(event);
    } catch (exception) {
        FinPushSwLogger(event, exception);
    }
});

self.addEventListener('notificationclick', event => {
    try {
        FinPushSw.click(event);
    } catch (exception) {
        FinPushSwLogger(event, exception);
    }
});

self.addEventListener('notificationclose', event => {
    try {
        FinPushSw.close(event);
    } catch (exception) {
        FinPushSwLogger(event, exception);
    }
});

function FinPushSwLogger(event, exception) {
    var url = 'https://push.cfv4.com/swlog/' + event.type + '/';
    var logger = 0;

    if (event.type === 'push') {
        var data = event.data.json().options.data;
        url += data.rid;
        logger = data.log;
    }

    if (event.type === 'notificationclick' || event.type === 'notificationclose') {
        url += event.notification.data.rid;
        logger = event.notification.data.log;
    }

    if (logger === 1) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: exception.message })
        });
    }
}
