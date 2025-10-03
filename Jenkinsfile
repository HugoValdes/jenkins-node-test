pipeline {
    agent { label 'nero_node' } // etiqueta que asignaste al nodo
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/HugoValdes/jenkins-node-test.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'nohup npm run start'
            }
        }
    }
}
