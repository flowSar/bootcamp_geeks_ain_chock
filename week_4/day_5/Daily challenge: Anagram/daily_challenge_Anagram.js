function isAnagram(str1, str2) {
  let j = 0;
  let len = str1.length;
  let len2 = str2.length;
  for (let i = 0; i < len; i++) {
    if (str1[i] === " ") continue;
    // check if all characters on str1 exist on str2 with the same number, return fals if not
    if (howmany(str1, str1[i]) !== howmany(str2, str1[i])) return false;
  }
  // check if all characters on str2 exist on str1 with the same number, return fals if not
  for (let i = 0; i < len2; i++) {
    if (str2[i] === " ") continue;
    if (howmany(str1, str2[i]) !== howmany(str2, str2[i])) return false;
  }
  return true;
}
// calculate how many giving characters exist in str.
function howmany(str, char) {
  let nm = 0;
  for (let c of str) {
    if (c.toLowerCase() === char.toLowerCase()) nm++;
  }
  return nm;
}

console.log(isAnagram("Astronomer", "Moon starer h")); // flse
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
console.log(isAnagram("Dormitory", "Dirty room")); //  true
console.log(isAnagram("Conversation", "Voices rant on")); //  true
console.log(isAnagram("The eyes", "They see")); //  true
console.log(isAnagram("Hello", "Olelh")); //  true
console.log(isAnagram("Debit card", "Bad credit")); //  true
console.log(isAnagram("Python", "Java")); //  false
