CREATE DATABASE paneles;
USE paneles;

INSERT TABLE cliente(
    idCliente INT NOT NULL AUTO_INCREMENT,
    tipo INT NOT NULL,
    monto INT NOT NULL,
    cp INT NOT NULL,
    PRIMARY KEY(idCliente)
);