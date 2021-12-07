FROM python:3.7

COPY ./requirements.txt /requirements.txt
RUN apk add --update --no-cache --virtual .tmp gcc libc-dev linux-headers
RUN pip install -r /requirements.txt
RUN apk del .tmp

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN chmod +x ./scripts/*
RUN ls
RUN pwd

CMD ["./scripts/entrypoint.sh"] 
