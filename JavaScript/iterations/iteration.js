let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";
let count = 0;
let badWordIndex;
storyWords.forEach((word) => {
  count++;
});

storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful";
  } else {
    return word;
  }
});
badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});
storyWords[badWordIndex] = "really";

let lengthCheck = storyWords.every((word) => {
  return word.length < 10 ? true : false;
});
storyWords.forEach((word) => {
  word.length > 10 && console.log(word);
  //&& operator looks for the first false logic, if it can't find one it then returns the true value.
  //    var a = true;
  // var b  = true;
  // var c = false;
  // var d = false;
  // a && b  → true      b && a  → true
  // a && c  → false      c && a → false
  // c && d  → false      d && c → false
});

//Call back function example below

const asd = ["Elise", "Foobar", "Barney", "Bacon"];

const levo = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    cb(element);
  }
};
levo(asd, (item) => console.log(item));
