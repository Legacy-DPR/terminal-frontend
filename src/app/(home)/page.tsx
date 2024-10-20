import Link from 'next/link';

import { Button } from '@/components/ui/button';
import routes from '@/routes';

export default async function Home() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-120px)]">
            <div className="flex flex-col space-y-4 w-full container">
                <div>
                    <Link href={routes.TICKETS}>
                        <Button size="xl" className="w-full py-16 uppercase">
                            Получить талон
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link href={routes.REGISTER}>
                        <Button size="xl" className="w-full py-16 uppercase">
                            Зарегистрироваться в Telegram
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
