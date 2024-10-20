'use server';

import requestsOptions from '@/shared/requests-options';

export async function getAvailableOperationGroups(
    departmentId: string,
): Promise<
    Array<{
        id: string;
        name: string;
        description: string;
    }>
> {
    const response = await fetch(
        `${process.env.API_URL}/departments/${departmentId}/operation-groups`,
        requestsOptions,
    );
    if (!response.ok) return [];

    const data = await response.json();
    return data;
}
