import Datastore from 'nedb';
import { createDB } from "./connect.db";
import {iTempUserStore} from "../types";
import {serverTime} from "../utils";

class useUserDB {
  private db: Datastore;
  
  constructor() {
    this.db = createDB("tempUser");
  }
  
  // Create User
  createUser(userData: iTempUserStore): Promise<iTempUserStore> {
    return new Promise((resolve, reject) => {
      const expiresAt = serverTime().add(30, "minutes").valueOf();
      const resendTime = serverTime().add(5, "minutes").valueOf();
      const createdAt = serverTime().valueOf();
      
      const updatedUserData = { ...userData, createdAt, expiresAt, resendTime };
      
      // Check if a user already exists based on email or phone
      this.db.findOne({ $or: [{ email: userData.email }, { phone: userData.phone }] }, (err, existingUser) => {
        if (err) return reject(err);
        
        if (existingUser) {
          // Update existing user record
          this.db.update(
            { _id: existingUser._id },
            { $set: updatedUserData },
            {},
            (updateErr) => {
              if (updateErr) reject(updateErr);
              else resolve({ ...existingUser, ...updatedUserData });
            }
          );
        } else {
          // Create new user record
          this.db.insert(updatedUserData, (insertErr, newDoc) => {
            if (insertErr) reject(insertErr);
            else resolve(newDoc);
          });
        }
      });
    });
  }
  
  
  // Read User by Email
  read(token: string): Promise<iTempUserStore | null> {
    return new Promise((resolve, reject) => {
      this.db.findOne({ otp: token }, (err, doc) => {
        if (err) reject(err);
        else resolve(doc);
      });
    });
  }
  
  // Update User
  updateUser(email: string, updatedData: Partial<iTempUserStore>): Promise<number> {
    return new Promise((resolve, reject) => {
      this.db.update({ email }, { $set: updatedData }, {}, (err, numReplaced) => {
        if (err) reject(err);
        else resolve(numReplaced);
      });
    });
  }
  
  // Delete User
  deleteUser(email: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.db.remove({ email }, {}, (err, numRemoved) => {
        if (err) reject(err);
        else resolve(numRemoved);
      });
    });
  }
  
  // Get All Users
  getAllUsers(): Promise<iTempUserStore[]> {
    return new Promise((resolve, reject) => {
      this.db.find({}, (err, docs) => {
        if (err) reject(err);
        else resolve(docs);
      });
    });
  }
}

export default new useUserDB;
