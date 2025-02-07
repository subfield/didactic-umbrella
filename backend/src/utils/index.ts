import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import bcrypt from "bcryptjs";

export const encryptPassword = async (password: string) => {
    const encryptedPassword = await bcrypt.hash(password, 12);
    return encryptedPassword;
};

export const isPasswordMatch = async (password: string, userPassword: string) => {
    const result = await bcrypt.compare(password, userPassword);
    return result;
};


dayjs.extend(utc);
dayjs.extend(timezone);

/**
 *  Creating a central timezone for the server default to lagos
 */
export const serverTime = (): dayjs.Dayjs => dayjs().tz('Africa/Lagos')
