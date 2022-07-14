#!/bin/bash
echo "O que deseja?
    [1] Iniciar aplicação
    [2] Iniciar gerenciamento da aplicação
    [3] Fechar todos processos de execução"
read choose;
if [ "$choose" == '1' ]; then
    sudo /opt/lampp/lampp start
    cd 'Backend Camargo'
    php artisan serve &
    cd ..
    cd 'SENAI_ReactJS-Laravel_Project-Visualizer'
    yarn start -y &
elif [ "$choose" == '2' ]; then
    sudo /opt/lampp/lampp start
    cd 'Backend Camargo'
    php artisan serve &
    cd ..
    cd cms_project_visualizer
    yarn start -y & 
elif [ "$choose" == '3' ]; then
    killall -9 php
    killall -9 php7.4
    killall -9 node
    sudo /opt/lampp/lampp stop

else
    echo "Falha ao identificar qual procedimento seguir"
    echo "Desligando programa ..."
    exit
fi