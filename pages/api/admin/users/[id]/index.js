import { createRouter } from 'next-connect';
import { isAdmin, isAuth } from '../../../../../utils/auth';
import User from '../../../../../models/User';
import db from '../../../../../utils/db';

const router = createRouter();

router.use(isAuth, isAdmin).get(async (req, res) => {
  await db.connect();
  const user = await User.findById({ _id: req.query.id });
  await db.disconnect();
  res.send(user);
});

router.use(isAuth, isAdmin).put(async (req, res) => {
  await db.connect();
  const user = await User.findById({ _id: req.query.id });
  if (user) {
    user.name = req.body.name;
    user.isAdmin = Boolean(req.body.isAdmin);
    await user.save();
    await db.disconnect();
    res.send({ message: 'User Updated Successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'User Not Found' });
  }
});

router.use(isAuth, isAdmin).delete(async (req, res) => {
  await db.connect();
  const user = await User.findById({ _id: req.query.id });
  if (user) {
    await user.remove();
    await db.disconnect();
    res.send({ message: 'User Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'User Not Found' });
  }
});

export default router.handler();
