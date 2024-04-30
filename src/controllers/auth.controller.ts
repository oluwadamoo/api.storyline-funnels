import { Request, Response } from "express";
import { User } from "../models";
import { BadRequestError, NotAuthorizedError } from "../errors";
import { Password } from "../utils";
import { AppConstants } from "../constants";
import jwt from "jsonwebtoken";

export class AuthController {
    static async register(req: Request, res: Response) {
        const user = await User.findOne({ email: req.body.email })


        if (user) {
            throw new BadRequestError('User with email exists')
        }
        const newUser = User.build({
            ...req.body
        })

        await newUser.save()

        const userJwt = jwt.sign({
            id: newUser.id,
            email: newUser.email,
        },
            AppConstants.jwtKey
        )


        return res.status(201).json({
            status: true,
            message: 'Account created!',
            data: {
                token: userJwt

            }
        })

    }

    static async login(req: Request, res: Response) {
        const user = await User.findOne({ email: req.body.email })


        if (!user) {
            throw new NotAuthorizedError("Invalid Credentials")
        }

        const passwordMatch = await Password.compare(
            user.password,
            req.body.password
        )

        if (!passwordMatch) {
            throw new NotAuthorizedError("Invalid Credentials")
        }

        const userJwt = jwt.sign({
            id: user.id,
            email: user.email,
        },
            AppConstants.jwtKey
        )

        res.status(200).send({
            status: true,
            message: "Signedin successfully",
            data: {
                token: userJwt

            }
        })


    }


}