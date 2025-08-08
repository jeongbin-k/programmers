import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int hour = sc.nextInt();
        int minute = sc.nextInt();
        int plus = sc.nextInt();
        
        int totalMinute = hour * 60 + minute + plus;
        int totalHour = (totalMinute / 60) % 24;
        int newMinute = totalMinute % 60;

        System.out.println(totalHour + " " + newMinute);

        sc.close();
    }
}