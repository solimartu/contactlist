var models = require("../models");

async function emailShouldBeUnique(req, res, next) {
  try {
    const { email } = req.body;
    const contact = await models.Contact.findOne({
      where: {
        email,
      },
    });
    if (!contact) next();
    else
      return res
        .status(403)
        .send({ message: "This email already exists, please use another." });
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = emailShouldBeUnique;
