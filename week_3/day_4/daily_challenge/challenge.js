const nounElement = document.getElementById("noun");
const adjectiveElement = document.getElementById("adjective");
const personElement = document.getElementById("person");
const verbElement = document.getElementById("verb");
const placeElement = document.getElementById("place");
const storyElement = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle-btn");

const submit = document.getElementById("lib-button");
submit.addEventListener("click", (event) => {
  event.preventDefault();

  const noun = nounElement.value;
  const adjective = adjectiveElement.value;
  const person = personElement.value;
  const verb = verbElement.value;
  const place = placeElement.value;

  if (
    noun != "" &&
    adjective != "" &&
    person != "" &&
    verb != "" &&
    place != ""
  ) {
    const story = `One day, ${person} found a ${adjective} ${noun}. 
  They decided to ${verb} with it all the way to ${place}, 
  and from that day on, their life was never the same!`;

    storyElement.innerText = story;
  } else {
    alert("please be sure to fill all inputs. before you submit");
  }
});

// when shuffle btn click display a random story
shuffleBtn.addEventListener("click", () => {
  event.preventDefault();

  const noun = nounElement.value;
  const adjective = adjectiveElement.value;
  const person = personElement.value;
  const verb = verbElement.value;
  const place = placeElement.value;

  if (
    noun != "" &&
    adjective != "" &&
    person != "" &&
    verb != "" &&
    place != ""
  ) {
    const story = getStory(noun, adjective, person, verb, place);

    storyElement.innerText = story;
  } else {
    alert("please be sure to fill all inputs. before you submit");
  }
});

// generate  stories and pick on randomly

function getStory(noun, adjective, person, verb, place) {
  const story1 = `At ${place}, ${person} discovered a ${adjective} ${noun}. 
Curious and brave, they tried to ${verb} with it, 
and soon the entire world knew their name.`;

  const story2 = `Legend says that ${person} once held a ${adjective} ${noun}. 
They used it to ${verb} across ${place}, 
leaving behind stories that are told even today.`;

  const story3 = `Nobody believed ${person} when they said they saw a ${adjective} ${noun} near ${place}. 
But when they tried to ${verb} with it, 
everyone realized the impossible had become real.`;

  const stories = [story1, story2, story3];
  const index = Math.floor(Math.random() * 3);
  return stories[index];
}
