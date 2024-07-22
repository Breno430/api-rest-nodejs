import { AddAccountRepository } from "../../../../data/protocols/add-account-repository";
import { AccountModel } from "../../../../domain/models/account";
import { AddAccountModel } from "../../../../domain/usecases/add-account";
import { MongoHelper } from "../helpers/mongo-helper";
import { map } from "./account-mapper";

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountColletion = MongoHelper.getCollection("accounts");
    const result = await accountColletion.insertOne(accountData);
    const account = await accountColletion.findOne({ _id: result.insertedId });
    const accountResult = map(account);
    return accountResult;
  }
}
