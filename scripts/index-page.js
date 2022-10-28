const apiKey = "04e93924-b978-472a-bfd4-98d2161a2f0a";
const apiRoute = "comments";
const apiURL = `https://project-1-api.herokuapp.com/${apiRoute}?api_key=${apiKey}`;

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
      for (let i = comments.length - 1; i >= 0; i--) {
        displayComment(comments[i]);
      }
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

  let name = event.target.name.value;
  let comment = event.target.comment.value;

  let newComment = {
    name: name,
    comment: comment,
  };

  if (name !== "" && comment !== "") {
    let apiCall = axios.post(apiURL, newComment);

    apiCall
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((object) => {
        render();
        name = event.target.name.value = "";
        comment = event.target.comment.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert("Both, name and input, fields are required");
  }
});
