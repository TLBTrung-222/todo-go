package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// Task represents a to-do item
type Task struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Completed   bool   `json:"completed"`
}

// Global task storage
var tasks = []Task{}

// GetTasks retrieves all tasks
func GetTasks(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, tasks)
}

// CreateTask adds a new task
func CreateTask(ctx *gin.Context) {
	var newTask Task

	// Bind the received JSON to 'newTask'
	if err := ctx.ShouldBindJSON(&newTask); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "Invalid task format", "error": err.Error()})
		return
	}

	// Assign a unique ID
	newTask.ID = len(tasks) + 1
	tasks = append(tasks, newTask)
	ctx.JSON(http.StatusCreated, gin.H{"id": newTask.ID})
}

// GetTask retrieves a specific task by ID
func GetTask(ctx *gin.Context) {
	id, err := strconv.Atoi(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "Invalid task ID"})
		return
	}

	for _, task := range tasks {
		if task.ID == id {
			ctx.JSON(http.StatusOK, task)
			return
		}
	}

	ctx.JSON(http.StatusNotFound, gin.H{"message": "Task not found"})
}

// UpdateTask updates the completion status of a task
func UpdateTask(ctx *gin.Context) {
	id, err := strconv.Atoi(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "Invalid task ID"})
		return
	}

	var updatePayload struct {
		Completed bool `json:"completed"`
	}
	if err := ctx.ShouldBindJSON(&updatePayload); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "Invalid request body", "error": err.Error()})
		return
	}

	for i, task := range tasks {
		if task.ID == id {
			tasks[i].Completed = updatePayload.Completed
			ctx.JSON(http.StatusOK, tasks[i])
			return
		}
	}


	ctx.JSON(http.StatusNotFound, gin.H{"message": "Task not found"})
}

// DeleteTask deletes a task by ID
func DeleteTask(ctx *gin.Context) {
	id, err := strconv.Atoi(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "Invalid task ID"})
		return
	}

	for i, task := range tasks {
		if task.ID == id {
			// Remove the task from the slice
			tasks = append(tasks[:i], tasks[i+1:]...)
			ctx.JSON(http.StatusOK, gin.H{"message": "Task deleted"})
			return
		}
	}

	ctx.JSON(http.StatusNotFound, gin.H{"message": "Task not found"})
}
