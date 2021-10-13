import {User} from "../model/user";

export const getBasicAuthString = (encodedHeader: string): string | null => {
  //TODO: use regex to get the encoded basic authString
  const encodedString: string[] = encodedHeader.split(" ") || [];
  return encodedString.length >1 ? encodedString[1]: null;
}
export const decodeBasicAuthStringToUser = (encodedString: string | null): User | null => {
  if(encodedString) {
    let buff = new Buffer(encodedString, 'base64');
    let [userName, password] = buff.toString('ascii').split(":");
    return new User(userName, password);
  } else {
    return null;
  }
}