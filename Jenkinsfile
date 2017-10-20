pipeline {
  agent {
    node {
      label 'Test'
    }
    
  }
  stages {
    stage('error') {
      steps {
        sh 'npm test'
      }
    }
  }
  environment {
    NODE_ENV = 'development'
  }
}