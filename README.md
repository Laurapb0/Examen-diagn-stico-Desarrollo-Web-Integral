# 📚 Gestor de Libros - CRUD Web App

Una aplicación web funcional tipo CRUD (Create, Read, Update, Delete) para gestionar una colección personal de libros. Desarrollada con tecnologías web estándar y enfocada en una interfaz de usuario estética y moderna.

## 📝 Descripción
Este proyecto permite a los usuarios registrar libros en una colección digital, visualizar la lista completa, actualizar la información de registros existentes y eliminarlos cuando sea necesario. Los datos persisten localmente en el navegador a través del `LocalStorage`, asegurando que la información no se pierda al recargar la página y evitando la necesidad de instalar dependencias complejas.

## 🛠️ Tecnologías Utilizadas
- **HTML5:** Estructura semántica.
- **CSS3 (Vanilla):** Diseño premium utilizando variables CSS, flexbox/grid, modo oscuro, efectos *glassmorphism* (cristal esmerilado) y animaciones fluidas sin usar frameworks.
- **JavaScript (ES6):** Lógica funcional del CRUD y manipulación del DOM interactiva.
- **LocalStorage API:** Persistencia de datos local en el navegador del usuario.
- **FontAwesome:** Iconografía moderna para la interfaz.
- **Google Fonts:** Tipografía 'Inter' de alta legibilidad.

## ✨ Funcionalidades
1. **Registrar elementos:** Permite añadir un nuevo libro ingresando al menos 4 campos: Título, Autor, Año de Publicación, Género y ISBN.
2. **Consultar elementos:** Visualización dinámica de todos los libros en formato de tabla, con estado vacío ("empty state") cuando no hay datos.
3. **Buscar elementos:** Barra de búsqueda en tiempo real que filtra resultados por título, autor, género o ISBN para fácil consulta.
4. **Editar elementos:** Carga la información de un libro seleccionado en el formulario para modificar cualquiera de sus campos y guarda los cambios de inmediato.
5. **Eliminar elementos:** Borrado seguro de registros previa confirmación del usuario para evitar borrados accidentales.

## 🚀 Instrucciones para ejecutar el proyecto
El proyecto no requiere dependencias, servidores complejos ni configuraciones. Para ejecutarlo:

1. Clona o descarga este repositorio en tu computadora.
2. Extrae los archivos si los descargaste en formato `.zip`.
3. Entra a la carpeta `book-crud-app`.
4. Abre el archivo `index.html` directamente en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari) haciendo doble clic sobre él.
5. ¡Listo! Puedes empezar a gestionar tus libros inmediatamente.

## 📸 Evidencias (Capturas del sistema funcionando)
> **Nota:** Se adjunto un pdf con capturas de todo el sistema funcionando.

## 🤖 Uso de Inteligencia Artificial
**¿Se usó IA en este proyecto?** Sí.
**¿Para qué?** 
Se utilizó la Inteligencia Artificial como herramienta para agilizar el desarrollo.
- **Estructura y Lógica:** Base funcional del CRUD y manipulación del estado en LocalStorage asegurando código limpio y principios SOLID en funciones de JavaScript.
- **Diseño UI/UX:** Generación del diseño estético mediante CSS puro, implementación de Glassmorphism, y selección de paleta de colores para un acabado premium.
- **Documentación:** Estructuración de este README.md cumpliendo con los lineamientos de la rúbrica de evaluación.
