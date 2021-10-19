import axios from "axios"
import prismaClient from '../prisma'
import { sign } from 'jsonwebtoken'

/**
 * Receber code(string)
 * recuperar o acess token no github
 * Recuperar infos do user
 * verificar se o usuario existe no banco de dados
 * --sim-- gera um token
 * --nao-- cria no bd, gera um token
 * retornar o token com as info do user
 */

interface IAcessTokenReponse {
    access_token: string,
}

interface IUserReponse {
    avatar_url: string,
    login: string,
    id: number,
    name: string,
}

class AuthenticateUserService{
    async execute(code: string){
        const url = "https://github.com/login/oauth/access_token"

        const { data: accessTokenResponse } = await axios.post<IAcessTokenReponse>(url,null,{
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET_KEY,
                code,
            },
            headers: {
                "Accept": "application/json"
            }
        } )

        const response = await axios.get<IUserReponse>("https://api.github.com/user", {
            headers: {
                authorization: `Bearer ${accessTokenResponse.access_token}`
            }
        })

        const { login, id, avatar_url, name} = response.data

        let user = await prismaClient.user.findFirst({
            where:{
                github_id: id
            }
        })

        if(!user){
            await prismaClient.user.create({
                data: {
                    github_id: id,
                    login,
                    avatar_url,
                    name,
                }
            })
        }

        const token = sign({
            user: {
                name: user.name,
                avatar_url: user.avatar_url,
                id: user.id,
            }
        },
            process.env.JTW_SECRET,
            {
                subject: user.id,
                expiresIn: "1d"
            }
        )

        return { token, user }

    }
}

export { AuthenticateUserService }