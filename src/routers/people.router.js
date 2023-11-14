import { 
    getAllPeople, 
    getPersonByID,
    updatePersonByID, 
    deletePersonByID
  } from "../controllers/people.controller.js";
  
  import express from "express";
  
  export const peopleRouter = express.Router();
  
  peopleRouter.get("/", getAllPeople);
  peopleRouter.get("/:id", getPersonByID);
  peopleRouter.put("/:id", updatePersonByID);
  peopleRouter.delete("/:id", deletePersonByID);
  
  