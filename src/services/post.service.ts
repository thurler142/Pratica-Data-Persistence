import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const PostService = {
  async createPost(data: { title: string; text: string; authorId: number }) {
    return await prisma.post.create({ data });
  },

  async getPosts() {
    return await prisma.post.findMany({ include: { author: true, comments: true } });
  },

  async getPostById(id: number) {
    return await prisma.post.findUnique({ where: { id }, include: { author: true, comments: true } });
  },

  async updatePost(id: number, data: Partial<{ title: string; text: string }>) {
    return await prisma.post.update({ where: { id }, data });
  },

  async deletePost(id: number) {
    return await prisma.post.delete({ where: { id } });
  },
};
