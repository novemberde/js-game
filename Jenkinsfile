pipeline {
  agent {
    node {
      label 'Test'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh 'echo "Hello"'
      }
    }
  }
  environment {
    NODE_ENV = 'development'
  }
}