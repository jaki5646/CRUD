import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
    salt: String,
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'profile' },
});

const profileSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    placeOfBirth: String,
    nationality: String,
    education: [{ institution: String, degree: String, startDate: Date, endDate: Date }],
    skills: [String],
    projects: [{ name: String, description: String, role: String, startDate: Date, endDate: Date }],
    workHistory: [{ company: String, role: String, startDate: Date, endDate: Date }],
    hobbies: [String],
    goals: [String]
});

export const userModel = mongoose.model('users', userSchema)
export const profileModel = mongoose.model('profile', profileSchema)