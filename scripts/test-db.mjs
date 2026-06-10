import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
try {
  await prisma.$queryRaw`SELECT 1`;
  console.log("DB_OK");
} catch (e) {
  console.error("DB_FAIL");
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
