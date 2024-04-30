import { Express, Router } from 'express';
import { NotFoundError } from '../errors';
import { authRouter } from './auth.routes';
import { pageRouter } from './page.routes';


export const routes = (app: Express) => {
    app.use('/api/auth', authRouter);
    app.use('/api/pages', pageRouter)
    app.get("/api", (_, res) => {
        res.json({ message: "Let's get started!..." })
    })

    app.all('*', () => {
        throw new NotFoundError()
    })


}