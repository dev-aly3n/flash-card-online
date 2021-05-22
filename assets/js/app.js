// modal start here

const modal = document.querySelector(".main-modal");
const modalCloseBtn = document.querySelector(".modal-close");

function modalClose() {
  modal.classList.remove("fadeIn");
  modal.classList.add("fadeOut");
  setTimeout(() => {
    modal.style.display = "none";
  }, 800);
}

document.querySelector(".new-note-btn").addEventListener("click", function () {
  modal.classList.remove("fadeOut");
  modal.classList.add("fadeIn");
  modal.style.display = "flex";
});

modalCloseBtn.addEventListener("click", function (e) {
  modalClose();
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modalClose();
  }
});

// modal finish here

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.querySelector(".new-note-btn");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//variables
const myNote = document.querySelector("#flexbox-container");

// counting the clicking button
let count;

//event listeners

// call event listeners
eventlisteners();

// create event listeners
function eventlisteners() {
  // submit the form
  document.querySelector("#form").addEventListener("submit", newNote);
  document
    .querySelector("#form-input-modal")
    .addEventListener("click", newNoteModal);

  // remove notes by click
  myNote.addEventListener("click", removeNote);

  //remove the example note
  document.querySelector("#example").addEventListener("click", removeExample);

  //load saved note from LS
  document.addEventListener("DOMContentLoaded", localStorageOnLoad);
}

//functions

function newNote(e) {
  e.preventDefault();

  //ho ny p ot value access
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;

  // allert if filled via a b/o-/t
  if (name !== "" || email !== "") {
    alert("you are a fucking dumb bot?!");
  } else {
    //access the value of form inputs
    const subject = document.querySelector("#subject-new-note").value;
    const note = document.querySelector("#add-new-note").value;

    // get the value of selected color
    const colorSelected = document.querySelector("#color-selection").value;

    // form validation
    if (subject === "" || note === "" || colorSelected === "") {
      document.querySelector(".error-message").style.display = "block";
      setTimeout(() => {
        document.querySelector(".error-message").style.display = "none";
      }, 3000);
    } else {
      //counting the number of clicking on button to use it for order of flexbox
      // using (-count) to reverse the order
      document.querySelector("#form-input").onclick = function () {
        count = count + 1;
      };

      //card-container: create the <div> of the card-container and add its class and append it to his parrent
      const myNoteDiv = document.createElement("div");
      myNoteDiv.classList.add("card-container");
      myNoteDiv.style.order = -count;
      myNote.prepend(myNoteDiv);

      // /// © 2019 dev-aly3n ///
      //remove-btn: create the <a> of the remove-btn  and add its class and apeend it to his parrent
      const removeBtn = document.createElement("span");
      removeBtn.classList.add("remove-btn");
      removeBtn.appendChild(document.createTextNode("✕"));
      //removeBtn.setAttribute("href", "#")
      myNoteDiv.appendChild(removeBtn);

      //card: create the <div> of the card  and add its class and apeend it to his parrent
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      myNoteDiv.appendChild(cardDiv);

      //front-card: create the <div> of the front-card  and add its class and apeend it to his parrent
      const frontCardDiv = document.createElement("div");
      frontCardDiv.classList.add("front");
      frontCardDiv.style.backgroundColor = colorSelected;
      cardDiv.appendChild(frontCardDiv);

      //h2-card: create the <h2> of the h2-card  and add its class and apeend it to his parrent
      const frontH2 = document.createElement("h2");
      frontH2.setAttribute("id", "front-of-card");
      frontH2.appendChild(document.createTextNode(subject));
      frontCardDiv.appendChild(frontH2);

      //back-card: create the <div> of the back-card  and add its class and apeend it to his parrent
      const backCardDiv = document.createElement("div");
      backCardDiv.classList.add("back");
      cardDiv.appendChild(backCardDiv);

      //back-card P: create the <p> of the back-card P  and add its class and apeend it to his parrent
      const backCardP = document.createElement("p");
      backCardP.classList.add("back-of-card");
      backCardP.appendChild(document.createTextNode(note));
      backCardDiv.appendChild(backCardP);

      //to empty the form input
      this.reset();

      // send the values to the function to saving to LS
      addNoteToLS(subject, note, colorSelected);
    }
  }
}

