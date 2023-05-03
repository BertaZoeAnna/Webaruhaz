import { TERMEKLISTA } from "./adatok.js";
import Termek from "./Termek.js";
class Termekek{
    constructor(){
        const tartalmHely=$("article");
        for (let index = 0; index < TERMEKLISTA.length; index++) {
            const elem = new Termek(tartalmHely ,TERMEKLISTA[index]);
            
          }
          
    }
}
export default Termekek;