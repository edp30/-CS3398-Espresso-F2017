var functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
functions.auth.user().onCreate(event => {

	const user = event.data;

	var userObject = {
		displayName : user.displayName,
		email : user.email,
		photoUrl : user.photoURL,
		createdOn : user.metadata.createdAt
	};
	admin.database().ref('users/' + user.uid).set(userObject);
});
