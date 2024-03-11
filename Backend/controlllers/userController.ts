
import { Request, Response } from 'express';

export const registerUser = async (req: Request, res: Response) => {
    res.json('registered!')
}
export const loginUser = async (req: Request, res: Response) => {
    res.json('logged in!')
}
export const logoutUser = async (req: Request, res: Response) => {
    res.json('logged out!')
}
