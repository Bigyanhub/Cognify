import mongoose from 'mongoose'

const quizSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    documentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    questions: [{
        type:String,
        required: true,
    }],
    options: {
        type: [String],
        required: true,
        validate: [array => array.length === 4, 'Must have exactaly 4 options']
    }
})