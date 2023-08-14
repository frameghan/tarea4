const axios = require ('axios');
class Busquedas{
    historial=['zona ZUR','El Alto','miraflores']
    constructor(){

    }
    async ciudad (lugar=''){

        try{
       /*  console.log('ciudad ',lugar); */
       
       const resp =await axios.get('https://reqres.in/api/users?page=2');
       console.log(resp.data.per_page);
       return[]
        }
        catch(error){
            return[];
        }
;

    }
}
module.exports=Busquedas;