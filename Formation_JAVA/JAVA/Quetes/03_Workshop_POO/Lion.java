// Lion.java

// Définition de la classe Lion qui hérite de Animal et implémente Carnivorous
public class Lion extends Animal implements Carnivorous {
    // Attribut spécifique à la classe Lion
    private boolean isAlpha;

    // Constructeur pour initialiser les attributs
    public Lion(String name, int age, boolean isAlpha) {
        super(name, age);
        this.isAlpha = isAlpha;
    }

    // Redéfinition de la méthode introduce pour inclure l'attribut spécifique
    @Override
    public void introduce() {
        super.introduce(); // Appel de la méthode de la classe parente
        System.out.println("I am a lion and I am " + (isAlpha ? "the alpha of the pride." : "not the alpha of the pride."));
    }

    // Implémentation de la méthode hunt de l'interface Carnivorous
    @Override
    public void hunt() {
        System.out.println(name + " is hunting.");
    }

    // Redéfinition de la méthode isDangerous pour les lions
    @Override
    public boolean isDangerous() {
        return true;
    }
}
