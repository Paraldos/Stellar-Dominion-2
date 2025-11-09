class Main {
  display = document.querySelector(".display");
  plusOne = document.querySelector(".plusOne");
  saveBtn = document.querySelector(".saveBtn");
  loadBtn = document.querySelector(".loadBtn");

  counter = 0;

  constructor() {
    this.updateCounter();
    this.plusOne?.addEventListener("click", () => {
      this.counter += 1;
      this.updateCounter();
    });
    this.saveBtn?.addEventListener("click", () => {
      localStorage.setItem("stellarDominionCounter", String(this.counter));
    });
    this.loadBtn?.addEventListener("click", () => {
      const storageCounter = localStorage.getItem("stellarDominionCounter");
      this.counter = parseFloat(storageCounter);
      this.updateCounter();
    });
  }

  updateCounter() {
    if (!this.display) return;
    this.display.innerHTML = `Counter: ${this.counter}`;
  }
}

new Main();
