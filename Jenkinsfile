pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'development',
                git 'https://github.com/Sufal-Shirodkar/docker-epress-app.git'
            }
        }

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
                sh 'docker compose up -d --build'
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker image prune -f'
            }
        }
    }
}