import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, Github, ExternalLink, BookOpen } from 'lucide-react';
import { BackToTop } from '@/components/back-to-top';

export default function HomePage() {
    return (
        <>
            {/* ===== HERO SECTION ===== */}
            <section className="bg-white dark:bg-gray-950 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                        <span className="text-red-600">ContextEval</span>: Evaluating LLM Agent Context Policies for ML Experiment Design
                    </h1>

                    {/* Authors */}
                    <div className="mb-2">
                        <p className="text-lg text-gray-600">
                            <a href="https://www.linkedin.com/in/hikaru-isayama/" className="text-teal-600 hover:underline">Hikaru Isayama</a><sup className="text-xs">†</sup>,{' '}
                            <a href="https://www.linkedin.com/in/adrianapsay/" className="text-teal-600 hover:underline">Adrian Apsay</a><sup className="text-xs">†</sup>,{' '}
                            <a href="https://www.linkedin.com/in/julia-jung-21baa0267/" className="text-teal-600 hover:underline">Julia Jung</a><sup className="text-xs">†</sup>,{' '}
                            <a href="https://www.linkedin.com/in/raghavan-narasimhan/" className="text-teal-600 hover:underline">Narasimhan Raghavan</a><sup className="text-xs">†</sup>
                        </p>
                        <p className="text-sm text-gray-400 mt-1">† Equal contribution</p>
                    </div>

                    {/* Mentors */}
                    <p className="text-base text-gray-500 dark:text-gray-400 mb-1">
                        Mentors: <span className="text-gray-700 dark:text-gray-200">Ryan Lingo</span>, <span className="text-gray-700 dark:text-gray-200">Rajeev Chhajer</span>
                    </p>

                    {/* Affiliation */}
                    <p className="text-base mb-2">
                        <span className="text-blue-500 font-medium">UC San Diego</span>
                    </p>
                    <p className="text-sm text-gray-400 mb-8">
                        UCSD DSC Capstone - 99P Labs / Honda Research Institute &amp; HDSI
                    </p>

                    {/* Resource Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Button className="rounded-full bg-gray-900 text-white hover:bg-gray-800 px-5 py-2 text-sm gap-2">
                                <FileText className="w-4 h-4" />
                                Paper
                            </Button>
                        </Link>
                        <Link href="https://github.com/juliamsjung/context-eval" target="_blank" rel="noopener noreferrer">
                            <Button className="rounded-full bg-gray-900 text-white hover:bg-gray-800 px-5 py-2 text-sm gap-2">
                                <Github className="w-4 h-4" />
                                Github
                            </Button>
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Button className="rounded-full bg-gray-900 text-white hover:bg-gray-800 px-5 py-2 text-sm gap-2">
                                <BookOpen className="w-4 h-4" />
                                Poster
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== ABSTRACT ===== */}
            <section id="abstract" className="bg-gray-50 dark:bg-gray-900 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Abstract</h2>
                    <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-4 text-justify">
                        <p>
                            Large Language Model (LLM) agents are increasingly used to automate iterative machine learning (ML)
                            experimentation, yet how <em className="text-gray-800 dark:text-gray-200">context policy</em> design choices (e.g., what information
                            the agent retains, retrieves, and reasons over across turns) affect performance remains poorly understood.
                        </p>
                        <p>
                            We introduce <strong className="text-gray-900 dark:text-white">ContextEval</strong>, an evaluation framework that
                            systematically varies context policies along key axes (e.g., history depth, retrieval scope, summarization
                            strategy) and measures their impact on ML experiment outcomes including model accuracy, cost-efficiency,
                            and experimental stability.
                        </p>
                        <p>
                            Our benchmark spans multiple ML tasks and evaluates how different context configurations influence an
                            agent&apos;s ability to make informed, iterative decisions. We find that context policy has a significant
                            and often non-obvious effect on agent performance, with certain configurations boosting stability while
                            others improve peak accuracy at the cost of consistency.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== INTRODUCTION ===== */}
            <section id="introduction" className="bg-white dark:bg-gray-950 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Introduction</h2>
                </div>
            </section>

            {/* ===== RELATED WORKS ===== */}
            <section id="related-works" className="bg-gray-100 dark:bg-gray-900 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Related Works</h2>
                </div>
            </section>

            {/* ===== METHODOLOGY ===== */}
            <section id="methodology" className="bg-white dark:bg-gray-950 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Methodology</h2>
                </div>
            </section>

            {/* ===== RESULTS ===== */}
            <section id="results" className="bg-gray-100 dark:bg-gray-900 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Results</h2>
                </div>
            </section>

            {/* ===== ANALYSIS & DISCUSSION ===== */}
            <section id="analysis" className="bg-white dark:bg-gray-950 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Analysis &amp; Discussion</h2>
                </div>
            </section>

            {/* ===== CONCLUSION ===== */}
            <section id="conclusion" className="bg-gray-100 dark:bg-gray-900 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Conclusion</h2>
                </div>
            </section>

            {/* ===== CODE & RESOURCES ===== */}
            <section id="code-resources" className="bg-white dark:bg-gray-950 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Code &amp; Resources</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                        Check out our codebase for the ContextEval framework.
                    </p>
                    <Link
                        href="https://github.com/juliamsjung/context-eval"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="rounded-full bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 text-base gap-2">
                            <Github className="w-5 h-5" />
                            github.com/juliamsjung/context-eval
                            <ExternalLink className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* ===== BIBTEX CITATION ===== */}
            <section id="citation" className="bg-gray-50 dark:bg-gray-900 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">📌 BibTeX Citation</h2>
                    <p className="text-gray-600 text-center mb-6">
                        If you find our project useful, please consider citing:
                    </p>
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 overflow-x-auto">
                        <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono whitespace-pre-wrap">
                            {`@misc{contexteval2025,
    title={ContextEval: Evaluating LLM Agent Context Policies for ML Experiment Design},
    author={Hikaru Isayama and Adrian Apsay and Julia Jung and Narasimhan Raghavan},
    year={2025},
    institution={UC San Diego},
    note={UCSD DSC Capstone -- 99P Labs / HRI \\& HDSI. Mentors: Ryan Lingo, Rajeev Chhajer}
}`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Back to Top */}
            <BackToTop />
        </>
    );
}
