"use client";
import ConsoleDemo from "@/components/sugarhigh/home/console-demo";
import { PaletteProvider } from "@/components/sugarhigh/home/console-demo/palette/context";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PaletteProvider>
        <div className="flex flex-col justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 py-2 md:py-4">
              Sugar High
            </h1>
            <p className="max-w-[600px] text-zinc-200 dark:text-zinc-100 mx-auto text-sm sm:text-md">
              Super lightweight syntax highlighter for JSX,
              <b> 1KB</b> after minified and gizpped.
            </p>
          </div>
          <ConsoleDemo />
        </div>
      </PaletteProvider>
    </main>
  );
}
