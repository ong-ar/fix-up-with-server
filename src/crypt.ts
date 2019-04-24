import bcrypt from "bcrypt";

export const crypt = (plainText: string): string => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(plainText, salt);

  return hash;
};
