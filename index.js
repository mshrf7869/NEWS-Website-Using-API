document.addEventListener('DOMContentLoaded', () => { // add event listner to laod full html document
    const apiKey = 'f39d44e2a1524deaa72d17d902de8ce5';
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
    
    const newsContainer = document.getElementById('news-container');

    fetch(url)
        .then(response => response.json())//this method is used to handle the result  of fetch promise and the result of response.json() is passed to next .then() block
        .then(data => {  
            const articles = data.articles; //it will extract the array of news article from the data object
            articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('news-article');
                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description ? article.description : 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleElement);
            });
        })
        .catch(error => { //it will handle any error that occur during the fetch
            console.error('Error fetching news:', error);
        });
});
