import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const GuitarSchema = new Schema({
  name: { type: String, required: true, maxLength: 15 },
  description: { type: String, required: true, minLength: 1, maxLength: 100 },
  category: {type: Schema.Types.ObjectId, ref: "Category"},
  price: {type: Number},
  num_in_stock: {type: Number},
});

GuitarSchema.virtual('url').get(function() {
    return `/catalog/guitar/${this.id}`
})

export default model('Guitar', GuitarSchema)
