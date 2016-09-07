
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('track').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('track').insert({id: 1, name: 'Strawberry Fields'}),
        knex('track').insert({id: 2, name: 'Soft Bulletin'}),
      ]);
    });
};
