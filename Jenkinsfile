pipeline {
    agent { label 'windows' } // Ensures the pipeline runs on a Windows node

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/bhargav-127/my-portfolio-.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t portfolio-website .'
            }
        }

        stage('Stop Previous Container') {
            steps {
            bat '''
            for /f "tokens=1" %%i in ('docker ps -q --filter "publish=8091"') do docker stop %%i
            for /f "tokens=1" %%i in ('docker ps -a -q --filter "publish=8091"') do docker rm %%i
            exit 0
            '''
        }
    }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 8091:80 portfolio-website'
            }
        }
    }
}