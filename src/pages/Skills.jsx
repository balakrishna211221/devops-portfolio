import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "DevOps & CI/CD",
            skills: ["Jenkins", "GitHub Actions", "Azure DevOps", "ArgoCD", "Maven", "Ant"]
        },
        {
            title: "Cloud Platforms",
            skills: ["AWS (EC2, S3, EKS, ECS, VPC, IAM, Lambda)", "Azure (AKS, App Service)", "IBM Sterling OMS"]
        },
        {
            title: "IaC",
            skills: ["Terraform", "CloudFormation"]
        },
        {
            title: "Containers & Orchestration",
            skills: ["Docker", "Kubernetes (EKS/AKS/ECS)", "Helm"]
        },
        {
            title: "Monitoring & Logging",
            skills: ["Grafana", "Prometheus", "Nagios", "ELK Stack"]
        },
        {
            title: "Security",
            skills: ["IAM", "SSL/TLS", "Secrets Manager", "Key Vault"]
        },
        {
            title: "Scripting",
            skills: ["Shell/Bash", "Python", "YAML", "JSON"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
                Technical Expertise
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-3 py-1 bg-slate-900/50 rounded-full text-sm text-slate-300 border border-slate-700/50"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
