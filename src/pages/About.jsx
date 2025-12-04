import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 shadow-xl"
            >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    About Me
                </h2>

                <div className="space-y-6 text-slate-300 leading-relaxed">
                    <p>
                        DevOps Engineer with 4+ years of strong experience in CI/CD automation, AWS/Azure cloud infrastructure,
                        container orchestration, Infrastructure as Code (Terraform), and cloud-native deployments.
                        Skilled at optimizing delivery pipelines, automating infrastructure, improving release velocity,
                        and ensuring high availability and scalability.
                    </p>

                    <p>
                        Strong hands-on expertise with Jenkins, GitHub Actions, Argo CD, Docker, Kubernetes (EKS/AKS),
                        Ansible, Terraform, CloudWatch, and microservices architectures. Proven achievements in cost optimization,
                        disaster recovery automation, observability, and DevSecOps practices.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                            <h3 className="text-white font-semibold mb-2">Contact</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Email: abk971995@gmail.com</li>
                                <li>Phone: +91-6304082149</li>
                                <li>Location: India</li>
                            </ul>
                        </div>

                        <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                            <h3 className="text-white font-semibold mb-2">Focus Areas</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Cloud Automation</li>
                                <li>Infrastructure as Code</li>
                                <li>Container Orchestration</li>
                                <li>DevSecOps</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
