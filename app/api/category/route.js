import { NextResponse } from "next/server";
import { GetCategory } from "@/app/server/action";
export async function GET(request) {
    try {
        const res = await GetCategory();
        console.log("Category data:", res);
        return new Response(JSON.stringify(res), { status: 200 });
    } catch (error) {
        console.error("Error in GET /api/category:", error);
        return new Response(JSON.stringify({ error: 'Failed to fetch categories' }), { status: 500 });
    }
}

export async function POST(request){
    
}