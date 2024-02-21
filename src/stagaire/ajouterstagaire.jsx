import React, { useState } from 'react';
import { Ajouter_donne } from '../redux/action';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';

export default function Ajouterstagaire() {
  const dispatch=useDispatch();
  let compteur=0;
  const [data,setdata]=useState({
    nom:'',
    prenom:'',
    fillier:'',
    image:'',
    id:1
  });
  function get_name_data(e){
    setdata(()=>{
      return{
        ...data,nom:e
      }
    })
  }
  function get_prenom_data(e){
    setdata(()=>{
      return{
        ...data,prenom:e
      }
    })
  }
  function get_prenom_data(e){
    setdata(()=>{
      return{
        ...data,prenom:e
      }
    })
  }
  function get_fillier_data(e){
    setdata(()=>{
      return{
        ...data,fillier:e
      }
    })
  }
  function get_image_data(e){
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setdata((prevData) => ({
          ...prevData,
          image: reader.result, // Store the base64-encoded image string
        }));
      };

      reader.readAsDataURL(file);
    }
  }
  function HandleSubmit(e){
    e.preventDefault();
    setdata({
      ...data,id:data.id+1
    })
   
    dispatch(Ajouter_donne(data.nom,data.prenom,data.fillier,data.image,data.id));
  


  }
  const infos=useSelector(state=>state.info);
  console.log(infos);
  return (
    <div>
       <form onSubmit={(e)=>HandleSubmit(e)}>
             <div>
                    <label htmlFor="">image</label>
                    <input type="file"  placeholder='image'  onChange={e=>get_image_data(e)}/>
             </div>
             <div>

                  <label htmlFor="">nom</label>
                  <input type="text"  id="" placeholder='nom' onChange={(e)=>get_name_data(e.target.value)}/>
             </div>
             <div>

                  <label htmlFor="">prenom</label>
                  <input type="text"  id="" placeholder='prenom' onChange={(e)=>get_prenom_data(e.target.value)}/>
             </div>

             <div>
                  <label htmlFor="">fillier</label>
                  <input type="text" name="" id="" onChange={(e)=>get_fillier_data(e.target.value)}/>
             </div>
             <button type="submit">ajouter</button>
       </form>
    </div>
  )
}
