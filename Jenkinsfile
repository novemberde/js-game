pipeline {
  agent {
    node {
      label 'Test'
    }
    
  }
  stages {
    stage('Test') {
      agent {
        node {
          label 'Test'
        }
        
      }
      environment {
        NODE_ENV = 'development'
      }
      steps {
        sh 'echo "Hello"'
      }
    }
    stage('Deploy') {
      steps {
        sh 'exit 125'
      }
    }
  }
  environment {
    NODE_ENV = 'development'
  }
}