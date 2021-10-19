import prismaClient from '../prisma'


class GetLast3MessageService {
    async execute() {
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc"
            },
            include: {
                users: true
            }
        })

        //Select * from messages limite 3 order by created_at desc
        return messages
    }
}

export { GetLast3MessageService }