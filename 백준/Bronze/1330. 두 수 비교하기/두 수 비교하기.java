import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        long A , B;

        A = sc.nextLong();
        B = sc.nextLong();

        if(A > B) {
            System.out.println(">");
        }else if (A < B){
            System.out.println("<");
        }else if (A == B) {
            System.out.println("==");
        }
    }
}