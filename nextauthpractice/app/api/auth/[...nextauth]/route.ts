import nextAuth from "next-auth";
import { NEXT_AUTH } from "@/app/lib/auth";

// login dengan email dan password
const handler = nextAuth(NEXT_AUTH)

export {handler as GET, handler as POST}