function newNoteModal(e) {
  e.preventDefault();

  //ho ny p ot value access
  const email = document.querySelector("#email-modal").value;
  const name = document.querySelector("#name-modal").value;

  // allert if filled via a b/o-/t
  if (name !== "" || email !== "") {
    alert("you are a fucking dumb bot?!");
  } else {
    //access the value of form inputs
    let subject = document.querySelector("#subject-new-note-modal").value;
    let note = document.querySelector("#add-new-note-modal").value;

    // get the value of selected color
    let colorSelected = document.querySelector("#color-selection-modal").value;

    // form validation
    if (subject === "" || note === "" || colorSelected === "") {
      document.querySelector(".error-message-modal").style.display = "block";
      setTimeout(() => {
        document.querySelector(".error-message-modal").style.display = "none";
      }, 3000);
    } else {
      //counting the number of clicking on button to use it for order of flexbox
      // using (-count) to reverse the order
      document.querySelector("#form-input-modal").onclick = function () {
        count = count + 1;
      };

      //card-container: create the <div> of the card-container and add its class and append it to his parrent
      const myNoteDiv = document.createElement("div");
      myNoteDiv.classList.add("card-container");
      myNoteDiv.style.order = -count;
      myNote.prepend(myNoteDiv);

      // /// © 2019 dev-aly3n ///
      //remove-btn: create the <a> of the remove-btn  and add its class and apeend it to his parrent
      const removeBtn = document.createElement("span");
      removeBtn.classList.add("remove-btn");
      removeBtn.appendChild(document.createTextNode("✕"));
      //removeBtn.setAttribute("href", "#")
      myNoteDiv.appendChild(removeBtn);

      //card: create the <div> of the card  and add its class and apeend it to his parrent
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      myNoteDiv.appendChild(cardDiv);

      //front-card: create the <div> of the front-card  and add its class and apeend it to his parrent
      const frontCardDiv = document.createElement("div");
      frontCardDiv.classList.add("front");
      frontCardDiv.style.backgroundColor = colorSelected;
      cardDiv.appendChild(frontCardDiv);

      //h2-card: create the <h2> of the h2-card  and add its class and apeend it to his parrent
      const frontH2 = document.createElement("h2");
      frontH2.setAttribute("id", "front-of-card");
      frontH2.appendChild(document.createTextNode(subject));
      frontCardDiv.appendChild(frontH2);

      //back-card: create the <div> of the back-card  and add its class and apeend it to his parrent
      const backCardDiv = document.createElement("div");
      backCardDiv.classList.add("back");
      cardDiv.appendChild(backCardDiv);

      //back-card P: create the <p> of the back-card P  and add its class and apeend it to his parrent
      const backCardP = document.createElement("p");
      backCardP.classList.add("back-of-card");
      backCardP.appendChild(document.createTextNode(note));
      backCardDiv.appendChild(backCardP);

      // send the values to the function to saving to LS
      addNoteToLS(subject, note, colorSelected);

      modalClose();

      //to empty the form input
      document.getElementsByName("note-form-modal")[0].reset();
    }
  }
}

//remove notes by click on the remove-btn
function removeNote(e) {
  e.preventDefault();
  if (e.target.classList.contains("remove-btn")) {
    e.target.parentElement.remove();
    // call the function to also remove notes from LS (using the subject value to remove)
    removeNoteFromLs(
      e.target.parentElement.children[1].children[0].textContent
    );
  }
}

// save to LS
function addNoteToLS(subject, note, colorSelected) {
  const subjects = getSubjectFromLS();
  const notes = getNoteFromLS();
  const colors = getColorFromLS();

  subjects.push(subject);
  notes.push(note);
  colors.push(colorSelected);

  localStorage.setItem("subjects", JSON.stringify(subjects));
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("colors", JSON.stringify(colors));
}

//getting subjects from LS
function getSubjectFromLS() {
  let subjects;
  if (localStorage.getItem("subjects") === null) {
    subjects = [];
  } else {
    subjects = JSON.parse(localStorage.getItem("subjects"));
  }
  return subjects;
}

