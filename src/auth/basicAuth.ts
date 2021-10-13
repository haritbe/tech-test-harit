import express from "express";
import {decodeBasicAuthStringToUser, getBasicAuthString} from "../util/stringutil";
import {validateUser} from "../service/userValidatorService";

export const basicAuthHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // implementation here
  const authHeader = req.header("authorization");
  if(authHeader) {
    try{
      const user = decodeBasicAuthStringToUser(getBasicAuthString(authHeader)??'');
      if( user && validateUser(user) ){
        next();
      } else {
        //TODO: to set up a standard error code, message and hint response.
        return res.status(401).send("not authorised");
      }
    }catch (e) {
      return res.status(401).send("not authorised");
    }
  } else {
    return res.status(401).send("not authorised");
  }
}