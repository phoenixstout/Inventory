import { mongoose } from 'mongoose';

const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: {type: String}
  });
CategorySchema.virtual('url').get(function() {
    return `/catalog/genre/${this.id}`
})

export default mongoose.model("Category", CategorySchema)