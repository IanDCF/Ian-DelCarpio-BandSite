// or use uuid to generate random ids
const uniqueID = () => Math.random().toString(36).substring(2, 9);

const comments = [
  {
    id: uniqueID(),
    name: "Connor Walton",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains",
    date: "02/17/2021",
  },
  {
    id: uniqueID(),
    name: "Emilie Beach",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "01/09/2021",
  },
  {
    id: uniqueID(),
    name: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "12/20/2020",
  },
];

const renderTask = (taskObj) => {
  let forumComments = document.querySelector(".forum__comments");

  let forumComment = document.createElement("div");
  forumComment.classList.add("forum__comment");
  forumComment.setAttribute("id", taskObj.id);
  forumComments.appendChild(forumComment);

  let forumCommentDP = document.createElement("div");
  forumCommentDP.classList.add("forum__comment-dp");
  forumComment.appendChild(forumCommentDP);

  let forumCommentDPCircle = document.createElement("div");
  forumCommentDPCircle.classList.add("forum__comment-dp-circle");
  forumCommentDP.appendChild(forumCommentDPCircle);

  let forumCommentData = document.createElement("div");
  forumCommentData.classList.add("forum__comment-data");
  forumComment.appendChild(forumCommentData);

  let forumCommentNameDate = document.createElement("div");
  forumCommentNameDate.classList.add("forum__name-date");
  forumCommentData.appendChild(forumCommentNameDate);

  let forumName = document.createElement("p");
  forumName.classList.add("forum__name");
  forumName.innerText = taskObj.name;
  forumCommentNameDate.appendChild(forumName);

  let forumDate = document.createElement("p");
  forumDate.classList.add("forum__date");
  forumDate.innerText = taskObj.date;
  forumCommentNameDate.appendChild(forumDate);

  let forumCommentText = document.createElement("div");
  forumCommentText.classList.add("forum__comment-text");
  forumCommentData.appendChild(forumCommentText);

  let forumCommentP = document.createElement("p");
  forumCommentP.innerText = taskObj.comment;
  forumCommentText.appendChild(forumCommentP);
};

const render = () => {
  const commentsList = document.querySelector(".forum__comments");
  commentsList.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    renderTask(comments[i]);
  }
};

render();
