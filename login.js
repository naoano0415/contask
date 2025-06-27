// Firebaseの設定（あなたのプロジェクト情報に置き換えてください）
const firebaseConfig = {
  apiKey: "AIzaSyDp4adzhjk2AKNPKPAG_pTee3e19vt_L9A",
  authDomain: "contask-afb1d.firebaseapp.com",
  projectId: "contask-afb1d",
  // 必要に応じて他の設定も
};

// Firebase初期化
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google認証プロバイダ
const provider = new firebase.auth.GoogleAuthProvider();

// ボタン押下でログイン開始
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        alert(`ログイン成功: ${result.user.displayName}`);
        console.log(result.user);
      })
      .catch((error) => {
        alert(`ログイン失敗: ${error.message}`);
        console.error(error);
      });
  });
});
