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
                // Use shell command directly
                bat 'docker build -t portfolio-website .' // use 'sh' if Linux
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 8090:80 portfolio-website'
            }
        }
    }
}
