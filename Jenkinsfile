pipeline {
  agent {
    node {
      label 'Test'
    }
    
  }
  stages {
    stage('') {
      steps {
        sh 'npm test'
      }
    }
  }
  environment {
    NODE_ENV = 'development'
  }
}