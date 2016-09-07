
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('artist').insert({id: 1, name: 'The Beatles'}),
        knex('artist').insert({id: 2, name: 'The Flaming Lips'}),
      ]);
    });
};
