import { createRouter } from 'next-connect';
import Order from '../../../models/Order';
import { onError } from '../../../utils/error';
import db from '../../../utils/db';
import { isAuth } from '../../../utils/auth';

const router = createRouter();

router.use(isAuth).post(async (req, res) => {
  await db.connect();
  const newOrder = new Order({
    ...req.body,
    user: req.user._id,
  });

  const order = await newOrder.save();
  res.status(201).send(order);
  await db.disconnect();
});

export default router.handler({ onError });
