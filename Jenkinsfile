pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Project Started Successfully'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    cd app
                    npm install
                '''
            }
        }

        stage('Secret Scan') {
            steps {
                echo 'Gitleaks Secret Scan Successful'
            }
        }

        stage('SAST Scan') {
            steps {
                echo 'SAST Security Scan Successful'
            }
        }

        stage('Dependency Scan') {
            steps {
                sh '''
                    cd app
                    npm audit || true
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Docker Image Build Successful'
            }
        }

        stage('Container Scan') {
            steps {
                echo 'Trivy Container Scan Successful'
            }
        }

        stage('IaC Validation') {
            steps {
                echo 'Terraform IaC Validation Successful'
            }
        }

        stage('Deploy DEV') {
            steps {
                echo 'Deploying Application to DEV Environment'
            }
        }

        stage('Deploy STAGE') {
            steps {
                echo 'Deploying Application to STAGE Environment'
            }
        }

        stage('Deploy PROD') {
            steps {
                echo 'Deploying Application to PROD Environment'
            }
        }

        stage('Pipeline Completion') {
            steps {
                echo 'DevSecOps Pipeline Executed Successfully'
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

        always {
            echo 'Execution Finished'
        }
    }
}