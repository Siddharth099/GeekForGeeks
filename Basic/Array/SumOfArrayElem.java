/*package whatever //do not write package name here */

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		//code
	Scanner sc = new Scanner(System.in);
	int t = sc.nextInt();
	while(t>0){
	int n = sc.nextInt();
	int array[] = new int[n];
	for(int i = 0; i < n; i++) {
        array[i] = sc.nextInt(); 
    }
    int sum = 0;
    for(int i = 0; i < array.length; i++) {
        sum += array[i];
    }
    System.out.println(sum);
    t--;
	}
 }
}
