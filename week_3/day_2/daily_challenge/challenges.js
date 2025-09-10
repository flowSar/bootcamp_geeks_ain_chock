// ====== Daily Challenge 1

const sentence = "This movie is not so bad !";

let wordNot = sentence.indexOf("not");

let wordBad = sentence.indexOf("bad");

let newSentence = "";

if (wordBad !== -1 && wordBad != -1) {
  let i = 0;
  for (i; i < sentence.length; i++) {
    if (i == wordNot) {
      newSentence += "good";
      i = wordBad + 3;
    }
    newSentence += sentence[i];
  }
  console.log(newSentence);
} else {
  console.log(sentence);
}
