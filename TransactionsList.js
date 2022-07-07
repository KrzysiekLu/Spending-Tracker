import Localbase from "localbase";
import App from "./script.js";

class TransactionsList {
  dataBase = new Localbase("Wydatki");
  transactions;
  last;
  constructor() {
    this.last = document.querySelector(".last");
    this.last.addEventListener("click", () => this.getData());
  }
  getData() {
    this.dataBase
      .collection("expances")
      .get()
      .then((transactions) => {
        this.transactions = transactions;
        console.log(this.transactions);
      });
  }
  renderTransactions() {}
}

// export const transactionsList = new TransactionsList();
