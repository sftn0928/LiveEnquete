const express = require("express");
const router = express.Router();
const app = express();

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

router.post("/login", (req, res) => {
  if (!!req.body.authUser) {
    req.session.authUser = req.body.authUser;
    return res.json(req.body.authUser);
  }
  res.status(401).json({ message: "Bad credentials" });
});

router.post("/logout", (req, res) => {
  delete req.session.authUser;
  res.json({ ok: true });
});

export default {
  path: "/session",
  handler: router
};
