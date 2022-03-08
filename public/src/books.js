function findAuthorById(authors, id) {
  const result = authors.find((author) => author.id === id)
  return result
}

function findBookById(books, id) {
  const result = books.find((book) => book.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  let bookStatus = []
  const available = books.filter((book) => book.borrows[0].returned === true)
  const unavailable = books.filter((book) => book.borrows[0].returned === false)
  bookStatus.push(unavailable)
  bookStatus.push(available)
  return bookStatus
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let match = accounts.find((account) => account.id === borrow.id)
    return {...borrow, ...match}}).slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
