/* This is the main JS file for this web app */

/* Main thread */
window.onload = function () {

    /* Initialize Firebase */
    firebase.initializeApp({
        apiKey: "AIzaSyCpxwZ3QGzKjzLVSm94Uqqz-5BnvxzrUts",
	authDomain: "yogi-run.firebaseapp.com",
	databaseURL: "https://yogi-run.firebaseio.com",
	projectId: "yogi-run",
	storageBucket: "yogi-run.appspot.com",
	messagingSenderId: "267127157989",
	appId: "1:267127157989:web:78b7c4c0dc76bfcd"
    });

    /* Register a Service Worker */
	if('serviceWorker' in navigator) {
	    navigator.serviceWorker
            .register('sw.js')
            .then(function() { console.log("%cService Worker Registered!", "background:#222222; color:#BADA55;"); });
	}

}
