import { Router } from "express";
import { currentUser, requireAuth, validateRequest } from "../middlewares";
import { PageController } from "../controllers";
import { body } from "express-validator";


const pageRouter = Router()

pageRouter.get('/:slug',
    PageController.getPage
)

pageRouter.post('/add-new',
    currentUser,
    requireAuth,

    [
        body("headline").notEmpty().withMessage("Please enter page headline"),
        body("subheading").notEmpty().withMessage("Please enter page subheading"),
        body("slug").notEmpty().withMessage("Please enter page slug"),
        body("contents").isArray({ min: 1 }).withMessage("Please add a card or a content or button or something")

    ],
    validateRequest,
    PageController.addPage
)


export { pageRouter }