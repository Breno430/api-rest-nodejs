import request from "supertest";
import app from "../config/app";
import { MongoHelper } from "../../infra/db/mongodb/helpers/mongo-helper";

describe("SignUp Routes", () => {
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
  test("Should return an account on sucess", async () => {
    await request(app)
      .post("/api/signup")
      .send({
        name: "Breno",
        email: "breno@email.com",
        password: "12345678",
        passwordConfirmation: "12345678",
      })
      .expect(200);
  });
});
