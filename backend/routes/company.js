const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const router = require('express').Router();

// Load company model
let Company = require('../model/companyModel');

// Load input validation
const validateRegisterInput = require("../validation/registration");
const validateLoginInput = require("../validation/login");

router.route('/').get((req, res)=>{
    Company.find()
    .then(post => res.json(post)) //return as json
    .catch(err => res.status(400).json("Error: " + err));
})

// Categories endpoints
router.route('/foodType').get((req, res)=>{
    Company.find({category:"chinese"})
    .then(post => res.json(post)) //return as json
    .catch(err => res.status(400).json("Error: " + err));
})

router.route('/love/:id').get((req, res)=>{
    let id = req.params.id;
    Company.find({_id: id})
    .then(post => res.json(post)) //return as json
    .catch(err => res.status(400).json("Error: " + err));
})

//add posts
router.route('/register').post((req, res)=>{
    console.log("req: " + req.body);
// const { errors, isValid } = validateRegisterInput(req.body);
// Check validation
//   if (!isValid) {
//     return res.status(400).json("error" + errors);
//   }

//   console.log("is: " + isValid);
Company.findOne({ username: req.body.username }).then(user => {
    if (user) {
      return res.status(400).json({ username: "Username already exists" });
    } else {

        const companyName = req.body.companyName;
        const address = req.body.address;
        const foodType = req.body.foodType;
        const email = req.body.email;
        const password = req.body.password;
        const date = Date.parse(req.body.date);
        const isPickup = false;
        
         const newUser = new Company ({
            companyName,
            address,
            foodType,
            email,
            password,
            date,
            isPickup
         })

// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });    
})


router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    Company.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });



router.route('/updatepickup/:id').put((req, res)=>{
    let isPickup = req.body.isPickup;
    Post.findByIdAndUpdate({ _id: req.params.id}, {$set: {isPickup: isPickup}})
    .then(post => res.json(post)) //return as json
    .catch(err => res.status(400).json("Error: " + err));
})


module.exports = router;
