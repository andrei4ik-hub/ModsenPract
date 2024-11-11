class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    displayInfo() {
        console.log(`Название: ${this.title}, Автор: ${this.author}, Год публикации: ${this.publicationYear}`);
    }
}

// 
class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title,author, publicationYear);
        this.price = price;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Цена: ${this.price}`);
    }
}

const myEbook = new Ebook('Мастер и Маргарита', 'Михаил Булгаков', 1966, 9.99);
myEbook.displayInfo();
