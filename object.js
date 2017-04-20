'use strict'

// tim nhung nguoi lam AsNet
var asNetEmployees = [];
for (var i = 0, size = engineers.length; i < size; i++) {
  if(engineers[i].company === 'AsNet') {
    asNetEmployees.push(engineers[i].name);
  }
}
console.log('Bai 1: ' + asNetEmployees + ' is AsNet employees')


//Tìm những người ko làm ở FPT
var notFptEmployees = [];
for (var i = 0, size = engineers.length; i < size; i++) {
  if (engineers[i].company !== 'FPT') {
    notFptEmployees.push(engineers[i].name);
  }
}

console.log("Bai 2: " + notFptEmployees + ' is not FPT employees')

// Tìm những người lớn hơn 25 tuổi
var employeeGreaterThan25 = [];
for (var i = 0, size = engineers.length; i< size; i++) {
  if (engineers[i].age > 25) {
    employeeGreaterThan25.push(engineers[i].name);
  }
}

console.log('Bai 3: ' + employeeGreaterThan25 + ' is greater than 25 years old')

//Tìm những người thích màu 'pink'
var peopleLovePink = [];
for (var i = 0, size = engineers.length; i < size; i++) {
  for (var j = 0, arrLength = engineers[i].favoriteColors.length; j < arrLength; j++) {
    if (engineers[i].favoriteColors[j] === 'pink') {
      peopleLovePink.push(engineers[i].name);
      break;
    }
  }
}

console.log('Bai 4: ' + peopleLovePink + ' love pink');

////Tìm những người là nam và thích màu 'pink'
var manLovePink = [];
for (var i = 0, size = engineers.length; i < size; i++) {
  var engineer = engineers[i];
  if (engineer.gender === 'Male') {
    for (var j = 0, lgt = engineer.favoriteColors.length; j < lgt; j++) {
      if (engineer.favoriteColors[j] === 'pink') {
        manLovePink.push(engineer.name);
        break;
      }
    }
  }
}
console.log('Bai 6: ' + manLovePink.join(', ') + checkPluralNoun(manLovePink) + ' mans and they ' + (manLovePink.length > 1 ? ' love ' : ' loves ') + ' pink')

//Tìm xem có ai 25 tuổi không
var engineer25YearsOld = [];
for (var i = 0, size = engineers.length; i < size; i++) {
  if (engineers[i].age === 25) {
    engineer25YearsOld.push(engineers[i].name);
  }
}
console.log('Bai 7: ' + engineer25YearsOld.join(', ') + checkPluralNoun(engineer25YearsOld) + ' 25 years old');

//Tìm xem có ai làm ở Axon không
var axonEngineers = [];
for (var i = engineers.length; i > 0; i--) {
  if (engineers[i-1].company.toLowerCase() === 'axon') {
    axonEngineers.push(engineers[i-1].name);
  }
}checkPluralNoun
console.log('Bai 8:  ' + axonEngineers + checkPluralNoun(axonEngineers) + ' working at Axon company');

//function check plural noun
function checkPluralNoun(engineers) {
  return engineers.length > 1 ? ' are ' : ' is ';
}

//Tìm xem có ai trên 5 năm kinh nghiệm không
var fiveYearsExperienceEngineers = [];
for (var i = engineers.length; i > 0; i--) {
  if (engineers[i - 1].experienceYear > 5) {
    fiveYearsExperienceEngineers.push(engineers[i - 1 ].name);
  }
}

console.log('Bai 9: ' + fiveYearsExperienceEngineers + (fiveYearsExperienceEngineers.length > 1 ? ' have ' : ' has ') + '5 years experiences');

//Tìm những người thích màu 'pink' nhưng ko thích màu 'blue'
var engineerLovePinkNotBlue = [];
for (var i = engineers.length; i > 0; i--) {
  var engineer = engineers[i - 1];
  if (engineer.favoriteColors.indexOf('pink') > -1 && engineer.favoriteColors.indexOf('blue') === -1) {
    engineerLovePinkNotBlue.push(engineer.name);
  }
}
console.log('Bai 10: ' + engineerLovePinkNotBlue.join(', ')  + ' love pink but blue');

//Tìm những người là nữ và lớn hơn hoặc bằng 25 tuổi nhưng ko làm ở Asnet
var femaleEngineerAsNet = [];
for (var i = engineers.length; i > 0; i--) {
  var engineer = engineers[i - 1];
  if (engineer.gender.toLowerCase() === 'female' &&
      engineer.age >= 25 &&
      engineer.company.toLowerCase() === 'asnet') {
    femaleEngineerAsNet.push(engineer.name);
  }
}
console.log('Bai 11: ' + femaleEngineerAsNet.join(', ') + checkPluralNoun(femaleEngineerAsNet) + ' female, greater than or equal 25 years old, working at AsNet');

//Tìm những người là nam, ko làm ở Asnet và thích nhiều hơn 3 màu
var maleEngineerAsNet = [];
for (var i = engineers.length; i > 0; i--) {
  var engineer = engineers[i - 1];
  if ((engineer.gender === 'male')
    && (engineer.company !== 'AsNet')
    && (engineer.favoriteColors.length > 3)) {
      maleEngineerAsNet.push(engineer.name);
  }
}
console.log('Bai 12: ' + (maleEngineerAsNet.length > 0 ? maleEngineerAsNet : ' There\'s no ') + 'male, not AsNet employee, and love more than 3 colors');

//Tìm xem ai thích nhiều màu nhất
// Huong dan bai tim so lon nhat
// 1.Chon object dau tien trong array de so voi cac item con lai
// 2.Lap tu phan tu thu nhi trong mang
// 3.Kiem tra 
var max = engineers[0];
for (var i = 1, size = engineers.length; i < size; i++) {
  var engineer = engineers[i];
  var colorQuantity = engineer.favoriteColors.length;
  if (colorQuantity > max.favoriteColors.length) {
    max = engineer;
  }
}
console.log('Bai 13: ' + max.name + ' loves colors the most');

