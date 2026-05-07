CREATE DATABASE IF NOT EXISTS crud_libros;
USE crud_libros;

-- Creación de la tabla
CREATE TABLE IF NOT EXISTS libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    anio INT NOT NULL,
    genero VARCHAR(100) NOT NULL,
    isbn VARCHAR(50) NOT NULL
);

-- Inserción de datos de prueba
INSERT INTO libros (titulo, autor, anio, genero, isbn) VALUES 
('El Señor de los Anillos', 'J.R.R. Tolkien', 1954, 'Fantasía', '978-0261102385'),
('Cien Años de Soledad', 'Gabriel García Márquez', 1967, 'Ficción', '978-0307474728');
