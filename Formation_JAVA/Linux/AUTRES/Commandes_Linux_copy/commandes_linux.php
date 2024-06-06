<?php
// Fichier : commandes_linux.php

// Inclure l'autoloader de Composer
require __DIR__ . '/vendor/autoload.php';

// Charger les variables d'environnement
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Récupérer les informations de connexion à partir des variables d'environnement
$servername = $_ENV['DB_SERVER'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$database = $_ENV['DB_DATABASE'];

// Créer la connexion à la base de données
$conn = new mysqli($servername, $username, $password, $database);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Requête SQL pour récupérer les commandes
$sql = "SELECT lc.id, lc.nom, c.nom as categorie, lc.description, lc.exemple
        FROM linux_commands lc
        JOIN categories c ON lc.categorie_id = c.id";
$result = $conn->query($sql);

// Vérifier si la requête a réussi
if (!$result) {
    die("Query failed: " . $conn->error);
}

// Créer un tableau PHP avec les données
$commands = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $commands[] = $row;
    }
}

// Fermer la connexion
$conn->close();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des Commandes Linux</title>
    <link rel="stylesheet" href="commandes_linux.css">
</head>
<body>
<header>
    <div class="container">
        <div class="header-title">
            <h1>Liste des Commandes Linux</h1>
        </div>
        <div class="block">
            <nav>
                <ul>
                    <li><a href="#">Links</a></li>
                    <li><a href="#">À propos</a></li>
                    <li><a href="#">|</a></li>
                </ul>
            </nav>
        </div>
        <div class="block">
            <div class="search">
                <input type="text" placeholder="Rechercher...">
                <button>Rechercher</button>
            </div>
        </div>
    </div>
</header>

<main>
    <table id="commandsTable">
        <thead>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Catégorie</th>
            <th>Description</th>
            <th>Exemple</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach($commands as $command): ?>
            <tr>
                <td><?php echo $command['id']; ?></td>
                <td><?php echo $command['nom']; ?></td>
                <td><?php echo $command['categorie']; ?></td>
                <td><?php echo $command['description']; ?></td>
                <td><?php echo $command['exemple']; ?></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
</main>

<footer>
    <p>Mon pied de page</p>
</footer>

<script src="commandes_linux.js" defer></script>
</body>
</html>
