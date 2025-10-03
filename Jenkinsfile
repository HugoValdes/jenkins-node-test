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
                sh 'npm install pm2 -g'
                sh 'pm2 stop app || true' // detiene la app si ya estaba corriendo
                sh 'pm2 start npm --name "node-app" -- run start' // inicia en background
            }
        }
    }
}
