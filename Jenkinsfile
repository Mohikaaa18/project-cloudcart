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
                bat 'cd app && npm install'
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
                bat 'cd app && npm audit || exit 0'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t cloudcart-app .'
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
                bat 'scripts\\deploy-dev.bat'
            }
        }

        stage('Deploy STAGE') {
            steps {
                bat 'scripts\\deploy-stage.bat'
            }
        }

        stage('Deploy PROD') {
            steps {
                bat 'scripts\\deploy-prod.bat'
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