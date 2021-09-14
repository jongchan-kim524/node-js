var name = 'JC';
var letter = 'The length'+name+'\n\nproperty returns the length of a string'+name+'(number of characters). The length of an empty string is 0.';
console.log(letter);

var letter = `The length${name}

property returns the length of a string${name}(number of characters). The length of an empty string is 0.`;


console.log(letter);

/* template literal = '' 또는 "" 로 감싸지 않고, 
 ₩₩로 감싸고 ${}로 표기하면 바로 변수를 이용 가능 */
