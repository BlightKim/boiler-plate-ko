const express = require("express");
const app = express();
const port = 5100;
const { default: mongoose } = require("mongoose");
const { User } = require('./models/User');
const config = require('./config/key');

app.use(express.json());


mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  // 회원 가입할 떄 필요한 정보들을 클라이언트에서 가져오면
  // 그것들을 데이터베이스에 넣어준다
  const user = new User(req.body);

  user.save()
  .then((userInfo) => res.status(200).json({success: true}))
  .catch((err) => res.json({success: false, err}));

});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
