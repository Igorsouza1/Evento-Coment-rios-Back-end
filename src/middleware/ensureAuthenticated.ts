import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPlayLoad {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization
    
    if(!authToken){
        return response.status(401).json({
            errorCode: "token.invalid",
        })
    }

    const [, token] = authToken.split(" ")

    try{ 
        const { sub } = verify(token, "6e0541aa1ae7bc9fe4bfa082c9ca783b") as IPlayLoad
        request.user_id = sub

        return next();

    }catch(err){
        return response.status(401).json({
            errorCode: "Token.expired"
        })  
    }

}