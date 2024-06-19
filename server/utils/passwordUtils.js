import bcrypt from "bcrypt";

export const generateHash = async (password) => {
  const saltRound = 10;
  const hash = bcrypt.hash(password, saltRound);
  return hash;
};

export const comparePasswords = async (plainPassword, hash) => {
  const match = await bcrypt.compare(plainPassword, hash);
  return match;
};
