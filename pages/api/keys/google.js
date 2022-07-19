import { createRouter } from 'next-connect';
import { isAuth } from '../../../utils/auth';

const router = createRouter();

router.use(isAuth).get(async (req, res) => {
  res.send(process.env.GOOGLE_API_KEY || 'nokey');
});

export default router.handler();
