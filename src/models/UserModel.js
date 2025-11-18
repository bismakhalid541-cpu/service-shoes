// src/models/UserModel.js
export class UserModel {
  constructor(uid, email, displayName = null) {
    this.uid = uid;
    this.email = email;
    this.displayName = displayName;
  }
}
