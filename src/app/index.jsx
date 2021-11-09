// https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7
// https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be

import 'babel-polyfill';

import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { metricaUser } from '~/app/common';
import App from './app';

(function (d, w, c) {
    metricaUser.generateID();

    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter45302445 = new Ya.Metrika2({
                id:45302445,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                params: {
                    ya_metrik_mapper_id: metricaUser.getID()
                }
            });
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/tag.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks2");

window.addEventListener('load', () => {
    dataLayer && dataLayer.push({'event': 'B1'});
    window.yaCounter45302445 && window.yaCounter45302445.reachGoal('B1');
});

ReactDOM.render(
    <App />,
    document.getElementById('mainContent')
);
