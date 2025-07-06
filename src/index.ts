import { utcToZonedTime } from "date-fns-tz";

console.log("🚀 TypeScript Playground");

process.env.TZ = "UTC";

const now = new Date("2025-07-07T00:00+09:00");

const zonedTime = utcToZonedTime(now, "Asia/Tokyo");

console.log({
  offset: now.getTimezoneOffset(),
  now,
  zonedTime,
});

console.log("🚀 Done!");
