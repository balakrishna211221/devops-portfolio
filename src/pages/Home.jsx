import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Server, Container, Code, Database, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                    >
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            DevOps Engineer
                        </span>
                        <br />
                        <span className="text-slate-100">Automating the Future</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto mb-10"
                    >
                        Specializing in CI/CD, Kubernetes, Cloud Infrastructure, and Infrastructure as Code.
                        Building scalable, secure, and efficient systems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex justify-center gap-4"
                    >
                        <Link
                            to="/experience"
                            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all flex items-center gap-2"
                        >
                            View Work <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>

                {/* Floating Icons Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center opacity-70"
                >
                    {[
                        { icon: Cloud, label: 'AWS' },
                        { icon: Container, label: 'Kubernetes' },
                        { icon: Server, label: 'Terraform' },
                        { icon: Code, label: 'CI/CD' },
                        { icon: Database, label: 'Databases' },
                        { icon: Shield, label: 'Security' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, color: '#60a5fa' }}
                            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                        >
                            <item.icon size={32} />
                            <span className="text-sm font-medium">{item.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
