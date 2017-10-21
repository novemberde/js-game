pipeline {
  agent {
    node {
      label 'build'
    }
    
  }
  stages {
    stage('Initialize') {
      steps {
        sh 'npm --version'
      }
    }
  }
  environment {
    NODE_ENV = 'development'
  }
}