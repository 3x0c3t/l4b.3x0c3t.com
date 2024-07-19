// Bird.java

// Définition de la classe abstraite Bird qui hérite de Animal
public abstract class Bird extends Animal {
    // Constructeur pour initialiser les attributs
    public Bird(String name, int age) {
        super(name, age);
    }

    // Méthode abstraite que toutes les sous-classes doivent implémenter
    public abstract void fly();
}
