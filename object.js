// tim nhung nguoi lam AsNet
var asNetEmployees = [];
for (var i = 0, size = engineers.length; i < size; i++) {
  if(engineers[i].company === 'AsNet') {
    asNetEmployees.push(engineers[i].name);
  }
}
console.log('Bai 1: ' + asNetEmployees + ' is AsNet employees')


//Tìm những người ko làm ở FPT
notFptEmployees = [];
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
console.log('Bai 6 ' + manLovePink.join(', ') + (manLovePink.length > 1 ? ' are ' : ' is ') + ' mans and they ' + (manLovePink.length > 1 ? ' love ' : ' loves ') + ' pink')

//Tìm xem có ai 25 tuổi không
engineer25YearsOld = [];
for (var i = 0, size = engineers.length; i < size; i++) {
  if (engineers[i].age === 25) {
    engineer25YearsOld.push(engineers[i].name);
  }
}
console.log('Bai 7 ' + engineer25YearsOld.join(', ') + (engineer25YearsOld.length > 1 ? ' are ' :  ' is ') + ' 25 years old');