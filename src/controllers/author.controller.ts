import { Request, Response } from "express";
import { AuthorService } from "../services/author.service";

export const AuthorController = {
  async create(req: Request, res: Response) {
    const { tags, surname, completeName, userId } = req.body;
    const author = await AuthorService.createAuthor({ tags, surname, completeName, userId });
    res.json(author);
  },

  async findAll(req: Request, res: Response) {
    const authors = await AuthorService.getAuthors();
    res.json(authors);
  },

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const author = await AuthorService.getAuthorById(Number(id));
    res.json(author);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const updatedAuthor = await AuthorService.updateAuthor(Number(id), data);
    res.json(updatedAuthor);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await AuthorService.deleteAuthor(Number(id));
    res.status(204).send();
  },
};
