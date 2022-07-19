import { createRouter } from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import User from '../../../../models/User';
import db from '../../../../utils/db';

const router = createRouter();

router.use(isAuth, isAdmin).get(async (req, res) => {
  await db.connect();
  const users = await User.find({});
  await db.disconnect();
  res.send(users);
});

export default router.handler();
