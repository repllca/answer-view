FROM python:3.9.11
# fromで元となる環境を決める
ENV PYTHONUNBUFFERED 1
# でバックがしやすいように設定
RUN mkdir -p /root/workspace
# RUNで作ったコンテナ内で指定したコマンド実行を行う
COPY requirements.txt /root/workspace/
# COPY　で今のディレクトリのファイルを作ったコンテナ内にコピーする
WORKDIR /root/workspace
# 作業するディレクトリの指定
RUN pip install --upgrade pip\
    && pip install --upgrade setuptools\
    && pip install -r requirements.txt