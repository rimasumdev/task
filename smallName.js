const fNames = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallName = '';
for (let name of fNames) {
  if (name.length < smallName.length || smallName === '') {
    smallName = name;
  }
}
console.log(smallName);