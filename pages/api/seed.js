import { createRouter } from 'next-connect';
// import Product from '../../models/Product';
// import User from '../../models/User';
// import db from '../../utils/db';
// import data from '../../utils/data';

const router = createRouter();

router.get(async (req, res) => {
  return res.send({ message: 'already seeded' });
  // await db.connect();
  // await User.deleteMany();
  // await User.insertMany(data.users);
  // await Product.deleteMany();
  // await Product.insertMany(data.products);
  // await db.disconnect();
  // res.send({ message: 'seeded successfully' });
});

export default router.handler();
