import { AccountModel } from "../../../../domain/models/account";

export const map = (account: any): AccountModel => {
  const accountResult: AccountModel = {
    id: account._id.toHexString(),
    name: account.name,
    email: account.email,
    password: account.password,
  };

  return accountResult;
};
