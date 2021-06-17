// Code within module is encapsulated, not visible to outside blocks

register = (username) => {
    console.log(`${username} registered`);
}

login = (username, password) => {
    console.log(`${username} logged in successfully`);
}

module.exports = {
    register,
    login
}