import { createRouter } from 'next-connect';
import Order from '../../../../models/Order';
import db from '../../../../utils/db';
import { isAuth } from '../../../../utils/auth';

const router = createRouter();

router.use(isAuth).get(async (req, res) => {
  await db.connect();
  const order = await Order.findById({ _id: req.query.id });
  await db.disconnect();
  res.send(order);
});

export default router.handler();
