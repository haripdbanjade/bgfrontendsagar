import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About Us | GameVerse</title>
                <meta name="description" content="GameVerse is a next-gen gaming marketing agency helping developers and studios connect with players worldwide." />
            </Head>

            <main className="bg-black text-gray-100 min-h-screen px-6 py-16">
          
                <section className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-white mb-6">Why GameVerse?</h2>
                    <p className="text-gray-400 text-lg">
                        We're not just marketers — we're players, fans, and insiders. We understand what gamers want and how to reach them. Whether you're an indie dev or a AAA studio, we bring the passion and experience to elevate your launch.
                    </p>
                </section>

                <section className="bg-gray-900 p-8 rounded-lg text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-4">Let’s Build Something Epic</h2>
                    <p className="text-gray-300 mb-6">
                        Ready to take your game to the next level? Contact us today and let’s make it legendary.
                    </p>
                    <div className="space-y-2">
                        <a href="mailto:contact@gameverse.com" className="block text-blue-400 hover:underline">contact@gameverse.com</a>
                        <a href="https://gameverse.com" className="block text-blue-400 hover:underline">www.gameverse.com</a>
                        <div className="mt-2 text-gray-400">
                            Follow us:
                            <a href="https://twitter.com/Gameverse" className="text-blue-400 hover:underline mx-1">Twitter</a> |
                            <a href="https://tiktok.com/@Gameverse" className="text-blue-400 hover:underline mx-1">TikTok</a> |
                            <a href="https://linkedin.com/company/Gameverse" className="text-blue-400 hover:underline mx-1">LinkedIn</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
