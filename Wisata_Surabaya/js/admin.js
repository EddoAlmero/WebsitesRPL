// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login button event
document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector("button");
  loginButton.addEventListener("click", function () {
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Redirect logic
        if (email === "admin@example.com") {
          window.location.href = "admin-dashboard.html";
        } else {
          window.location.href = "user-dashboard.html";
        }
      })
      .catch((error) => {
        alert("Login gagal: " + error.message);
      });
  });
});
