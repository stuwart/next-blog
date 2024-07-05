import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export async function GetCategory() {
    try {
        const categoryList = await prisma.category.findMany();
        console.log("Fetched categories:", categoryList);
        return categoryList;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}


export async function CreateCategory(){
    
}
