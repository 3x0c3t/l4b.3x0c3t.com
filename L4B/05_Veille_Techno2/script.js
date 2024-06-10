window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Attempting initialization', new Date());

    fetchRssFeeds();
});

function fetchRssFeeds() {
    console.log('Fetching RSS feeds...');

    fetch('flux.xml')
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

            const rssFeeds = xmlDoc.querySelectorAll('outline[type="rss"]');

            const rssContainer = document.getElementById('rss-feeds');

            rssFeeds.forEach(feed => {
                const feedTitle = feed.getAttribute('text');
                const feedUrl = feed.getAttribute('xmlUrl');

                // Création d'un titre pour le flux RSS
                const feedTitleElement = document.createElement('h2');
                feedTitleElement.textContent = feedTitle;
                rssContainer.appendChild(feedTitleElement);

                // Récupération des actualités du flux RSS
                fetch(feedUrl)
                    .then(response => response.text())
                    .then(xmlString => {
                        const parser = new DOMParser();
                        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
                        const items = xmlDoc.querySelectorAll('item');

                        // Création d'une liste pour afficher les titres des actualités
                        const newsList = document.createElement('ul');

                        items.forEach(item => {
                            const newsTitle = item.querySelector('title').textContent;
                            const newsLink = item.querySelector('link').textContent;

                            // Création d'un élément de liste pour chaque actualité
                            const newsItem = document.createElement('li');
                            const newsLinkElement = document.createElement('a');
                            newsLinkElement.textContent = newsTitle;
                            newsLinkElement.href = newsLink;
                            newsLinkElement.target = '_blank'; // Ouvre le lien dans un nouvel onglet
                            newsItem.appendChild(newsLinkElement);
                            newsList.appendChild(newsItem);
                        });

                        // Ajout de la liste d'actualités au conteneur RSS
                        rssContainer.appendChild(newsList);
                    })
                    .catch(error => {
                        console.error('Error fetching RSS feeds:', error);
                    });
            });
        })
        .catch(error => {
            console.error('Error fetching RSS feeds:', error);
        });
}
