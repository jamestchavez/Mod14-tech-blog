const { User } = require('../models');

const userData = [{
        username: 'DakP',
        password: 'QuarterB1'

    },
    {
        username: 'Dlaw',
        password: 'Hotboyz1'
    },
    {
        username: 'JerryJ',
        password: 'Razorback1'
    },
    {
        username: 'Taikman',
        password: 'HofQB1'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;