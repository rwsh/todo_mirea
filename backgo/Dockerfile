FROM golang

WORKDIR /app

COPY . .

RUN go get github.com/rs/cors@latest

RUN go build main.go

EXPOSE 3001

CMD [ "./main" ]