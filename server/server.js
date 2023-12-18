import express from 'express';
import cors from 'cors';

import { journalRoutes } from './routes/journal/journalRoutes.js';

const app = express();

const PORT = 8080;

app.use(cors());
app.use('/api', journalRoutes);



app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});