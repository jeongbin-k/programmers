import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int hour = sc.nextInt();        // 시 입력
        int minute = sc.nextInt();      // 분 입력

        minute -= 45;                   // -45분 빼기

        // 만약 0보다 작아졌다면
        if (minute < 0) {
            minute += 60;   // 시에서 1시간을 빌려옴
            hour--;         // 그래서 시를 1 줄임
            
            // 시가 -1이 되면 23시로 바꾸기
            if (hour < 0) {
                hour = 23;
            }
        }

        System.out.println(hour + " " + minute);

        sc.close();
    }
}