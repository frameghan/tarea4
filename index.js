const{leerInput,
inquirerMenu,
pausa}=require('./helpers/inquirer');

const Busquedas =require('./models/busqueda')
const main = async()=>{
let opt;
const busquedas =new Busquedas();
do{

    opt=await inquirerMenu();
        switch(opt){
            case 1:
                const lugar=await leerInput('Ciudad:  ');
                await busquedas.ciudad(lugar);

                console.log('\nInformacion de la ciudad\n'.green);
                console.log("Ciudad:  ", );
                console.log("Lat: ", );
                console.log("Lng: ", );
                console.log("Temperatura: ", );
                console.log("Minima:  ", );
                console.log("Maxima:  ", );

            break;
        }

        if(opt!==0)await pausa();

}while(opt!==0);
}
main();