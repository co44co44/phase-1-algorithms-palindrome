
function reverse(word) { 

  const wordArray = word.split("") //ok. work es array
  const reversedWordArray = wordArray.reverse () //ok. reverse la palabra y declaramos la palabra al reves
  const reversedWord = reversedWordArray.join("") //unir la palabra alreves que esta como array y converstirla en string
  return reversedWord;
}

function isPalindrome(word) {
  const reversedWord = reverse(word);
  return word === reversedWord
  //en vez de poner el if statement puedo solo poner return word === reversedWord, porque eso ya da un true o false.
  /*if (word === reversedWord) {
    return true;
  } else {
    return false;
  }*/
}






  // Write your algorithm here
  //1. PROBLEM: Write a function isPalindrome for checking if some words are palindromes (same reading backwards like mom).If it is paliondromes it returns true
  //if it is not paliondrome it returns false. Input=string lowercase. Output=true or false.
  //2.TEST CASE: Inputs are racecar and robot. Outputs true or false. I expect to see true or false as the output when I input a word to check it it is paliondres.


/* 
  3.Add your pseudocode here
  - declare a function to check if the words are the same.  This is the 'palindrome' function. Have word as an argument. Here is the conditional/
   if the word is equal to lettersBackward output true, else false. 
  if (word=word.reverse){
  return true 
  }else {
     return false
  }
  - declare another function 'reverse' where you will reverse the word. 
  - inside reverse function, declare letterBackwardArray and make the wordbackward into an array of letters. Use split for this.
  - declare a variable wordBackward to join those letter backward to a word again, so we can compare it.  use .join
  - return wordBarwards so we have it for comparing it. 
  - 
  })
  - if the word is equal to lettersBackward output true, else false. 
  if (word=word.reverse){
  console.log true
  }else console.log false
*/

/*
  Add written explanation of your solution here
  //word has to be equal to wordbackwards so it gives you true, if not, gives you false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //when I call isPalindrome a racecar I will get true, and when i consolelog ispalindrome robot, it gives me false
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

