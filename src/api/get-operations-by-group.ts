'use server';

import requestsOptions from '@/shared/requests-options';

export default async function getOperationsByGroup(
    operationGroup: string,
): Promise<
    Array<{
        id: string;
        name: string;
        description: string;
    }>
> {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/operation-group/${operationGroup}/operations`,
        requestsOptions,
    );
    if (!response.ok) return [];

    const data = await response.json();
    return data;
}
