import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    user?: { email: string; id: string };
  }
}

export interface iTempUserStore {
  otp: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  otherInfo: string;
  
  date?: string;
  time?: string;
  purpose?: string;
  
  checkInDate?: string;
  checkInTime?: string
  checkOutDate?: string;
  shortlet?: string;
  
  path: string;
  expiresAt?: number;
  resendTime?: number;
  createdAt?: number;
}

export interface iOTPRecord {
  email: string;
  otp: string;
  expiresAt: number;
  resendTime: number;
  createdAt: number;
}