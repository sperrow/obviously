'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    function handleClick() {
        router.push('/library');
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        handleClick();
    }

    return (
        <div className="flex flex-col min-h-screen text-slate-600">
            <header>
                <nav className="p-8">
                    <a href="/library">
                        <Image src="/Logo_Brandmark_FullColor.svg" alt="Logo" width={128} height={24}></Image>
                    </a>
                </nav>
            </header>

            <main className="flex-grow flex items-center justify-center text-center py-12">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center mx-4">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl shadow-sm mb-8 p-3">
                            <Image src="/users-03.svg" alt="users icon" width={28} height={28}></Image>
                        </div>
                        <h1 className="text-3xl text-black font-bold mb-3">Sign In</h1>
                        <p className="mb-8">Welcome back! Let&apos;s get started with AI</p>
                    </div>
                    <div className="bg-white px-10 py-8 border border-slate-200 rounded-lg shadow-lg mb-8 mx-2 md:w-[460px] ">
                        <form onSubmit={handleSubmit} className="space-y-8 text-left">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full border bg-blue-500 text-white py-2 rounded-md font-bold hover:bg-blue-600 transition duration-300"
                            >
                                Sign In
                            </button>
                        </form>
                        <div className="flex items-center justify-center w-full text-slate-300 my-1">
                            <hr className="w-full h-px my-8 bg-slate-300 border-0" />
                            <span className="absolute px-3 font-bold -translate-x-1/2 bg-white left-1/2">OR</span>
                        </div>
                        <button
                            onClick={() => handleClick()}
                            type="button"
                            className="w-full py-2 border rounded-md shadow-sm font-bold hover:bg-slate-100 transition duration-300 text-center inline-flex items-center justify-center mb-4"
                        >
                            <Image
                                src="/Google_icon.svg"
                                alt="google icon"
                                width={24}
                                height={24}
                                className="me-2"
                            ></Image>
                            Sign up with Google
                        </button>
                        <button
                            onClick={() => handleClick()}
                            type="button"
                            className="w-full py-2 border rounded-md shadow-sm font-bold hover:bg-slate-100 transition duration-300 text-center inline-flex items-center justify-center"
                        >
                            <Image
                                src="/LinkedIn_icon.svg"
                                alt="linkedin icon"
                                width={24}
                                height={24}
                                className="me-2"
                            ></Image>
                            Sign up with LinkedIn
                        </button>
                    </div>
                    <p className="text-sm">
                        Don&apos;t have an account?{' '}
                        <a href="/library" className="text-blue-500 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </main>

            <footer className="p-8 text-slate-600 text-sm">
                <p>&copy; Copyrights 2025 by Obviously AI, Inc. All rights reserved.</p>
            </footer>
        </div>
    );
}
