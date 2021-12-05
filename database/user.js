const users = [
    {
        userId: 1,
        name: "nisa",
        password: "123456"
    }
];

const getUsers = ()=>{
    return users;
};

const createUser = (user)=>{
    users.push(user);
};

module.exports = {getUsers, createUser};