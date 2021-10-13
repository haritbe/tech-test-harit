import {expect} from "chai";
import {validateUser} from "../userValidatorService";
import {userValidatorServiceData} from "./__data__/userValidatorService.data";

describe('userValidatorService', function () {

  it('should respond with true for valid user', () => {
    const result =  validateUser(userValidatorServiceData.validUser)
    expect(result).to.equal(true);
  });
  it('should respond with false for invalid password for a valid user', () => {
    const result =  validateUser(userValidatorServiceData.validUserInvalidPassword)
    expect(result).to.equal(false);
  });
  it('should respond with false for non existent userName', () => {
    const result =  validateUser(userValidatorServiceData.ivalidUserName)
    expect(result).to.equal(false);
  });
});