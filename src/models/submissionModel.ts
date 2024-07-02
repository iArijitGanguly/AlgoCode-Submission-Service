import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const submissionSchema = new Schema({
    userId: {
        type: String,
        required: [true, 'User Id for submission is missing']
    },

    problemId: {
        type: String,
        required: [true, 'Problem Id for the submission is missing']
    },

    code: {
        type: String,
        required: [true, 'Code for the submission is missing']
    },

    language: {
        type: String,
        required: [true, 'Language for the submission is missing']
    },

    status: {
        type: String,
        enum: ['Pending', 'Success', 'RE', 'TLE', 'MLE', 'WE'],
        default: 'Pending'
    }
});

const Submission = model('Submission', submissionSchema);

export default Submission;