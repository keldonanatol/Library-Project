function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
return accounts.sort((a, b) => 
a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1)
}

function getTotalNumberOfBorrows(account, books) {
  let sum = 0
  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if(borrow.id === account.id){
        sum ++
      }
    })
  })
  return sum

}



function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some((acc) => 
  acc.id === account.id && acc.returned === false))
  .map(book => {  
  let result = authors.find((author) => author.id === book.authorId) 
  book.author = result 
  return book      
});
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
