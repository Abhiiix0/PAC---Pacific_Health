const closebtn = document.getElementById("closebtn");
const editsigninModal = document.getElementById("edit-signin-modal");
const editsignModalOpenbtn = document.getElementById("Edit-signin");

editsignModalOpenbtn.addEventListener("click", () => {
  editsigninModal.style.display = "block";
});

closebtn.addEventListener("click", () => {
  editsigninModal.style.display = "none";
});
