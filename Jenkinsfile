pipeline {
  agent any
  stages {
    stage("Install") {
      steps {
        sh "npm install"
      }
    }
    stage("Deploy") {
      steps {
        sh "docker-compose down"
        sh "docker-compose up --build -d"
        sh "docker image prune -f"
      }
    }
  }
}