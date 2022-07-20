import { createRouter } from 'next-connect';
import Order from '../../../../models/Order';
import db from '../../../../utils/db';
import { isAuth } from '../../../../utils/auth';
import { onError } from '../../../../utils/error';

const router = createRouter();

router.use(isAuth).put(async (req, res) => {
  await db.connect();
  const order = await Order.findById({ _id: req.query.id });

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      email_address: req.body.email_address,
    };

    const paidOrder = await order.save();
    console.log('paidOrder', paidOrder);
    await db.disconnect();
    res.send({ message: 'order paid', order: paidOrder });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'order not found' });
  }
});

export default router.handler({ onError });
