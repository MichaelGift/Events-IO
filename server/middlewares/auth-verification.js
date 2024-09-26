const admin = require('firebase-admin');

const authVerification = async (req, res, next) => {
    const {authorization} = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({error: "Unauthorized: Missing or invalid token"});
    }

    const idToken = authorization.split('Bearer ')[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken;
        return next();
    } catch (e) {
        return res.status(401).json({error: "Unauthorized: Missing or invalid token"});
    }
}

module.exports = authVerification;
