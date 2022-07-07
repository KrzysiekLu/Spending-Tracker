import Localbase from "localbase";
import dateModule from "./date.js";
import transactionsList from "./TransactionsList.js";

export class App {
  dataBase;
  addBtn;
  categoryInput;
  transactionValueInput;

  date = dateModule.date;

  constructor() {
    this.dataBase = new Localbase("Wydatki");
    this.addBtn = document.querySelector(".add");
    this.categoryInput = document.querySelector(".catagory");
    this.transactionValueInput = document.querySelector(".value");
    this.dateInput = document.querySelector(".date");

    this.addListeners();
  }

  addListeners() {
    this.addBtn.addEventListener("click", () => this.createExpanse());
  }
  clearInputs() {
    this.categoryInput.value = "";
    this.transactionValueInput.value = "";
    this.dateInput.value = "";
  }
  createExpanse() {
    console.log(this.date.dateEdited);

    if (this.validateInputs()) {
      const expance = new Expense(
        this.transactionValueInput.value,
        this.categoryInput.value,
        this.date.dateEdited
      );
      this.dataBase.collection("expances").add(expance);
      this.clearInputs();
    } else {
      console.log("puste");
      return;
    }
  }
  validateInputs() {
    return this.transactionValueInput.value !== "" &&
      this.categoryInput.value !== ""
      ? true
      : false;
  }
}

class Expense {
  constructor(value, category, date) {
    this.value = value;
    this.category = category;
    this.date = date;
  }
}

export const app = new App();
