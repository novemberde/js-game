pipeline {
  agent {
    node {
      label 'build'
    }
    
  }
  stages {
    stage('Initialize') {
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
    stage('Build') {
      agent {
        docker {
          image 'node'
        }
        
      }
      steps {
        sh 'node --version'
      }
    }
    stage('Report') {
      agent {
        docker {
          image 'node'
        }
        
      }
      steps {
        echo 'End'
      }
    }
  }
  environment {
    NODE_ENV = 'development'
  }
}