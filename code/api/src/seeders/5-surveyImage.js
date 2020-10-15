'use strict';

const params = require('../config/params');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('surveyImages', [
      {
        altText: 'Alice in Wonderland',
        style: 'Bohemian Boulder',
        category: 'alternate universe',
        image: '/images/survey/alternate_universe/alice_rabbit.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Animal Crossing',
        style: 'Covid Couture',
        category: 'alternate universe',
        image: '/images/survey/alternate_universe/animal_crossing.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Brave New World',
        style: 'Young Republican',
        category: 'alternate universe',
        image: '/images/survey/alternate_universe/brave_new_world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Game of Thrones',
        style: 'Lumberjack Hipster',
        category: 'alternate universe',
        image: '/images/survey/alternate_universe/game_of_thrones.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Dorthy, Scarecrow, Tinman, and Lion walking down a golden brick road to Oz',
        style: 'Classy and Sassy',
        category: 'alternate universe',
        image: '/images/survey/alternate_universe/oz.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Zombie sims eating ice cream cone',
        style: 'Mall Goth',
        category: 'alternate universe',
        image: '/images/survey/alternate_universe/the_sims.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Old Timey Baseball Player',
        style: 'Old Timey Baseball Player',
        category: 'easter egg',
        image: '/images/survey/easter_egg/ol_timey_baseball.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Cabin in the Woods',
        style: 'Lumberjack Hipster',
        category: 'home',
        image: '/images/survey/home/cabin.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Coffee Shop',
        style: 'Bohemian Boulder',
        category: 'home',
        image: '/images/survey/home/coffee_shop.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'European Snow Castle',
        style: 'Young Republican',
        category: 'home',
        image: '/images/survey/home/fancy_castle.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Modern Style Home',
        style: 'Classy and Sassy',
        category: 'home',
        image: '/images/survey/home/fancy_home.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Huge indoor Mall',
        style: 'Mall Goth',
        category: 'home',
        image: '/images/survey/home/mall.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Private villa',
        style: 'Covid Couture',
        category: 'home',
        image: '/images/survey/home/private_villa.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Courtney Love',
        style: 'Mall Goth',
        category: 'role model',
        image: '/images/survey/role_model/courtney_love.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Dali Lama',
        style: 'Bohemian Boulder',
        category: 'role model',
        image: '/images/survey/role_model/dali_lama.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Darth Vader',
        style: 'Covid Couture',
        category: 'role model',
        image: '/images/survey/role_model/darth_vader.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Hipster Scar with Glasses',
        style: 'Lumberjack Hipster',
        category: 'role model',
        image: '/images/survey/role_model/hipster_scar.png',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Margaret Thatcher',
        style: 'Young Republican',
        category: 'role model',
        image: '/images/survey/role_model/Margaret_Thatcher.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Ursula the Sea Witch',
        style: 'Classy and Sassy',
        category: 'role model',
        image: '/images/survey/role_model/ursula.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Panera Brocolli Cheddar Bread Bowl',
        style: 'Bohemian Boulder',
        category: 'soup',
        image: '/images/survey/soup/brocc_soup.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Cereal',
        style: 'Covid Couture',
        category: 'soup',
        image: '/images/survey/soup/cereal.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Chicken Noodle Soup',
        style: 'Young Republican',
        category: 'soup',
        image: '/images/survey/soup/chicken_noodle.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Craft Beer in a Bowl',
        style: 'Lumberjack Hipster',
        category: 'soup',
        image: '/images/survey/soup/craft_beer.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Elegant gold cup with a soup inside that has flowers and gold leafs',
        style: 'Classy and Sassy',
        category: 'soup',
        image: '/images/survey/soup/sassy_soup.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Fountain drink with two straws',
        style: 'Mall Goth',
        category: 'soup',
        image: '/images/survey/soup/soda.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Beard full of PBR',
        style: 'Lumberjack Hipster',
        category: 'superpower',
        image: '/images/survey/superpower/hipster_super_power.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Lasers',
        style: 'Young Republican',
        category: 'superpower',
        image: '/images/survey/superpower/lazers.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Bright colored horses, rainbows and dogs with the title Lisa Frank',
        style: 'Sassy and Classy',
        category: 'superpower',
        image: '/images/survey/superpower/lisa_frank.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Talk to/control Plants',
        style: 'Bohemian Boulder',
        category: 'superpower',
        image: '/images/survey/superpower/plant_talking.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Time travel',
        style: 'Covid Couture',
        category: 'superpower',
        image: '/images/survey/superpower/time_travel.webp',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Wonder woman being fabulous',
        style: 'Mall Goth',
        category: 'superpower',
        image: '/images/survey/superpower/wonder_person.webp',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'An EDM Festival',
        style: 'Bohemian Boulder',
        category: 'vacation',
        image: '/images/survey/vacation/edm_festival.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Spooky Castle',
        style: 'Mall Goth',
        category: 'vacation',
        image: '/images/survey/vacation/spooky_castle.webp',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Skyline of New York City',
        style: 'Sassy and Classy',
        category: 'vacation',
        image: '/images/survey/vacation/nyc.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Portland Sign',
        style: 'Lumberjack Hipster',
        category: 'vacation',
        image: '/images/survey/vacation/portland_sign.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Staycation',
        style: 'Covid Couture',
        category: 'vacation',
        image: '/images/survey/vacation/staycation.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        altText: 'Swedish Midsummer',
        style: 'Young Republican',
        category: 'vacation',
        image: '/images/survey/vacation/sweden.webp',
        createdAt: new Date(),
        updatedAt: new Date()
        }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('surveyImages', null, {});
  }
}
