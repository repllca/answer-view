FROM python:3.9.11

ENV PYTHONUNBUFFERED 1

RUN mkdir -p /root/django-server
COPY requirements.txt /root/django-server/
ADD ./django-server/mysite /root/django-server/
WORKDIR /root/django-server

RUN pip install --upgrade pip\
    && pip install --upgrade setuptools\
    && pip install -r requirements.txt

WORKDIR /root/django-server/mysite


# CMD python manage.py runserver 0.0.0.0:8000
# CMD ./setup_sql.sh
# CMD ./run_server.sh