import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int A = sc.nextInt();
        int B = sc.nextInt();
        
        int once = B % 10;
        int tens = (B / 10) % 10;
        int hundres = B / 100;
        
        System.out.println(A * once);
        System.out.println(A * tens);
        System.out.println(A * hundres);
        System.out.println(A * B);
    }
}