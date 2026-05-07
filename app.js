// Configuración y variables globales
let books = JSON.parse(localStorage.getItem('books')) || [];
let editMode = false;

// Elementos del DOM
const form = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const yearInput = document.getElementById('year');
const genreInput = document.getElementById('genre');
const isbnInput = document.getElementById('isbn');
const bookIdInput = document.getElementById('book-id');

const booksList = document.getElementById('books-list');
const emptyState = document.getElementById('empty-state');
const tableContainer = document.querySelector('.table-container');

const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const searchInput = document.getElementById('search-input');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
});

// Event Listeners
form.addEventListener('submit', handleFormSubmit);
cancelBtn.addEventListener('click', resetForm);
searchInput.addEventListener('input', handleSearch);

// Funciones Principales
function handleFormSubmit(e) {
    e.preventDefault();

    const book = {
        id: editMode ? bookIdInput.value : Date.now().toString(),
        title: titleInput.value.trim(),
        author: authorInput.value.trim(),
        year: yearInput.value,
        genre: genreInput.value,
        isbn: isbnInput.value.trim()
    };

    if (editMode) {
        // Actualizar
        const index = books.findIndex(b => b.id === book.id);
        if (index !== -1) {
            books[index] = book;
        }
    } else {
        // Crear
        books.push(book);
    }

    saveData();
    renderBooks();
    resetForm();
}

function renderBooks(booksToRender = books) {
    booksList.innerHTML = '';

    if (booksToRender.length === 0) {
        tableContainer.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    tableContainer.classList.remove('hidden');
    emptyState.classList.add('hidden');

    booksToRender.forEach(book => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td><strong>${book.title}</strong></td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td><span class="badge">${book.genre}</span></td>
            <td>${book.isbn}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editBook('${book.id}')" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete-btn" onclick="deleteBook('${book.id}')" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        
        booksList.appendChild(tr);
    });
}

// Global functions for inline HTML event handlers
window.editBook = (id) => {
    const book = books.find(b => b.id === id);
    if (!book) return;

    editMode = true;
    
    // Rellenar formulario
    bookIdInput.value = book.id;
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;
    isbnInput.value = book.isbn;

    // Cambiar UI del formulario
    formTitle.textContent = 'Editar Libro';
    submitBtn.innerHTML = '<i class="fas fa-save"></i> Actualizar';
    cancelBtn.classList.remove('hidden');
    
    // Scroll hacia el formulario si está en móvil
    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
};

window.deleteBook = (id) => {
    if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {
        books = books.filter(b => b.id !== id);
        saveData();
        
        // Si el libro eliminado es el que se está editando, reiniciar form
        if (editMode && bookIdInput.value === id) {
            resetForm();
        } else {
            renderBooks();
        }
    }
};

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm) ||
        book.isbn.toLowerCase().includes(searchTerm)
    );
    
    renderBooks(filteredBooks);
}

function resetForm() {
    form.reset();
    editMode = false;
    bookIdInput.value = '';
    
    formTitle.textContent = 'Añadir Nuevo Libro';
    submitBtn.innerHTML = '<i class="fas fa-plus"></i> Guardar';
    cancelBtn.classList.add('hidden');
}

function saveData() {
    localStorage.setItem('books', JSON.stringify(books));
}
