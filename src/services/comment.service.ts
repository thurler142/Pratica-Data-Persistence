import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CommentService = {
  async createComment(data: { text: string; postId: number; userId: number }) {
    return await prisma.comment.create({ data });
  },

  async getComments() {
    return await prisma.comment.findMany({ include: { post: true, user: true } });
  },

  async getCommentById(id: number) {
    return await prisma.comment.findUnique({ where: { id }, include: { post: true, user: true } });
  },

  async updateComment(id: number, data: Partial<{ text: string }>) {
    return await prisma.comment.update({ where: { id }, data });
  },

  async deleteComment(id: number) {
    return await prisma.comment.delete({ where: { id } });
  },
};
