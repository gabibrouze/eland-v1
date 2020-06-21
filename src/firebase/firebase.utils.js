import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyC-N28ZeJnxzEN-AIpxl9fd7klKekB0pv4',
	authDomain: 'eland-48fe6.firebaseapp.com',
	databaseURL: 'https://eland-48fe6.firebaseio.com',
	projectId: 'eland-48fe6',
	storageBucket: 'eland-48fe6.appspot.com',
	messagingSenderId: '791338760902',
	appId: '1:791338760902:web:64ecef8f20ef40c5b5b5c7',
	measurementId: 'G-FTWMVDK28G',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log('error createing user', err.message);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
