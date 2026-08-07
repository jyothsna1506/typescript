class Library {
    public static readonly libraryName: string = "SVECW Central Library";
    public static totalBooksIssued: number = 0;
    public readonly bookId: string;
    public bookName: string;
    constructor(bookName: string, bookId: string) {
        this.bookName = bookName;
        this.bookId = bookId;
        Library.totalBooksIssued++;
    }
    public static showLibraryInfo(): void {
        console.log("Library Name:", Library.libraryName);
    }
    public displayBook(): void {
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