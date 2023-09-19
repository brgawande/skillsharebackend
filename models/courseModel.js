import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: [20, "Description must be atleast 20 Charecters"],
    maxLength: [80, "Description cant exceed 80 charecters"],
  },
  lectures: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      video: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    },
  ],

  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  numOfVideos: {
    type: Number,
    default: 0,
  },

  views: {
    type: Number,
    default: 0,
  },

  category: {
    type: String,
    required: true,
  },

  createdBy: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Course = mongoose.model("Course", courseSchema);
