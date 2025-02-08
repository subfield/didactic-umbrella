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
  
  service?: string;
  serviceType?: string;
  businessName?: string;
  businessIndustry?: string;
  businessEmail?: string;
  businessLocation?: string;
  businessBrief?: string;
  whyApply?: string;
  paymentType?: string;
  paymentPlan?: string;
  
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