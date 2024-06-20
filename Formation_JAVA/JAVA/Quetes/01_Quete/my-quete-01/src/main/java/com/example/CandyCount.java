// /var/www/html/3x0c3t_L4b/Formation_JAVA/JAVA/Quetes/01_Quete/my-quete-01/src/main/java/com/example/CandyCount/CandyCount.java //

package com.example;

public class CandyCount {

    public static void main(String[] args) {
        int candies = calculateCandies(12.4, 1.2);
        System.out.println(candies);
    }

    public static int calculateCandies(double money, double price) {
        int candies = 0;

        if (money > 0 && price > 0) {
            while (money - price >= 0) {
                candies++;
                money -= price;
            }
        }

        return candies;
    }
}
