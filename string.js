// 1.In ra tên họ của tất cả mọi người theo mẫu sau: Tên: Minh, Họ: Nguyễn
var	firstName = '',
	lastName = '';
var name = '';
for (i = engineers.length - 1; i > 0; i--) {
	engineer = engineers[i]
	indexOfSpace = engineer.name.indexOf(' ');
	firstName = engineer.name.substring(0, indexOfSpace);
	lastName = engineer.name.substring(indexOfSpace + 1, (engineer.name.length + 1));
	name += ' Ho ' + lastName + ' va ' + ' ten ' + firstName + '\n';
}

console.log('Bai 1: ' + name);

//2.Tìm những ai có tên dài hơn 10 ký tự
var engineerNames = '';
for (var i = engineers.length - 1; i > 0; i--) {
	var engineer = engineers[i];
	var indexOfSpace = engineer.name.indexOf(' ');
	var name = engineer.name.substring(0, indexOfSpace);
	if (name.length > 10) {
		engineerNames += engineer.name + '\n';
	}
}

console.log('Bai 2: ' + (engineerNames ? ' name length ' : ' No name length') + ' more than 10 characters');

//3.Tìm những ai có họ 'Tran' thì thay bằng họ 'Le'
var changeTranByLe = '';
for (i = engineers.length - 1; i > 0; i--) {
	var engineer = engineers[i];
	var indexOfText = engineer.name.indexOf('Tran');
	if (indexOfText > -1) {
		changeTranByLe += engineer.name.replace('Tran', 'Le') + '\n';
	}
}

console.log('Bai 3 ' + changeTranByLe + ' changing from Tran to Le');

//4.Tìm những ai có tên bắt đầu bẵng chữ H
var nameStartWithH = '';
for (var i = engineers.length - 1; i > 0; i--) {
	var engineer = engineers[i];
	if (engineer.name[0] === 'H') {
		nameStartWithH += engineer.name + '\n';
	}
}

console.log('Bai 4: \n' + nameStartWithH + ' start by letter H');

//5.Tìm những ai có họ bắt đầu bằng chữ N 
var familyNameStartByN = '';
for (var i = engineers.length - 1; i > 0; i--) {
	var engineer = engineers[i];
	var indexOfText = engineer.name.indexOf(' ');
	var familyName = engineer.name.substring(indexOfText + 1, engineer.name.length);
	console.log('familyName', familyName);
	if (familyName[0] === 'N') {
		familyNameStartByN += engineer.name + '\n';
	}
}

console.log('Bai 5 ' + familyNameStartByN + ' has familyName start with letter N');


// =====================
var songLyrics = 'Wait a second, let me catch My breath \n Remind Me how it feels to hear your voice';

//6.Tìm và thay thế "me" bằng "you"
songLyrics.replace(/me/ig, 'you');

console.log('Bai 6: ', songLyrics);