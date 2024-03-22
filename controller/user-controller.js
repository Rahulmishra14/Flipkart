import user from "../models/user-schema.js";

export const userSignUp = async (request, response) => {
  try {
    const isExistingUser = await user.findOne({
      username: request.body.username,
    });
    if (isExistingUser) {
      response.status(401).json({ message: "User Already Exists!" });
    } else {
      const userDataReceived = request.body;
      const newUser = new user(userDataReceived);
      await newUser.save();
      response.status(200).json({ message: userDataReceived });
    }
  } catch (error) {
    console.log("Error Occurred while signup by user", error);
    response.status(500).json({ message: error.message });
  }
};

export const userLogin= async (request, response) => {
  try {
    const isExistingUser=await user.findOne({
      username:request.body.username,
      password:request.body.password
    })
    if(isExistingUser){
      response.status(200).json({data:user})
    }else{
      response.status(201).json({message:"User Not Found Please Register!"})
    }
    
  } catch (error) {
    console.log("Error Occurred while signup by user", error);
    response.status(500).json({ message: error.message });
  }
};
