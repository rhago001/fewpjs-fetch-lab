const baseURL = 'https://anapioficeandfire.com/api/books'

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  // renderBooks()
})

const fetchBooks = () => {

  fetch (baseURL)
  .then(response => response.json())
  .then (data => data.forEach(renderBooks))

}

function renderBooks(books) {
  // debugger
  const main = document.querySelector('main')  
    const h2 = document.createElement('h2')
    
    h2.textContent = books.name
    // console.log(h2)


    main.appendChild(h2)
  
}
