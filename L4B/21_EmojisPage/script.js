document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('emoji-container');
    const searchInput = document.getElementById('search');
    const apiKey = '28913e70ac5373e061aa6e1bcf3ed24878470f3f';  // Votre clé API Emoji API
    const apiUrlEmojis = `https://emoji-api.com/emojis?access_key=${apiKey}`;
    const apiUrlCategories = `https://emoji-api.com/categories?access_key=${apiKey}`;
    let emojis = [];
    let categories = [];

    // Fonction pour afficher les emojis par catégorie
    function displayEmojisByCategory() {
        container.innerHTML = '';  // Réinitialise le conteneur

        categories.forEach(category => {
            const categorySection = document.createElement('section');
            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = category.slug.replace('-', ' ').toUpperCase();
            categorySection.appendChild(categoryTitle);

            const categoryEmojis = emojis.filter(emoji => emoji.group === category.slug);
            const categoryEmojiContainer = document.createElement('div');
            categoryEmojiContainer.className = 'category-emojis';

            categoryEmojis.forEach(emoji => {
                const emojiElement = document.createElement('div');
                emojiElement.className = 'emoji-item';

                const emojiChar = document.createElement('span');
                emojiChar.className = 'emoji';
                emojiChar.textContent = emoji.character;

                const emojiKeyword = document.createElement('div');
                emojiKeyword.className = 'emoji-keyword';
                emojiKeyword.textContent = emoji.unicodeName || 'No description';

                emojiElement.appendChild(emojiChar);
                emojiElement.appendChild(emojiKeyword);

                categoryEmojiContainer.appendChild(emojiElement);
            });

            categorySection.appendChild(categoryEmojiContainer);
            container.appendChild(categorySection);
        });
    }

    // Fonction pour afficher les emojis filtrés
    function filterAndDisplayEmojis() {
        const query = searchInput.value.toLowerCase();
        const filteredEmojis = emojis.filter(emoji =>
            emoji.unicodeName.toLowerCase().includes(query)
        );
        displayEmojisByCategory(filteredEmojis);
    }

    // Récupération des catégories et des emojis
    Promise.all([
        fetch(apiUrlCategories).then(response => response.json()),
        fetch(apiUrlEmojis).then(response => response.json())
    ])
    .then(([catData, emoData]) => {
        categories = catData;
        emojis = emoData;
        displayEmojisByCategory();  // Affiche les emojis par catégorie au départ
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });

    // Écouteur pour filtrer les emojis en fonction de la saisie
    searchInput.addEventListener('input', filterAndDisplayEmojis);
});
