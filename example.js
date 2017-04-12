//1.  Hoán vị 2 số (đổi giá trị cho nhau) rồi in a và b ra console.log
  // var a = 5;   
  // var b = 10;

var a = 5;
var b = 10;

var c = a;
a = b;
b = c;

console.log("a", a);
console.log("b", b);

//Tìm số lớn nhất, nhỏ nhất trong 3 số sau và in kết quả ra console.log
// var a = 6;
// var b = 2;
// var c = 9;
var a = 6, b = 2, c = 9;
if((a < b) && (a < c)) {
  console("a = " + a + " is the smallest.");
} else if ((b < a) && (b < c)) {
  console.log("b = " + b + " is the smallest");
} else {
  console.log("c = " + c + "is the smallest");
}



