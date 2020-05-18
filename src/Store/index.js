import firebase from 'firebase/app';
import { createStore, combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import 'firebase/auth';

const fbConfig = {
  apiKey: 'AIzaSyCzlBUefIqVEkCgPKjj7K6ebfvUwSfTtdg',
  authDomain: 'timoapp-ecc2f.firebaseapp.com',
  databaseURL: 'https://timoapp-ecc2f.firebaseio.com',
  projectId: 'timoapp-ecc2f',
  storageBucket: 'timoapp-ecc2f.appspot.com',
  messagingSenderId: '1089801171929',
  appId: '1:1089801171929:web:7106b417dd6b4f1f295fc8',
};

const rrfConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

firebase.initializeApp(fbConfig);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
});

const initialState = {};

/* eslint-disable */
export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};
