const User = require('../../modals/user.modal');
exports.googleAuthCallback = async (accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
      return done(null, existingUser);
    }

    const user = await new User({ googleId: profile.id, displayName: profile.displayName }).save();
    done(null, user);
  } catch (error) {
    done(error, null);
  }
};

exports.getCurrentUser = (req, res) => {
  res.send(req.user);
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
