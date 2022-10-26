// "api_key": "04e93924-b978-472a-bfd4-98d2161a2f0a"

const apiKey = "04e93924-b978-472a-bfd4-98d2161a2f0a";
const apiRoute = "comments";
const apiURL = `https://project-1-api.herokuapp.com/${apiRoute}?api_key=${apiKey}`;

// or use uuid to generate random ids
const uniqueID = () => Math.random().toString(36).substring(2, 9);

// const comments = [
//   {
//     id: uniqueID(),
//     name: "Connor Walton",
//     date: "02/17/2021",
//     comment:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains",
//   },
//   {
//     id: uniqueID(),
//     name: "Emilie Beach",
//     date: "01/09/2021",
//     comment:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     id: uniqueID(),
//     name: "Miles Acosta",
//     date: "12/20/2020",
//     comment:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];

// RENDER COMMENTS __________________________________________
const renderDP = (id) => {
  let forumComment = document.getElementById(id);

  let forumCommentDP = document.createElement("div");
  forumCommentDP.classList.add("forum__comment-dp");
  forumComment.appendChild(forumCommentDP);

  let forumCommentDPCircle = document.createElement("div");
  forumCommentDPCircle.classList.add("forum__comment-dp-circle");
  forumCommentDP.appendChild(forumCommentDPCircle);
};

const renderCommentData = (id, name, date, comment) => {
  let forumComment = document.getElementById(id);

  let forumCommentData = document.createElement("div");
  forumCommentData.classList.add("forum__comment-data");
  forumComment.appendChild(forumCommentData);

  let forumCommentNameDate = document.createElement("div");
  forumCommentNameDate.classList.add("forum__name-date");
  forumCommentData.appendChild(forumCommentNameDate);

  let forumName = document.createElement("p");
  forumName.classList.add("forum__name");
  forumName.innerText = name;
  forumCommentNameDate.appendChild(forumName);

  let forumDate = document.createElement("p");
  forumDate.classList.add("forum__date");
  let d = new Date(date);
  let setDate = d.toLocaleDateString("en-US");

  console.log(setDate);
  forumDate.innerText = setDate;
  forumCommentNameDate.appendChild(forumDate);

  let forumCommentText = document.createElement("div");
  forumCommentText.classList.add("forum__comment-text");
  forumCommentData.appendChild(forumCommentText);

  let forumCommentP = document.createElement("p");
  forumCommentP.innerText = comment;
  forumCommentText.appendChild(forumCommentP);
};

const displayComment = (taskObj) => {
  let forumComments = document.querySelector(".forum__comments");

  let forumComment = document.createElement("div");
  forumComment.classList.add("forum__comment");
  forumComment.setAttribute("id", taskObj.id);
  forumComments.appendChild(forumComment);

  renderDP(taskObj.id);
  renderCommentData(
    taskObj.id,
    taskObj.name,
    taskObj.timestamp,
    taskObj.comment
  );
};

// // RENDER COMMENTS __________________________________________
// const renderComment = (taskObj) => {
//   let forumComments = document.querySelector(".forum__comments");

//   let forumComment = document.createElement("div");
//   forumComment.classList.add("forum__comment");
//   forumComment.setAttribute("id", taskObj.id);
//   forumComments.appendChild(forumComment);

//   let forumCommentDP = document.createElement("div");
//   forumCommentDP.classList.add("forum__comment-dp");
//   forumComment.appendChild(forumCommentDP);

//   let forumCommentDPCircle = document.createElement("div");
//   forumCommentDPCircle.classList.add("forum__comment-dp-circle");
//   forumCommentDP.appendChild(forumCommentDPCircle);

//   let forumCommentData = document.createElement("div");
//   forumCommentData.classList.add("forum__comment-data");
//   forumComment.appendChild(forumCommentData);

//   let forumCommentNameDate = document.createElement("div");
//   forumCommentNameDate.classList.add("forum__name-date");
//   forumCommentData.appendChild(forumCommentNameDate);

//   let forumName = document.createElement("p");
//   forumName.classList.add("forum__name");
//   forumName.innerText = taskObj.name;
//   forumCommentNameDate.appendChild(forumName);

//   let forumDate = document.createElement("p");
//   forumDate.classList.add("forum__date");
//   forumDate.innerText = taskObj.date;
//   forumCommentNameDate.appendChild(forumDate);

//   let forumCommentText = document.createElement("div");
//   forumCommentText.classList.add("forum__comment-text");
//   forumCommentData.appendChild(forumCommentText);

//   let forumCommentP = document.createElement("p");
//   forumCommentP.innerText = taskObj.comment;
//   forumCommentText.appendChild(forumCommentP);
// };

const render = () => {
  const commentsList = document.querySelector(".forum__comments");
  commentsList.innerHTML = "";

  const callAPI = axios.get(apiURL);

  callAPI
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .then((comments) => {
      comments.forEach((comment) => {
        displayComment(comment);
      });
    })
    .catch((err) => {
      console.log(err);
      return;
    });
};

render();

// HANDLE FORM ___________________________________________________________
let form = document.querySelector(".forum__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let id = uniqueID();
  let name = event.target.name.value;
  // let date = new Date().toLocaleDateString();
  let date = new Date().getTime();
  let comment = event.target.comment.value;

  let newComment = { id: id, name: name, date: date, comment: comment };

  if (name !== "" && comment !== "") {
    // comments.unshift(newComment);
    let apiCall = axios.post(apiURL, {
      headers: {
        "Content-Type": "application/json",
      },
      data: newComment,
    });

    apiCall
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
    render();
    name = event.target.name.value = "";
    comment = event.target.comment.value = "";
  } else {
    alert("Both, name and input, fields are required");
  }
});
