pipeline {
  agent {
    node {
      label 'Test'
    }
    
  }
  stages {
    stage('build') {
      agent {
        node {
          label 'Test'
        }
        
      }
      environment {
        NODE_ENV = 'development'
      }
      steps {
        sh 'npm --version'
      }
    }
  }
  environment {
    NODE_ENV = 'development'
  }
}