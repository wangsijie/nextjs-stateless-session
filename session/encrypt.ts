import { createCipheriv, createDecipheriv } from "crypto";

// Replace with your own key and iv
// You can generate them with crypto.randomBytes(32) and crypto.randomBytes(16)
const key = Buffer.from("17204a84b538359abe8ba74807efa12a068c20a7c7f224b35198acf832cea57b", "hex");
const iv = Buffer.from("da1cdcd9fe4199c835bd5f1d56446aff", "hex");
const algorithm = "aes-256-cbc";

export const encrypt = (text: string) => {
  const cipher = createCipheriv(algorithm, key, iv);
  const encrypted = cipher.update(text, "utf8", "base64");
  return `${encrypted}${cipher.final("base64")}`;
};

export const decrypt = (encrypted: string) => {
  const decipher = createDecipheriv(algorithm, key, iv);
  const decrypted = decipher.update(encrypted, "base64", "utf8");
  return `${decrypted}${decipher.final("utf8")}`;
};
