import { Get_contacts_load,Get_contacts_success,Get_contacts_fail,
    delete_contact,Get_contact,Post_contact,Edit_contact} from "../Constantes/contact";
import axios from "axios";
export const getcontacts=()=> async(dispatch) =>{
    dispatch({type:Get_contacts_load})
    
    try {
        let result= await axios.get("/api/contact/");
    dispatch({type:Get_contacts_success,payload:result.data.result})
    } catch (error) {
        dispatch({type:Get_contacts_fail,payload:error})
    }
}


export const deletecontact=(id)=> async(dispatch)=>{
  try {
      let result= await axios.delete(`/api/contact/${id}`);

      dispatch(getcontacts())
    
   } 
   catch (error) {console.log(error)}
}


export const getcontact=(id)=> async(dispatch)=>{
    try {
        let result= await axios.get(`/api/contact/${id}`);
  
        dispatch({type:Get_contact, payload:result.data.response})
     console.log(result.data)
     } 
     catch (error) {console.log(error)}
  }
  export const postContact=(user)=>async(dispatch)=>{
      try {
        let result= await axios.post('/api/contact/',user)  
        dispatch(getcontacts())
      } catch (error) {
          console.log(error)
      }
     
  }
  export const editContact =(id,user)=>async(dispatch)=>{
      try {
          let result=await axios.put(`/api/contact/${id}`,user);
         
          dispatch({type:Edit_contact,payload:result.data})
          dispatch(getcontacts())
      } catch (error) {
          console.log(error)
      }

  }
 