import java.util.Scanner;
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    // Scanner myName = new Scanner(System.in);
    // System.out.println("Masukan namamu:");
    // String name = myName.nextLine();
    // System.out.println("Namaku yaitu " + name);

    int arr[] = new int[5];
    arr[0] = 98;
    arr[1] = 65;
    arr[2] = 54;
    arr[3] = 67;
    arr[4] = 76;
    System.out.println(arr[1]);
    System.out.println(arr.length);
    Arrays.sort(arr);
  }
}
