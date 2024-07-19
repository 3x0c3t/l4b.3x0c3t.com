// Main.java

// Définition de la classe Main pour tester les autres classes
public class Main {
    public static void main(String[] args) {
        // Création d'une instance de Lion
        Lion lion = new Lion("Simba", 5, true);
        // Création d'une instance de Parrot
        Parrot parrot = new Parrot("Polly", 2, true);

        // Appel des méthodes sur l'instance de Lion
        lion.introduce();
        System.out.println("Is the lion dangerous? " + lion.isDangerous());
        lion.hunt();

        // Appel des méthodes sur l'instance de Parrot
        parrot.introduce();
        System.out.println("Is the parrot dangerous? " + parrot.isDangerous());
        parrot.fly();
    }
}
