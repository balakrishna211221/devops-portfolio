import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Copy, Check } from 'lucide-react';

const Admin = () => {
    const [version, setVersion] = useState('');
    const [fileName, setFileName] = useState('');
    const [generatedJson, setGeneratedJson] = useState('');
    const [copied, setCopied] = useState(false);

    const handleGenerate = (e) => {
        e.preventDefault();
        if (!version || !fileName) return;

        const json = {
            currentVersion: version,
            versions: {
                [version]: `/resumes/${fileName}`
            }
        };

        setGeneratedJson(JSON.stringify(json, null, 2));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedJson);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
                <h2 className="text-2xl font-bold mb-6 text-white">Resume Version Manager</h2>

                <form onSubmit={handleGenerate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            New Version Number (e.g., v2)
                        </label>
                        <input
                            type="text"
                            value={version}
                            onChange={(e) => setVersion(e.target.value)}
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="v2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Resume File Name
                        </label>
                        <input
                            type="text"
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="resume-v2.pdf"
                            required
                        />
                        <p className="mt-1 text-xs text-slate-500">
                            Make sure to upload this file to public/resumes/ folder manually.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                    >
                        <Save size={20} /> Generate JSON Config
                    </button>
                </form>

                {generatedJson && (
                    <div className="mt-8">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-slate-300">Generated JSON (Copy & Paste to public/resume.json)</h3>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300"
                            >
                                {copied ? <Check size={14} /> : <Copy size={14} />}
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-sm text-green-400 font-mono border border-slate-800">
                            {generatedJson}
                        </pre>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Admin;
