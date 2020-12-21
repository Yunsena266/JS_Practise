/*
Zero is even. One is not even. Every number N has the same parity as N-2. Write a recursive function isEven according to these rules. It should accept a number and return a bool value.

*/


function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
};