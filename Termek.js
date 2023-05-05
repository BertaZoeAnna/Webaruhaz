class Termek {
  constructor(szuloElem, elem) {
    this.szuloElem = szuloElem;
    this.elem = elem;
    szuloElem.append(
      `<div class="card"><div class="card-header">${elem.cim}</div><div class="card-body">${elem.éve}</div><button type="button">Kedvenc</button></div>`
    );
    /*
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">Content</div>
  <div class="card-footer">Footer</div>
</div>
    */

    const BTTN = $(`div:last-child button`);

    BTTN.on("click", () => {
      this.esemenyTrigger();
    });
  }

  esemenyTrigger() {
    const esemeny = new CustomEvent("kedvenc", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Termek;