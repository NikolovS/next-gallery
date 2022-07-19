import { createRouter } from 'next-connect';
import Product from '../../../../models/Product';
import db from '../../../../utils/db';

const router = createRouter();

router.get(async (req, res) => {
  await db.connect();
  const product = await Product.findById({ _id: req.query.id });
  await db.disconnect();
  res.send(product);
});

export default router.handler();
