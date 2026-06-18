import express from 'express';
import { sampleProducts } from './data';
const app = express();
app.get('/api/products', (req, res) => {
    res.json(sampleProducts);
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
