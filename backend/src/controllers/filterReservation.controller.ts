import { Request, Response } from "express";
import { Reservation } from "../model/Reservation";

export const getFilteredReservation = async (req: Request, res: Response) => {
  try {
    const { status, type, startDate, endDate } = req.query;

    let filter: any = {};

    if (status) filter.status = status;
    if (type) filter.serviceType = type;
    if (startDate && endDate) {
      filter.date = { $gte: new Date(startDate as string), $lte: new Date(endDate as string) };
    }

    const bookings = await Reservation.find(filter);
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
