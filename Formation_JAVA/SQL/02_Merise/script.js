document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { id: 1, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", year: 1943 },
        { id: 2, title: "Les Misérables", author: "Victor Hugo", year: 1862 },
        { id: 3, title: "L'Étranger", author: "Albert Camus", year: 1942 }
    ];

    const bookList = document.getElementById("book-list");
    books.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
        `;
        bookList.appendChild(row);
    });
});
