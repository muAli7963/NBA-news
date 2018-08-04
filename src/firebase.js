import * as firebase from 'firebase';



// Initialize Firebase
const config = {
    apiKey: "AIzaSyAVDKOBVZF-0jBNTQJuefmdI6KVKSUs7B0",
    authDomain: "nba-full-bfdc3.firebaseapp.com",
    databaseURL: "https://nba-full-bfdc3.firebaseio.com",
    projectId: "nba-full-bfdc3",
    storageBucket: "",
    messagingSenderId: "675539167479"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach(childSnapshot => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data;
}
export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
}