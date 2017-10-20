pipeline {
  agent {
    node {
      label 'Test'
    }
    
  }
  stages {
    stage('error') {
      steps {
        sh 'echo "Hello"'
      }
    }
  }
  environment {
    NODE_ENV = 'development'
  }
}