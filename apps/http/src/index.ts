import express from "express";

import { router } from './routes/v1'

const app = express();

app.use('/api/v1',router)

app.listen(process.env.PORT || 8000,()=>{
    console.log('Server is running on port 8000');
});
