const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    // user_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: false,
    //   ref: "User",
    // },
    service: {
      type: String,
      required: [true, "please add the service name"],
    },
    category: {
      type: String,
      required: [true, "please add the category"],
    },
    contact: {
      name: {
        type: String,
        required: [true, "please add the contact name"],
      },
      email: {
        type: String,
        required: [true, "please add the email address"],
      },
      phone: {
        type: String,
        required: [true, "please add the phone number"],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);
