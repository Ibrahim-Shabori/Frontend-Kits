const textInput = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const renewCycleBtn = document.querySelector(".renew-cycle");
const tasksContainer = document.querySelector(".tasks");

// Quran Cycle

const QuranCycle = [
  "الأنعام",
  "الأعراف",
  "الحج - الأنبياء",
  "العنكبوت - الأحزاب",
  "آل عمران",
  "النساء",
  "الشعراء - القصص",
  "سبأ - ص",
  "المائدة ، التوبة - الأنفال",
  "المؤمنون - الفرقان",
  "الزمر - الشورى",
  "يونس - يوسف",
  "مريم - طه",
  "الزخرف - الفتح",
  "الرعد - النحل",
  "الإسراء - الكهف",
  "الحجرات - الحديد",
  "الفاتحة - البقرة",
  "المجادلة - الناس",
];

// End of Quran Cycle

function getItemsFromLocalStorageItems(items) {}

if (Object.hasOwn(localStorage, "tasks") && localStorage.tasks.length != 0) {
  tasksContainer.innerHTML = localStorage.tasks;
} else {
  localStorage.setItem("tasks", "");
}

// Constructing and Styling the to-do item
const taskElement = document.createElement("div");
taskElement.innerHTML = "<span></span><button>Delete</button>";
taskElement.style.cssText =
  "width:100%; display: flex; justify-content: space-between; align-items: center; background-color: #fff; padding: 0.8rem; border-radius: 0.6rem; margin-top: 1.5rem;";

taskElement.childNodes[0].style.cssText = "font-size: 2.5rem;";
taskElement.childNodes[1].style.cssText =
  "font-size: 1.5rem; color: #fff; background-color: #ff5333; padding: 0.7rem; border: none; outline: none; border-radius: 0.6rem; cursor: pointer";

tasksContainer.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    e.target.parentElement.remove();
    localStorage["tasks"] = tasksContainer.innerHTML;
  }
});

// End of Constructing and Styling the to-do item.

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (textInput.value.trim() != "") {
    const newTask = taskElement.cloneNode(1);
    newTask.childNodes[0].innerHTML = textInput.value;
    tasksContainer.append(newTask);
    localStorage["tasks"] = tasksContainer.innerHTML;
  }
});

renewCycleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < QuranCycle.length; ++i) {
    const newTask = taskElement.cloneNode(1);
    newTask.childNodes[0].innerHTML = QuranCycle[i];
    tasksContainer.append(newTask);
    localStorage["tasks"] = tasksContainer.innerHTML;
  }
});
