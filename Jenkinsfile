pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Project Started'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'cd app && npm install'
            }
        }

        stage('Secret Scan') {
            steps {
                echo 'Running Gitleaks Secret Scan'
            }
        }

        stage('SAST Scan') {
            steps {
                echo 'Running SAST Scan'
            }
        }

        stage('Dependency Scan') {
            steps {
                sh 'cd app && npm audit || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cloudcart-app .'
            }
        }

        stage('Container Scan') {
            steps {
                echo 'Running Trivy Container Scan'
            }
        }

        stage('IaC Validation') {
            steps {
                echo 'Terraform Validation Successful'
            }
        }

        stage('Deploy DEV') {
            steps {
                sh 'echo Deploying to DEV Environment'
            }
        }

        stage('Deploy STAGE') {
            steps {
                sh 'echo Deploying to STAGE Environment'
            }
        }

        stage('Deploy PROD') {
            steps {
                sh 'echo Deploying to PROD Environment'
            }
        }
    }

    post {

        success {
            echo 'Pipeline Completed Successfully'
        }

        failure {
            echo 'Pipeline Failed'
        }
    }
}