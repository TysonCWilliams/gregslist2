import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
    {
        make: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: Number, required: true, min: 1900, max: 2021 },
        price: { type: Number, required: true },
        imgUrl: { type: String, required: true, default: "http://placehold.it/200" },
        description: { type: String, maxlength: 200 }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;