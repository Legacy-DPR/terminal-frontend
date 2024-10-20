import Link from 'next/link';

import getOperationsByGroup from '@/api/get-operations-by-group';
import { Button } from '@/components/ui/button';
import routes from '@/routes';

export default async function OperationGroupPage({
    params,
}: {
    params: { operationGroup: string };
}) {
    const operations = await getOperationsByGroup(params.operationGroup);
    return (
        <div className="flex flex-col space-y-4 w-full ">
            <h2 className="text-3xl text-center mb-4">Выберите операцию</h2>
            {operations.map(operation => (
                <Link
                    key={operation.id}
                    href={`${routes.TICKETS}/${params.operationGroup}/${operation.id}`}
                >
                    <Button size="xl" className="w-full py-8">
                        {operation.name}
                    </Button>
                </Link>
            ))}
        </div>
    );
}
