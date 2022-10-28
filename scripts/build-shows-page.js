// RENDER SHOWS __________________________________________
const renderDate = (id, date) => {
  let listItem = document.getElementById(id);

  let showsInfo = document.createElement("div");
  showsInfo.classList.add("shows__info");
  listItem.appendChild(showsInfo);

  let infoLabel = document.createElement("p");
  infoLabel.classList.add("shows__info-label");
  infoLabel.innerText = "DATE";
  showsInfo.appendChild(infoLabel);

  let infoText = document.createElement("p");
  infoText.classList.add("shows__info-text-bold");
  let d = new Date(date).toLocaleDateString();
  infoText.innerText = d;
  showsInfo.appendChild(infoText);
};

const renderVenue = (id, venue) => {
  let listItem = document.getElementById(id);

  let showsInfo = document.createElement("div");
  showsInfo.classList.add("shows__info");
  listItem.appendChild(showsInfo);

  let infoLabel = document.createElement("p");
  infoLabel.classList.add("shows__info-label");
  infoLabel.innerText = "VENUE";
  showsInfo.appendChild(infoLabel);

  let infoText = document.createElement("p");
  infoText.classList.add("shows__info-text");
  infoText.innerText = venue;
  showsInfo.appendChild(infoText);
};

const renderLocation = (id, location) => {
  let listItem = document.getElementById(id);

  let showsInfo = document.createElement("div");
  showsInfo.classList.add("shows__info");
  listItem.appendChild(showsInfo);

  let infoLabel = document.createElement("p");
  infoLabel.classList.add("shows__info-label");
  infoLabel.innerText = "LOCATION";
  showsInfo.appendChild(infoLabel);

  let infoText = document.createElement("p");
  infoText.classList.add("shows__info-text");
  infoText.innerText = location;
  showsInfo.appendChild(infoText);
};

const renderButton = (id) => {
  let listItem = document.getElementById(id);

  let infoButtonDiv = document.createElement("div");
  infoButtonDiv.classList.add("shows__info-btn");
  listItem.appendChild(infoButtonDiv);

  let infoButton = document.createElement("button");
  infoButton.innerText = "BUY TICKETS";
  infoButtonDiv.appendChild(infoButton);
};

const renderShow = (taskObj) => {
  let showsList = document.querySelector(".shows__list");

  let listItem = document.createElement("div");
  listItem.classList.add("shows__list-item");
  listItem.setAttribute("id", taskObj.id);
  showsList.appendChild(listItem);

  renderDate(taskObj.id, taskObj.date);
  renderVenue(taskObj.id, taskObj.place);
  renderLocation(taskObj.id, taskObj.location);
  renderButton(taskObj.id);
};

const render = () => {
  const apiKey = "04e93924-b978-472a-bfd4-98d2161a2f0a";
  const apiRoute = "showdates";
  const apiURL = `https://project-1-api.herokuapp.com/${apiRoute}?api_key=${apiKey}`;

  const callAPI = axios.get(apiURL);
  callAPI
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .then((array) => {
      array.forEach((show) => {
        renderShow(show);
      });
      return array;
    })
    .then((response) => {
      // SELECTED SHOWS LIST ITEM FUNCTIONALITY______________
      const listItems = document.querySelectorAll(".shows__list-item");

      listItems.forEach((row) => {
        row.addEventListener("click", (event) => {
          listItems.forEach((row) => {
            if (row !== event.currentTarget) {
              row.classList.remove("shows__list-item--active");
            }
          });
          event.currentTarget.classList.toggle("shows__list-item--active");
        });
      });

      return response;
    })
    .catch((err) => {
      return err;
    });
};

render();
