import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int [] arr = new int[N];

        // 배열에 숫자 입력
        for (int i = 0; i < N; i++){
            arr[i] = sc.nextInt();
        }

        int V = sc.nextInt();
        int count = 0;

        for(int i = 0; i < N; i++){
            if (arr[i] == V) {
                count++;
            }
        }

        System.out.println(count);
    }
}