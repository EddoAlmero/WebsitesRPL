// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js";
  import { initializeAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCPcnk4E3zz7-tUTF16hz4FFVvLr3KLMNg",
    authDomain: "wisata-surabaya-652ff.firebaseapp.com",
    projectId: "wisata-surabaya-652ff",
    storageBucket: "wisata-surabaya-652ff.firebasestorage.app",
    messagingSenderId: "205207573499",
    appId: "1:205207573499:web:0ff0a5248ab4563ea3315e",
    measurementId: "G-6P6VQY1SLK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
