# Teste Prático Fullstack

### Projeto Backend API

Comandos a serem executados para rodar o projeto:


O projeto está utilizando o Docker, então você vai precisar dele instalado.

* Clonar o Projeto

Rodar os seguintes comandos Docker dentro da pasta app-laravel:

* 1- "docker-compose up -d"
* 2- O projeto está rodando no seguinte endereço: http://localhost:9191/
* 3- Existe uma Pasta chamada: POSTMAN que possui a Collection a ser importada diretamente no POSTMAN (você vai precisar ter o Postman instalado na máquina).

Obs: caso o serviço do redis docker não suba rodar o seguinte comando:
"docker-compose restart redis"

* 4- Caso a pasta Vendor não exista no projeto laravel:
* 1- Acessar o container: "docker-compose exec app bash"
* 2- rodar o comando: "composer install"

* Do projeto - também rodar o comando dentro do container: "php artisan migrate"

O banco de dados utilizado Mysql.
* PHP = 8.1
* Laravel 10 - Foram abordados os conceitos de Design Pattern / SOLID / CLEAN CODE / REST API
### Projeto FronEnd

Para este projeto está no seguinte diretório: "frontend" ao acessar via linha de comando:
* 1- Rodar o comando: "npm start" que o serviço deverá estar utilizando a porta 3000
* Local:            http://localhost:3000

O projeto está rodando com o ReactJS.

# Ilustração:

* Tela:
<img src="https://github.com/wasmont/teste_fullstack_php/blob/develop/app-laravel/public/images/tela.jpg" alt="Ilustração de Tela utilizando: ReactJS FrontEnd" title="Ilustração de Tela utilizando: ReactJS FrontEnd">

* Report Listagem de Eletrodomésticos:
<img src="https://github.com/wasmont/teste_fullstack_php/blob/develop/app-laravel/public/images/report.png" alt="Ilustração de Export Report PDF" title="Ilustração de Export Report PDF">

* API:

<img src="https://github.com/wasmont/teste_fullstack_php/blob/develop/app-laravel/public/images/api_laravel.png" alt="Ilustração de API utilizando: Laravel 10x BackEnd" title="Ilustração de API utilizando: Laravel 10x BackEnd">

