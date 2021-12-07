FROM python:3.7-alpine

COPY ./requirements.txt /requirements.txt
RUN apk add --update --no-cache --virtual .tmp gcc libc-dev linux-headers
RUN apk update \
 && apk add postgresql-dev gcc python3-dev musl-dev
RUN pip install -r /requirements.txt
RUN apk del .tmp

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN chmod +x ./scripts/*
RUN ls
RUN pwd

RUN python manage.py migrate
CMD ["./scripts/entrypoint.sh"] 
