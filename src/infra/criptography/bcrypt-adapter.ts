import bcrypt from "bcrypt";
import { Encrypter } from "../../data/protocols/encrypter";

export class BcryptAdapter implements Encrypter {
  private readonly salt: number;
  constructor(salt: number) {
    this.salt = salt;
  }
  async encrypt(value: string): Promise<string> {
    const hashPassword = await bcrypt.hash(value, this.salt);
    return hashPassword;
  }
}
