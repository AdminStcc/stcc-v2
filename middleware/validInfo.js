
module.exports = (req, res, next) => {
    const { name, email, rfc, curp, phone, password } = req.body;

    function validEmail(userEmail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    if (req.path === "/sign-up") {
        if (![name, email, rfc, curp, phone, password].every(Boolean)) return res.status(401).json("Missing Credentials");
        else if (!validEmail(email)) return res.status(401).json("Invalid Email");
    } else if (req.path === "/sign-in") {
        if (![email, password].every(Boolean)) return res.status(401).json("Missing Credentials");
        else if (!validEmail(email)) return res.status(401).json("Invalid Email");

    }
    next();
};