import React from 'react';
const initstate={
    info:[]
}
export default function Reducer_function(state=initstate,{type,payload}) {
    switch (type){
        case 'ajouter':
            return{
                ...state,info:[...state.info,payload]
            }
    }
  return state;
}
