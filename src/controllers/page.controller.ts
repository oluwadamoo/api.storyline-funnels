import { Request, Response } from "express";
import { Page, } from "../models";
import { BadRequestError, NotFoundError } from "../errors";

export class PageController {
    static async addPage(req: Request, res: Response) {

        const existingPage = await Page.findOne({ slug: req.body.slug })


        if (existingPage) {
            throw new BadRequestError("Slug has to a unique field!")
        }
        const page = Page.build({
            ...req.body
        })

        await page.save()



        return res.status(201).json({
            status: true,
            message: 'Page created!',
            data: {
                page
            }
        })

    }

    static async getPage(req: Request, res: Response) {
        const page = await Page.findOne({ slug: req.params.slug })


        if (!page) {
            throw new NotFoundError("Page not found!")
        }



        return res.status(200).send({
            status: true,
            message: "Page retrieved",
            data: {
                page
            }
        })


    }


}