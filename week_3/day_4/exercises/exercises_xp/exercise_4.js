const radiusElement = document.getElementById("radius");
const volumeElement = document.getElementById("volume");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const radius = radiusElement.value;
  const volume = (4 / 3) * Math.PI * radius ** 3;
  volumeElement.value = volume;
});
