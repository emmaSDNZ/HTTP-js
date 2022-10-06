//import { init } from './js/chistes-page';
//import { obtenerUsuarios } from './js/http-provider';
//import { init } from './js/usuarios-page';
import { init } from './js/archivos-page';

//import * as CRUD from './js/crud-provider';


//obtenerUsuarios().then(console.log)

init();


/* <

SOLICITUD CLASICA DE FETCH

fetch( jokeURL ).then( resp => {

    console.log(resp.body)
    //la respuesta esta en el body -> al body lo convierto en un json
    
    resp.json().then(data =>{

        console.log(data)
        console.log(data.value)
        console.log(data.id)
    })



    //200 todo ok
    //201 registro creado
    //404 no se encontraron los recursos
    //500 problemas del lado del servidor
})

*/


/* 

FORMA RESUMIDA DE HACER LLAMADOS A UN FETCH


fetch( jokeURL )
    .then( resp => resp.json())
    .then(({id, value}) => console.log({id,value}))


 */

 //CRUD.getUsuario(  ).then( console.log );

// CRUD.crearUsuario({
//     name: 'Fernando',
//     job: 'Carpintero'
// }).then( console.log );

// CRUD.actualizarUsuario( 1, {
//     name: 'Melissa',
//     job: 'Developer'
// }).then( console.log );


// CRUD.borrarUsuario( 1 ).then( console.log );