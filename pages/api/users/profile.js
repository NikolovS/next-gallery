import { createRouter } from 'next-connect';
import User from '../../../models/User';
import db from '../../../utils/db';
import bcrypt from 'bcryptjs';
import { signToken, isAuth } from '../../../utils/auth';
const router = createRouter();

router.use(isAuth).put(async (req, res) => {
  await db.connect();
  const user = await User.findOne({ _id: req.user._id });
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password
    ? bcrypt.hashSync(req.body.password)
    : user.password;
  await user.save();
  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

export default router.handler();
