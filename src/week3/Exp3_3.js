class Library {
    static libraryName = "SVECW Central Library";
    static totalBooksIssued = 0;
    bookId;
    bookName;
    constructor(bookName, bookId) {
        this.bookName = bookName;
        this.bookId = bookId;
        Library.totalBooksIssued++;
    }
    static showLibraryInfo() {
        console.log("Library Name:", Library.libraryName);
    }
    displayBook() {
        console.log("Book Name :", this.bookName);
        console.log("Book ID   :", this.bookId);
    }
}
Library.showLibraryInfo();
let book1 = new Library("TypeScript Basics", "TS101");
let book2 = new Library("Java Programming", "JV202");
book1.displayBook();
book2.displayBook();
console.log("Book ID:", book1.bookId);
console.log("Total Books Issued:", Library.totalBooksIssued);
export {};
