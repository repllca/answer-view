const requests = {
  login_endpoint: 'http://127.0.0.1:8000/dj-rest-auth/login/',  // GETメソッド
  logout_endpoint: 'http://000.0.0.0:0000/SampleData',  // POSTメソッド
  UpdateSampleData: 'http://000.0.0.0:0000/SampleData',  // PUTメソッド
  DeleteSampleData: 'http://000.0.0.0:0000/SampleData',  // DELETEメソッド
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
