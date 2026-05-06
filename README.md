# Docker Express App

A simple **Node.js + Express + MongoDB** application containerized with **Docker** and orchestrated using **Docker Compose**. This project demonstrates how to run a Node.js API alongside a MongoDB database, both running as separate containers that communicate over a shared Docker network.

---

## Tech Stack

- **Node.js 18** — JavaScript runtime
- **Express 5** — Web framework
- **Mongoose** — MongoDB ODM
- **MongoDB** — NoSQL database
- **Docker & Docker Compose** — Containerization

---

## Project Structure

```
docker-node/
├── screenshots/          # README screenshots
├── .dockerignore         # Files ignored by Docker build
├── .env                  # Environment variables (not committed)
├── .gitignore
├── Dockerfile            # Image definition for the Node app
├── app.js                # Express server entry point
├── docker-compose.yml    # Multi-container setup (app + mongo)
├── package.json
└── README.md
```

---

## Prerequisites

Make sure the following are installed on your machine:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Engine + Docker Compose)
- [Node.js 18+](https://nodejs.org/) (only needed if you want to run the app locally without Docker)

---

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=8000
MONGODB_URI=mongodb://mongo:27017/mydb
```

> **Note:** When running through Docker Compose, the hostname `mongo` resolves to the MongoDB container automatically. If you run the app outside Docker, change it to `mongodb://localhost:27017/mydb`.

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd docker-node
```

### 2. Build and start the containers

```bash
docker-compose up --build
```

This command will:

- Build the Node.js image from the `Dockerfile`
- Pull the official `mongo` image
- Start both containers (`express-app` and `mongo`)
- Connect them on a shared network

### 3. Verify the app is running

Open your browser and visit:

```
http://localhost:8000
```

You should see the response below:

![Browser output](screenshots/browser-output.png)

---

## Running Containers

Once `docker-compose up` is running, both containers should appear in **Docker Desktop**:

![Docker Desktop view](screenshots/docker-desktop.png)

You can also see live logs for both the app and MongoDB directly inside VS Code:

![VS Code with terminal logs](screenshots/vscode-terminal.png)

---

## API Endpoints

| Method | Endpoint | Description                  |
| ------ | -------- | ---------------------------- |
| GET    | `/`      | Returns a hello-world string |

Example response:

```json
"Hello world from Docker !!"
```

---

## Useful Docker Commands

```bash
# Start containers in the background
docker-compose up -d

# Stop the containers
docker-compose down

# Stop and remove volumes (clears MongoDB data)
docker-compose down -v

# View logs
docker-compose logs -f

# Rebuild after code changes
docker-compose up --build
```

---

## How It Works

- The **`app`** service is built from the local `Dockerfile`, exposes port `8000`, and depends on the `mongo` service.
- The **`mongo`** service uses the official MongoDB image and persists data using a named volume (`mongo-data`) so your database survives container restarts.
- Both services run on the same default network created by Docker Compose, allowing the app to reach MongoDB using the hostname `mongo`.

---

## License

ISC
