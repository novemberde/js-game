pipeline {
  agent {
    node {
      label 'build'
    }
    
  }
  stages {
    stage('Initialize') {
      agent {
        docker {
          image 'node'
        }
        
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