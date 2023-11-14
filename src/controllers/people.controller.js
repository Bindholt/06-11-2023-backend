import {connection} from "../../config/database.js";

export async function getAllPeople(req, res, next) {
    let pageNum = Number(req.query.page);
    let limit = (pageNum -1) * Number(req.query.limit);

    if(!pageNum && !limit) {
        pageNum = 0;
        limit = 50;
    }

    try{
        const query = "SELECT * FROM people limit ? offset ?";
        const values = [limit, pageNum];
        const [result] = await connection.query(query, values);
        res.json(result);
    }catch(err){
        next(err);
    }
}

export async function getPersonByID(req, res, next) {
    const id = req.params.id;
    const query = "SELECT * FROM people WHERE id = ?;";
    const values = [id];
    try{
        const [result] = await connection.execute(query, values);
        res.json(result[0]);
    }catch(err){
        next(err);
    }
}

export async function updatePersonByID(req, res, next) {
    const id = req.params.id;
    const person = req.body;
    const query = "UPDATE people SET name = ? WHERE id = ?;";
    const values = [person.name, id];
    try{
        const [result] = await connection.execute(query, values);
        res.json(result[0]);
    }catch(err){
        next(err);
    }
}

export async function deletePersonByID(req, res, next) {
    const id = req.params.id;
    const query = "DELETE FROM people WHERE id =?;";
    const values = [id];
    try{
        const [result] = await connection.execute(query, values);
        res.json(result[0]);
    }catch(err){
        next(err);
    }
}