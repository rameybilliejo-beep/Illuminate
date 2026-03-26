// API route for Claude Code integration

import { NextResponse } from 'next/server';

export async function POST(request) {
    const requestData = await request.json();
    // Handle the Claude Code integration logic here
    // For example, you might call an external API or process the input

    return NextResponse.json({ message: 'Integration successful!', data: requestData });
}