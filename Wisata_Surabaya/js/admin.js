// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCPcnk4E3zz7-tUTF16hz4FFVvLr3KLMNg",
  authDomain: "wisata-surabaya-652ff.firebaseapp.com",
  projectId: "wisata-surabaya-652ff",
  storageBucket: "wisata-surabaya-652ff.firebasestorage.app",
  messagingSenderId: "205207573499",
  appId: "1:205207573499:web:0ff0a5248ab4563ea3315e"
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
        if (email === "admin@wisatasurabaya.com") {
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
