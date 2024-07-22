import { MongoHelper } from "../helpers/mongo-helper";
import { AccountMongoRepository } from "./account";

describe("Account Mongo Repository", () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  beforeEach(async () => {
    const accountColletion = MongoHelper.getCollection("accounts");
    await accountColletion.deleteMany({});
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository();
  };

  test("Should return an account on sucess", async () => {
    const sut = makeSut();
    const accoutn = await sut.add({
      name: "any_name",
      email: "any_email@mail.com",
      password: "any_password",
    });
    expect(accoutn).toBeTruthy();
    expect(accoutn.id).toBeTruthy();
    expect(accoutn.name).toBe("any_name");
    expect(accoutn.email).toBe("any_email@mail.com");
    expect(accoutn.password).toBe("any_password");
  });
});
