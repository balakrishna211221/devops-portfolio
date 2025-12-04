import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    const { personalInfo } = portfolioData;

    const contactDetails = [
        {
            icon: Mail,
            label: 'Email',
            value: personalInfo.email,
            link: personalInfo.socialLinks.gmail,
            color: 'text-red-400',
            bgColor: 'bg-red-500/10'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: personalInfo.phone,
            link: `tel:${personalInfo.phone}`,
            color: 'text-green-400',
            bgColor: 'bg-green-500/10'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: personalInfo.location,
            link: null,
            color: 'text-purple-400',
            bgColor: 'bg-purple-500/10'
        }
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            label: 'LinkedIn',
            link: personalInfo.socialLinks.linkedin,
            color: 'hover:text-blue-400'
        },
        {
            icon: Github,
            label: 'GitHub',
            link: personalInfo.socialLinks.github,
            color: 'hover:text-white'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {contactDetails.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 flex flex-col items-center text-center hover:border-blue-500/50 transition-colors"
                    >
                        <div className={`p-4 rounded-full mb-4 ${item.bgColor} ${item.color}`}>
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-1">{item.label}</h3>
                        {item.link ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                            >
                                {item.value} <ExternalLink size={12} />
                            </a>
                        ) : (
                            <p className="text-slate-400">{item.value}</p>
                        )}
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-8"
            >
                {socialLinks.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-slate-500 transition-colors transform hover:scale-110 ${item.color}`}
                        aria-label={item.label}
                    >
                        <item.icon size={32} />
                    </a>
                ))}
            </motion.div>
        </div>
    );
};

export default Contact;
