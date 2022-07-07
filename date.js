class DateValue {
  date = new Date();
  dateEdited;
  dateInput = document.querySelector(".date");

  constructor() {
    this.editDate();
    this.dateInput.addEventListener("change", () => this.setCostumeDate());
  }

  editDate() {
    this.dateEdited = [
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      this.date.getDate(),
    ];
  }
  setCostumeDate() {
    this.dateEdited = this.dateInput.value.split("-");
    const costumeDate = this.dateEdited.map((el) => parseInt(el, 10));
    this.dateEdited = costumeDate;
  }
}
const date = new DateValue();
export default { date };
