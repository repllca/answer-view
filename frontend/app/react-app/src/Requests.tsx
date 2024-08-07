const backurl = "https://answer-view.onrender.com/"
const account = "dj/"
const kadai = "myapp/kadai/"
const requests = {
  
  // login_endpoint: 'http://127.0.0.1:8000/dj/login/',  // GETメソッド
  // registar_endpoint : "http://127.0.0.1:8000/dj/registration/ ",
  // kadai_endpoint: 'http://127.0.0.1:8000/myapp/kadai/list/create/',  // POSTメソッド
  // kadai_delail_3:"http://127.0.0.1:8000/myapp/kadai/3/detail/",
  // kadailist_get_endpoint: "http://127.0.0.1:8000/myapp/kadai/list/",
  // UpdateSampleData: 'http://000.0.0.0:0000/SampleData',  // PUTメソッド
  // DeleteSampleData: 'http://000.0.0.0:0000/SampleData',  // DELETEメソッド
  // GetUserpoint : "http://127.0.0.1:8000/dj/user/"
  login_endpoint:backurl + account + "login/",  // GETメソッド
  registar_endpoint :backurl + account + "registration/",
  kadai_endpoint:backurl + kadai + "list/create/",  // POSTメソッド
  kadai_delail_3:backurl + kadai + "3/detail/",
  kadailist_get_endpoint: backurl + "llist/",
  UpdateSampleData: 'http://000.0.0.0:0000/SampleData',  // PUTメソッド
  DeleteSampleData: 'http://000.0.0.0:0000/SampleData',  // DELETEメソッド
  GetUserpoint : "http://127.0.0.1:8000/dj/user/"
};

export default requests;

// backendのurlの概要
// admin/                                       管理画面にアクセス
// dj-rest-auth/login/                          ユーザーログイン用のエンドポイント
// dj-rest-auth/logout/                         ユーザーログアウト用のエンドポイント
// dj-rest-auth/password/reset/                 パスワードリセット用のメールを送信するエンドポイント
// dj-rest-auth/password/reset/confirm/         パスワードリセットの確認と新しいパスワード設定用のエンドポイント
// dj-rest-auth/password/reset/change/          ログイン中のユーザーがパスワードを変更するためのエンドポイント
// dj-rest-auth/user/                           現在のユーザー情報を取得または更新するためのエンドポイント
// dj-rest-auth/token/verify/                   トークンの有効性を確認するためのエンドポイント
// dj-rest-auth/token/refresh/                  新しいアクセストークンを取得するためのエンドポイント
// dj-rest-auth/registration/                   新規ユーザー登録用のエンドポイント
// dj-rest-auth/registration/verify-email/      メールアドレス確認用のエンドポイント
// dj-rest-auth/registration/resend-email/      確認メールの再送信用のエンドポイント
// myapp/kadai/                                 課題一覧にアクセス
// myapp/kadai/<int>/comments/                  特定の課題にアクセス
