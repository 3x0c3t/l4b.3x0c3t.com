<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des commandes SQL par catégorie</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="Sub-header">
            <a href="https://l4b.3x0c3t.com/Formation_JAVA/SQL/01_commandes_sql/index.php" style="text-decoration: none; color: inherit;">header1</a>
        </div>
        <div class="Sub-header">
            header2
        </div>
        <div class="Sub-header">
            header3
        </div>
    </header>

    <main>
        <?php
        require 'vendor/autoload.php'; // Charger la classe Dotenv

        // Charger les informations de connexion à la base de données depuis le fichier .env
        $dotenv = Dotenv\Dotenv::createImmutable('/var/www/html/00_env');
        $dotenv->load();

        // Informations de connexion à la base de données
        $servername = $_ENV['DB_HOST'];
        $username = $_ENV['DB_USERNAME'];
        $password = $_ENV['DB_PASSWORD'];
        $dbname = "sql_commands"; // Nom de la base de données

        // Connexion à la base de données
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Vérifier la connexion
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Requête SQL pour récupérer les commandes avec leurs catégories
        $sql = "SELECT sql_commands.*, categories.nom AS categorie_nom FROM sql_commands JOIN categories ON sql_commands.categorie_id = categories.id ORDER BY categories.id";
        $result = $conn->query($sql);

        // Variable pour stocker le nom de la catégorie précédente
        $previous_category = null;

        // Afficher les commandes SQL par catégorie
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                // Vérifier si la catégorie a changé
                if ($row['categorie_nom'] !== $previous_category) {
                    // Afficher le nom de la nouvelle catégorie
                    echo "<div class='category'>" . $row['categorie_nom'] . "</div>";
                    // Mettre à jour la variable $previous_category
                    $previous_category = $row['categorie_nom'];
                }
                // Afficher les détails de la commande dans un conteneur div parent
                echo "<div class='command-container'>";
                echo "<div class='sub-block1'>" . $row["nom"] . "</div>";
                echo "<div class='sub-block'>Exemple : " . $row["description"] . "</div>";
                echo "<div class='sub-block'>Description : " . $row["description"] . "</div>";
                echo "</div>";
            }
        } else {
            echo "0 résultats";
        }

        // Fermer la connexion à la base de données
        $conn->close();
        ?>
    </main>

    <footer>
        <!-- Footer content here -->
        Footer
    </footer>

    <script src="script.js"></script>
</body>
</html>
