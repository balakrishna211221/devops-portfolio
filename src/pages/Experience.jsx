import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { cn } from '../lib/utils';

const ProjectCard = ({ project, isOpen, onToggle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden"
        >
            <button
                onClick={onToggle}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
            >
                <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                        <Briefcase size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                        <p className="text-sm text-slate-400">{project.role}</p>
                    </div>
                </div>
                {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-700/50">
                            <div className="space-y-4 text-slate-300 text-sm">
                                <div>
                                    <h4 className="font-semibold text-blue-400 mb-2">Responsibilities:</h4>
                                    <ul className="list-disc list-inside space-y-1 pl-2">
                                        {project.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-blue-400 mb-2">Achievements:</h4>
                                    <ul className="list-disc list-inside space-y-1 pl-2">
                                        {project.achievements.map((ach, idx) => (
                                            <li key={idx}>{ach}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-blue-400 mb-2">Tools & Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.map((tool, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-slate-900 rounded text-xs border border-slate-700">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Experience = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const projects = [
        {
            title: "Courseware",
            role: "DevOps Engineer",
            responsibilities: [
                "Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions.",
                "Managed AWS infrastructure using Terraform for scalable deployments.",
                "Orchestrated containerized applications using Kubernetes (EKS)."
            ],
            achievements: [
                "Reduced deployment time by 40% through automated pipelines.",
                "Improved system reliability with proactive monitoring using Prometheus and Grafana."
            ],
            tools: ["AWS", "Jenkins", "Terraform", "Kubernetes", "Docker"]
        },
        {
            title: "DDP (Digital Delivery Platform)",
            role: "DevOps Engineer",
            responsibilities: [
                "Automated cloud infrastructure provisioning with CloudFormation.",
                "Implemented security best practices for IAM and network configurations.",
                "Managed microservices deployment on ECS."
            ],
            achievements: [
                "Achieved 99.9% uptime for critical delivery services.",
                "Optimized cloud costs by 20% through resource rightsizing."
            ],
            tools: ["AWS ECS", "CloudFormation", "Python", "CloudWatch"]
        },
        {
            title: "FDC (Fulfillment Distribution Center)",
            role: "DevOps Engineer",
            responsibilities: [
                "Developed Ansible playbooks for configuration management.",
                "Set up centralized logging using ELK stack.",
                "Collaborated with development teams to streamline release processes."
            ],
            achievements: [
                "Standardized server configurations across multiple environments.",
                "Enhanced troubleshooting capabilities with centralized logs."
            ],
            tools: ["Ansible", "ELK Stack", "Linux", "Bash"]
        },
        {
            title: "AIP (Analytics Insight Platform)",
            role: "DevOps Engineer",
            responsibilities: [
                "Managed big data infrastructure on AWS EMR and Glue.",
                "Implemented data pipeline automation using Airflow.",
                "Ensured data security and compliance with encryption standards."
            ],
            achievements: [
                "Scaled data processing capabilities to handle terabytes of daily data.",
                "Automated data quality checks in the pipeline."
            ],
            tools: ["AWS EMR", "Glue", "Airflow", "S3"]
        },
        {
            title: "OMS (Order Management System)",
            role: "DevOps Engineer",
            responsibilities: [
                "Maintained IBM Sterling OMS infrastructure.",
                "Automated database migrations and backups.",
                "Supported high-volume transaction processing during peak seasons."
            ],
            achievements: [
                "Zero downtime during major version upgrades.",
                "Improved database performance through query optimization."
            ],
            tools: ["IBM Sterling OMS", "Oracle DB", "Jenkins", "Shell Scripting"]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
            >
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Professional Experience
                </h2>
                <p className="text-slate-400">
                    BNED – DevOps Engineer (July 2022 – Present)
                </p>
            </motion.div>

            <div className="space-y-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        isOpen={openIndex === index}
                        onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Experience;
