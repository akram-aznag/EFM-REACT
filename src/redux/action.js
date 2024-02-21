const Ajouter_donne=(NOM,PRENOM,FILLIER,IMAGE,ID)=>{
    return{
        type:"ajouter",
        payload:{
            id:ID,
            nom:NOM,
            prenom:PRENOM,
            fillier:FILLIER,
            image:IMAGE,
        }
    }
}
export {Ajouter_donne};