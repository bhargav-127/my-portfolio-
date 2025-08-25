pipeline {
    agent any

    stages {
        stage('Verify Docker Installation') {
            steps {
               // script {
                    sh 'docker --version'  // Ensure Docker is available
                    sh 'docker ps'  // List running containers
                //}
            }
        }

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/bhargav-127/my-portfolio-.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t portfolio-website .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8090:80 portfolio-website'
            }
        }
    }
}
