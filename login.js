// Firebaseの設定（あなたのプロジェクト情報に置き換えてください）
const firebaseConfig = {
  apiKey: "AIzaSyDp4adzhjk2AKNPKPAG_pTee3e19vt_L9A",
  authDomain: "contask-afb1d.firebaseapp.com",
  projectId: "contask-afb1d",
  // 必要に応じて他の設定も
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// リダイレクトで戻ってきたときの結果を取得
firebase.auth().getRedirectResult().then((result) => {
  if (result.user) {
    alert(`ログイン成功: ${result.user.displayName}`);
    console.log(result.user);
  }
}).catch((error) => {
  console.error("リダイレクトログイン失敗:", error);
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginBtn").addEventListener("click", () => {
    //  新しいタブでGoogleログイン
    auth.signInWithRedirect(provider);
  });
});
