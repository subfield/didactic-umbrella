import { createDB } from "./connect.db";
// import { Datastore } from "nedb";
import { serverTime } from "../utils";
import { iOTPRecord } from "../types";

class useOTP {
  private db: Nedb;
  
  constructor() {
    this.db = createDB("otp_store");
  }
  
  /**
   * Save OTP for a specific email
   * @param email - The email address
   * @param otp - The OTP to save
   */
  save(email: string, otp: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const expiresAt = serverTime().add(30, "minutes").valueOf();
      const resendTime = serverTime().add(5, "minutes").valueOf();
      const updatedAt = serverTime().valueOf();
      
      const otpRecord: iOTPRecord = {
        email,
        otp,
        createdAt: updatedAt,
        resendTime,
        expiresAt,
      };
      
      // Check if an OTP already exists for the email
      this.db.findOne({ email }, (err, existingRecord) => {
        if (err) return reject(err);
        
        if (existingRecord) {
          // Update existing OTP record
          this.db.update(
            { email },
            { $set: { otp, createdAt: updatedAt, expiresAt, resendTime } },
            {},
            (updateErr) => {
              if (updateErr) reject(updateErr);
              else resolve();
            }
          );
        } else {
          // Create new OTP record
          this.db.insert(otpRecord, (insertErr) => {
            if (insertErr) reject(insertErr);
            else resolve();
          });
        }
      });
    });
  }
  
  
  /**
   * Read OTP for a specific email
   * @param email - The email address
   */
  read(identifier: string): Promise<iOTPRecord | null> {
    return new Promise((resolve, reject) => {
      this.db.findOne<iOTPRecord>({
        $or: [{ email: identifier }, { otp: identifier }],
      }, (err, doc) => {
        if (err) reject(err);
        else resolve(doc || null);
      });
    });
  }
  
  /**
   * Update OTP for a specific email
   * @param email - The email address
   * @param newOtp - The new otp
   */
  update(email: string, newOtp: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const expiresAt = serverTime().add(20, "minutes").valueOf();
      this.db.update({ email }, { $set: { otp: newOtp, expiresAt } }, {}, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  /**
   * Delete OTP for a specific email
   * @param email - The email address
   */
  delete(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.remove({ email }, {}, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  /**
   * Helper function to display available methods and their usage
   */
  static help(): void {
    console.log(`
      useOTP Class Methods:
      
      1. save(email: string, otp: string): Promise<void>
         - Saves an OTP for a specific email.
         - Example: await useOTP.save('user@example.com', '123456');

      2. read(email: string): Promise<string | null>
         - Retrieves the OTP for a specific email.
         - Example: const otp = await useOTP.read('user@example.com');

      3. update(email: string, newOtp: string): Promise<void>
         - Updates the OTP for a specific email.
         - Example: await useOTP.update('user@example.com', '654321');

      4. delete(email: string): Promise<void>
         - Deletes the OTP for a specific email.
         - Example: await useOTP.delete('user@example.com');

      5. help(): void
         - Displays this help message.
         - Example: useOTP.help();
    `);
  }
}


export default new useOTP();
