# answer-view
## データベースの概要  

question_collection 

    {
        title: (str),
        question:(str),
        answer: (str),
        author: (str),
        question_id :(int)
    }


users_collection 

    {
        user_id: (int),
        name: (str),
        school: (str),
        password: (str),
    }

## apiのやり取り

front ➡　backend(post)
    url:api/qestion
        qestionを保存する

    url:api/user(post)
        user(json)を保存


front ➡　backend(get)

    url:api/qestion
    
        question_collectionの中身をすべて返す
## 実行コマンド
コンテナの生成 `docker compose up -d`　　➡　DjangoとReactの二つのコンテナが生成される

コンテナの表示（稼働中） `docker ps` 　➡　コンテナIDを確認しよう！！

コンテナに入る `docker exec -it コンテナID bash`

コンテナを抜けるとき　`docker-compose down --rmi all --volumes --remove-orphans`　➡これで作成したコンテナをすべて消せる
`
　
## フロントエンド

## バックエンド