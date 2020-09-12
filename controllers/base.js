const home = (req, res) => {
    console.log("Home Route");
    return res.status(200);
};

const about = (req, res) => {
    console.log("About Route");
    return res.status(200);
};

const contact = (req, res) => {
    console.log("Contact Route");
    return res.status(200)
};

module.exports = {
    home,
    about,
    contact
}