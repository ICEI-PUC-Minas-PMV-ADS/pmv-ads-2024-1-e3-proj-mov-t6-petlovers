
import { Request, Response } from "express";



export async function handleImageUploadRequest(req: Request, res: Response) {
  console.log(req.file)
  const name = req.file?.originalname;
  return res.status(201).json({
    image: 'http://'
  }); 
}