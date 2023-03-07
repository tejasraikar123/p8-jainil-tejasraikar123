import java.util.Arrays;

public class Sort012 {
    public static void swap(int a[], int i, int j) {
        int t = a[i];
        a[i] = a[j];
        a[j] = t;
    }

    public static void main(String[] args) {
        int a[] = {0, 1, 1, 0, 2, 2};
        int n = a.length;
        int low = 0;
        int mid = 0;
        int high = n-1;
    
        while(mid <= high) {
            if (a[mid] == 0) {
                swap(a, low, mid);
                low++;
                mid++;
            } else if (a[mid] == 1) {
                mid++;
            } else {
                swap(a, mid, high);
                high--;
            }
        }

        System.out.println("Sorted array: " + Arrays.toString(a));
    }
}
