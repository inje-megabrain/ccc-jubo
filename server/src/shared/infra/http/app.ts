import 'reflect-metadata';
import express from 'express';
import '../../core/ioc-container';
import { v1Router, } from './api/v1';

const origin = { origin: process.env.env === 'PRODUCTION' ? 'production_url' : '*', };

const app = express();
app.use(express.json());

app.use('/api/v1', v1Router);

app.listen(3000, () =>
	console.log('Server is running on port 3000'));
