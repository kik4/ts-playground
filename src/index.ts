import { zonedTimeToUtc } from "date-fns-tz";

console.log("🚀 TypeScript Playground");

process.env.TZ = "UTC";

const datetime = "2025-07-07T00:00Z";
const now = new Date(datetime);

console.log({
  offset: now.getTimezoneOffset(),
  now,
  zonedTime: zonedTimeToUtc(now, "Asia/Tokyo"),
  zonedTime2: zonedTimeToUtc(datetime, "Asia/Tokyo"),
});

console.log("🚀 Done!");
