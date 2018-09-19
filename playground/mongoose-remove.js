const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result)
// });

Todo.findByIdAndRemove('5ba2a0b4b83024e1df7b661f').then((todo) => {
    console.log(todo)
});