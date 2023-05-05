class Termek {
  constructor(szuloElem, elem) {
    this.szuloElem = szuloElem;
    this.elem = elem;
    szuloElem.append(
      `<div class="card"><div class="card-header">${elem.cim}</div><div class="card-body">${elem.éve}</div><button  class="kedvenc">Kedvenc</button><button  class="delete">Delete</button></div>`
    );
    /*
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">Content</div>
  <div class="card-footer">Footer</div>
</div>
    */

    const BTTN = $(`.kedvenc:last-child`);
    const deletebt=$(`.delete:last-child`)
    BTTN.on("click", () => {
      this.esemenyTrigger();
    });
    deletebt.on("click",() => {
      this.torol()
    })
  }

  esemenyTrigger() {
    const esemeny = new CustomEvent("kedvenc", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
  torol(){
    const esemeny = new CustomEvent("torol", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Termek;
