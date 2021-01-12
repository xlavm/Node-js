const User = require('../models/user.model.js');

exports.findall = async(req, res)=>{
  const user = await User.scan().exec();
  return res.json({user});
};

exports.find = async(req, res)=>{
  const user = await User.get(req.params.id);
  return res.json(user);
};

exports.save = async(req, res)=>{
  const user = await User.get(req.body.id);
  if(user != null){
    return res.json('User Already Exists in the DB');
  }else{
    const user = await User.create(req.body);
    return res.json('User Created Successfully!');
  }
};

exports.update = async(req, res)=>{
  const user = await User.get(req.params.id);
  if(user != null){
    const user = await User.update(req.body);
    return res.json('User Updated Successfully!');
  }else{
    return res.json('User Does Not Exist in the DB');
  }
};

exports.delete = async(req, res)=>{
  await User.delete(req.params.id);
  return res.json('User Removed Successfully!');
};

