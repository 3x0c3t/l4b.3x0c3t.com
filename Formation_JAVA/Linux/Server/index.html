<?php
// Récupérer le contenu du fichier .env
$env_file = '/var/www/html/00_env/.env';
$env_contents = file_get_contents($env_file);

// Parse le contenu du fichier .env
$env_variables = explode("\n", $env_contents);
$env_data = [];
foreach ($env_variables as $variable) {
    $line = explode("=", $variable);
    $env_data[$line[0]] = $line[1];
}

// Informations de connexion à la base de données
$servername = $env_data['DB_HOST']; // Adresse du serveur MySQL
$username = $env_data['DB_USERNAME']; // Nom d'utilisateur MySQL
$password = $env_data['DB_PASSWORD']; // Mot de passe MySQL
$database = $env_data['DB_DATABASE']; // Nom de la base de données MySQL

// Connexion à la base de données MySQL
$conn = new mysqli($servername, $username, $password, $database);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connexion échouée: " . $conn->connect_error);
}

echo "Connexion réussie";

// Fermer la connexion
$conn->close();
?>
