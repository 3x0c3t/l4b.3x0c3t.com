// Main.java //

package workshop;

public class Main {
    public static void main(String[] args) {
        // Création d'un objet lion
        Animal lion = new Animal("Lion", 120, true, 4);

        // Création d'un objet perroquet
        Animal parrot = new Animal("Perroquet", 30, false, 2);

        // Utilisation des méthodes de l'objet lion
        System.out.println(lion.introduce());
        System.out.println("Lion est-il dangereux? " + lion.isDangerous());

        // Utilisation des méthodes de l'objet perroquet
        System.out.println(parrot.introduce());
        System.out.println("Perroquet est-il dangereux? " + parrot.isDangerous());
    }
}
