from imdb import IMDb

# Créer une instance de la classe IMDb
ia = IMDb()

# Fonction pour récupérer les notations d'un film
def get_movie_ratings(movie_title):
    try:
        # Rechercher le film par titre
        search_results = ia.search_movie(movie_title)
        
        # Prendre le premier résultat de la recherche (peut-être affiner si nécessaire)
        movie = search_results[0]

        # Charger les informations détaillées du film
        ia.update(movie)

        # Récupérer les notations du film
        ratings = movie.get('rating')
        return ratings
    except Exception as e:
        print("Erreur lors de la récupération des notations du film :", e)
        return None

# Exemple d'utilisation de la fonction pour récupérer les notations d'un film spécifique
movie_title = "The Dark Knight"
ratings = get_movie_ratings(movie_title)
if ratings:
    print("Notations du film", movie_title, ":", ratings)
else:
    print("Les notations du film", movie_title, "n'ont pas pu être récupérées.")
from imdb import IMDb

# Créer une instance de la classe IMDb
ia = IMDb()

# Fonction pour récupérer les notations d'un film
def get_movie_ratings(movie_title):
    try:
        # Rechercher le film par titre
        search_results = ia.search_movie(movie_title)
        
        # Prendre le premier résultat de la recherche (peut-être affiner si nécessaire)
        movie = search_results[0]

        # Charger les informations détaillées du film
        ia.update(movie)

        # Récupérer les notations du film
        ratings = movie.get('rating')
        return ratings
    except Exception as e:
        print("Erreur lors de la récupération des notations du film :", e)
        return None

# Liste de titres de films
movie_titles = [
    "The Dark Knight",
    "Inception",
    "Interstellar",
    "The Shawshank Redemption",
    "Pulp Fiction"
]

# Parcourir la liste de titres de films et afficher leurs notations
for title in movie_titles:
    ratings = get_movie_ratings(title)
    if ratings:
        print("Notations du film", title, ":", ratings)
    else:
        print("Les notations du film", title, "n'ont pas pu être récupérées.")
