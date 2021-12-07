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
  document.getElementsByName("note-form-modal")[0].reset();
  document.querySelector(".edit-save-modal").style.display = "none";
  document.querySelector(".form-input-modal").style.display = "block";
  document.querySelector("#create-new-note-h2-modal").innerText =
    "Create New Note";
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

//random Id generator
function randomIdGenerator(str) {
  let id = str + Math.random() * 100000000000000000;
  return id;
}
//random Id generator

//variables
const myNote = document.querySelector(".flexbox-container");

// counting the clicking button
let count;

//event listeners

// call event listeners
eventlisteners();

// create event listeners
function eventlisteners() {
  // submit the form
  document.querySelector("#form-input").addEventListener("click", newNote);
  document
    .querySelector("#form-input-modal")
    .addEventListener("click", newNoteModal);

  // remove notes by click
  myNote.addEventListener("click", removeNote);

  //remove the example note
  document.querySelector("#example").addEventListener("click", removeExample);

  //load saved note from LS
  document.addEventListener("DOMContentLoaded", localStorageOnLoad);

  document.querySelectorAll(".edit-btn").forEach((el) => {
    el.addEventListener("click", editNote);
  });
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
    const subject = document.querySelector(".subject-new-note").value;
    const note = document.querySelector(".add-new-note").value;

    // get the value of selected color
    const colorSelected = document.querySelector(".color-selection").value;

    // form validation
    if (subject === "" || note === "" || colorSelected === "") {
      document.querySelector(".error-message").style.display = "block";
      setTimeout(() => {
        document.querySelector(".error-message").style.display = "none";
      }, 3000);
    } else {
      //counting the number of clicking on button to use it for order of flexbox
      // using (-count) to reverse the order
      count = count + 1;

      //card-container: create the <div> of the card-container and add its class and append it to his parrent
      const myNoteDiv = document.createElement("div");
      myNoteDiv.classList.add("card-container");
      myNoteDiv.setAttribute("note-id", randomIdGenerator(subject.slice(-10)));

      myNoteDiv.style.order = -count;
      myNote.prepend(myNoteDiv);

      // /// © 2019 dev-aly3n ///
      //remove-btn: create the <a> of the remove-btn  and add its class and apeend it to his parrent
      const removeBtn = document.createElement("span");
      removeBtn.classList.add("remove-btn");
      removeBtn.appendChild(document.createTextNode("✕"));
      //removeBtn.setAttribute("href", "#")
      myNoteDiv.appendChild(removeBtn);

      const editBtn = document.createElement("span");
      editBtn.classList.add("edit-btn");
      editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
      myNoteDiv.appendChild(editBtn);

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
      frontH2.setAttribute("class", "front-of-card");
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
      document.getElementsByName("note-form")[0].reset();

      // send the values to the function to saving to LS
      const noteObject = {
        subject: subject,
        note: note,
        color: colorSelected,
        id: myNoteDiv.getAttribute("note-id"),
      };
      addNoteToLS(noteObject);
    }
  }
  document.querySelectorAll(".edit-btn").forEach((el) => {
    el.addEventListener("click", editNote);
  });
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
    let subject = document.querySelector(".subject-new-note-modal").value;
    let note = document.querySelector(".add-new-note-modal").value;

    // get the value of selected color
    let colorSelected = document.querySelector(".color-selection-modal").value;

    // form validation
    if (subject === "" || note === "" || colorSelected === "") {
      document.querySelector(".error-message-modal").style.display = "block";
      setTimeout(() => {
        document.querySelector(".error-message-modal").style.display = "none";
      }, 3000);
    } else {
      //counting the number of clicking on button to use it for order of flexbox
      // using (-count) to reverse the order

      count = count + 1;

      //card-container: create the <div> of the card-container and add its class and append it to his parrent
      const myNoteDiv = document.createElement("div");
      myNoteDiv.setAttribute("note-id", randomIdGenerator(subject.slice(-10)));
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

      const editBtn = document.createElement("span");
      editBtn.classList.add("edit-btn");
      editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
      myNoteDiv.appendChild(editBtn);

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
      frontH2.setAttribute("class", "front-of-card");
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
      const noteObject = {
        subject: subject,
        note: note,
        color: colorSelected,
        id: myNoteDiv.getAttribute("note-id"),
      };
      addNoteToLS(noteObject);

      modalClose();

      //to empty the form input
      document.getElementsByName("note-form-modal")[0].reset();
    }
  }
  document.querySelectorAll(".edit-btn").forEach((el) => {
    el.addEventListener("click", editNote);
  });
}

