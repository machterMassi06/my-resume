/* Keep visitor-facing content and SEO metadata together for both languages. */
window.CV_TRANSLATIONS = {
  fr: {
    skipLink: "Aller au contenu",
    brandHomeLabel: "Massinissa Machter — accueil",
    navLabel: "Navigation principale",
    languageToggleLabel: "Passer le site en anglais",
    nav: {
      profile: "Profil",
      experience: "Expérience professionnelle",
      education: "Formation",
      skills: "Compétences",
      projects: "Projets",
      languages: "Langues",
      strengths: "Atouts",
      contact: "Contact"
    },
    person: {
      name: "Massinissa Machter",
      title: "Apprenti ingénieur Big Data &amp; Cloud",
      email: "massinissa.machter@gmail.com",
      emailLink: "mailto:massinissa.machter@gmail.com",
      location: "Ile de france, France",
      age: "Âge : 23 ans"
    },
    contact: {
      eyebrow: "Coordonnées",
      title: "Entrons en contact.",
      intro: "Me contacter au sujet d’un poste, d’un projet ou d’une collaboration."
    },
    profile: {
      eyebrow: "Profil professionnel",
      title: "Big Data, Cloud &amp; <span class=\"accent-text\">systèmes distribués.</span>",
      subtitle: "Étudiant en Master2  ISD Paris Saclay et apprenti au CNRS/IJCLab depuis septembre 2025",
      paragraph1: "Mon parcours associe une formation universitaire en informatique à une pratique concrète de l’ingénierie logicielle et des données.",
      paragraph2: "J’aborde les systèmes avec une attention particulière à leur fiabilité, à leurs performances et à leur mise en œuvre dans des environnements cloud.",
      photoLabel: "Portrait de Massinissa Machter",
      photoAlt: "Illustration provisoire : remplacer par une photo professionnelle",
      photoCaption: "Systèmes de données · Cloud · R&D",
      note: "Des systèmes utiles, robustes et mesurables."
    },
    education: {
      eyebrow: "Formation académique",
      title: "Un parcours en <span class=\"accent-text\">informatique.</span>",
      item1: { level: "M2 · 2026–2027 · en cours", degree: "Master ISD — M1 obtenue, M2 en cours", school: "Université Paris-Saclay / UVSQ", details: "M1 obtenue en 2025–2026, mention Bien. Le parcours ISD forme à la maîtrise des environnements informatiques et à l’exploitation sécurisée de données complexes. En alternance, il associe enseignements théoriques et pratique professionnelle autour de l’IoT, de la sécurité et des données." },
      item2: { level: "2022–2025", degree: "Licence Informatique — mention Très bien", school: "Université Paris-Saclay / UVSQ", details: "Licence généraliste de trois ans en informatique, avec des acquis en algorithmique, données, réseaux et programmation." }
    },
    apprenticeship: {
      eyebrow: "Expérience professionnelle",
      title: "Faire le lien entre <span class=\"accent-text\">recherche et ingénierie.</span>",
      organization: "CNRS · IJCLab",
      role: "Apprenti Big Data &amp; Cloud Engineer",
      date: "Depuis septembre 2025",
      description: "Je contribue à des sujets de données et de systèmes distribués en environnement cloud, avec un accent particulier sur l'ingénierie logicielle et les pratiques DevOps.",
      focus: "Axes de travail et technologies mobilisés",
      work1: "Utilisation de <code>OpenStack</code> sur la plateforme cloud VirtualData (CNRS – Université Paris-Saclay) pour le stockage, la gestion et le traitement des données.",
      work2: "Développement et optimisation d’architectures Big Data : <code>Kafka</code> pour le streaming, <code>Spark</code> pour le calcul distribué et <code>HBase</code> pour le stockage NoSQL distribué.",
      work3: "Conteneurisation avec <code>Docker</code> et orchestration avec <code>Kubernetes</code> pour déployer et maintenir automatiquement des services data et web dans le cloud.",
      work4: "Mise en œuvre de workflows d’intégration et de déploiement continus (CI/CD) avec <code>GitLab</code> et <code>GitHub</code>.",
      work5: "Gestion de l’infrastructure : création d’images système avec <code>Packer</code> et Infrastructure as Code (IaC) avec <code>Terraform</code>.",
      work6: "Supervision des performances, des services et de l’infrastructure avec <code>Prometheus</code> et <code>Grafana</code>.",
      work7: "Optimisation de modèles de <code>machine learning</code> et développement d’outils de détection d’anomalies dans les logs, à l’aide de méthodes statistiques, de <code>machine learning</code> et de <code>deep learning</code>."
    },
    skills: {
      eyebrow: "Compétences techniques",
      title: "Des outils pour <span class=\"accent-text\">concevoir et livrer.</span>",
      languages: { title: "Langages", description: "Langages de programmation et de requête." },
      data: { title: "Analyse &amp; visualisation des données", description: "Analyse, exploration et visualisation des données." },
      bigdata: { title: "Big Data &amp; systèmes distribués", description: "Traitement distribué, flux d’événements et entrepôts de données." },
      cloud: { title: "Cloud &amp; DevOps", description: "Conteneurisation, orchestration, automatisation et déploiement." },
      ai: { title: "IA &amp; science des données", description: "Machine learning, apprentissage profond et traitement du langage naturel.", supervised: "ML supervisé", deepLearning: "Deep Learning (réseaux de neurones)", unsupervised: "Apprentissage non supervisé et semi-supervisé", agentic: "IA agentique" },
      tools: { title: "Systèmes &amp; outils", description: "Systèmes d’exploitation, gestion de versions et supervision d’infrastructure.", monitoring: "Outils de supervision d’infrastructure" },
      interestsLabel: "Centres d’intérêt",
      interests: "MLOps · Ingénierie des données · IA appliquée ",
      softLabel: "Qualités professionnelles",
      soft1: "Rigueur",
      soft2: "Proactivité",
      soft3: "Communication",
      soft4: "Autonomie",
      soft5: "Travail d’équipe"
    },
    projects: {
      eyebrow: "Projets informatiques",
      title: "Projets classés par <span class=\"accent-text\">expertise.</span>",
      intro: "Accéder directement aux dépôts publics de mon GitHub.",
      categories: {
        ai: "IA / Machine Learning",
        devops: "DevOps / Cloud / Kubernetes",
        bigdata: "Big Data / Kafka / Spark / HDFS / HBase",
        general: "Projets généralistes &amp; développement"
      },
      repos: {
        fraud: { title: "Détection de fraude par autoencodeur", description: "Apprentissage semi-supervisé et détection d’anomalies." },
        nlp: { title: "Parcours pratique en NLP", description: "Prétraitement, représentation de texte et modélisation." },
        finkAnomaly: { title: "Anomalies et prévision de pannes — Fink API", description: "Analyse de logs et exploration de méthodes de détection." },
        finkPortal: { title: "Portail Fink multi-clusters", description: "Déploiement Kubernetes, routage et supervision." },
        ciLab: { title: "Laboratoire CI/CD GitHub", description: "Workflows d’intégration continue et contrôles qualité." },
        gitops: { title: "Déploiement GitOps &amp; CI/CD", description: "Dépôt consacré aux pratiques GitOps et d’automatisation." },
        k8sBootstrap: { title: "Initialisation de cluster Kubernetes", description: "Outils et configuration de démarrage d’un cluster." },
        finkPipeline: { title: "Pipeline distribué d’alertes Fink", description: "Filtrage de flux Spark et publication vers Kafka." },
        hbaseBenchmark: { title: "Stratégies d’ingestion HBase", description: "Comparaison de l’écriture standard et du Bulk Load." },
        sparkBenchmark: { title: "Benchmark d’UDF Apache Spark", description: "Comparaison d’implémentations Python, Scala et Arrow." },
        kafkaLab: { title: "Atelier d’apprentissage Kafka", description: "Exercices et expérimentations autour de Kafka." },
        kafkaSetup: { title: "Configuration d’un environnement Kafka", description: "Dépôt de mise en place et de prise en main de Kafka." },
        hbaseMapreduce: { title: "HBase et MapReduce", description: "Projet d’apprentissage des traitements distribués Hadoop." },
        hbasePseudo: { title: "HBase en mode pseudo-distribué", description: "Configuration d’un environnement HBase local." },
        networkQueues: { title: "Simulation de files d’attente réseau", description: "Étude de stratégies de gestion de flux." },
        diskAnalyzer: { title: "Analyseur d’espace disque en Rust", description: "Outil CLI de tri, filtrage et détection de doublons." },
        tvDatabase: { title: "Base de données pour une chaîne TV", description: "Modélisation des programmes, équipes et audiences." },
        asteroids: { title: "Jeu vidéo Asteroids en Rust", description: "Jeu avec interface graphique développé avec Macroquad." },
        sudoku: { title: "Solveur de Sudoku en Java", description: "Projet d’algorithmique et de programmation Java." }
      }
    },
    languages: {
      eyebrow: "Langues",
      title: "Évoluer dans <span class=\"accent-text\">plusieurs langues.</span>",
      french: "Français",
      frenchLevel: "Courant",
      english: "Anglais",
      englishLevel: "Intermédiaire",
      kabyle: "Kabyle",
      kabyleLevel: "Langue maternelle"
    },
    strengths: {
      eyebrow: "Atouts",
      title: "Mes qualités <span class=\"accent-text\">professionnelles.</span>"
    },
    footer: { note: "Big Data · Cloud · Systèmes distribués" },
    meta: {
      title: "Massinissa Machter | Ingénieur Big Data & Cloud",
      description: "CV de Massinissa Machter, apprenti ingénieur Big Data & Cloud au CNRS/IJCLab. Parcours, compétences et projets.",
      ogLocale: "fr_FR"
    },
    announcements: { language: "La langue du site est maintenant le français." }
  },
  en: {
    skipLink: "Skip to content",
    brandHomeLabel: "Massinissa Machter — home",
    navLabel: "Main navigation",
    languageToggleLabel: "Switch language to French",
    nav: {
      profile: "Profile",
      experience: "Professional experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      languages: "Languages",
      strengths: "Strengths",
      contact: "Contact"
    },
    person: {
      name: "Massinissa Machter",
      title: "Big Data &amp; Cloud Engineering Apprentice",
      email: "massinissa.machter@gmail.com",
      emailLink: "mailto:massinissa.machter@gmail.com",
      location: "Ile de france, France",
      age: "Age: 23"
    },
    contact: {
      eyebrow: "Contact details",
      title: "Let’s get in touch.",
      intro: "Get in touch about a role, a project or a collaboration."
    },
    profile: {
      eyebrow: "Professional profile",
      title: "Big Data, Cloud &amp; <span class=\"accent-text\">distributed systems.</span>",
      subtitle: "MSc data science student and CNRS/IJCLab apprentice since September 2025",
      paragraph1: "My background combines university-level computer science with hands-on software and data engineering.",
      paragraph2: "I approach systems with particular attention to reliability, performance and their implementation in cloud environments.",
      photoLabel: "Portrait of Massinissa Machter",
      photoAlt: "Temporary illustration: replace with a professional photo",
      photoCaption: "Data systems · Cloud · R&D",
      note: "Useful, robust and measurable systems."
    },
    education: {
      eyebrow: "Academic background",
      title: "A background in <span class=\"accent-text\">computer science.</span>",
      item1: { level: "M2 · 2026–2027 · in progress", degree: "ISD Master’s — M1 completed, M2 in progress", school: "Université Paris-Saclay / UVSQ", details: "M1 completed in 2025–2026 with a Good grade. The ISD programme develops expertise in managing IT environments and securely using complex data. Delivered through a work-study format, it combines advanced theory with professional practice across IoT, security and data." },
      item2: { level: "2022–2025", degree: "BSc in Computer Science — highest honours", school: "Université Paris-Saclay / UVSQ", details: "Three-year general computer science degree covering algorithms, data, networks and programming." }
    },
    apprenticeship: {
      eyebrow: "Professional experience",
      title: "Connecting <span class=\"accent-text\">research and engineering.</span>",
      organization: "CNRS · IJCLab",
      role: "Big Data &amp; Cloud Engineer Apprentice",
      date: "Since September 2025",
      description: "I contribute to work involving data and distributed systems in cloud environments, with a particular focus on software engineering and DevOps practices.",
      focus: "Areas of work and technologies",
      work1: "Using <code>OpenStack</code> on the VirtualData cloud platform (CNRS – Université Paris-Saclay) to store, manage and process data.",
      work2: "Developing and optimising Big Data architectures: <code>Kafka</code> for streaming, <code>Spark</code> for distributed computing and <code>HBase</code> for distributed NoSQL storage.",
      work3: "Containerising with <code>Docker</code> and orchestrating with <code>Kubernetes</code> to deploy and automatically maintain data and web services in the cloud.",
      work4: "Implementing continuous integration and deployment (CI/CD) workflows with <code>GitLab</code> and <code>GitHub</code>.",
      work5: "Managing infrastructure: building system images with <code>Packer</code> and using <code>Terraform</code> for Infrastructure as Code (IaC).",
      work6: "Monitoring performance, services and infrastructure with <code>Prometheus</code> and <code>Grafana</code>.",
      work7: "Optimising <code>machine learning</code> models and developing log anomaly detection tools using statistical methods, <code>machine learning</code> and <code>deep learning</code>."
    },
    skills: {
      eyebrow: "Technical skills",
      title: "Tools to <span class=\"accent-text\">design and deliver.</span>",
      languages: { title: "Programming languages", description: "Programming and query languages." },
      data: { title: "Data analysis &amp; visualisation", description: "Data analysis, exploration and visualisation." },
      bigdata: { title: "Big Data &amp; distributed systems", description: "Distributed processing, event streams and data warehousing." },
      cloud: { title: "Cloud &amp; DevOps", description: "Containerisation, orchestration, automation and deployment." },
      ai: { title: "AI &amp; data science", description: "Machine learning, deep learning and natural language processing.", supervised: "Supervised ML", deepLearning: "Deep learning (neural networks)", unsupervised: "Unsupervised and semi-supervised learning", agentic: "Agentic AI" },
      tools: { title: "Systems &amp; tools", description: "Operating systems, version control and infrastructure monitoring.", monitoring: "Infrastructure monitoring tools" },
      interestsLabel: "Areas of interest",
      interests: "MLOps · Data Engineering · Applied AI",
      softLabel: "Professional strengths",
      soft1: "Attention to detail",
      soft2: "Proactivity",
      soft3: "Communication",
      soft4: "Autonomy",
      soft5: "Teamwork"
    },
    projects: {
      eyebrow: "Selected projects",
      title: "Projects by <span class=\"accent-text\">area of expertise.</span>",
      intro: "Direct links to my public GitHub repositories.",
      categories: {
        ai: "AI / Machine Learning",
        devops: "DevOps / Cloud / Kubernetes",
        bigdata: "Big Data / Kafka / Spark / HDFS / HBase",
        general: "General software &amp; development projects"
      },
      repos: {
        fraud: { title: "Autoencoder-based fraud detection", description: "Semi-supervised learning and anomaly detection." },
        nlp: { title: "Hands-on natural language processing", description: "Text preprocessing, representation and modelling." },
        finkAnomaly: { title: "Fink API anomaly and outage forecasting", description: "Log analysis and exploration of detection methods." },
        finkPortal: { title: "Multi-cluster Fink portal", description: "Kubernetes deployment, routing and monitoring." },
        ciLab: { title: "GitHub CI/CD learning lab", description: "Continuous integration workflows and quality checks." },
        gitops: { title: "GitOps &amp; CI/CD deployment", description: "Repository exploring GitOps and automation practices." },
        k8sBootstrap: { title: "Kubernetes cluster bootstrap", description: "Tools and configuration for cluster setup." },
        finkPipeline: { title: "Distributed Fink alert pipeline", description: "Spark stream filtering and Kafka output." },
        hbaseBenchmark: { title: "HBase ingestion strategies", description: "Comparison of standard writes and Bulk Load." },
        sparkBenchmark: { title: "Apache Spark UDF benchmark", description: "Comparison of Python, Scala and Arrow implementations." },
        kafkaLab: { title: "Kafka learning lab", description: "Exercises and experiments with Kafka." },
        kafkaSetup: { title: "Kafka environment setup", description: "Repository for Kafka setup and initial exploration." },
        hbaseMapreduce: { title: "HBase and MapReduce", description: "Learning project for distributed Hadoop processing." },
        hbasePseudo: { title: "Pseudo-distributed HBase", description: "Configuration of a local HBase environment." },
        networkQueues: { title: "Network queue simulation", description: "Exploration of traffic management strategies." },
        diskAnalyzer: { title: "Rust disk space analyser", description: "CLI tool for sorting, filtering and finding duplicates." },
        tvDatabase: { title: "TV channel database design", description: "Data modelling for programmes, teams and audiences." },
        asteroids: { title: "Asteroids game in Rust", description: "Graphical game developed with Macroquad." },
        sudoku: { title: "Sudoku solver in Java", description: "Java programming and algorithmic project." }
      }
    },
    languages: {
      eyebrow: "Languages",
      title: "Working across <span class=\"accent-text\">languages.</span>",
      french: "French",
      frenchLevel: "Fluent",
      english: "English",
      englishLevel: "Intermediate",
      kabyle: "Kabyle",
      kabyleLevel: "Native"
    },
    strengths: {
      eyebrow: "Strengths",
      title: "Professional <span class=\"accent-text\">qualities.</span>"
    },
    footer: { note: "Big Data · Cloud · Distributed systems" },
    meta: {
      title: "Massinissa Machter | Big Data & Cloud Engineer",
      description: "Résumé of Massinissa Machter, CNRS/IJCLab Big Data & Cloud engineering apprentice. Background, skills and projects.",
      ogLocale: "en_US"
    },
    announcements: { language: "The site language is now English." }
  }
};
