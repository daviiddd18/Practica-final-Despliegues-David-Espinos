const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_URL || 'mongodb://mongodb:27017/libros';

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB.'))
.catch(err => console.error('Error al conectarse a MongoDB', err));
