import { Router } from "express";
import { createUser, getAllUsers, updateUser, deleteUser } from "../controllers/user.Controller";

export const router = Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
