import { kedvencLista } from "./Kedvenc.js";
class Termek{
    #allapot
    constructor(tartalmHely, adat) {

        this.tartalmHely = this.tartalmHely;
        this.adat=adat
        this.#allapot = true;
        console.log(adat)
        tartalmHely.append(`<div><h2>${adat.cim}</h2> <p> ${adat.éve}</p> <button  type="button">Click Me!</button></div>`)
        const gomb = $("div:last-child button")    
        gomb.on("click",()=>{
           /*  console.log(adat) */
            adat.push(kedvencLista)
            console.log(kedvencLista)
        }
        )

}
}
export default Termek;