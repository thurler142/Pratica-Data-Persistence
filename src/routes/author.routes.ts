import { Router } from "express";
import { AuthorController } from "../controllers/author.controller";

const router = Router();

router.post("/", AuthorController.create);
router.get("/", AuthorController.findAll);
router.get("/:id", AuthorController.findOne);
router.put("/:id", AuthorController.update);
router.delete("/:id", AuthorController.delete);

export default router;
