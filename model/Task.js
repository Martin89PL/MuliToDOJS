const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    completed: {
        type: Boolean,
        require: true
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
