import {initializeApp} from '@angular/fire/app';

export const environment = {
  firebase: {
    projectId: 'mobilite-ebay',
    appId: '1:485995006488:web:4fe04acb8a495bca35d16d',
    storageBucket: 'mobilite-ebay.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyCNpXj8z9X24UDxjpaHSa68AScit1V7Qq0',
    authDomain: 'mobilite-ebay.firebaseapp.com',
    messagingSenderId: '485995006488',
  },
  production: true
};

export const firebaseConfig = {
  apiKey: 'AIzaSyCNpXj8z9X24UDxjpaHSa68AScit1V7Qq0',
  authDomain: 'mobilite-ebay.firebaseapp.com',
  projectId: 'mobilite-ebay',
  storageBucket: 'mobilite-ebay.appspot.com',
  messagingSenderId: '485995006488',
  appId: '1:485995006488:web:4fe04acb8a495bca35d16d'
};

export const app = initializeApp(firebaseConfig);
