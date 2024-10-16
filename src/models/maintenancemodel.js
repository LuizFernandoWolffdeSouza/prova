import { Schema, model } from "mongoose";
import { type } from "os";


const maintenances = new Schema({
    workshop: {
        type: [Schema.Types.ObjectId],
        ref: "workshop",
        required:true
    },
    vehicle: {
        type: [Schema.Types.ObjectId],
        ref: "vehicle",
        required:true
    },
    services: {
        type: [{
         name: [String],
         num: [Number]
         
    }],
        required:true
        
    },
    date: {
        type: Date,
        required:true

    },
    totalcost: {
        type: Number,
        required:true

    }
})
export default model('maintenance', maintenances)