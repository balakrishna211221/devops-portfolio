import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-slate-400 text-sm">
                            © {new Date().getFullYear()} Bala Krishna A. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="mailto:abk971995@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                            <Mail size={20} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
