for (int x = 1; x <= N; x++) {
  int maxg = 0;
  for (int i = 0; i <= N - x; i++) {
      int subg = Arr[i];
      for (int j = i + 1; j < i + x; j++) {
          subg = gcd(subg, Arr[j]);
      }
      maxg = Math.max(maxg, subg);
  }
  System.out.print(maxGCD + " ");
}