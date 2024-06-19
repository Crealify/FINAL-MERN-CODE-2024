import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.id = decoded.id;
    req.role = decoded.role;
    next();
  });
};
