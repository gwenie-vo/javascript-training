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

//In ra màu thứ 2 mà mỗi người thích là màu gì 
var secondColorOfEngineer = '';
for (var i = engineers.length; i > 0; i--) {
  var engineer = engineers[i - 1];
    secondColorOfEngineer += engineer.name + ' is '+  engineer.favoriteColors[1] + '\n';
}

console.log('Bai 14: Second color of \n' + secondColorOfEngineer);

