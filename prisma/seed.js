import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/index.js";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL)
const prisma = new PrismaClient({
    adapter: adapter,
})

async function main() {
    console.log('INIZIATO');

    await prisma.category.deleteMany()

    const categoriseNames = ['Horror', 'Fantasy', 'Thriller', 'Fantascienza', 'Romanzo']

    await prisma.category.createMany({
        data: categoriseNames.map((categ) => ({
            title: categ
        })),
    })
}

main()
    .catch(e => {
        console.log(e);
        process.exit(1);
    }).finally(() => prisma.$disconnect());