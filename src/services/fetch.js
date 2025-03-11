async function posData(info,endpoint){
    try{
        const peticion = await fetch(`http://localhost:3000/${endpoint}`,{
            method: "POST",
            headers:{
                "Content-Type":"aplication/json"
            },
            body:JSON.stringify(info)
        })
        const data = await peticion.json()
        console.log(data);
        return data
    }catch(error){
        console.error(error)
    }
}
async function getInfo(endpoint) {
    try {
        const peticion = await fetch (`http://localhost:3000/${endpoint}`)
        const data = await peticion.json()
        console.log(data);

        return data
    } catch (error) {
        console.error(error)
    }
}
async function patchData(info,endpoint,id) {
    try {
        const peticion = await fetch(`http://localhost:3000/${endpoint}/${id}/`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
        const datos = await peticion.json()
        console.log(datos)
        return datos
    } catch (error) {
        console.error(error);
    }
}
async function deleteData(endpoint,id){
    try {
        const peticion = await fetch(`http://localhost:3000/${endpoint}/${id}/`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        const datos = await peticion.json()
        console.log(datos);
        return datos
    } catch (error) {
        console.error(error);
    }
}
export{getInfo,posData,patchData,deleteData}

    

