//In ra màu thứ 2 mà mỗi người thích là màu gì 
var secondColorOfEngineer = '';
for (var i = engineers.length; i > 0; i--) {
  var engineer = engineers[i - 1];
    secondColorOfEngineer += engineer.name + ' is '+  engineer.favoriteColors[1] + '\n';
}

console.log('Bai 14: Second color of \n' + secondColorOfEngineer);

//Thêm property 'salary' cho mỗi nhân viên trong array engineers:
// Nếu ai làm ở Asnet thì lương là '1000$'
// Nếu ai làm ở FPT thì lương là '500$'
// Nếu ai làm ở Axon thì lương là '700$'
// Các công ty còn lại thì lương là '300$'
var engineerSalary = '';
for (var i = engineers.length; i > 0; i--) {
  var engineer = engineers[i - 1];
  switch (engineer.company) {
    case 'AsNet':
      engineer.salary = '$1000';
      break;
    case 'FPT':
      engineer.salary = '$500';
      break;
    case 'Axon':
      engineer.salary = '$700';
      break;
    default:
      engineer.salary = '$300';
  }

  engineerSalary += engineer.name + ' earns ' + engineer.salary + ' a month \n';
}
console.log('Bai 15: \n' + engineerSalary);

//Dựa vào số năm kinh nghiệm hãy tính tiền thưởng tết cho từng người với công thức sau: số năm kinh nghiệm * 10% lương
var engineerWithBonus = '';
for (var i = engineers.length; i > 0; i--) {
  var engineer = engineers[i - 1];
  var bonus = engineer.experienceYear * (engineer.salary.replace('$', '') * 10) / 100;
  engineerWithBonus += engineer.name + ' has $' + bonus + ' bonus \n';
}
console.log('Bai 16: ' + engineerWithBonus);

//Sắp xếp mọi người theo tuổi tăng dần và in ra

//Tìm những ai có address và in ra address của họ
var engineerAddress = '';
for (var i = engineers.length; i > 0; i--) {
  var engineer = engineers[i - 1];
  if (engineer.address) {
    engineerAddress += engineer.name + '\'s address is ' +  engineer.address + '\n';
  }
}
console.log('Bai 18: \n' + engineerAddress);

//Hãy cập nhật lại data cho đúng trong các trường hợp sau: 
//'An Nguyen' vừa chuyển từ 'FPT' sang 'Axon'
//'Minh Nguyen' vừa thích thêm màu 'gray' và ko thích màu 'black' nữa
//'Huynh Vo' vừa phẫu thuật chuyển giới, hãy cập nhật lại gender cho cô ấy ^ ^
//'Phuong Bui' bị ghi sai tuổi, hãy cập nhật lại cho đúng, đúng là 30

var engineerUpdated = [];
for (var i = engineers.length; i > 0; i--) {
  var engineer = engineers[i - 1];
  switch(engineer.name) {
    case 'An Nguyen':
      engineer.company = 'Axon';
      break;
    case 'Minh Nguyen':
      var colorIdx = engineer.favoriteColors.indexOf('black');
      engineer.favoriteColors.splice(colorIdx, 1, 'gray');
      break;
    case 'Huynh Vo':
      engineer.gender = 'Male';
      break;
    case 'Phuong Bui':
      engineer.age = 30;
      break;
  }
  engineerUpdated.push(engineer.name);
}
console.log('Bai 19: Successfully!' );


// Thêm 'Ni Ngo' vào đầu danh sách engineers, ‘Ni Ngo’ có các infomation như sau:
//tuổi : 26
//công ty: 'Axon'
//giới tính: nữ
//favorite colors: red, blue, white
//address: không xác định
var newEngineer = {
  'name': 'Ni Ngo',
  'company': 'Axon',
  'gender': 'Female',
  'favoriteColors': [
    'red',
    'blue',
    'white'
  ]
};
engineers.unshift(newEngineer);
console.log('Bai 20: ' + ' The new engineer is added to the first of array is ' + engineers[0].name + ' ' + engineers[0].company + ' ' + engineers[0].age);

//Thêm 'Duc Pham' vào cuối danh sách engineers, ‘Duc Pham’ có các infomation như sau:
// tuổi : 27
// công ty: 'FPT'
// giới tính: nam
// favorite colors: red, gray, yellow, white
// address: 'Da Nang'
var addEngineer = {
  'name': 'Duc Pham',
  'company': 'FPT',
  'gender': 'Male',
  'favoriteColors': [
    'red',
    'gray',
    'yellow',
    'white'
  ],
  'address': 'Da Nang'
};

engineers.push(addEngineer);
console.log('Bai 21: ' + 'The new engineer is added is ' + engineers[engineers.length - 1].name);

//Đếm xem có bao nhiêu người làm ở Asnet
var count = 0;
for (var i = engineers.length; i > 0; i--) {
  engineer =engineers[i - 1];
  if (engineer.company === 'AsNet') {
    count += 1;
  }
}
console.log('Bai 22: There are ' + count + ' people working at AsNet');

//Đếm xem có bao nhiêu nam, bao nhiêu nữ
var countMale = 0,
    countFemale = 0;

for (var i = engineers.length; i > 0; i--) {
  engineer = engineers[i - 1];
  (engineer.gender === 'Male') ? countMale++ : countFemale++;
}

console.log('Bai 23: There are ' + countMale + ' Males and ' + countFemale + ' Females');

//Tách những người làm cùng công ty ra 1 array riêng, mỗi cty 1 array và log các array đó ra.
