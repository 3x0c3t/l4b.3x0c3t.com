import os
from imdb import IMDb

# Créer une instance de la classe IMDb
ia = IMDb()

# Fonction pour récupérer les titres des films à partir d'IMDb
def fetch_movie_titles():
    try:
        print("Récupération des titres des films depuis IMDb...")
        # Effectuez une recherche sur IMDb pour récupérer les titres des films
        movies = ia.get_top250_movies()
        movie_titles = [movie.data['title'] for movie in movies]
        print("Récupération des titres des films terminée.")
        return movie_titles
    except Exception as e:
        print("Erreur lors de la récupération des titres des films depuis IMDb :", e)
        return []

# Récupérer les titres des films depuis IMDb
movies = fetch_movie_titles()

# Vérifier si la liste des films est vide
if movies:
    # Spécifier le chemin complet du fichier movies.txt
    file_path = "/var/www/html/3x0c3t_L4b/L4B/04_FILMS/movies.txt"

    # Enregistrer les titres dans le fichier movies.txt (en écrasant les informations existantes)
    with open(file_path, "w") as file:
        for movie in movies:
            file.write(movie + "\n")

    print("Liste exhaustive de films mise à jour dans movies.txt.")
else:
    print("La liste des films est vide. Aucune donnée n'a été écrite dans movies.txt.")
