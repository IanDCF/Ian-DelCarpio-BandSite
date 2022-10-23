// or use uuid to generate random ids
const uniqueID = () => Math.random().toString(36).substring(2, 9);

const shows = [
  {
    id: uniqueID(),
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    id: uniqueID(),
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    id: uniqueID(),
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    id: uniqueID(),
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    id: uniqueID(),
    date: "Fri Nov 26 2021",
    venue: "Moscow Center ",
    location: "San Francisco, CA",
  },
  {
    id: uniqueID(),
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

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
  infoText.innerText = date;
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
  renderVenue(taskObj.id, taskObj.venue);
  renderLocation(taskObj.id, taskObj.location);
  renderButton(taskObj.id);
};

const render = () => {
  for (let i = 0; i < shows.length; i++) {
    renderShow(shows[i]);
  }
};

render();
