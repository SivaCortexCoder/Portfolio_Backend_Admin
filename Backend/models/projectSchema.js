// models/Project.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imagelink1: {
      type: String,
      required: true,
    },
    imagelink2: {
      type: String,
      default: null,
    },
    imagelink3: {
      type: String,
      default: null,
    },
    tech: {
      type: [String], // Array of strings
      required: true,
    },
    githublink: {
      type: String,
      required: true,
    },
    livelink: {
      type: String,
      default: null,
    },
    detailedDescription: {
      type: String,
      required: true,
    },
    features: {
      type: [String], // Array of strings (from textarea split by line break)
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    // status: {
    //   type: String,
    //   enum: ["draft", "published"], // for Save as Draft vs Publish
    //   default: "published",
    // },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
