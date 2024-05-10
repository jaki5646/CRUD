import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    salt: { type: String, require: true },
    GLOBAL_ID: { type: String, require: true },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'profile' },
});

const profileSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'user', require: true, unique: true },
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    placeOfBirth: String,
    nationality: String,
    education: [{ institution: String, degree: String, startDate: Date, endDate: Date || null }],
    skills: [String],
    projects: [{ name: String, description: String, role: String, startDate: Date, endDate: Date || null }],
    workHistory: [{ company: String, role: String, startDate: Date, endDate: Date }],
    hobbies: [String],
    goals: [String],
    terminate: Boolean
});

export const userModel = mongoose.model('users', userSchema)
export const profileModel = mongoose.model('profile', profileSchema)