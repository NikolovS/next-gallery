import { createRouter } from 'next-connect';
import { isAuth } from '../../../utils/auth';

const router = createRouter();

router.use(isAuth).get(async (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

export default router.handler();
