const mongoose = require('mongoose');

const schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const clusterSchema = new schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  age: {
    type: Number,
    required: [true, 'age is required'],
  },
  Gender: {
    type: String,
    required: [true, 'name is required'],
  },
});

export default mongoose.model('users', clusterSchema);
