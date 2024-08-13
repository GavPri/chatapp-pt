// * ----- Auth Login & Sign Up Controllers
//  * Arrow functions for each 

const signup = (req, res) => {
    // * try catch block 
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
    }
};
const login = () => {
  // * try catch block
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};



// * Exporting the contollers as an object
modules.exports = { signup , login}