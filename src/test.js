import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('HV55cq8kl9L1sv88MvvU').collection('cartItems').doc('QWUFqTDDZOJh5AfLNUXY');
firestore.doc('/users/HV55cq8kl9L1sv88MvvU/cartItems/QWUFqTDDZOJh5AfLNUXY');
firestore.collection('/users/HV55cq8kl9L1sv88MvvU/cartItems');