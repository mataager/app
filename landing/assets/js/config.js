const firebaseConfig = {
  apiKey: "AIzaSyDss53pHibCpqo87_1bhoUHkf8Idnj-Fig",
  authDomain: "matager-f1f00.firebaseapp.com",
  databaseURL: "https://matager-f1f00-default-rtdb.firebaseio.com",
  projectId: "matager-f1f00",
  storageBucket: "matager-f1f00.appspot.com",
  messagingSenderId: "922824110897",
  appId: "1:922824110897:web:b7978665d22e2d652e7610",
  measurementId: "G-FWS29Z8GMT",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

//



// { 
 
//  "store-info": { 
//    "adminInfo": { 
//      "Email": "email", 
//      "Uid": "Uid", 
//      "name": "firstName+lastName", 
//      "role": "client", 
//      "token": "" 
//    }, 
//    "billingInfo": { 
//      "-Oiciohhe4IpWPOVB8r3": { 
//        "planAutoRenew": " Waiting ", 
//        "planDiscount": " Waiting ", 
//        "planExpDate": "3 days from created_at ", 
//        "planPaymentMethod": " Waiting ", 
//        "planId": " planId ", 
//        "planPrice": " planPrice ", 
//        "planStartedAt": " created_at ", 
//        "planStatus": "Waiting", 
//        "planSubType": "plan name", 
//        "planTotalPaid": "Waiting",  
//        "planfirsttime": "yes" 
//      } 
//    }, 

//    "mainInfo": { 

//     "busFocus": { 
//      "busCategory": " focus ", 
//      "busGen": " Waiting ", 
//      "busDedicated": " Waiting ", 	 
//    },

//      "locationInfo": { 
//      "city": " Waiting ", 
//      "country": " Waiting ", 
//      "district": " Waiting ", 
//     "locationUrl": " Waiting ",		 
//    }, 

//  }, 

//     "structureInfo": { 
//     "Lightning": "on , off (bool)", 
//     "defDomain": " matager.com/dashboard/uid", 
//     "endpoint": "/xnInDpQ9pOawDjPbckKAhVgR5Xx1", 
//     "busEmail": "Waiting", 
//     "busPhone": "Waiting", 
//     "plan": "planId", 
//     "store-name": "storeName",
//     "themeName": "default",
//     "themeId": "38297hdd-3" 
//    } 
//  } 
// } 