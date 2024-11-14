import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          <strong>AI & Machine Learning:</strong>
          <ul>
            <li>Languages: Python</li>
            <li>Libraries/Frameworks: TensorFlow, PyTorch, Hugging Face, OpenCV</li>
            <li>Technologies: NLP, Computer Vision, GANs, Reinforcement Learning, Recommendation Systems</li>
          </ul>
        </li>
        <li>
          <strong>Web Development:</strong>
          <ul>
            <li>Frontend: HTML, CSS, SCSS, React, Next.js, TypeScript</li>
            <li>Backend: Node.js, Express, FastAPI, Flask</li>
            <li>Databases: PostgreSQL, MongoDB</li>
          </ul>
        </li>
        <li>
          <strong>Web3 & Blockchain:</strong>
          <ul>
            <li>Blockchain: Ethereum, Solidity</li>
            <li>Tools: Web3.js, IPFS, NFTs (ERC-721, ERC-1155)</li>
          </ul>
        </li>
        <li>
          <strong>Cloud & DevOps:</strong>
          <ul>
            <li>Cloud: Google Cloud, AWS</li>
            <li>Tools: Docker, Kubernetes, Jenkins, GitHub Actions</li>
          </ul>
        </li>
        <li>
          <strong>Development Tools:</strong>
          <ul>
            <li>IDEs/Editors: VS Code</li>
            <li>Code Assistants: Tabnine</li>
            <li>Other: Git, Postman, Jupyter Notebooks</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Skills;


