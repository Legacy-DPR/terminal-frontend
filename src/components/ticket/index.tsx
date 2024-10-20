'use client';

import Image from 'next/image';

import { useEffect, useState, useTransition } from 'react';

import getTicketById from '@/api/get-ticket-by-id';

export default function Ticket(props: { ticketId: string }) {
    const [isPending, startTransition] = useTransition();

    const [ticketInfo, setTicketInfo] = useState<Awaited<
        ReturnType<typeof getTicketById>
    > | null>(null);

    useEffect(() => {
        startTransition(async () => {
            const ticketInfo = await getTicketById(props.ticketId);
            setTicketInfo(ticketInfo);
        });
    }, []);

    console.log(ticketInfo);

    return (
        <div>
            {isPending || !ticketInfo ? (
                <div>Загрузка...</div>
            ) : (
                <div className="container flex flex-col items-center">
                    <h2 className="text-3xl font-semibold text-center">
                        Талон на оказание услуги Почты Донбасса
                    </h2>
                    <Image
                        src={`${process.env.API_URL}${ticketInfo.qrCode}`}
                        alt={ticketInfo.operation.description}
                        width={350}
                        height={350}
                    />
                    <h3 className="text-2xl text-center">
                        {ticketInfo.operation.description}
                    </h3>
                    <p>
                        Дата:{' '}
                        {new Intl.DateTimeFormat('ru-RU', {
                            dateStyle: 'medium',
                            timeStyle: 'medium',
                        }).format(Date.parse(ticketInfo.createdAt))}
                    </p>
                    <code>{ticketInfo.id}</code>
                </div>
            )}
        </div>
    );
}
