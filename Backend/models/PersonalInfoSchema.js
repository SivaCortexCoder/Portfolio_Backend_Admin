import mongoose from 'mongoose'

const personalInfoSchema = mongoose.Schema({
      name: { type: String, required: true },
  role: { type: String, required: true },
  tagline: { type: String, required: true },
  image: { type: String, required: true },
  about: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  github: { type: String, required: true },
  linkedin: { type: String, required: true }
}, 
{ timestamps: true }
);

const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema)

export default PersonalInfo;