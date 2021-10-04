const bcrypt = require('bcryptjs');

const createHashPassword = async password => {
    const salt = await bcrypt.genSaltSync(10);
    return await bcrypt.hashSync(password, salt);
};

const compareHashPassword = async (password, hash) => {
    return await bcrypt.compareSync(password, hash);
};

module.exports = { createHashPassword, compareHashPassword };
