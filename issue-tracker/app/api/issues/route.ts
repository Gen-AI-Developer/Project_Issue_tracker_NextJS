import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { Value } from '@radix-ui/themes/dist/esm/components/data-list.js';

const prisma = new PrismaClient();

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
    pirority: z.enum([
        "NORMAL",
        "URGENT",
        "PIRORITY",
        "CRITICAL"
    ])
}).strict(); // Ensures no extra properties are allowed

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validation = createIssueSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(validation.error.errors, { status: 400 });
        }

        const { title, description, pirority } = validation.data;

        const newIssue = await prisma.issue.create({
            data: { title, description, pirority }
        });

        return NextResponse.json(newIssue, { status: 201 });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
