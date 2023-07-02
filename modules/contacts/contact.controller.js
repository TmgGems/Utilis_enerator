const Model = require("./contact.model");

const create = (payload)=>{
    return Model.create(payload);
 };

const list = () =>{
    return Model.find();
};


const getById = () =>{
    return Model.findOne(id);
};


const update = () =>{
    return Model.updateOne(id,playload);
};


const remove = () =>{
    return Model.deleteOne(id);
};