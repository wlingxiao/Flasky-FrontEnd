const faker = require('faker')
faker.locale = 'zh_CN';

module.exports = function () {
    const posts = {
        size: 100,
        data: []
    };
    for (let i = 0; i < 10; i++) {
        posts.data.push({
            id: i,
            title: faker.lorem.sentence(),
            content: faker.lorem.text(),
            'create_time': Date.parse(faker.date.past()),
            'image': faker.image.nature()
        })
    }
    return posts
}()