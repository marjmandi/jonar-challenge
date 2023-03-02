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
    await queryInterface.bulkInsert('Products', [{
      title: 'Apple',
      description: 'Apple is a round fruit with a red, green, or yellow skin',
      price: 2.12,
      stock: 10,
      sold: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Orange',
      description: 'Orange is a citrus fruit with a bright orange skin and juicy flesh',
      price: 3.42,
      stock: 5,
      sold: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Pineapple',
      description: 'Pineapple is a tropical fruit with a tough, spiky exterior and sweet, juicy interior',
      price: 2.98,
      stock: 5,
      sold: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Cherry',
      description: 'Cherry is a small, round fruit with a red or black skin and a stone in the middle',
      price: 5.71,
      stock: 3,
      sold: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Strawberry',
      description: 'Strawberry is a small, sweet fruit with a bright red color and seeds on the surface,',
      price: 6.36,
      stock: 2,
      sold: 0,
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
    await queryInterface.bulkDelete('Products', null, {});
  }
};
