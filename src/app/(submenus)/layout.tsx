'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function SubmenuLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(80vh)] container">
            {children}
            <Button
                onClick={router.back}
                size="xl"
                className="w-full py-8 mt-12"
                variant="secondary"
            >
                Назад
            </Button>
        </div>
    );
}
