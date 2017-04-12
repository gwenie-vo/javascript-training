var engineers = [
  {
    name: 'Minh Nguyen',
    age: 27,
    company: 'AsNet',
    gender: 'Male',
    favoriteColors: [
      'red',
      'black',
      'green',
      'gray'
    ],
    experienceYear: 3,
    address: 'Da Nang'
  },
  {
    name: 'Huynh Vo',
    age: 25,
    company: 'AsNet',
    gender: 'Female',
    favoriteColors: [
      'violet',
      'green',
      'pink'
    ],
    experienceYear: 4,
    address: 'Quang Nam'
  },
  {
    name: 'Minh Tran',
    age: 24,
    company: 'FPT',
    gender: 'Male',
    favoriteColors: [
      'black',
      'white',
      'red'
    ],
    experienceYear: 2,
  },
  {
    name: 'Phuong Bui',
    age: 25,
    company: 'AsNet',
    gender: 'Female',
    favoriteColors: [
      'blue',
      'yellow',
      'pink'
    ],
    experienceYear: 8,
  },
  {
    name: 'Huy Chau',
    age: 23,
    company: 'Asian Tech',
    gender: 'Male',
    favoriteColors: [
      'black',
      'pink',
    ],
    experienceYear: 10,
  },
  {
    name: 'An Nguyen',
    age: 23,
    company: 'AsNet',
    gender: 'Male',
    favoriteColors: [
      'blue',
      'pink'
    ],
    experienceYear: 20,
    address: 'Da Nang'
  },
  {
    name: 'Thanh Nguyen',
    age: 24,
    company: 'FPT',
    gender: 'Female',
    favoriteColors: [
      'red',
      'pink',
      'white',
      'yellow',
      'gray'
    ],
    experienceYear: 1,
  },
  {
    name: 'Vinh Tran',
    age: 26,
    company: 'Axon',
    gender: 'Female',
    favoriteColors: [
      'red',
      'pink',
    ],
    experienceYear: 7,
  },
  {
    name: 'Tam Tran',
    age: 28,
    company: 'Clear Path',
    gender: 'Male',
    favoriteColors: [
      'black',
      'white',
    ],
    experienceYear: 3,
  }
];

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
    }
  }
}

console.log('Bai 4: ' + peopleLovePink + ' love pink');