//remove notes by click on the remove-btn
function removeNote(e) {
  e.preventDefault();
  if (e.target.classList.contains("remove-btn")) {
    e.target.parentElement.remove();
    // call the function to also remove notes from LS (using the subject value to remove)

    removeNoteFromLs(e.target.parentElement.getAttribute("note-id"));
  }
}

//edit notes
function editNote(e) {
  e.preventDefault();
  const editBtn = e.currentTarget;
  let frontText =
    editBtn.parentElement.lastElementChild.firstElementChild.firstElementChild;
  let backText =
    editBtn.parentElement.lastElementChild.lastElementChild.firstElementChild;
  let colorSelection = window.getComputedStyle(
    editBtn.parentElement.lastElementChild.firstElementChild
  ).backgroundColor;
  const order = editBtn.parentElement.style.order;
  const id = editBtn.parentElement.getAttribute("note-id");

  if (screen.width >= 1024) {
    document.querySelector("#subject-new-note").value = frontText.textContent;
    document.querySelector("#add-new-note").value = backText.textContent;
    const select = document.querySelector("#color-selection");
    let optionLength = select.options.length;
    for (let i = 0; i < optionLength; i++) {
      if (select.options[i].value == colorSelection) {
        select.options.selectedIndex = i;
      } else if (select.options[i].value == colorSelection) {
        select.options.selectedIndex = i;
      } else if (select.options[i].value == colorSelection) {
        select.options.selectedIndex = i;
      } else if (select.options[i].value == colorSelection) {
        select.options.selectedIndex = i;
      }
    }

    document.querySelector("#create-new-note-h2").scrollIntoView();
    document.querySelector("#create-new-note-h2").innerText = "Editing...";
    document.querySelector(".edit-save").style.display = "block";
    document.querySelector(".form-input").style.display = "none";
    document
      .querySelector(".edit-save")
      .addEventListener("click", function editing(event) {
        event.preventDefault();

        const subject = document.querySelector(".subject-new-note").value;
        const note = document.querySelector(".add-new-note").value;
        const colorSelected = document.querySelector(".color-selection").value;
        frontText.innerText = subject;
        backText.innerText = note;
        editBtn.parentElement.lastElementChild.firstElementChild.style.backgroundColor =
          colorSelected;
        document.querySelector(".edit-save").style.display = "none";
        document.querySelector(".form-input").style.display = "block";
        document.querySelector("#create-new-note-h2").innerText =
          "Create New Note";
        document.getElementsByName("note-form")[0].reset();
        document
          .querySelector(".edit-save")
          .removeEventListener("click", editing);

        //LS
        const noteObject = {
          subject: subject,
          note: note,
          color: colorSelected,
          id: id,
        };
        const notes = getNoteObjectFromLS();
        notes.forEach((noteObj, index) => {
          if (noteObj.id == id) {
            notes.splice(index, 1, noteObject);
          }
        });
        localStorage.setItem("notes", JSON.stringify(notes));
      });
  } else {
    modal.classList.remove("fadeOut");
    modal.classList.add("fadeIn");
    modal.style.display = "flex";

    document.querySelector("#subject-new-note-modal").value =
      frontText.textContent;
    document.querySelector("#add-new-note-modal").value = backText.textContent;
    const select = document.querySelector("#color-selection-modal");
    let optionLength = select.options.length;
    for (let i = 0; i < optionLength; i++) {
      if (select.options[i].value == colorSelection) {
        select.options.selectedIndex = i;
      } else if (select.options[i].value == colorSelection) {
        select.options.selectedIndex = i;
      } else if (select.options[i].value == colorSelection) {
        select.options.selectedIndex = i;
      } else if (select.options[i].value == colorSelection) {
        select.options.selectedIndex = i;
      }
    }

    document.querySelector("#create-new-note-h2-modal").innerText =
      "Editing...";
    document.querySelector(".edit-save-modal").style.display = "block";
    document.querySelector(".form-input-modal").style.display = "none";

    document
      .querySelector(".edit-save-modal")
      .addEventListener("click", function editingModal(event) {
        event.preventDefault();

        const subject = document.querySelector(".subject-new-note-modal").value;
        const note = document.querySelector(".add-new-note-modal").value;
        const colorSelected = document.querySelector(
          ".color-selection-modal"
        ).value;
        frontText.innerText = subject;
        backText.innerText = note;
        editBtn.parentElement.lastElementChild.firstElementChild.style.backgroundColor =
          colorSelected;
        document.querySelector(".edit-save-modal").style.display = "none";
        document.querySelector(".form-input-modal").style.display = "block";
        document.querySelector("#create-new-note-h2-modal").innerText =
          "Create New Note";
        document.getElementsByName("note-form")[0].reset();
        document
          .querySelector(".edit-save-modal")
          .removeEventListener("click", editingModal);

        //LS
        const noteObject = {
          subject: subject,
          note: note,
          color: colorSelected,
          id: id,
        };
        const notes = getNoteObjectFromLS();
        notes.forEach((noteObj, index) => {
          if (noteObj.id == id) {
            notes.splice(index, 1, noteObject);
          }
        });
        localStorage.setItem("notes", JSON.stringify(notes));

        modalClose();
      });
  }
}

