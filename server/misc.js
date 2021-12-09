// app.post("/api/user/signin", async (req, res) => {
//   const db = req.app.get("db");
//   const { email, password } = req.body;
//   const [elmail] = await db.get_email([email]);
//   const [passw] = await db.get_password([password]);
//   console.log(elmail, email, passw.password, password);
//   if (email === elmail.email && password === passw.password) {
//     return res.status(200).send();
//   } else {
//     return res.status(400).send("Wrong email or password!");
//   }
// });