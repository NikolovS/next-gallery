import { createRouter } from 'next-connect';
import Order from '../../../models/Order';
import { onError } from '../../../utils/error';
import db from '../../../utils/db';
import { isAuth } from '../../../utils/auth';

const router = createRouter();

router.use(isAuth).get(async (req, res) => {
  await db.connect();
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
  await db.disconnect();
});

export default router.handler({ onError });
