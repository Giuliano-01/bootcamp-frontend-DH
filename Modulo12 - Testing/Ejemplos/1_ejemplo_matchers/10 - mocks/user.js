const storage = require('./storage');

const saveUsername = (username) => { storage.save({ key: 'username', value: username });};

const getUsername = () => { storage.get({ key: 'username'}); };

module.exports = {
    saveUsername,
    getUsername
}



//mockReturnValueOnce()
