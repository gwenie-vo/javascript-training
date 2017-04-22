//Tìm ra những ai làm ở Asnet
var engineerAsNet = engineers.filter(function(engineer) {
  return engineer.company.toLowerCase() === 'asnet';
})
console.log('Bai 25: Array of AsNet Engineer', engineerAsNet);
