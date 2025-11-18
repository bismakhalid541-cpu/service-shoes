// src/services/AuthServices.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";
import { UserModel } from "../models/UserModel";

// Signup
export const signup = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name });
    const user = userCredential.user;
    return new UserModel(user.uid, user.email, user.displayName);
  } catch (error) {
    throw error;
  }
};

// Login ← make sure this is here!
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return new UserModel(user.uid, user.email, user.displayName);
  } catch (error) {
    throw error;
  }
};
