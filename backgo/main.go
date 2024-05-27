package main

import (
	"fmt"
	"net/http"

	"github.com/rs/cors"
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/load/", func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, "{\"data\":[{\"_id\":\"6640cc3564a9794200cf41a9\",\"id\":1,\"body\":\"Новое дело\",\"done\":1,\"__v\":0}]}")
	})
	fmt.Println("Server is listening...")

	handler := cors.Default().Handler(mux)
	http.ListenAndServe(":3001", handler)

}
