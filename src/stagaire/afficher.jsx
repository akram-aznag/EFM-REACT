import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export default function Afficher() {
    const infos=useSelector(state=>state.info);
      console.log(infos);

    const {id}=useParams();
  return (
    <div>
        <h1>afficher</h1>
        {infos?
            infos.map(element=>{
                return(
                    <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={element.image} alt="Card image cap"/>

                    <div class="card-body">
                    <div>
                        <span>nom:{element.nom}</span>
                       
                    </div>
                    <div>
                        <span>prenom:{element.prenom}</span>
                       
                    </div>
                    <div>
                        <span>fillier:{element.fillier}</span>
                       
                    </div>
                    
                      <Link to={`/detailes/${element.id}`}>details</Link>
                    </div>
                  </div>
                )
            })
        :"empty"}
    </div>
  )
}
