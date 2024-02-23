import React from 'react';
import { useSelector } from 'react-redux';
import { useParams ,Link} from 'react-router-dom';

export default function Detaile() {
    const infos = useSelector(state => state.info);
    const { id } = useParams();
    let ID=parseInt (id);
    const result = infos.find(stagaire => stagaire.id === ID);
    if(result){
      console.log('the result is ',result)
    }
    else{
      console.log('not found')
    }

    return (
      <div>
        {
          result?   
          <div>
          <h1>the detaile of {result.nom}</h1>
             <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={result.image} alt="Card image cap"/>
                    <div class="card-body">
                        <div>
                          <span>nom:{result.nom}</span>
                        </div>
                        <div>
                          <span>prenom:{result.prenom}</span>
                        </div>
                        <div>
                          <span>fillier:{result.fillier}</span>
                        </div>
                          <Link to='/'>go back</Link>
                    </div>
                </div>
          </div>
          
          :"not found"
        }
      </div>
    );
}
