import Termek from "./Termek.js";
/* import { TERMEKLISTA } from "./adatok.js"; */
import Aszinkrn from "./aszinkron.js";
class Termekek {
  #kedvencek = [];
  constructor() {
    const aszinkrn = new Aszinkrn();
    let vegpont="http://localhost:3000/TERMEKLISTA";
    aszinkrn.adatBetolt(vegpont,this.megjelenit);
  

    $(window).on("kedvenc", (event) => {
      this.#kedvencek.push(event.detail);
      console.log(this.#kedvencek)
    });
    $(window).on("torol", (event) => {
        
        console.log(event.detail)
      });
  }
  megjelenit(adat){
    console.log(adat)
    let TERMEKLISTA=adat;
    const szuloElem = $("article");
    for (let index = 0; index < TERMEKLISTA.length; index++) {
      const t1 = new Termek(szuloElem, TERMEKLISTA[index]);
    }
  }
}

export default Termekek;