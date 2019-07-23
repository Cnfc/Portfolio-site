const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

// ============================ Define out Model ============
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});
//============================================================

// ================== On Save Hook, encrypt password =========
// Before saving a model, rut this fuction
userSchema.pre("save", function(next) {
  const user = this;

  //
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    // Encrypt our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};
// =============================================================

// ============================ Create the Modal Class =========
const ModelClass = mongoose.model("user", userSchema);

// =============================================================
// Export The Model
module.exports = ModelClass;
