// Animal.java //

package workshop;

public class Animal {
    private String name;
    private int size;
    private boolean isCarnivorous;
    private int numberOfLegs;

    public Animal(String name, int size, boolean isCarnivorous, int numberOfLegs) {
        this.name = name;
        this.size = size;
        this.isCarnivorous = isCarnivorous;
        this.numberOfLegs = numberOfLegs;
    }

    public Animal(String name, int size, int numberOfLegs) {
        this(name, size, false, numberOfLegs);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public boolean isCarnivorous() {
        return isCarnivorous;
    }

    public void setCarnivorous(boolean carnivorous) {
        isCarnivorous = carnivorous;
    }

    public int getNumberOfLegs() {
        return numberOfLegs;
    }

    public void setNumberOfLegs(int numberOfLegs) {
        this.numberOfLegs = numberOfLegs;
    }

    public String introduce() {
        return "Hey, en tant que " + name + ", j’ai " + numberOfLegs + " pattes et je " +
                (isCarnivorous ? "suis" : "ne suis pas") + " carnivore.";
    }

    public boolean isDangerous() {
        return size > 50 && isCarnivorous;
    }
}

