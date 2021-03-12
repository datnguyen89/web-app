importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBOKJib5S04xqKIVqvLULEFsZ39BvjPRsg",
  authDomain: "datnt-3d8cd.firebaseapp.com",
  projectId: "datnt-3d8cd",
  storageBucket: "datnt-3d8cd.appspot.com",
  messagingSenderId: "966205260525",
  appId: "1:966205260525:web:c12bcd86214dc7162502e4",
  measurementId: "G-RXV5QMYB1N"
})
const messaging  = firebase.messaging()
messaging .onBackgroundMessage((payload) => {
  console.log('Message onBackgroundMessage. ', payload)
  // ...
})
self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
})