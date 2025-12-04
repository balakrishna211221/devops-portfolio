import { motion } from 'framer-motion';
import { FileText, Download, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Resume = () => {
    const { resume, personalInfo } = portfolioData;
    const currentVersion = resume.currentVersion;
    const resumeVersions = resume.versions[currentVersion];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Resume
                </h2>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 inline-block max-w-2xl w-full">
                    <div className="flex flex-col items-center gap-6">
                        <div className="p-4 bg-blue-500/10 rounded-full text-blue-400">
                            <FileText size={48} />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{personalInfo.name} - {personalInfo.role}</h3>
                            <p className="text-slate-400">Current Version: <span className="text-blue-400 font-mono">{currentVersion}</span></p>
                        </div>

                        {resumeVersions ? (
                            <div className="flex flex-col gap-4 w-full max-w-xs">
                                {resumeVersions.pdf && (
                                    <a
                                        href={resumeVersions.pdf}
                                        download={`Bala_Krishna_A_Resume_${currentVersion}.pdf`}
                                        className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors w-full"
                                    >
                                        <Download size={20} /> Download PDF
                                    </a>
                                )}
                                {resumeVersions.docx && (
                                    <a
                                        href={resumeVersions.docx}
                                        download={`Bala_Krishna_A_Resume_${currentVersion}.docx`}
                                        className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors w-full"
                                    >
                                        <Download size={20} /> Download DOCX
                                    </a>
                                )}
                                {resumeVersions.pdf && (
                                    <a
                                        href={resumeVersions.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors w-full"
                                    >
                                        <FileText size={20} /> View in Browser
                                    </a>
                                )}
                            </div>
                        ) : (
                            <div className="text-red-400 flex items-center gap-2">
                                <AlertCircle size={20} /> Resume file not found for version {currentVersion}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-xl font-semibold text-slate-300 mb-4">Preview</h3>
                    {resumeVersions?.pdf && (
                        <div className="w-full h-[800px] bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                            <iframe
                                src={resumeVersions.pdf}
                                className="w-full h-full"
                                title="Resume Preview"
                            />
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
