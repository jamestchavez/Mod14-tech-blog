const { Post } = require('../models');

const postData = [{
        title: "Fear of the uncertain",
        content: "Scared to change jobs due to the unknown prospect of a new option.",
        user_id: 1

    },
    {
        title: "This is alot to take in!",
        content: "How do I learn so much in such a small amount of time?",
        user_id: 2
    },
    {
        title: "Feeling burned out :(",
        content: "I have not gotten a job yet and I feel like I am spinning my wheels",
        user_id: 3
    },
    {
        title: "Best way to expand network?",
        content: "I want to expand my network but I don't know the best way in a WFH world. Things seem to be going slower than I expected",
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;