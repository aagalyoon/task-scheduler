# Distributed Task Scheduler

## Overview

This project is a distributed task scheduler for registering and executing tasks at specific times. Tasks can be one-time or recurring.

## Design Components

- **Task Registration Service**: Handles client requests to register tasks.
- **Scheduler**: Ensures tasks are picked up and executed on time.
- **Executor**: Executes tasks and logs their execution.
- **Task Storage**: Stores task details to ensure data durability.
- **Monitoring and Logging**: Tracks and logs task status.

## Requirements

### High Availability
- Distributed architecture with multiple instances.
- Failover mechanisms to ensure continuity.

### Durability
- Reliable database with replication and backups.

### Scalability
- Horizontal scaling with load balancers.
- Dynamic resource adjustment.

### Cost-Effectiveness
- Cloud services with pay-as-you-go models.
- Docker for efficient deployment.

## Setup Instructions

### Clone the Repository
```sh
git clone https://github.com/aagalyoon/task-scheduler.git
cd task-scheduler
```

### Setup Backend
```sh
cd backend
docker-compose up --build
```

### Setup Frontend
```sh
cd frontend
docker-compose up --build
```

## Usage

- **Backend API**: `http://localhost:4000`
- **Frontend UI**: `http://localhost:3000`

Create, schedule, edit, and delete tasks using the UI. Monitor task execution in the logs.

## Extra Features

- View all scheduled tasks.
- Edit the schedule of a task.
- Delete a task.