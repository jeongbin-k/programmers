import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int diceA = sc.nextInt();
        int diceB = sc.nextInt();
        int diceC = sc.nextInt();
        int result;

        if (diceA == diceB && diceB == diceC) {
            result = 10000 + (diceA * 1000);
        }else if (diceA == diceB || diceA == diceC) {
            result = 1000 + (diceA * 100);
        }else if (diceB == diceC) {
            result = 1000 + (diceB * 100);
        }else {
            int max = Math.max(diceA, Math.max(diceB, diceC));
            result = max * 100;
        }

        System.out.println(result);

        sc.close();
    }
}