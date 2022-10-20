let input = document.querySelector(".input-task");
let ul = document.querySelector("ul");

function addTask() {
  if (input.value != "") {
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";

    //Edit Button
    let editButton = document.createElement("button");
    editButton.innerText = "EDIT";
    editButton.style.marginLeft = "10px";
    editButton.style.padding = "4px";

    li.append(editButton);
    editButton.addEventListener("click", function () {
      input.value = li.childNodes[0].nodeValue;
    });

    //Delete Button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.padding = "4px";

    li.append(deleteButton);
    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    //Update Button
    let updateButton = document.createElement("button");
    updateButton.innerText = "UPDATE";
    updateButton.style.marginLeft = "10px";
    updateButton.style.padding = "4px";
    li.append(updateButton);
    updateButton.addEventListener("click", function () {
      li.childNodes[0].nodeValue = input.value;
    });
  } else {
    alert("Please insert some task before you add something");
  }
}
