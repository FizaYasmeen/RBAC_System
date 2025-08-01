const authorizeRoles = (...allowedRoles) => {
return (req,res,next) => {
 if(!allowedRoles.includes(req,res,role))
 {
    return res.status(403).json({message: " Access Denied"});
 }
next();
};
};
module.exports = authorizeRoles;