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
