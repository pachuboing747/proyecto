import lista from "../lista/lista.json"

export const requestData = (id) => {
    return new Promise ((resultado) =>{
        setTimeout(() =>{
            resultado(lista)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) =>{

        const item = lista.find( (prod) => prod.id == id)
        
        if(item) {
            resolve(item)
        }else{
            reject({
                error: "error"
            })
        }
    })
}