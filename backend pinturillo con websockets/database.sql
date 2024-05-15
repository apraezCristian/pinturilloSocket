-- tabla Palabra
CREATE TABLE Palabra (
    IdPalabra SERIAL PRIMARY KEY,
    Texto VARCHAR(255) NOT NULL
);

--insertar palabras
INSERT INTO Palabra (Texto) VALUES
('Gato'), ('Perro'), ('Elefante'),    -- Para la categoría Animales
('Computadora'), ('Teléfono'), ('Tablet'),  -- Para la categoría Tecnología
('Playa'), ('Montaña'), ('Ciudad');   -- Para la categoría Lugares

-------------------------------------------------------------------------------------
-- tabla Categoria
CREATE TABLE Categoria (
    IdCategoria SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
);

-- insertar categorias
INSERT INTO Categoria (Nombre) VALUES ('Animales'), ('Tecnología'), ('Lugares');

--------------------------------------------------------------------------------------------
-- tabla PalabrasPorCategorias para la relación muchos a muchos entre Palabra y Categoria
CREATE TABLE PalabrasPorCategorias (
    IdPalabra INTEGER REFERENCES Palabra(IdPalabra),
    IdCategoria INTEGER REFERENCES Categoria(IdCategoria),
    PRIMARY KEY (IdPalabra, IdCategoria)
);

--insertar id de palabras y categorias
INSERT INTO PalabrasPorCategorias (IdPalabra, IdCategoria) VALUES
(1, 1),  -- Gato
(2, 1),  -- Perro
(3, 1);  -- Elefante
INSERT INTO PalabrasPorCategorias (IdPalabra, IdCategoria) VALUES
(4, 2),  -- Computadora
(5, 2),  -- Teléfono
(6, 2);  -- Tablet
INSERT INTO PalabrasPorCategorias (IdPalabra, IdCategoria) VALUES
(7, 3),  -- Playa
(8, 3),  -- Montaña
(9, 3);  -- Ciudad
------------------------------------------------------------------------------------------------------------

-- Creación de la tabla salaDeJuegos
CREATE TABLE SalaDeJuegos (
    IdSala SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    IdCategoria INTEGER REFERENCES Categoria(IdCategoria),
    Estado VARCHAR(50) NOT NULL
);
