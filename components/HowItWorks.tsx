import Image from 'next/image';

export function HowItWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl text-black font-bold text-center mb-16">
                    How <span className="text-blue-500">Tess</span><span className="text-blue-500">uite</span> works in 3 simple steps
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
                                <Image src={step.image} alt={step.title} width={200} height={200} className="object-contain" />
                            </div>
                            <h3 className="text-xl text-black font-bold mb-4 px-4">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed px-6">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full">
                        Get started for free
                    </button>
                </div>
            </div>
        </section>
    );
}

const steps = [
    {
        title: 'Step 1 - Enter your website URL',
        description: 'Get started by simply entering the link to your website.',
        image: '/images/img_enterURL.png',
    },
    {
        title: 'Step 2 - Let AI do the work',
        description: "Tessuite's smart AI generates tailored test cases and runs them automatically.",
        image: '/images/img_AI.png',
    },
    {
        title: 'Step 3 - Review your results',
        description: 'Receive clear, actionable reports with insights to fix issues quickly.',
        image: '/images/img_insights.png',
    }
];
