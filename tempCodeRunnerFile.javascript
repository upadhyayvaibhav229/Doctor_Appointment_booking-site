// palindrom check

let str = 'i like to code';

// for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//         console.log('Not a palindrom');
        
//     }else{
//         console.log('Palindrom');
//     }
    
// }

// let count = 0;
// let vowels = "aeiouAEIOU";
// for(let char of str){
//     if (vowels.includes(char)){
//         count++;
        
//     }
// }

// console.log(count);

// using for loop
// let count = 0;
// let vowels = "aeiouAEIOU";

// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         count++;
//     }
    
// }

// console.log(count);

// let result = '';
// let words = str.split(' ');
// for (const word of words) {
//     result += word[0].toUpperCase() + word.slice(1) + ' ';
    
// }
// console.log(result);

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isUnique = true;

    for (let j = 0; j < str.length; j++) {
       if (i !== j && char === str[j]) {
        isUnique = false;
        break;
       }
    }

    if (isUnique) {
        console.log(char);
    }
}