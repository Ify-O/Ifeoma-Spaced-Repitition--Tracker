import { getData, addData } from "./storage.mjs";
import { getUserIds } from "./common.mjs";

//DOM ELEMENTS

const userSelect = document.getElementById("user-select");
const agendaContainer = document.getElementById("agenda-container");

const form = document.getElementById("newTopic-form");
const topicInput = document.getElementById("newTopic-name");
const dateInput = document.getElementById("newTopic-date");


//Setting the date to today by default
const today = new Date().toISOString().split("T")[0];
dateInput.value = today;

