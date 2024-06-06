$(document).ready(function(){
    // Charger les statistiques depuis le fichier JSON
    $.getJSON("stats.json", function(data){
        // Afficher les statistiques dans la section dédiée
        var statsSection = $("#stats-section");

        // Affichage de l'heure d'exécution du script
        statsSection.append("<h2>Heure d'exécution du script :</h2>");
        statsSection.append("<p>" + data.execution_time + "</p>");

        // Affichage du nombre de clients connectés
        statsSection.append("<h2>Nombre de clients connectés :</h2>");
        if (data.connected_clients.length > 0) {
            var connectedClientsHtml = "<ul>";
            data.connected_clients.forEach(function(client) {
                connectedClientsHtml += "<li>" + client.ip + " (Nombre de connexions: " + client.count + ", Temps de connexion: " + client.time + ")</li>";
            });
            connectedClientsHtml += "</ul>";
            statsSection.append(connectedClientsHtml);
        } else {
            statsSection.append("<p>Aucun client connecté actuellement.</p>");
        }

        // Affichage de la charge du serveur - Mémoire
        statsSection.append("<h2>Charge du serveur - Mémoire :</h2>");
        var memoryInfoHtml = "<dl>";
        memoryInfoHtml += "<dt>Total:</dt><dd>" + data.memory_info.total + "</dd>";
        memoryInfoHtml += "<dt>Utilisée:</dt><dd>" + data.memory_info.used + "</dd>";
        memoryInfoHtml += "<dt>Libre:</dt><dd>" + data.memory_info.free + "</dd>";
        memoryInfoHtml += "</dl>";
        statsSection.append(memoryInfoHtml);

        // Affichage de l'espace disque
        statsSection.append("<h2>Espace disque :</h2>");
        if (data.disk_space.length > 0) {
            var diskSpaceHtml = "<ul>";
            data.disk_space.forEach(function(disk) {
                diskSpaceHtml += "<li>" + disk.filesystem + " - Taille: " + disk.size + ", Utilisée: " + disk.used + ", Disponible: " + disk.avail + ", Utilisation: " + disk.use_percent + "</li>";
            });
            diskSpaceHtml += "</ul>";
            statsSection.append(diskSpaceHtml);
        }
    }).fail(function() {
        // Gérer les erreurs de chargement du fichier JSON
        $("#stats-section").append("<p>Erreur de chargement des statistiques.</p>");
    });
});
