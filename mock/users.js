const faker = require('faker')
faker.locale = 'zh_CN';

module.exports = function () {
    const users = {
        size: 100,
        data: []
    };
    for (let i = 0; i < 100; i++) {
        users.data.push({
            id: i,
            username: faker.name.findName(),
            email: faker.internet.email(),
            'sign_up_time': Date.parse(faker.date.past()),
            'last_visit_time': Date.parse(faker.date.past())
        })
    }
    return users
}();