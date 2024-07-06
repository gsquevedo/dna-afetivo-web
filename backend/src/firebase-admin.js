const admin = require('firebase-admin');
const serviceAccount = require('../projeto-web-indigena-firebase-adminsdk-8namd-f7c26a4a3c.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "projeto-web-indigena.appspot.com"
});

const db = admin.firestore();
const auth = admin.auth();
const storage = admin.storage().bucket();

module.exports = { admin, db, auth, storage };
