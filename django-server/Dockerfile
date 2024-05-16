FROM python:3.8

RUN mkdir /backend-server
WORKDIR /backend-server
RUN apt-get update && apt-get install -y
ADD requirements.txt /backend-server
RUN pip install -r requirements.txt
