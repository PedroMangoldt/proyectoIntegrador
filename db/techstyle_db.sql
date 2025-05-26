CREATE SCHEMA techstyle_db;
USE techstyle_db;

CREATE TABLE usuarios (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasenia VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    dni UNSIGNED INT NOT NULL UNIQUE,
    foto_perfil VARCHAR(255) DEFAULT '/images/users/fotoPerfil.jpeg',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT UNSIGNED NOT NULL,
    imagen VARCHAR(255),
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_producto INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    texto TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_producto) REFERENCES productos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

USE techstyle_db;

INSERT INTO usuarios (email, contrasenia, fecha_nacimiento, dni, foto_perfil) VALUES 
('juanperez@ejemplito.com', 'supersegura123', '1995-06-15', 40123456, '/images/users/fotoPerfil.jpeg'),
('maria123@gmail.com', 'clave1234', '1998-03-10', 41234567, '/images/users/default-image.png'),
('coffeeLover@hotmail.com', 'passcafe99', '1990-09-21', 42345678, '/images/users/default-image.png'),
('techie88@gmail.com', 'techtech88', '1988-12-05', 43456789, '/images/users/default-image.png'),
('ana_rock@outlook.com', 'rockerpass', '1993-07-30', 44567890, '/images/users/default-image.png'),

INSERT INTO productos (id_usuario, imagen, nombre, descripcion) VALUES
(1, '/images/products/mouseGamer.png', 'Mouse gamer RGB', 'Mouse con luces LED, diseño ergonómico y múltiples botones para gaming.'),
(2, '/images/products/mousePadGame.png', 'Mouse Pad extendido', 'Alfombrilla para teclado y mouse con superficie antideslizante.'),
(3, '/images/products/parlantesGame.png', 'Parlantes estéreo gamer', 'Parlantes con diseño gamer y sonido envolvente RGB.'),
(4, '/images/products/lucesLedGamer.png', 'Luces LED RGB', 'Tira de luces LED para ambientar setups gamer con control remoto.'),
(5, '/images/products/escritorioGame.png', 'Escritorio gamer', 'Escritorio con soporte para monitor, auriculares y estructura resistente.'),
(1, '/images/products/sillaGame.png', 'Silla gamer ergonómica', 'Silla con soporte lumbar, reclinable y apoyabrazos ajustables.'),
(2, '/images/products/auricularesGamer.png', 'Auriculares con micrófono', 'Auriculares con sonido envolvente y micrófono retráctil.'),
(3, '/images/products/tecladoGame.png', 'Teclado mecánico RGB', 'Teclado mecánico con iluminación LED y switches rojos.'),
(4, '/images/products/cpuGame.png', 'Compu Gamer RGB', 'Gabinete con panel de vidrio templado y ventiladores RGB incluidos.'),
(5, '/images/products/monitorGame.png', 'Monitor gamer 144Hz', 'Monitor ultra ancho con alta tasa de refresco para juegos.');

INSERT INTO comentarios (id_producto, id_usuario, texto) VALUES
(1, 2, '¡Anda perfecto para jugar al Fortnite!'),
(1, 3, 'Me encanta su diseño.'),
(1, 4, 'Muy cómodo y preciso.'),

(2, 4, 'Excelente para edición de video.'),
(2, 5, 'La superficie es ideal para gaming.'),
(2, 1, 'Buena calidad, se ve duradero.'),

(3, 5, 'El sonido de los parlantes es increíble.'),
(3, 2, 'Perfecto para ver películas.'),
(3, 3, 'Me encanta el diseño RGB.'),

(4, 4, 'Le da mucha onda al setup.'),
(4, 5, 'Fácil de instalar y controlar.'),
(4, 2, 'Se ve genial en la oscuridad.'),

(5, 4, 'Muy cómodo.'),
(5, 2, 'Tiene mucho espacio.'),
(5, 3, 'Ideal para trabajar y jugar.'),

(6, 3, 'Es muy ergonómica.'),
(6, 4, 'Soporte lumbar excelente.'),
(6, 5, 'No me canso nunca de estar sentado.'),

(7, 2, 'El micrófono es muy claro.'),
(7, 1, 'Aíslan bien el sonido.'),
(7, 4, 'Perfectos para streaming.'),

(8, 4, 'Muy lindo y responde rápido.'),
(8, 5, 'Los switches se sienten geniales.'),
(8, 2, 'Iluminación muy pro.'),

(9, 1, 'Ideal para juegos pesados.'),
(9, 6, 'Tiene buena ventilación.'),
(9, 3, 'El vidrio templado es hermoso.'),

(10, 2, 'Es muy bueno para juegos competitivos.'),
(10, 4, 'Colores y definición impecables.'),
(10, 5, 'Muy fluido para FPS.');