const express = require('express');
const cors = require('cors');
const app = express();

// Importar rutas
const productRoutes = require('./api/routes/productRoutes');

// Middlewares
app.use(cors());
app.use(express.json());

// Usar rutas
app.use('/api/products', productRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
