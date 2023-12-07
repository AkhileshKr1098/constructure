
base_url = 'https://admin.constipationmedicine.in/api/'

// this.get_books()

// function get_books() {
//     fetch(`${base_url}ConWeb`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             this.books_data =  data
//             // return data

//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//         });
// }

// for careear 

// for careear 



fetch(`${base_url}ConWeb`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

function displayData(data) {
    const dataContainer = document.getElementById('books');

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${item.BookTitle}</h3>
            <p>${item.BookWriter}</p>
            <p>Key: ${item.MRP}</p>
          `;

        dataContainer.appendChild(card);
    });
}


