'use client';

import { useEffect, useState, useTransition } from 'react';

import createNewTicket from '@/api/create-new-ticket';
import Ticket from '@/components/ticket';

export default function CreateTicketPage({
    params,
}: {
    params: {
        operationGroup: string;
        operation: string;
    };
}) {
    const [isPending, startTransition] = useTransition();

    const [createdTicketId, setCreateTicketId] = useState<string | null>(null);
    useEffect(() => {
        startTransition(async () => {
            const ticketData = await createNewTicket(params.operation);
            console.log(ticketData);
            setCreateTicketId(ticketData.id);
        });
    }, []);

    return (
        <div>
            {isPending && <div>Загрузка</div>}
            {createdTicketId && <Ticket ticketId={createdTicketId} />}
        </div>
    );
}
