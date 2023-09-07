import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    id: { type: Number,  unique: true, required: true},
    title: {type: String, required: true }
});

MovieSchema.statics.findByMovieDBId = function (id) {
    return this.findOne({ id: id });
};

export default mongoose.model('Movie', MovieSchema);