//getting notes from LS
function getNoteFromLS() {
  let notes;
  if (localStorage.getItem("notes") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("notes"));
  }
  return notes;
}

//getting colors from LS
function getColorFromLS() {
  let colors;
  if (localStorage.getItem("colors") === null) {
    colors = [];
  } else {
    colors = JSON.parse(localStorage.getItem("colors"));
  }
  return colors;
}

//load notes from LS
function localStorageOnLoad() {
  //remove the example note if user deleted it before
  if (localStorage.getItem("example") !== "1") {
    document.querySelector("#example").parentElement.style.display = "block";
  }

  //access to the values from LS
  const subjects = getSubjectFromLS();
  const notes = getNoteFromLS();
  const colors = getColorFromLS();
  count = notes.length;

  //using forEach to use same index number and read properties
  notes.forEach((note) => {
    let indexNumberOfNote = notes.indexOf(note);
    let subject = subjects[indexNumberOfNote];
    let color = colors[indexNumberOfNote];

    //card-container: create the <div> of the card-container and add its class and append it to his parrent
    const myNoteDiv = document.createElement("div");
    myNoteDiv.classList.add("card-container");
    myNoteDiv.style.order = -indexNumberOfNote;
    myNote.prepend(myNoteDiv);

    //remove-btn: create the <a> of the remove-btn  and add its class and apeend it to his parrent
    const removeBtn = document.createElement("a");
    removeBtn.classList.add("remove-btn");
    removeBtn.appendChild(document.createTextNode("✕"));
    removeBtn.setAttribute("href", "#");
    myNoteDiv.appendChild(removeBtn);

    //card: create the <div> of the card  and add its class and apeend it to his parrent
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    myNoteDiv.appendChild(cardDiv);

    //front-card: create the <div> of the front-card  and add its class and apeend it to his parrent
    const frontCardDiv = document.createElement("div");
    frontCardDiv.classList.add("front");
    frontCardDiv.style.backgroundColor = color;
    cardDiv.appendChild(frontCardDiv);

    //h2-card: create the <h2> of the h2-card  and add its class and apeend it to his parrent
    const frontH2 = document.createElement("h2");
    frontH2.setAttribute("id", "front-of-card");
    frontH2.appendChild(document.createTextNode(subject));
    frontCardDiv.appendChild(frontH2);

    //back-card: create the <div> of the back-card  and add its class and apeend it to his parrent
    const backCardDiv = document.createElement("div");
    backCardDiv.classList.add("back");
    cardDiv.appendChild(backCardDiv);

    //back-card P: create the <p> of the back-card P  and add its class and apeend it to his parrent
    const backCardP = document.createElement("p");
    //backCardP.setAttribute("id", "back-of-card");
    backCardP.classList.add("back-of-card");
    backCardP.appendChild(document.createTextNode(note));
    backCardDiv.appendChild(backCardP);
  });
}

// removing notes from LS
function removeNoteFromLs(deleteSubject) {
  //access to the values from LS
  const noteFromLS = getNoteFromLS();
  const subjectFromLS = getSubjectFromLS();
  const colorFromLS = getColorFromLS();

  // using delegation to avoid bubbling effect by compairing the subject values
  subjectFromLS.forEach((subject, index) => {
    if (subject === deleteSubject) {
      subjectFromLS.splice(index, 1);
      noteFromLS.splice(index, 1);
      colorFromLS.splice(index, 1);
    }
  });
  //set new array (removed some note array) to the LS
  localStorage.setItem("notes", JSON.stringify(noteFromLS));
  localStorage.setItem("subjects", JSON.stringify(subjectFromLS));
  localStorage.setItem("colors", JSON.stringify(colorFromLS));
}

// set a value "1" to LS if user remove the example note (to using it in the function localStorageOnLoad())
function removeExample() {
  localStorage.setItem("example", "1");
}

//*****************************************************************\\
// contact aly3n via this mail: dev.aly3n [AAATTT] gmail {dot} com ||
//*****************************************************************//
