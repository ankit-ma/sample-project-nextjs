"use server";
import { neon } from "@neondatabase/serverless";
import logger from "./logger";

const databseUrl: string | undefined = process.env.DATABASE_URL;
export async function getData() {
  if (databseUrl !== undefined) {
    const sql = neon(databseUrl);
    const data = await sql`select * from header`;
    logger.error("Respoonse from DB:" + JSON.stringify(data));
    return data;
  }
}
