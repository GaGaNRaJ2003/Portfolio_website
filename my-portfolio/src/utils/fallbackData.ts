export const fallbackData = {
  "basic_info": {
    "name": "Gagan Raj Singh",
    "headline": "B.Tech CSAM Student at IIIT Delhi | Research Intern at UIUC | Aspiring Software Engineer",
    "profile_image_url": "pfp.jpg",
    "about": "Hey! I'm a CSAM senior at IIIT-Delhi, passionate about ML, NLP, and building stuff that actually works. I've interned at UIUC (CAT-LM: LLMs + unit tests = 🚀), explored multimodal knowledge graphs on my own, and hacked together everything from a Bluetooth sniffer to a food CLI, a game, and even my own Unix shell.",
    "location": {
      "country": "India",
      "city": "Delhi",
      "full": "Delhi, India",
      "country_code": "IN"
    }
  },
  "experience": [
    {
      "title": "Summer Research Intern",
      "company": "UIUC",
      "location": "Remote",
      "description": "Research under Dr. Darko Marinov — CAT-LM Project (ASE 2023).\n- Researching CAT-LM, a 2.7B parameter GPT-style model designed for unit test generation from aligned code-test pairs.\n- Studying the CAT-LM model architecture, training objectives, and large-scale dataset involving 14.4M code files and 1.1M code-test pairs; analyzing the impact of extending input context length up to 2^13 tokens on test generation quality.\n- Evaluating benchmarks against existing LLMs (e.g., StarCoder, CodeGen) on tasks like test completion and assertion generation.",
      "duration": "May 2025 - Present"
    },
    {
      "title": "Independent Research on MMKG",
      "company": "MIDAS Labs @ IIITD",
      "location": "New Delhi, India",
      "description": "Developed advanced Multimodal Knowledge Graph (MMKG) system to integrate structured and unstructured data (text, images) for AI-driven knowledge representation.\n- Key contributions: Improved entity alignment accuracy by 22% via novel cross-modal embedding architectures, reduced model training time by 40%, boosted multimodal retrieval by 15%, and cut inference latency by 30% with scalable KG pipelines.",
      "duration": "May 2024 - Dec 2024"
    },
    {
      "title": "Teaching Assistant - Communication Skills",
      "company": "IIIT Delhi",
      "location": "New Delhi, India",
      "description": "Assisted in teaching the communication skills course to undergraduate students, providing feedback on assignments and facilitating class discussions.",
      "duration": "Aug 2023 - Dec 2023"
    }
  ],
  "projects": [
    {
      "name": "Bluetooth Sneak Detector | Python, BLEAK, FastAPI, React, PostgreSQL",
      "description": "Developed a real-time Bluetooth scanner to detect unauthorized devices in exams using RSSI-based proximity tracking. Achieved 92% detection accuracy with sub-1.5s scan latency and built a full-stack dashboard for live monitoring."
    },
    {
      "name": "SparkLynx | Python, MySQL",
      "description": "Built a real-time CLI app for food order management with login, partner assignment, and order status updates. Cut query latency by 30% via indexing and query tuning."
    },
    {
        "name": "Simple Unix Shell | C",
        "description": "Implemented a minimal shell that supports command execution, piping, I/O redirection, and core process control. Achieved robust error handling and process management via system calls."
    }
  ],
  "skills": [
      { "name": "Python" }, { "name": "C/C++" }, { "name": "Java" },
      { "name": "HTML/CSS" }, { "name": "JavaScript" }, { "name": "SQL" },
      { "name": "Bash" }, { "name": "React.js" }, { "name": "Node.js" },
      { "name": "MySQL" }, { "name": "MongoDB" }, { "name": "Prisma" },
      { "name": "Git" }, { "name": "GitHub" }, { "name": "VSCode" },
      { "name": "Numpy" }, { "name": "Pandas" }, { "name": "PyTorch" },
      { "name": "Scikit-learn" }, { "name": "NetworkX" }, { "name": "SpaCy" },
      { "name": "JavaFX" }, { "name": "Machine Learning" },
      { "name": "Natural Language Processing" }, { "name": "Data Structures" },
      { "name": "Algorithms" }
  ],
  "categorized_skills": [
    {
      "category": "Languages",
      "skills": [
        { "name": "Python" }, { "name": "C/C++" }, { "name": "Java" },
        { "name": "HTML/CSS" }, { "name": "JavaScript" }, { "name": "SQL" },
        { "name": "Bash" }
      ]
    },
    {
      "category": "Frameworks & Libraries",
      "skills": [
        { "name": "React.js" }, { "name": "Node.js" }, { "name": "Numpy" },
        { "name": "Pandas" }, { "name": "PyTorch" }, { "name": "Scikit-learn" },
        { "name": "NetworkX" }, { "name": "SpaCy" }, { "name": "JavaFX" }
      ]
    },
    {
      "category": "Databases & Tools",
      "skills": [
        { "name": "MySQL" }, { "name": "MongoDB" }, { "name": "Prisma" },
        { "name": "Git" }, { "name": "GitHub" }, { "name": "VSCode" }
      ]
    },
    {
      "category": "Expertise Areas",
      "skills": [
        { "name": "Machine Learning" }, { "name": "Natural Language Processing" },
        { "name": "Data Structures" }, { "name": "Algorithms" }
      ]
    }
  ],
  "certifications": []
}; 