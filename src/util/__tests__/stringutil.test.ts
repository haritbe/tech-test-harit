import {expect} from "chai";
import {decodeBasicAuthStringToUser, getBasicAuthString} from "../stringutil";
import {stringutilData} from "./__data__/stringutil.data";

describe('stringutil', function () {
  describe('getBasicAuthString', function () {
    it('should respond base64String part from header', () => {
      const result =  getBasicAuthString(stringutilData.validBasiAuthStringHeader)
      expect(result).to.equal('bWF0dEBnbWFpbC5jb206dGhpcyBpcyBhIHZAbGlkIHBhc3N3b3JkIQ==');
    });
    it('should respond with null for invalid Header value', () => {
      const result =  getBasicAuthString(stringutilData.inValidaBasicAuthStringHeader)
      expect(result).to.be.null;
    });
  });
  describe('decodeBasicAuthStringToUser', function () {
    it('should respond decoded user object', () => {
      const result =  decodeBasicAuthStringToUser(stringutilData.validBase64String)
      expect(result?.userName).to.equal('matt@gmail.com');
      expect(result?.password).to.equal('this is a v@lid password!');
    });
    it('should respond with error', () => {
      const result =  decodeBasicAuthStringToUser(stringutilData.inValidBase64String)
      expect(result?.userName).to.equal('');
      expect(result?.password).to.be.undefined;
    });
  });
});