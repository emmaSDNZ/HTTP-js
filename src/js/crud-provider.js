
const urlCRUD = 'https://reqres.in/api/users';

const getAllUser = async()=>{
    const resp = await fetch(`${urlCRUD}`);
   
    const {data} = await resp.json()
    console.log("data", data)
    return data
}

const getUsuario = async( id ) => {

    const resp = await fetch(`${ urlCRUD }/${ id }`);
    const { data } = await resp.json();
    return data;
}


//METODO POST
const crearUsuario = async( usuario ) => {

    const resp = await fetch( urlCRUD, 
        {
        method: 'POST',
        
        body: JSON.stringify( usuario ),
        //headers -> data adicional para el back.
        headers: {
            //esto le dice al back que le mando info en formato json.
            'Content-Type': 'application/json'
                 }
        }
    );
    
    return await resp.json();
}


//METODO PUT
const actualizarUsuario = async( id, usuario ) => {

    const resp = await fetch( `${ urlCRUD }/${ id }`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    return await resp.json();
}


//METODO DELETE
const borrarUsuario = async( id ) => {

    const resp = await fetch(  `${ urlCRUD }/${ id }`, {
        method: 'DELETE'
    });
    console.log(resp.og)
    return ( resp.ok ) ? 'Borrado' : 'No se pudo eliminar';

}



export {
    getAllUser,
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}