'use server';

import requestsOptions from '@/shared/requests-options';

export default async function createNewTicket(operationId: string): Promise<{
    id: string;
    appointedTime: string;
    departmentId: string;
    userId: string;
    qrCode: string;
    createdAt: string;
    operationId: string;
}> {
    console.log(
        JSON.stringify({
            telegramId: 'Guest',
            departmentId: process.env.DEPARTMENT_ID,
            operationId,
        }),
    );

    const response = await fetch(`${process.env.API_URL}/tickets`, {
        headers: {
            ...requestsOptions.headers,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            telegramId: 'Guest',
            departmentId: process.env.DEPARTMENT_ID,
            operationId,
        }),
    });

    return await response.json();
}
