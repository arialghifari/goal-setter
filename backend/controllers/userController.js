// @desc		Register new user
// @route		POST /api/users
// @access	Public
const registerUser = (req, res) => {
  res.json({
    message: "Register User",
  });
};

// @desc		Get user data
// @route		GET /api/users/me
// @access	Public
const loginUser = (req, res) => {
  res.json({
    message: "Login User",
  });
};

// @desc		Authenticate user
// @route		GET /api/users/login
// @access	Public
const getMe = (req, res) => {
  res.json({
    message: "Current user data",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