// save to LS
function addNoteToLS(noteObject) {
  const notes = getNoteObjectFromLS();

  const newNote = {
    subject: noteObject.subject,
    note: noteObject.note,
    color: noteObject.color,
    id: noteObject.id,
  };

  notes.push(newNote);

  localStorage.setItem("notes", JSON.stringify(notes));
}

//getting notes from LS
function getNoteObjectFromLS() {
  let notes;
  if (localStorage.getItem("notes") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("notes"));
  }
  return notes;
}

//load notes from LS
function localStorageOnLoad() {
  //remove the example note if user deleted it before
  if (localStorage.getItem("example") !== "1") {
    document.querySelector("#example").parentElement.style.display = "block";
  }

  //access to the values from LS
  const notes = getNoteObjectFromLS();

  count = notes.length;

  //using forEach to use same index number and read properties
  notes.forEach((noteObject, index) => {
    let note = noteObject.note;
    let subject = noteObject.subject;
    let color = noteObject.color;
    let id = noteObject.id;

    //card-container: create the <div> of the card-container and add its class and append it to his parrent
    const myNoteDiv = document.createElement("div");
    myNoteDiv.setAttribute("note-id", id);
    myNoteDiv.classList.add("card-container");
    myNoteDiv.style.order = -index;
    myNote.prepend(myNoteDiv);

    //remove-btn: create the <a> of the remove-btn  and add its class and apeend it to his parrent
    const removeBtn = document.createElement("a");
    removeBtn.classList.add("remove-btn");
    removeBtn.appendChild(document.createTextNode("✕"));
    removeBtn.setAttribute("href", "#");
    myNoteDiv.appendChild(removeBtn);

    const editBtn = document.createElement("span");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
    myNoteDiv.appendChild(editBtn);

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
    frontH2.setAttribute("class", "front-of-card");
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

  document.querySelectorAll(".edit-btn").forEach((el) => {
    el.addEventListener("click", editNote);
  });
}

// removing notes from LS
function removeNoteFromLs(id) {
  //access to the values from LS
  const noteFromLS = getNoteObjectFromLS();

  // using delegation to avoid bubbling effect by compairing the subject values

  noteFromLS.forEach((note, index) => {
    if (note.id == id) {
      noteFromLS.splice(index, 1);
    }
  });
  //set new array (removed some note array) to the LS
  localStorage.setItem("notes", JSON.stringify(noteFromLS));
}

// set a value "1" to LS if user remove the example note (to using it in the function localStorageOnLoad())
function removeExample() {
  localStorage.setItem("example", "1");
}

//*****************************************************************\\
// contact aly3n via this mail: dev.aly3n [AAATTT] gmail {dot} com ||
//*****************************************************************//
