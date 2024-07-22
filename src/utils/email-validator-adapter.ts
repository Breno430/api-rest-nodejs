import validator from "validator";
import { EmailValidator } from "../presentation/protocols/email-validator";

export class EmailValidatorAdapter implements EmailValidator {
    isvalid(email: string): boolean {
        return validator.isEmail(email)
    }
}