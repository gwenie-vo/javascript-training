//25.Tìm ra những ai làm ở Asnet
var engineerAsNet = engineers.filter(function(engineer) {
  return engineer.company.toLowerCase() === 'asnet';
})
var engineerName = engineerAsNet.map(function(engineer) {
  return engineer.name;
})
console.log('Bai 25: Array of AsNet Engineer', engineerName);

//26.Kiểm tra xem có người lao động nào dưới 18 tuổi hay không
var anyUnder18yearsOld = engineers.some(function(engineer) {
  return engineer.age < 18;
})
console.log('Bai 26: Any engineer is under 18 years old: ', anyUnder18yearsOld);

//27.Tính tổng tiền lương phải trả cho các nhân viên ở tất cả công ty
var salaryOfAllEngineers = engineers.reduce(function(prevVal, engineer) {
  return prevVal + parseInt(engineer.salary.replace('$', ''));
}, 0);
console.log('Bai 27: Sumary of engineers\' salary is: $' + salaryOfAllEngineers);

//28. Tính tổng tiền lương phải trả cho các nhân viên ở FPT
var sumFPTsalary = engineers.reduce(function(prevVal, engineer) {
  if (engineer.company.toLowerCase() === 'fpt' && engineer.salary) {
    return prevVal + parseInt(engineer.salary.replace('$', ''));
  } else {
    return prevVal;
  }
}, 0)
console.log('Bai 28: Sumary of FPT engineers', sumFPTsalary);

//29. Tạo ra 1 data mới mà trong đó mức lương của mỗi nhân viên bị trừ đi 100$
var newSalaryArr = engineers.map(function(engineer) {
  return parseInt(engineer.salary.replace('$', '')) - 100;
});
console.log('Bai 29: New array with salary - $100 ', newSalaryArr);

//Kiểm tra xem có ai trên 15 năm kinh nghiệm hay ko
var result = engineers.some(function(engineer) {
  return engineer.experienceYear > 15;
})
console.log('Bai 30: Anyone has more than 15 years experience is ' + result);

// //31.Tạo ra 1 data mới mà trong đó ai ở FPT thì tăng 50$ cho mỗi người
// var newEngineerArr = engineers.map(function(engineer) {
//   if (engineer.company.toLowerCase() === 'fpt') {
//     parseInt(engineer.salary.replace('$', '')) + 50;
//   }
// })
// console.log('Bai 31: Encrease salary for FPT engineers', newEngineerArr);

//32.Kiểm tra xem tên của tất cả các employee có phải đều trên 7 ký tự hết hay ko
var checkCharacterNumber = engineers.every(function(engineer) {
  return engineer.name.length > 7;
})

console.log('Bai 32: Check if all engineer name has longer than 7 characters is ' + checkCharacterNumber);

// 33. Tìm ra những ai lớn hơn 25 tuổi
var engineersBiggerThan25 = engineers.filter(function(engineer) {
  return engineer.age > 25;
})
console.log('Bai 33: Log all engineers is older than 25 years', engineersBiggerThan25);