import Image from "next/image";

export default function PerplexityPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
      <div className="relative w-56 h-14 mb-8">
        <Image src="/images/perplexity-logo.png" alt="Perplexity" fill className="object-contain" />
      </div>
      <h1 className="font-serif text-3xl mb-3">Improving AI Adoption</h1>
      <span className="text-xs rounded-full border border-neutral-300 px-3 py-1 text-neutral-600 mb-4">
        UX Research
      </span>
      <p className="text-neutral-400 italic">Coming soon!</p>
    </main>
  );
}
