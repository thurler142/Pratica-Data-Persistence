import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AuthorService = {
  async createAuthor(data: { tags: string; surname: string; completeName: string; userId: number }) {
    return await prisma.author.create({ data });
  },

  async getAuthors() {
    return await prisma.author.findMany({ include: { user: true, posts: true } });
  },

  async getAuthorById(id: number) {
    return await prisma.author.findUnique({ where: { id }, include: { user: true, posts: true } });
  },

  async updateAuthor(id: number, data: Partial<{ tags: string; surname: string; completeName: string }>) {
    return await prisma.author.update({ where: { id }, data });
  },

  async deleteAuthor(id: number) {
    return await prisma.author.delete({ where: { id } });
  },
};
