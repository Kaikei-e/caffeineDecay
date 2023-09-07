import {CaffeineInput} from "@/app/components/CaffeineInput";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <h2 className='text-3xl font-bold'>Let&apos;s calculate the decay of caffeine ☕</h2>
            <h2 className='text-3xl'>How much caffeine is accumulated in your body?</h2>

            <div className={'m-10'}>
                <CaffeineInput />
            </div>
        </main>
    )
}
