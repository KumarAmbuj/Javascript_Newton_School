function x() {
  for (var i = 1; i <= 10; i++) {
    function fun() {
      setTimeout(() => {
        
      }, i * 1000);
    }
  }
  fun(i);
}
x();
