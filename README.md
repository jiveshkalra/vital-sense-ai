# VitalSenseAI

![VitalSenseAI Banner](public/images/healthy-lungs.jpg)

> **AI-Powered Lung and Heart Disease Detection**

---

## 🚀 What is VitalSenseAI?

VitalSenseAI is a cutting-edge web application that leverages advanced AI models to analyze lung and heart sounds for rapid, accurate disease detection. Designed for both healthcare professionals and individuals, it empowers users to upload or record audio samples and receive instant, AI-driven health insights.

- **Website:** [Portfolio Demo](https://your-portfolio-link.com)  
- **Hugging Face Model:** [jiveshkalra/LungDiseaseDetector](https://huggingface.co/spaces/jiveshkalra/LungDiseaseDetector)

---

## 🧠 How It Works

1. **Record**: Capture lung or heart sounds using your device.
2. **Upload**: Securely upload the audio sample to VitalSenseAI.
3. **Analyze**: Our AI model, hosted on [Hugging Face Spaces](https://huggingface.co/spaces/jiveshkalra/LungDiseaseDetector), processes the sound and predicts possible diseases.
4. **Diagnose**: Instantly receive a detailed health report, including disease information, severity, and prevention tips.

### 🤖 About the AI Model
- **Model:** Custom deep learning model for lung/heart sound classification
- **Hosted on:** [Hugging Face Spaces](https://huggingface.co/spaces/jiveshkalra/LungDiseaseDetector)
- **API Integration:** Uses [Gradio Client](https://www.npmjs.com/package/@gradio/client) for seamless communication
- **Supported Diseases:** Healthy, COPD, Pneumonia, Bronchiectasis, URTI, and more

---

## 📂 About This Repository

This repo contains the full-stack Next.js web application for VitalSenseAI, including:
- Modern, responsive UI (React, TailwindCSS, Framer Motion)
- Audio upload, drag-and-drop, and example file selection
- Real-time AI inference via Hugging Face API
- Detailed result pages with disease info and prevention tips
- Modular, maintainable codebase

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/jiveshkalra/vital-sense-ai.git
cd vital-sense-ai

# Install dependencies
npm install
# or
yarn install
```

### Running Locally

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Features

- 🎤 **Audio Upload & Recording**: Upload your own lung/heart sound or try sample files
- ⚡ **Instant AI Analysis**: Get results in seconds
- 📊 **Detailed Results**: Disease info, severity, and prevention tips
- 🌙 **Dark/Light Mode**: Modern, accessible design
- 🔒 **Privacy First**: No audio is stored; all analysis is real-time
- 📱 **Responsive**: Works on mobile, tablet, and desktop

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTE.md](CONTRIBUTE.md) for guidelines.

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.

---

## 🌟 Acknowledgements

- [Hugging Face](https://huggingface.co/) for model hosting
- [Gradio](https://www.gradio.app/) for easy API integration
- [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- All open-source contributors

---

## 📬 Contact

- **Author:** Jivesh Kalra
- **Email:** [your.email@example.com](mailto:your.email@example.com)
- **LinkedIn:** [linkedin.com/in/jiveshkalra](https://linkedin.com/in/jiveshkalra)
- **Portfolio:** [your-portfolio-link.com](https://your-portfolio-link.com)

---

> *Empowering healthcare with AI. Try VitalSenseAI today!*
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
