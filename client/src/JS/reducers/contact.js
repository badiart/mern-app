//import constant
 import { editContact } from "../actions/contacts";
import {Get_contacts_load,Get_contacts_success,Get_contacts_fail,Get_contact,Edit_contact} from "../Constantes/contact";
//initial state
const initialstate={
    contacts:[],
    loadcontact:false,
    errors:null,
    user:{},
editContact:""}
export const contactReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case Get_contacts_load:return{...state,loadcontact:true}
        case Get_contacts_success:return{...state,contacts:payload,loadcontact:false}
        case Get_contacts_fail:return{...state,loadcontact:false,errors:payload}
        case Get_contact:return{...state,user:payload}
        case Edit_contact:return{...state,editContact:payload}

        default:return state
    }
}