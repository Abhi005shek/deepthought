import { contentTemplate, fetchData, journeyBoard } from "./helper.js";

const content_wrapper = document.querySelector(".content-wrapper");
const title = document.querySelector(".title-wrapper h2");
const task_title = document.querySelector(".description h3");
const task_description = document.querySelector(".description p");
const sidebar_arrow = document.querySelector(".sidebar-arrow");
const ullist = document.querySelector(".subsidebar-two ul");

sidebar_arrow.addEventListener("click", journeyBoard);

const data = await fetchData();

title.innerText = data?.title;
task_title.innerText = data?.tasks[0]?.task_title;
task_description.innerText = data?.tasks[0]?.task_description;
ullist.innerHTML =
  `<li class='task-title'>${data?.tasks[0]?.task_title}</li>` +
  data?.tasks[0]?.assets.map((el) => `<li>${el.asset_title}</li>`).join("");

data?.tasks[0].assets?.map((el) => {
  const data = contentTemplate(el);
  content_wrapper.innerHTML += data;
});

const threadbuilder_arrowicon = document.querySelector(".threadbuilder p");
const threadbuilder_asset = document.querySelector(".threadbuilder-asset");
let iscollapse = false;

export function handleClick() {
  if (!iscollapse) {
    this.style.transform = "rotate(180deg)";
    threadbuilder_asset.style.opacity = 0;
    iscollapse = true;
  } else {
    this.style.transform = "rotate(0deg)";
    threadbuilder_asset.style.opacity = 1;
    iscollapse = false;
  }
}
threadbuilder_arrowicon.addEventListener("click", handleClick);

const box1_controller = document.querySelector(".box1-controller");
const box1_controller_arrow = document.querySelector(".box1-controller p");
const box2_controller = document.querySelector(".box2-controller");
const box2_controller_arrow = document.querySelector(".box2-controller p");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

box1_controller.addEventListener("click", () => {
  if (box1.style.display === "block") {
    box1.style.display = "none";
    box1_controller_arrow.style.transform = "rotate(180deg)";
  } else {
    box1.style.display = "block";
    box1_controller_arrow.style.transform = "rotate(0deg)";
  }
});

box2_controller.addEventListener("click", () => {
  if (box2.style.display === "block") {
    box2.style.display = "none";
    box2_controller_arrow.style.transform = "rotate(180deg)";
  } else {
    box2.style.display = "block";
    box2_controller_arrow.style.transform = "rotate(0deg)";
  }
});
