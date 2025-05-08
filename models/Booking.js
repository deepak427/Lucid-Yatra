import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  contact: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    default: "",
  },
  travelDate: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
