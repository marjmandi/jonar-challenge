'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      fullname: 'John Doe',
      email: 'john@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'Sam Arjmandi',
      email: 'arjmandi1984@live.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'James Bond',
      email: 'bond@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
