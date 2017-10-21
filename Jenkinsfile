pipeline {
  agent {
    node {
      label 'build'
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