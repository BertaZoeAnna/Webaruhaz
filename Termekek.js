import Termek from "./Termek.js";
import { TERMEKLISTA } from "./adatok.js";

class Termekek {
  #kedvencek = [];
  constructor() {
    const szuloElem = $("article");
    for (let index = 0; index < TERMEKLISTA.length; index++) {
      const t1 = new Termek(szuloElem, TERMEKLISTA[index]);
    }

    $(window).on("kedvenc", (event) => {
      this.#kedvencek.push(event.detail);
      console.log(this.#kedvencek)
    });
  }
}

export default Termekek;