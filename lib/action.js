import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();



export async function getCategory() {
    try {
        const categories = await prisma.category.findMany();
        return categories;
    } catch (error) {
        console.error("Error fetching categories: ", error);
        return [];
    }
}