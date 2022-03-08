function getTotalBooksCount(books) {
  let sum = 0
  books.forEach((getTotalBooksCount) => {
   sum ++; 
  });
  return sum
}

function getTotalAccountsCount(accounts) {
  let sum = 0
  accounts.forEach((getTotalAccountsCount) => {
    sum ++;
  });
  return sum
}

function getBooksBorrowedCount(books) {
  const count = books.reduce((sum, book) => { 
    for (let i = 0; i < book.borrows.length; i++) {
       if(book.borrows[i].returned === false){
      sum ++
       }
      }
    return sum
    }, 0)
    return count
}

function getMostCommonGenres(books) {
  let resultArray = []
  books.forEach((book) => {
   let genreExists = resultArray.find((genre) => genre.name === book.genre)
   if (!genreExists) {
     resultArray.push({ name: book.genre, count: 1 });
   }else{ 
     genreExists.count += 1; }
  })
  return resultArray.sort((a,b) => b.count - a.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  let resultArray = books.map((book) => ({ name: book.title, count: book.borrows.length }));
  resultArray.sort((a,b) => b.count - a.count)
return resultArray.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let resultArray = []
  authors.forEach((author) => { 
    let authorResult = { name: `${author.name.first} ${author.name.last}`,
     count:0 }
    books.forEach((book) => {
   if(book.authorId === author.id){
     authorResult.count += book.borrows.length
    } 
  })
    resultArray.push(authorResult)
  })
 return resultArray.sort((a,b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
