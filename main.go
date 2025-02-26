package main

import (
	"github.com/TLBTrung-222/todo-go/handlers"
	"github.com/gin-gonic/gin"
)

func main(){
	router := gin.Default()
	
	router.GET("/tasks", handlers.GetTasks)
	router.POST("/tasks", handlers.CreateTask)
	router.GET("/tasks/:id", handlers.GetTask)
	router.DELETE("/tasks/:id", handlers.DeleteTask)
	router.PUT("/tasks/:id", handlers.UpdateTask)

	router.Run(":8080")
}