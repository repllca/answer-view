# answer-view
データベースの概要
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
        pass: (str),
    }



front ➡　backend(post)
    url:api/qestion
        qestionを保存する

    url:api/user(post)
        user(json)を保存


front ➡　backend(get)
    url:api/qestion
        question_collectionの中身をすべて返す
