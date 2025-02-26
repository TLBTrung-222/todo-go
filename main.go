package main

import (
	"log"

	"github.com/TLBTrung-222/todo-go/handlers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main(){
	router := gin.Default()

	// config cors for FE which deployed at Vercel
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"https://todo-go-gin.vercel.app"} 
	router.Use(cors.New(config)) // use the cors middleware
	log.Println("CORS configured with:", config)


	router.GET("/tasks", handlers.GetTasks)
	router.POST("/tasks", handlers.CreateTask)
	router.GET("/tasks/:id", handlers.GetTask)
	router.DELETE("/tasks/:id", handlers.DeleteTask)
	router.PUT("/tasks/:id", handlers.UpdateTask)

	router.Run(":8080")
}