import Link from 'next/link';

import { getAvailableOperationGroups } from '@/api/get-available-operation-groups';
import { Button } from '@/components/ui/button';
import routes from '@/routes';

export default async function TicketsPage() {
    const operationGroups = await getAvailableOperationGroups(
        process.env.DEPARTMENT_ID,
    );
    return (
        <div className="flex flex-col space-y-4 w-full">
            <h2 className="text-3xl text-center mb-4">Выберите тип операции</h2>
            {operationGroups.map(group => (
                <Link key={group.id} href={`${routes.TICKETS}/${group.id}`}>
                    <Button size="xl" className="w-full py-8">
                        {group.name}
                    </Button>
                </Link>
            ))}
        </div>
    );
}
