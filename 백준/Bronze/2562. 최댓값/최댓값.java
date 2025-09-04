import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = 9;
        int [] arr = new int[N];
        int max = Integer.MIN_VALUE;
        int idx = 0;                    //최댓값 위치 저장

        for(int i = 0; i < N; i++){
            arr [i] = sc.nextInt();
            if (arr[i] > max) {
                max = arr[i];
                idx = i + 1;
            }
        }

        System.out.println(max);
        System.out.println(idx);
    }
}