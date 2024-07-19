// Parrot.java

// Définition de la classe Parrot qui hérite de Bird
public class Parrot extends Bird {
    // Attribut spécifique à la classe Parrot
    private boolean canTalk;

    // Constructeur pour initialiser les attributs
    public Parrot(String name, int age, boolean canTalk) {
        super(name, age);
        this.canTalk = canTalk;
    }

    // Redéfinition de la méthode introduce pour inclure l'attribut spécifique
    @Override
    public void introduce() {
        System.out.println("I am " + name + " and I am " + age + " years old.");
        System.out.println("I am a parrot and I can " + (canTalk ? "talk." : "not talk."));
    }

    // Implémentation de la méthode fly de la classe abstraite Bird
    @Override
    public void fly() {
        System.out.println(name + " is flying.");
    }

    // Redéfinition de la méthode isDangerous pour les perroquets
    @Override
    public boolean isDangerous() {
        return false;
    }
}
