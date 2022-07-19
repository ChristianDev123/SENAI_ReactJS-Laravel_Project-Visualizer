# Project Visualizer

Link App: <https://github.com/ChristianDev123/SENAI_ReactJS-Laravel_Project-Visualizer>

Este projeto foi desenvolvido sob a demanda de apresentar projetos e máquinas desenvolvidas e utilizadas no SENAI Suiço-Brasileiro. Este Projeto foi desenvolvido utilizando Linux com interpretador Bash e conta com uma API, um sistema de gerenciamento de conteúdos e uma dashboard de apresentação de projetos.

## Imagens da Aplicação:

![Home App](https://github.com/ChristianDev123/SENAI_ReactJS-Laravel_Project-Visualizer/blob/main/SENAI%20Visualizer/App.png)

![Home CMS](https://github.com/ChristianDev123/SENAI_ReactJS-Laravel_Project-Visualizer/blob/main/SENAI%20Visualizer/CMS.png)

![CMS Page 2](https://github.com/ChristianDev123/SENAI_ReactJS-Laravel_Project-Visualizer/blob/main/SENAI%20Visualizer/CMS2.png)

![CMS Page 3](https://github.com/ChristianDev123/SENAI_ReactJS-Laravel_Project-Visualizer/blob/main/SENAI%20Visualizer/CMS3.png)


## Como instalar localmente:

> Certifique-se de que tem instalado e configurado o Xampp, Composer, Node.JS e yarn

```CMD
  git clone https://github.com/ChristianDev123/SENAI_ReactJS-Laravel_Project-Visualizer
  cd SENAI_ReactJS-Laravel_Project-Visualizer
```

### Instalação API

```CMD
  cd 'Backend Camargo'
  npm install
  composer install
```

### Instalação CMS

```CMD
  cd cms_project_visualizer
  yarn install
```

### Instalação App

```CMD
  cd SENAI_ReactJS-Laravel_Project-Visualizer
  yarn install
```

## Como utilizar localmente:

### Back-End API
> certifique-se de criar um banco de dados com o nome: laravel
> certifique-se de apagar o final .example do documento .env

```CMD
  cd 'Backend Camargo'
  php artisan migrate
  php artisan serve
```

### Front-End CMS e App

```CMD
  cd (cms_project_visualizer ou SENAI_ReactJS-Laravel_Project-Visualizer)
  yarn start
```

## Tecnologias utilizadas:

- Laravel 8;
- React.JS;
- Styled-Components;
- Material Ui;
- Reactstrap - Bootstrap;