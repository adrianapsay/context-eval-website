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
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                        <span className="text-red-600">ContextEval</span>: Evaluating LLM Agent Context Policies for ML Experiment Design
                    </h1>

                    {/* Authors */}
                    <div className="mb-2">
                        <p className="text-base md:text-lg text-gray-600 flex flex-wrap justify-center gap-x-2">
                            <span><a href="https://www.linkedin.com/in/hikaru-isayama/" className="text-teal-600 hover:underline">Hikaru Isayama</a><sup className="text-xs">†</sup>,</span>
                            <span><a href="https://www.linkedin.com/in/adrianapsay/" className="text-teal-600 hover:underline">Adrian Apsay</a><sup className="text-xs">†</sup>,</span>
                            <span><a href="https://www.linkedin.com/in/julia-jung-21baa0267/" className="text-teal-600 hover:underline">Julia Jung</a><sup className="text-xs">†</sup>,</span>
                            <span><a href="https://www.linkedin.com/in/raghavan-narasimhan/" className="text-teal-600 hover:underline">Narasimhan Raghavan</a><sup className="text-xs">†</sup></span>
                        </p>
                        <p className="text-sm text-gray-400 mt-1">† Equal contribution</p>
                    </div>

                    {/* Mentors */}
                    <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-1">
                        Mentors: <span className="text-gray-700 dark:text-gray-200">Ryan Lingo</span>, <span className="text-gray-700 dark:text-gray-200">Rajeev Chhajer</span>
                    </p>

                    {/* Affiliation */}
                    <p className="text-sm md:text-base mb-8">
                        <span className="text-blue-500 font-medium">UC San Diego</span> &amp; <span className="text-red-500 font-medium">99P Labs / Honda Research Institute</span>
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
            <section id="abstract" className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Abstract</h2>
                    <div className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed space-y-4 text-left md:text-justify">
                        <p>
                            Large language models (LLMs) are increasingly deployed as autonomous agents in machine learning workflows. However, in most frameworks, the information provided to the agent—task descriptions, evaluation metrics, or prior optimization history—is treated as fixed. As a result, performance differences across systems often reflect differences in what agents are <em className="italic">told</em> rather than what they can <em className="italic">reason</em>.
                        </p>
                        <p>
                            We introduce <strong className="font-semibold text-gray-900 dark:text-white">ContextEval</strong>, a controlled evaluation framework that treats context visibility as a first-class experimental variable. By holding the model, environment, and prompt template fixed, we systematically vary four orthogonal axes of information exposure across four machine learning benchmarks to isolate the effects of context on optimization behavior.
                        </p>
                        <p>
                            Across our full factorial grid of 16 context policies, we find that optimization behavior is strongly initialization-dependent. The LLM acts primarily as a <strong className="font-semibold text-gray-900 dark:text-white">corrective heuristic</strong>—rapidly repairing poorly configured models but yielding diminishing returns near strong configurations. Furthermore, richer context such as semantic task descriptions and longer histories can encourage instability, while explicit parameter bounds improve structural constraint adherence without improving objective performance. These results motivate treating context visibility as a controlled experimental variable in all future LLM optimization benchmarks.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== INTRODUCTION ===== */}
            <section id="introduction" className="bg-white dark:bg-gray-950 py-12 md:py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
                        The Context Problem in LLM Agents
                    </h2>
                    <div className="w-16 h-1 bg-red-500 mx-auto mb-8 rounded"></div>
                    <div className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed space-y-4 text-left md:text-justify">
                        <p>
                            A central design element in agent-based systems is the <strong>context</strong> available to the agent. Prompts may include task descriptions, evaluation metrics, parameter constraints, or prior optimization history. However, in most frameworks, the structure of this informational exposure is not treated as a controlled experimental variable.
                        </p>
                        <p>
                            As a result, performance differences across agent systems may reflect differences in <em className="italic">informational access</em> rather than model capability, making it difficult to attribute observed results or reproduce findings. <strong>ContextEval</strong> solves this by treating context allocation as a first-class experimental variable, isolating the effects of informational exposure on optimization behavior.
                        </p>
                    </div>

                    {/* Architecture Sub-section / Image Placeholder */}
                    <div className="mt-12 md:mt-16">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                            Context-Trace Separation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                            To ensure behavioral effects trace solely to context exposure, ContextEval enforces a strict programmatic boundary: an execution Trace Layer logs the full environment state, while a policy-gated Context Layer filters the agent's observation space.
                        </p>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl aspect-square sm:aspect-video md:aspect-[16/7] flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                            <span className="text-gray-400 font-medium whitespace-pre-wrap text-center px-4 relative z-10">
                                [Insert System Architecture Diagram Here]{'\n'}
                                <span className="text-sm">(e.g., Figure 1. ContextEval System Architecture)</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>



            {/* ===== METHODOLOGY ===== */}
            <section id="methodology" className="bg-gray-100 dark:bg-gray-900 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
                        Systematic Context Variations
                    </h2>
                    <div className="w-16 h-1 bg-red-500 mx-auto mb-8 rounded"></div>
                    <div className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed space-y-6 md:space-y-8 text-left md:text-justify">
                        <p>
                            We vary four orthogonal axes of context visibility. Across these axes, we construct a full factorial grid of 16 context policies and evaluate agent behavior on four machine learning benchmarks: NOMAD materials regression, Forest Cover classification, California Housing regression, and Jigsaw toxicity classification.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
                            <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">1. Task Description</h3>
                                <p className="text-sm">Exposure to semantic descriptions sourced verbatim from competition specifications.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">2. Evaluation Metric</h3>
                                <p className="text-sm">Visibility of the mathematical evaluation rule (e.g., RMSE, Mean AUC) without explicit directionality.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">3. Parameter Bounds</h3>
                                <p className="text-sm">Explicit definitions of the feasible region for the hyperparameter search space.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">4. Feedback Depth</h3>
                                <p className="text-sm">The temporal depth of historical feedback (e.g., observing only the last step vs. the last 5 steps).</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Stratified Initialization</h3>
                            <p>
                                To study how initialization quality interacts with context visibility, we evaluate a pool of 256 configurations using Sobol quasi-random sampling. We then partition configurations into three performance strata: <strong>High</strong>, <strong>Neutral</strong>, and <strong>Low</strong>. This ensures our evaluation covers the entire difficulty distribution of the search space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== KEY FINDINGS ===== */}
            <section id="findings" className="bg-white dark:bg-gray-950 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
                        Key Findings
                    </h2>
                    <div className="w-16 h-1 bg-red-500 mx-auto mb-10 md:mb-12 rounded"></div>

                    {/* Finding 1 */}
                    <div className="mb-12 md:mb-16">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            1. LLMs Act as Corrective Heuristics
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6 text-left md:text-justify">
                            Optimization trajectories are heavily initialization-dependent. LLM agents rapidly escape poor configurations but provide diminishing returns near strong start points. Rather than acting as deep structural searchers, they behave mostly as corrective heuristics that do not consistently outperform random search.
                        </p>
                        {/* Image Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-6">
                            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-50 flex items-center justify-center p-2 md:p-4">
                                <img src="/context-eval-website/figures/fig4_delta_regret_by_init.png" alt="Reduction in Regret by Initialization" className="w-full h-auto object-contain rounded-lg" />
                            </div>
                            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-50 flex items-center justify-center p-2 md:p-4">
                                <img src="/context-eval-website/figures/fig2_llm_vs_random.png" alt="LLM vs. Random Search Baselines" className="w-full h-auto object-contain rounded-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Finding 2 */}
                    <div className="mb-12 md:mb-16">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            2. Feasibility vs. Optimization Quality
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6 text-left md:text-justify">
                            Exposing explicit parameter bounds to the agent reliably eliminates constraint violations ("objective-scale hallucinations"). However, this structural compliance does not translate into improved final objective scores, highlighting a stark separation between feasibility restrictions and optimization capability.
                        </p>
                        {/* Image Placeholder */}
                        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-50 flex items-center justify-center p-2 md:p-4">
                            <img src="/context-eval-website/figures/fig6_axis_effects.png" alt="Effect of Context Axes" className="w-full h-auto object-contain rounded-lg" />
                        </div>
                    </div>

                    {/* Finding 3 */}
                    <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            3. Context Rot & The "Lost in the Middle" Effect
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6 text-left md:text-justify">
                            Dense semantic task metadata introduces significant trajectory instability. When evaluating Kaggle tasks with lengthy descriptions, structural JSON instructions get "buried." This causes the LLM's attention mechanism to degrade, resulting in repeated parsing failures (Context Rot). Furthermore, deeper historical feedback frequently traps the agent in non-convergent oscillation when initialized from a poor state.
                        </p>
                        {/* Image Placeholder */}
                        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-50 flex items-center justify-center p-2 md:p-4">
                            <img src="/context-eval-website/figures/fig10_trajectory_examples.png" alt="Optimization Trajectory Examples" className="w-full h-auto object-contain rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>



            {/* ===== CONCLUSION ===== */}
            <section id="conclusion" className="bg-gray-100 dark:bg-gray-900 py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
                        Conclusion
                    </h2>
                    <div className="w-16 h-1 bg-red-500 mx-auto mb-8 rounded"></div>
                    <div className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed space-y-4 text-left md:text-justify">
                        <p>
                            ContextEval demonstrates that an LLM's capacity to optimize machine learning experiments is deeply intertwined with the structure of the information it receives. While LLMs are effective debuggers, their limitations in maintaining stability under complex semantic noise suggest they currently operate best as corrective heuristics that do not consistently outperform random search, rather than autonomous black-box optimizers.
                        </p>
                        <p>
                            We argue that future evaluations of agentic frameworks must treat context visibility as a rigorously controlled experimental variable to accurately measure genuine reasoning capabilities versus prompt-based structural advantages.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== CODE & RESOURCES ===== */}
            <section id="code-resources" className="bg-white dark:bg-gray-950 py-12 md:py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Code &amp; Resources</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-6 max-w-lg mx-auto">
                        Check out our codebase for the ContextEval framework.
                    </p>
                    <Link
                        href="https://github.com/juliamsjung/context-eval"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                    >
                        <Button className="rounded-full bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 text-sm md:text-base gap-2 w-full">
                            <Github className="w-5 h-5 flex-shrink-0" />
                            <span className="truncate">github.com/juliamsjung/context-eval</span>
                            <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* ===== BIBTEX CITATION ===== */}
            <section id="citation" className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">📌 BibTeX Citation</h2>
                    <p className="text-gray-600 text-center mb-6 text-sm md:text-base">
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
