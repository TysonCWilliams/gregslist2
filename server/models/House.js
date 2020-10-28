import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
    {
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        levels: { type: Number, required: true },
        imgUrl: { type: String, required: true, default: "http://placehold.it/200" },
        description: { type: String, maxlength: 200 }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default House;