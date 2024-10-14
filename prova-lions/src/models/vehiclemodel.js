import { Schema, model } from "mongoose";
import { type } from "os";

const veiculo = new Schema({
    plate: {
        type:String,
        required: true
    },
    model :{
        type:String,
        required: true

    },
    year : {
        type:Number,
        required: true
    },
    owner : {
        type:String,
        required: true
    },
    maintences:{
        type: [Schema.Types.ObjectId],
        ref: "maintences",
        required: true

    }
})
export default model('oficina',veiculo)