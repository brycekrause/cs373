pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/brycekrause/cs373'
            }
        }

        stage('Deploy to S3') {
            steps {
                sh '''
                aws s3 sync . s3://brycekrause-site-bucket \
                  --delete \
                  --exclude ".git/*" \
                  --exclude "node_modules/*" \
                  --exclude "Jenkinsfile"
                '''
            }
        }

        stage('Invalidate CloudFront') {
            steps {
                sh '''
                aws cloudfront create-invalidation \
                  --distribution-id E15DXR8RIXS3MO \
                  --paths "/*"
                '''
            }
        }
    }

    post {
        always {
            echo 'Build finished'
        }

        failure {
            echo 'Build failed — check logs'
        }
    }
}
