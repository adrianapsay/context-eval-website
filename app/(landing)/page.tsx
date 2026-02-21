import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, Github, ExternalLink, BookOpen } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* ===== HERO SECTION ===== */}
            <section className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                    ContextEval: Evaluating LLM Agent Context Policies for ML Experiment Design
                </h1>

                {/* Authors */}
                <div className="mb-2">
                    <p className="text-lg text-gray-600">
                        <a href="#" className="text-orange-600 hover:underline">Hikaru Isayama</a>
                        <sup className="text-xs text-gray-500">1</sup>,{' '}
                        <a href="#" className="text-orange-600 hover:underline">Adrian Apsay</a>
                        <sup className="text-xs text-gray-500">1</sup>,{' '}
                        <a href="#" className="text-orange-600 hover:underline">Julia Jung</a>
                        <sup className="text-xs text-gray-500">1</sup>,{' '}
                        <a href="#" className="text-orange-600 hover:underline">Narasimhan Raghavan</a>
                        <sup className="text-xs text-gray-500">1</sup>,{' '}
                        <a href="#" className="text-orange-600 hover:underline">Ryan Lingo</a>
                        <sup className="text-xs text-gray-500">1</sup>
                    </p>
                </div>

                {/* Affiliation */}
                <p className="text-base text-gray-500 mb-2">
                    <sup className="text-xs">1</sup>UC San Diego
                </p>
                <p className="text-sm text-gray-400 mb-8">
                    UCSD DSC Capstone — 99P Labs / HRI &amp; HDSI
                </p>

                {/* Resource Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
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
            </section>

            {/* ===== ABSTRACT ===== */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Abstract</h2>
                <div className="text-gray-600 text-lg leading-relaxed space-y-4 text-justify">
                    <p>
                        Large Language Model (LLM) agents are increasingly used to automate iterative machine learning (ML)
                        experimentation, yet how <em className="text-gray-800">context policy</em> design choices—what information
                        the agent retains, retrieves, and reasons over across turns—affect performance remains poorly understood.
                    </p>
                    <p>
                        We introduce <strong className="text-gray-900">ContextEval</strong>, an evaluation framework that
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
            </section>

            <hr className="border-gray-200 mb-16" />

            {/* ===== INTRODUCTION ===== */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Introduction</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Motivation</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            As LLM-based agents become central to automated ML workflows, the design of their context
                            window—what information they see at each decision step—becomes a critical but under-explored
                            lever. Most work focuses on model capabilities or prompting strategies, overlooking that
                            context management policies can make or break iterative experimentation.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Research Questions</h3>
                        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-2 ml-4">
                            <li>How do different context policies affect ML experiment performance?</li>
                            <li>What are the trade-offs between context depth, retrieval scope, and cost?</li>
                            <li>Are there task-dependent patterns in optimal context configuration?</li>
                        </ul>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200 mb-16" />

            {/* ===== RELATED WORKS ===== */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Related Works</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">LLM-Based Agents for ML Experimentation</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            Recent systems like MLAgentBench, DS-Agent, and AutoML agents leverage LLMs to iteratively
                            design, run, and evaluate ML experiments. These agents typically operate within sandboxed
                            environments, receiving feedback from code execution and adjusting their approach across turns.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Prompting, Memory, and Context in LLM Agents</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            Work on prompt engineering, retrieval-augmented generation (RAG), and memory systems has shown
                            that what an LLM &ldquo;sees&rdquo; significantly impacts its reasoning quality. However, systematic
                            evaluation of context policies in iterative agentic settings is largely absent.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Agent Benchmarks and Evaluation Frameworks</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            Existing benchmarks evaluate agent capabilities on coding, tool use, and general reasoning. ContextEval
                            complements these by specifically benchmarking the effect of context management strategies on iterative
                            ML experimentation.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200 mb-16" />

            {/* ===== METHODOLOGY ===== */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Methodology</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Problem Setting</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            We consider an LLM agent tasked with iteratively improving an ML model on a given benchmark.
                            At each iteration, the agent proposes code modifications, observes execution results, and
                            decides on next steps. The context policy determines what subset of past interactions, code,
                            and results the agent can access.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">ContextEval Framework</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            ContextEval provides a modular framework for defining, executing, and evaluating context
                            policies. It supports pluggable context axes, configurable LLM backends, and standardized
                            metrics for comparison across policies and tasks.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Context Policies</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            We define context policies along several axes including history window size, whether to
                            include raw code or summaries, retrieval of relevant past experiments, and the inclusion
                            of task-specific instructions or global guidelines.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Experimental Setup</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            Experiments are run across multiple ML benchmarks with varying complexity. Each context
                            policy is evaluated over several trials to assess both average performance and stability.
                            We measure accuracy, cost (API tokens consumed), and variance across runs.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200 mb-16" />

            {/* ===== RESULTS ===== */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Results</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Main Findings</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            {/* Placeholder for results content */}
                            Results and analysis will be presented here with figures and tables.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Context Axis Ablations</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            {/* Placeholder */}
                            Ablation study results will be presented here.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Interaction Effects Between Axes</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            {/* Placeholder */}
                            Analysis of interaction effects will be presented here.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Cost–Performance Tradeoffs</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            {/* Placeholder */}
                            Cost vs. performance analysis will be presented here.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200 mb-16" />

            {/* ===== ANALYSIS & DISCUSSION ===== */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Analysis &amp; Discussion</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">When Does More Context Help or Hurt?</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            {/* Placeholder */}
                            Discussion of context depth effects will be presented here.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Task-Dependent Patterns</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            {/* Placeholder */}
                            Task-dependent findings will be discussed here.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Implications for Agent Design</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            {/* Placeholder */}
                            Implications and recommendations will be discussed here.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Limitations</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            {/* Placeholder */}
                            Limitations will be discussed here.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200 mb-16" />

            {/* ===== CONCLUSION ===== */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Conclusion</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Summary</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            {/* Placeholder */}
                            Summary of key contributions will be presented here.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Future Work</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            {/* Placeholder */}
                            Future research directions will be discussed here.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200 mb-16" />

            {/* ===== CODE & RESOURCES ===== */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Code &amp; Resources</h2>
                <div className="text-center">
                    <p className="text-gray-600 text-lg mb-6">
                        Check out our open-source codebase for the ContextEval framework.
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

            <hr className="border-gray-200 mb-16" />

            {/* ===== BIBTEX CITATION ===== */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">📌 BibTeX Citation</h2>
                <p className="text-gray-600 text-center mb-6">
                    If you find our project useful, please consider citing:
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap">
                        {`@misc{contexteval2025,
    title={ContextEval: Evaluating LLM Agent Context Policies for ML Experiment Design},
    author={Hikaru Isayama and Adrian Apsay and Julia Jung and Narasimhan Raghavan and Ryan Lingo},
    year={2025},
    institution={UC San Diego},
    note={UCSD DSC Capstone -- 99P Labs / HRI \\& HDSI}
}`}
                    </pre>
                </div>
            </section>
        </div>
    );
}
