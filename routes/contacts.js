var express = require("express");
var router = express.Router();
var models = require("../models");
var emailShouldBeUnique = require("../guards/emailShouldBeUnique");
const { Op } = require("sequelize");
const contact = require("../models/contact");

/* GET contacts listing. */
router.get("/", async function (req, res) {
  try {
    const contacts = await models.Contact.findAll({
      order: [["firstName", "ASC"]],
    });
    res.send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET ONE contact by id
router.get("/:id", async function (req, res) {
  try {
    const contact = await models.Contact.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

// //GET a contact by searching
router.get("/search", async function (req, res) {
  const { input } = req.query;
  try {
    const contact = await models.Contact.findAll({
      // where: { firstName: req.query },
      // where: {
      //   [Op.or]: {
      //     [Op.like]: req.params,
      //     [Op.startsWith]: req.body,
      //     [Op.endsWith]: req.body,
      //   },
      // },
      where: {
        [Op.or]: [
          { firstName: { [Op.like]: "%" + input + "%" } },
          { lastName: { [Op.like]: "%" + query + "%" } },
        ],
      },
    });
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

// var options = {
//   where: {
//     [Op.or]: [
//       { 'subject': { [Op.like]: '%' + query + '%' } },
//       { '$Comment.body$': { [Op.like]: '%' + query + '%' } }
//     ]
//   },
//
// };

//POST a new contact
router.post("/", emailShouldBeUnique, async (req, res) => {
  const { firstName, lastName, email, phoneNumber } = req.body;
  try {
    await models.Contact.create({ firstName, lastName, email, phoneNumber });
    res.send({ message: "Contact added successfully" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//DELETE a contact
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await models.Contact.destroy({
      where: {
        id,
      },
    });
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await models.Contact.update(
      {},
      {
        where: { id },
      }
    );
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = router;
