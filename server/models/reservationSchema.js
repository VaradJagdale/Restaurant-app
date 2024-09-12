import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!"],
        maxLength: [30, "First name cannot exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Phone number must contain exactly 10 digits!"]
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
        match: [/^\d{2}:\d{2}$/, "Time must be in HH:MM format"]
    },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
