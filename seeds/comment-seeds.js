const { Comment } = require('../models');

const commentData = [{
        comment_text: "I really need to get hired soon.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Hopefully this recruiter can help.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I don't feel motivated to code anymore!",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Don't let yourself get burnt out.",
        user_id: 4,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;