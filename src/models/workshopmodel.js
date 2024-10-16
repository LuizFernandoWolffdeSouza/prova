import {Schema, model} from "mongoose";
import { type } from "os";

const oficina = new Schema({
    name:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true

    },
    specialites: {
        type:[String], 
        required: true
    }

})
export default model('oficinas', oficina)

