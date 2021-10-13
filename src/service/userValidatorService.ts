import {VALID_USERS} from "../userLogins";
import {User} from "../model/user";

export const validateUser = (inputUser: User ): boolean => {
  const userFromDB = VALID_USERS.users.find(({userLogin,password}) => {
      if(
          userLogin === inputUser.userName &&
          password == inputUser.password
      ) {
        return true;
      }
  });
  return !!userFromDB;
}