var missionInput = document.getElementById("searchbarwidth");
var addButton = document.getElementById("searchbutton");
var colourButton = document.getElementById("headbutton");
var missionList = document.getElementById("missionList");
var totalCount = document.getElementById("totalCount");
var completedCount = document.getElementById("completedCount");
var pendingCount = document.getElementById("pendingCount");
function updateCounter() {
    var total = missionList.children.length;   
    var completed = 0;
    for (var i = 0; i < total; i++) {
        if (missionList.children[i].classList.contains("completed")) {
            completed = completed + 1;
        }
    }
    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = total - completed;
}
function addMission() {
    var text = missionInput.value.trim();  
    if (text === "") {
        alert("Please enter a mission!");
        return;
    }
    var mission = document.createElement("div");
    mission.className = "missionitem";
    var missionText = document.createElement("span");
    missionText.className = "missiontext";
    missionText.textContent = text;
    var deleteButton = document.createElement("button");
    deleteButton.className = "deletebutton";
    deleteButton.textContent = "Delete";
    missionText.onclick = function () {
        mission.classList.toggle("completed");
        updateCounter();
    };
    deleteButton.onclick = function () {
        mission.remove();
        updateCounter();
    };
    mission.appendChild(missionText);
    mission.appendChild(deleteButton);
    missionList.appendChild(mission);
    missionInput.value = "";
    updateCounter();
}
function changeColour() {
    document.body.style.backgroundColor = "lightblue";
}
addButton.onclick = addMission;
colourButton.onclick = changeColour;
missionInput.onkeydown = function (event) {
    if (event.key === "Enter") {
        addMission();
    }
};
