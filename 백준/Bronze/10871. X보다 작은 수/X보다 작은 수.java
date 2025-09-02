import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int X = sc.nextInt();
        int [] arr = new int[N];

        for(int i = 0; i < N; i++){
            arr[i] = sc.nextInt();          // 배열 입력
        }

        for(int j = 0; j < N; j++){         // 배열 돌면서 확인
            if (arr[j] < X) {               // X보다 작은값만 확인
                System.out.print(arr[j] + " ");
            }
        }
    }
}