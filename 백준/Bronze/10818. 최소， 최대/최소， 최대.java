import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int [] arr = new int[N];

        int max = Integer.MIN_VALUE;  // max는 가장 작은 값으로 초기화 → 큰 값 들어오면 갱신
        int min = Integer.MAX_VALUE;  // min은 가장 큰 값으로 초기화 → 작은 값 들어오면 갱신
        
        for(int i = 0; i < N; i ++) {
            arr[i] = sc.nextInt();

            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        System.out.print(min + " " + max);
    }
}