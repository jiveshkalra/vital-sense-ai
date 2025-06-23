# VitalSenseAI

![VitalSenseAI Banner](public/images/healthy-lungs.jpg)

> **AI-Powered Lung and Heart Disease Detection**

---

## 🚀 What is VitalSenseAI?

VitalSenseAI is a cutting-edge web application that leverages advanced AI models to analyze lung and heart sounds for rapid, accurate disease detection. Designed for both healthcare professionals and individuals, it empowers users to upload or record audio samples and receive instant, AI-driven health insights.

- **Website:** [vital-sense-ai.vercel.app/](https://vital-sense-ai.vercel.app/)  
- **Hugging Face Model:** [jiveshkalra/LungDiseaseDetector](https://huggingface.co/spaces/jiveshkalra/LungDiseaseDetector)

---

## 🧠 How It Works

1. **Record**: Capture lung or heart sounds using an electronic stethoscope.
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
```

### Running Locally

```bash
npm run dev 
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Features

- 🎤 **Audio Upload & Recording**: Upload your own lung/heart sound or try sample files
- ⚡ **Instant AI Analysis**: Get results in seconds
- 📊 **Detailed Results**: Disease info, severity, and prevention tips
- 🔒 **Privacy First**: No audio is stored; all analysis is real-time
- 📱 **Responsive**: Works on mobile, tablet, and desktop

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTE.md](CONTRIBUTE.md) for guidelines.

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
 