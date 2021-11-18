// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
  production: false
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
