import { Cloud, Server, Container, Code, Database, Shield } from 'lucide-react';

export const portfolioData = {
    personalInfo: {
        name: "Bala Krishna A",
        role: "DevOps Engineer",
        email: "abk971995@gmail.com",
        phone: "+91-6304082149",
        location: "India",
        socialLinks: {
            linkedin: "https://linkedin.com/in/your-profile",
            github: "https://github.com/your-username",
            gmail: "mailto:abk971995@gmail.com"
        }
    },
    hero: {
        title: "DevOps Engineer",
        subtitle: "Automating the Future",
        description: "Specializing in CI/CD, Kubernetes, Cloud Infrastructure, and Infrastructure as Code. Building scalable, secure, and efficient systems.",
        floatingIcons: [
            { icon: Cloud, label: 'AWS' },
            { icon: Container, label: 'Kubernetes' },
            { icon: Server, label: 'Terraform' },
            { icon: Code, label: 'CI/CD' },
            { icon: Database, label: 'Databases' },
            { icon: Shield, label: 'Security' },
        ]
    },
    about: {
        bio: [
            "DevOps Engineer with 4+ years of strong experience in CI/CD automation, AWS/Azure cloud infrastructure, container orchestration, Infrastructure as Code (Terraform), and cloud-native deployments. Skilled at optimizing delivery pipelines, automating infrastructure, improving release velocity, and ensuring high availability and scalability.",
            "Strong hands-on expertise with Jenkins, GitHub Actions, Argo CD, Docker, Kubernetes (EKS/AKS), Ansible, Terraform, CloudWatch, and microservices architectures. Proven achievements in cost optimization, disaster recovery automation, observability, and DevSecOps practices."
        ],
        focusAreas: [
            "Cloud Automation",
            "Infrastructure as Code",
            "Container Orchestration",
            "DevSecOps"
        ]
    },
    experience: [
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
    ],
    skills: [
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
    ],
    resume: {
        currentVersion: "v1",
        versions: {
            v1: {
                pdf: "/resumes/Bala_Krishna_A_Resume_v1.pdf",
                docx: "/resumes/Bala_Krishna_A_Resume_v1.docx"
            }
        }
    }
};
