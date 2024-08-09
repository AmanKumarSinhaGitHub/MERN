const home = async (req, res) => {
    try {
        res.send("Welcome to the home page using controller");
    }
    catch (error) {
        console.log(error);
    }
}


const register = async (req, res) => {
    try {
        res.send("Welcome to the register page using controller");
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { home, register };