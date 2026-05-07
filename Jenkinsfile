pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                sh '''
                aws s3 sync . s3://brycekrause-site-bucket \
                  --delete \
                  --exclude ".git/*"

                aws cloudfront create-invalidation \
                  --distribution-id E3DDUW8FCPZ691 \
                  --paths "/*"
                '''
            }
        }
    }
}
