const subscribe = async (req, res) => {
  const { email } = req.body;
  const db = req.app.get('db');
  const result = await db.find_sub_by_email([email]);

  const existingSub = result[0];
  if(existingSub){
    return res.status(409).send('Already Subscribed!');
  } else {
    const registeredSub = await db.add_subscriber([email]);
    const sub = registeredSub[0];
    req.session.subscribers = {
      email: sub.email,
    };
    return res.status(201).send(sub);
  }
}

module.exports = {
  subscribe
}