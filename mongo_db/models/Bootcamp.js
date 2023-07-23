const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
    unique: true,
    trim: true,
    maxLength: [50, "Name can not be more than 50 charachters"],
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please add description"],
    maxLength: [500, "Description can not be more than 500 charachters"],
  },
  website: {
    type: String,
    match: [
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$]/,
      "Please enter valid url",
    ],
  },
  phone: {
    type: String,
    maxLength: [20, "Phone number can not be more than 20 charachters"],
  },
  email: {
    type: String,
    match: [/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, "Please add valid email"],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere",
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  carrers: {
    type: [String],
    required: true,
    enum: [
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Data Science",
      "Business",
      "other",
    ],
  },
  averegeRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating cannot be higher than 10"],
  },
  averegeCost: Number,
  photo: {
    type: String,
    default: "no-photo",
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bootcamp", bootcampSchema);
