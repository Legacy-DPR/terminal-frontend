'use server';

import requestsOptions from '@/shared/requests-options';

export default async function getTicketById(ticketId: string): Promise<{
    id: string;
    appointedTime: string;
    qrCode: string;
    department: {
        id: string;
        address: string;
    };
    operation: {
        id: string;
        name: string;
        description: string;
        operationGroupId: string;
    };
    user: {
        id: string;
        telegramId: string;
    };
    createdAt: string;
}> {
    const response = await fetch(
        `${process.env.API_URL}/tickets/${ticketId}`,
        requestsOptions,
    );

    return await response.json();
}
