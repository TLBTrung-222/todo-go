# Todo-Go Project

A simple todo list application with a **Go (Gin)** backend and a **React (Vite)** frontend.

## Project Structure

```
todo-go/
├── main.go                # Entry point for the Go backend
├── handlers/
│   └── todo_handler.go    # Handlers for TODO-related routes
├── go.mod                 # Go module dependencies
├── go.sum                 # Go module checksums
├── Dockerfile             # Dockerfile for containerizing the backend
├── web/                   # Frontend code using Vite
```

## Live Demo

-   Frontend: [https://todo-go-gin.vercel.app/](https://todo-go-gin.vercel.app/)
-   Backend: [https://todo-go-g2zv.onrender.com/tasks](https://todo-go-g2zv.onrender.com/tasks)

---

## Backend Deployment Instructions

### Prerequisites

-   [Docker](https://www.docker.com/) installed on your system.

### Steps

1. **Clone the Repository**
    ```bash
    git clone https://github.com/TLBTrung-222/todo-go.git
    cd todo-go
    ```
2. **Build the Docker Image**:
    ```
    docker build -t todo-go-backend .
    ```
3. **Run the Docker Container:**
    ```
    docker run -p 8080:8080 todo-go-backend
    ```

The backend api will be accessible at [http://localhost:8080](http://localhost:8080).

## Frontend Deployment Instructions

1. **Navigate to the Frontend Directory:**

    ```bash
    cd web
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the Development Server:**
    ```bash
    npm run dev
    ```

The frontend will be accessible at [http://localhost:3000](http://localhost:3000).
