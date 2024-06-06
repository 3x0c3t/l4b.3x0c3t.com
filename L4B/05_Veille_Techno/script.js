// Liste des dernières versions des langages de programmation et leurs liens
const latestVersions = {
    'HTML': { version: 'HTML5', link: 'https://fr.wikipedia.org/wiki/Hypertext_Markup_Language' },
    'CSS': { version: 'CSS3', link: 'https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade' },
    'JavaScript': { version: 'ECMAScript 2021', link: 'https://fr.wikipedia.org/wiki/JavaScript' },
    'PHP': { version: '8.0', link: 'https://fr.wikipedia.org/wiki/PHP' },
    'Python': { version: '3.10', link: 'https://fr.wikipedia.org/wiki/Python' },
    'Java': { version: '17', link: 'https://fr.wikipedia.org/wiki/Java_(langage)' },
    'Ruby': { version: '3.0', link: 'https://fr.wikipedia.org/wiki/Ruby' },
    'C#': { version: '9.0', link: 'https://fr.wikipedia.org/wiki/C_sharp' },
    'Angular': { version: '13', link: 'https://fr.wikipedia.org/wiki/Angular' },
    'React': { version: '18', link: 'https://fr.wikipedia.org/wiki/React' },
    'Symfony': { version: '6.0', link: 'https://fr.wikipedia.org/wiki/Symfony' },
    'TypeScript': { version: '4.3', link: 'https://fr.wikipedia.org/wiki/TypeScript' },
    'C': { version: 'ISO/IEC 9899:202x', link: 'https://fr.wikipedia.org/wiki/C_(langage)' },
    'C++': { version: 'ISO/IEC 14882:2020', link: 'https://fr.wikipedia.org/wiki/C%2B%2B' },
    'Swift': { version: '5.5', link: 'https://fr.wikipedia.org/wiki/Swift_(langage)' },
    'Go': { version: '1.16', link: 'https://fr.wikipedia.org/wiki/Go_(langage)' },
    'Kotlin': { version: '1.5.30', link: 'https://fr.wikipedia.org/wiki/Kotlin' },
    'Rust': { version: '1.54', link: 'https://fr.wikipedia.org/wiki/Rust_(langage)' }
    // Ajoutez d'autres langages ou frameworks avec leurs versions et liens correspondants
};

// Fonction pour afficher les dernières versions des langages de programmation
function displayLatestVersions() {
    const latestVersionsList = document.getElementById('latest-versions-list');

    for (const [language, info] of Object.entries(latestVersions)) {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        const link = document.createElement('a');
        link.href = info.link;
        link.textContent = `${language}: ${info.version}`;
        listItem.appendChild(link);
        latestVersionsList.appendChild(listItem);
    }
}

// Appeler la fonction pour afficher les dernières versions lors du chargement de la page
displayLatestVersions();
