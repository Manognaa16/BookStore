import { getBook } from "../contoller/book.controller.js";
import express from "express";

const route = express.Router();

route.get("/", getBook);

export default route;
