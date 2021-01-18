FROM python:latest

WORKDIR /app

ADD . .

RUN pip3 install -r requirements.txt

RUN python3 manage.py makemigrations && python3 manage.py migrate 
