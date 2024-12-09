import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: { type: String},
    email: { type: String, required: true },
    username: { type: String, required: true },
    dob: { type: Date },
    profilepic: { type: String },
    coverpic: { type: String },
    mobile: { type: Number },
    address: { type: String },
    bio: { type: String },
    about: { type: String },
    razorpay_id: { type: String },
    razorpay_secret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

export default mongoose.models.User || model('User', UserSchema);
