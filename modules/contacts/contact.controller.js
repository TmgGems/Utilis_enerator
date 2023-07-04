const contactModel = require("./contact.model");

const create = (payload)=>{
    return contactModel.create(payload);
 };

const list = () =>{
    return contactModel.find();
};


const getById = () =>{
    return contactModel.findOne({_id: id});
};


const update = () =>{
    return contactModel.updateOne({_id:id},playload);
};


const remove = (id) =>{
    return contactModel.deleteOne({_id:id});
};

module.exports = {create,list,getById,update,remove}

//CRUD Operations

