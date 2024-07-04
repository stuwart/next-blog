// app/components/ServerComponent.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getCategories() {
    try {
        const categories = await prisma.category.findMany();
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}
