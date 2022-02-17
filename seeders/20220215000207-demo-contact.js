"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Contacts",
      [
        {
          firstName: "Alicia",
          lastName: "Perez",
          email: "aliciaperez@gmail.com",
          phoneNumber: "+34622121212",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bernardo",
          lastName: "Lopez",
          email: "bernardolopez@gmail.com",
          phoneNumber: "+34622131313",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Sara",
          lastName: "Rodriguez",
          email: "sararodriguez@gmail.com",
          phoneNumber: "+34622141414",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Pere",
          lastName: "Serrat",
          email: "pereserrat@gmail.com",
          phoneNumber: "+34622151515",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jordi",
          lastName: "Puig",
          email: "jordipuig@gmail.com",
          phoneNumber: "+34622161616",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contacts", null, {});
  },
};
