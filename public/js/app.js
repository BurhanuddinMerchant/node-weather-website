const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#messageOne");
const messageTwo = document.querySelector("#messageTwo");
const messageThree = document.querySelector("#messageThree");
const messageFour = document.querySelector("#messageFour");
const messageFive = document.querySelector("#messageFive");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading....";
  messageTwo.textContent = "";
  messageThree.textContent = "";
  messageFour.textContent = "";
  messageFive.textContent = "";
  if (location !== undefined) {
    fetch(
      "http://localhost:3000/weather?address=" + encodeURIComponent(location)
    ).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
          messageTwo.textContent = "";
          messageThree.textContent = "";
          messageFour.textContent = "";
          messageFive.textContent = "";
          return;
        }

        const { summary, temperature, precipProb, address } = data;
        messageOne.textContent = "The Weather Forecast Is : ";
        messageTwo.textContent = "Summary : " + summary;
        messageThree.textContent = "Temperature : " + temperature;
        messageFour.textContent = "Precepitation Probability : " + precipProb;
        messageFive.textContent = "Location : " + address;
      });
    });
  } else {
    messageOne.textContent = "Enter A Value ";
    messageTwo.textContent = "";
    messageThree.textContent = "";
    messageFour.textContent = "";
    messageFive.textContent = "";
  }
});
