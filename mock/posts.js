const faker = require('faker')
faker.locale = 'zh_CN';

module.exports = function () {
    const posts = {
        size: 100,
        data: []
    };
    for (let i = 0; i < 100; i++) {
        posts.data.push({
            id: i,
            title: faker.name.findName(),
            content: faker.lorem.text(),
            'create_time': Date.parse(faker.date.past())
        })
    }
    return posts
}()