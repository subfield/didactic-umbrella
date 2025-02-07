import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base API setup
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery(
    { baseUrl: "http://localhost:3000", credentials: "include" }),

  endpoints: (builder) => ({
    
    // Create User
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/create/user",
        method: "POST",
        body: userData,
      }),
    }),

    // Create Reservation
    createReservation: builder.mutation({
      query: (reservationData) => ({
        url: "/create/reserve",
        method: "POST",
        body: reservationData,
      }),
    }),

    // Fetch a Single Reservation
    getReservationById: builder.query({
      query: (reservationId) => `/reserves/${reservationId}`,
    }),

    // Fetch User Reservations
    getUserReservations: builder.query({
      query: (userId) => `/reservations/user/${userId}`,
    }),

    // Create Session
    createSession: builder.mutation({
      query: (sessionData) => ({
        url: "/create/sessions",
        method: "POST",
        body: sessionData,
      }),
    }),

    // Fetch a Single Session
    getSession: builder.query({
      query: (sessionId) => `/sessions/${sessionId}`,
    }),

    getSessionByUserId: builder.query({
      query: () => `/sessions/user`,
    }),

    // Verify otp
    verifyOtp: builder.mutation({
      query: (otpData) => ({
        url: "/verify-token",
        method: "POST",
        body: otpData,
      }),
    }),

    // user login
    userLogin: builder.mutation({
      query: (logData) => ({
        url: "/login",
        method: "POST",
        body: logData,
      }),
    }),

    // validate token
    validateToken: builder.mutation({
      query: () => ({
        url: "/validate",
        method: "POST",
      }),
    }),

    // Fetch User Sessions
    getUserSessions: builder.query({
      query: (userId) => `/sessions/user/${userId}`,
    }),

    // Filter Reservations
    filterReservations: builder.query({
      query: ({ status, type, startDate, endDate }) =>
        `/filter/reserve?status=${status}&type=${type}&startDate=${startDate}&endDate=${endDate}`,
    }),
  }),
});

// Export Hooks for API Calls
export const {
  useCreateUserMutation,
  useCreateReservationMutation,
  useVerifyOtpMutation,
  useGetReservationByIdQuery,
  useGetUserReservationsQuery,
  useCreateSessionMutation,
  useGetSessionQuery,
  useGetUserSessionsQuery,
  useFilterReservationsQuery,
  useUserLoginMutation,
  useValidateTokenMutation,
  useGetSessionByUserIdQuery
} = api;

export default api;
