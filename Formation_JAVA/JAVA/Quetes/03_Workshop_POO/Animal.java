// Animal.java

// Définition de la classe de base Animal
public class Animal {
    // Attributs protégés accessibles par les sous-classes
    protected String name;
    protected int age;

    // Constructeur pour initialiser les attributs
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Méthode pour présenter l'animal
    public void introduce() {
        System.out.println("I am " + name + " and I am " + age + " years old.");
    }

    // Méthode pour vérifier si l'animal est dangereux, par défaut non
    public boolean isDangerous() {
        return false;
    }
}
