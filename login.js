import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Firebaseの設定（あなたのプロジェクト情報に置き換えてください）
const firebaseConfig = {
  apiKey: "AIzaSyDp4adzhjk2AKNPKPAG_pTee3e19vt_L9A",
  authDomain: "contask-afb1d.firebaseapp.com",
  projectId: "contask-afb1d",
  // 必要に応じて他の設定も
};
// 登録ボタン
document.getElementById("signupBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("登録完了: " + userCredential.user.email);
    })
    .catch((error) => {
      alert("登録エラー: " + error.message);
    });
});

// ログインボタン
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("ログイン成功: " + userCredential.user.email);
    })
    .catch((error) => {
      alert("ログインエラー: " + error.message);
    });
});
