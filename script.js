const noteContainer = document.querySelector(".note-container");
const btn = document.querySelector(".btn");

function showNote(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}
showNote()
 function updateStorage(){
     localStorage.setItem("notes",noteContainer.innerHTML)
 }

btn.addEventListener("click", () => {
    let noteBox = document.createElement("p");
    let deleteImage = document.createElement("img");

    noteBox.className = "note";
    deleteImage.className = "delete-img";

    noteBox.setAttribute("contenteditable", "true");
    deleteImage.src = "delete.jpg";

    noteContainer.appendChild(noteBox).appendChild(deleteImage);
});

noteContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName ==="P"){
        notes = document.querySelectorAll(".note");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
})