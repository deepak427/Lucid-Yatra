import connectDB from "@/utils/db";
import Booking from "@/models/Booking";

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();
    const newBooking = await Booking.create(body);
    return new Response(JSON.stringify(newBooking), {
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Error", err }), {
      status: 500,
    });
  }
}
