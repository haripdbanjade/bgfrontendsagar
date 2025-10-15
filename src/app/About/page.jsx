import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About Us | bg678</title>
                <meta
                    name="description"
                    content="bg678 is a next-gen gaming marketing agency helping developers and studios connect with players worldwide."
                />
            </Head>

            <main className="bg-black text-gray-100 min-h-screen px-6 py-16">
                {/* Hero Section */}
                <section className="mb-20 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Why Choose <span className="text-red-500">BG678</span>?
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        We’re not just marketers — we’re players, fans, and insiders. We know what gamers want and how to reach them. Whether you’re an indie dev or a AAA studio, we bring passion and experience to elevate your launch.
                    </p>
                </section>

                {/* Call to Action Section */}
                <section className="bg-gray-900 p-10 md:p-16 rounded-xl text-center max-w-3xl mx-auto shadow-lg shadow-black/40 transition-transform hover:scale-105">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Let’s Build Something Epic
                    </h2>
                    <p className="text-gray-300 mb-6 text-lg md:text-xl">
                        Ready to take your game to the next level? Contact us today and let’s make it legendary.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
                        <a
                            href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
                            className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-lg font-semibold transition"
                        >
                            Email Us
                        </a>
                        <a
                            href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition"
                        >
                            Visit Our Website
                        </a>
                    </div>

                    <div className="text-gray-400 text-sm md:text-base">
                        Follow us:
                        <a
                            href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
                            className="text-red-400 hover:underline mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>|
                        <a
                            href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
                            className="text-red-400 hover:underline mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TikTok
                        </a>|
                        <a
                            href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
                            className="text-red-500 hover:underline mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
