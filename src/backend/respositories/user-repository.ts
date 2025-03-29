import { PrismaClient } from "@prisma/client";

export default class UserRepository {
  private db: PrismaClient = new PrismaClient();
}
