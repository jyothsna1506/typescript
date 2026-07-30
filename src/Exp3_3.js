// Program to demonstrate Readonly and Static Properties
class Library {
    // Static Readonly Property
    static libraryName = "SVECW Central Library";
    // Static Property
    static totalBooksIssued = 0;
    // Readonly Property
    bookId;
    // Normal Property
    bookName;
    // Constructor
    constructor(bookName, bookId) {
        this.bookName = bookName;
        this.bookId = bookId;
        // Increment Static Property
        Library.totalBooksIssued++;
    }
    // Static Method
    static showLibraryInfo() {
        console.log("Library Name:", Library.libraryName);
    }
    // Instance Method
    displayBook() {
        console.log("Book Name :", this.bookName);
        console.log("Book ID   :", this.bookId);
    }
}
//Execution
// Access Static Members
Library.showLibraryInfo();
// Create Objects
let book1 = new Library("TypeScript Basics", "TS101");
let book2 = new Library("Java Programming", "JV202");
// Display Book Details
book1.displayBook();
book2.displayBook();
// Testing Readonly
console.log("Book ID:", book1.bookId);
// book1.bookId = "TS999";
// Error: Cannot assign to 'bookId' because it is a read-only property.
// Testing Static Property
console.log("Total Books Issued:", Library.totalBooksIssued);
export {};
//# sourceMappingURL=Exp3_3.js.map