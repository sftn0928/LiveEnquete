const mongoose = require("mongoose"),
  User = require("./models/User"),
  Slot = require("./models/slot");

var testSlot, testUser;

mongoose.connect("mongodb://localhost:27017/recipe_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

User.remove({})
  .then(items => console.log(`Removed ${items.n}records!`))
  .then(() => {
    return Slot.remove({});
  })
  .then(items => console.log(`Removed ${items.n}records`))
  .then(() => {
    return User.create({
      name: "sunica",
      email: "sin.seki.ara@gmail.com",
      password: "fdnjakcsa",
      channelURL: "dadsacgs"
    });
  })
  .then(usr => {
    console.log(`created usr:${usr} `);
  })
  .then(() => {
    return User.findOne({
      email: "sin.seki.ara@gmail.com"
    });
  })
  .then(usr => {
    testUser = usr;
    console.log(`test User : ${usr}`);
  })
  .then(() => {
    return Slot.create({
      title: "test Title",
      items: ["item1", "item2"]
    });
  })
  .then(slot => {
    testSlot = slot;
    console.log(`test Create : ${slot.title}`);
  })
  .then(() => {
    testUser.slots.push(testSlot);
    testUser.save();
  })
  .then(() => {
    return User.populate(testUser, "slots");
  })
  .then(usr => console.log(usr))
  .then(() => {
    return User.find({
      slots: mongoose.Types.ObjectId(testSlot._id)
    });
  })
  .then(usr => console.log(usr))
  .catch(e => console.log(e));
