pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/bhargav-127/my-portfolio-.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('portfolio-website')
                }
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 8090:80 portfolio-website'
            }
        }
    }
}