class Aszinkrn {
  constructor() {}

  adatBetolt(vegpont, callbackFv) {
    fetch(vegpont,{method:"get", headers:{"Content-Type":"application.json"}})
      .then((response) => response.json())
      .then((data) => {
        /* console.log(data);*/
        /*  console.log("data.adatLista", data.adatLista);  */
        /* console.log("fetchen belul lista:", lista); */
        callbackFv(data);
      })
      .catch((error) => console.log(error));
  }
  adatTorol(vegpont,id) {
    vegpont=vegpont+"/"+id
    fetch(vegpont,{method:"delete", headers:{"Content-Type":"application.json"}})
      .then((response) => response.json())
      .then((data) => {
        /* console.log(data);*/
        /*  console.log("data.adatLista", data.adatLista);  */
        /* console.log("fetchen belul lista:", lista); */
        
      })
      .catch((error) => console.log(error));
  }
  
}
export default Aszinkrn