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
                    if (isUnix()) {
                        sh 'docker build -t portfolio-website .'  // Use 'sh' for Linux/Mac
                    } else {
                        bat 'docker build -t portfolio-website .'  // Use 'bat' for Windows
                    }
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'docker run -d -p 8090:80 portfolio-website'  // Use 'sh' for Linux/Mac
                    } else {
                        bat 'docker run -d -p 8090:80 portfolio-website'  // Use 'bat' for Windows
                    }
                }
            }
        }
    }
}
