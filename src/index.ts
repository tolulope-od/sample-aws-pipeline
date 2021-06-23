import express, {
  Application, Request, Response, NextFunction,
} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ debug: process.env.NODE_ENV !== 'production' });

const app: Application = express();
const PORT: number = parseInt(process.env.PORT, 2) || 1001;
app.use(cors());

app.get('/', (req: Request, res: Response): object => res.status(200).json({
  status: 'success',
  data: {},
  message: 'Test API Works 🚀',
}));


app.listen(PORT, () => console.log(`All Systems GO: Server running on PORT:${PORT}`));

export default app;
