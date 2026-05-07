pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:${env.PATH}"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t express-docker-app .'
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh 'docker compose down || true'
            }
        }

        stage('Run with Docker Compose') {
            steps {
                sh 'docker compose up -d --build --force-recreate'
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker image prune -f'
            }
        }
    }
}
