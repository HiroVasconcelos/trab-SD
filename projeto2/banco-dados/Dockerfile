# banco-dados/Dockerfile
FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=nome_do_banco
ENV MYSQL_USER=nome_do_usuario
ENV MYSQL_PASSWORD=senha_do_usuario

COPY setup.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
