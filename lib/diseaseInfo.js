import { StaticImageData } from 'next/image'
import bronchiectasisImg from '@/public/images/bronchiectasis.jpg'
import copdImg from '@/public/images/copd.jpg'
import healthyImg from '@/public/images/healthy-lungs.jpg'
import pneumoniaImg from '@/public/images/pneumonia.jpg'
import urtiImg from '@/public/images/urti.jpg'
 

export const diseaseInfo = {
  Bronchiectasis: {
    name: 'Bronchiectasis',
    heading: 'Understanding Bronchiectasis',
    description: 'Bronchiectasis is a chronic condition where the bronchial tubes of your lungs are permanently damaged, widened, and thickened. This causes your airways to collect excess mucus, leading to inflammation and repeated infections.',
    image: bronchiectasisImg,
    symptoms: ['Chronic cough', 'Daily production of mucus', 'Shortness of breath', 'Chest pain', 'Wheezing', 'Fatigue'],
    causes: ['Cystic fibrosis', 'Immunodeficiency disorders', 'Allergic bronchopulmonary aspergillosis', 'Pneumonia complications'],
    treatment: ['Antibiotics', 'Bronchodilators', 'Mucus thinners', 'Chest physiotherapy', 'Oxygen therapy'],
    prevention: ['Avoid smoking', 'Get vaccinated', 'Practice good hygiene', 'Stay hydrated'],
    severity: 'Moderate',
    isCurable: false
  },
  COPD: {
    name: 'COPD',
    heading: 'Chronic Obstructive Pulmonary Disease (COPD)',
    description: 'COPD is a chronic inflammatory lung disease that causes obstructed airflow from the lungs. It\'s typically caused by long-term exposure to irritating gases or particulate matter, most often from cigarette smoke.',
    image: copdImg,
    symptoms: ['Shortness of breath', 'Wheezing', 'Chest tightness', 'Chronic cough', 'Frequent respiratory infections'],
    causes: ['Smoking', 'Long-term exposure to air pollution', 'Occupational exposure to dusts and chemicals', 'Genetic factors'],
    treatment: ['Smoking cessation', 'Bronchodilators', 'Inhaled steroids', 'Pulmonary rehabilitation', 'Oxygen therapy'],
    prevention: ['Don\'t smoke', 'Avoid secondhand smoke and air pollution', 'Get vaccinated', 'Avoid occupational exposure to chemicals'],
    severity: 'High',
    isCurable: false
  },
  Healthy: {
    name: 'Healthy',
    heading: 'Congratulations on Your Healthy Lungs!',
    description: 'Your lungs appear to be in good health. Maintaining healthy lungs is crucial for overall well-being and quality of life.',
    image: healthyImg,
    symptoms: [],
    causes: [],
    treatment: [],
    prevention: ['Don\'t smoke', 'Exercise regularly', 'Eat a balanced diet', 'Stay hydrated', 'Practice deep breathing exercises', 'Avoid air pollution'],
    severity: 'Low',
    isCurable: true
  },
  Pneumonia: {
    name: 'Pneumonia',
    heading: 'Understanding Pneumonia',
    description: 'Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, causing cough with phlegm or pus, fever, chills, and difficulty breathing.',
    image: pneumoniaImg,
    symptoms: ['Chest pain when breathing or coughing', 'Confusion or changes in mental awareness', 'Cough with phlegm', 'Fatigue', 'Fever, sweating and shaking chills', 'Lower than normal body temperature'],
    causes: ['Bacteria', 'Viruses', 'Fungi', 'Parasites'],
    treatment: ['Antibiotics', 'Cough medicine', 'Fever reducers/pain relievers', 'Rest', 'Staying hydrated'],
    prevention: ['Get vaccinated', 'Practice good hygiene', 'Don\'t smoke', 'Keep your immune system strong'],
    severity: 'Moderate',
    isCurable: true
  },
  URTI: {
    name: 'URTI',
    heading: 'Upper Respiratory Tract Infection (URTI)',
    description: 'An Upper Respiratory Tract Infection (URTI) is an infection of your upper respiratory tract, which includes your sinuses, nasal passages, pharynx, and larynx. URTIs are usually caused by viruses and are very common.',
    image: urtiImg,
    symptoms: ['Runny or stuffy nose', 'Sore throat', 'Cough', 'Congestion', 'Slight body aches or a mild headache', 'Sneezing', 'Low-grade fever', 'Fatigue'],
    causes: ['Viruses (most common)', 'Bacteria', 'Irritants (smoke, allergens)'],
    treatment: ['Rest', 'Hydration', 'Over-the-counter pain relievers', 'Saltwater gargle', 'Decongestants'],
    prevention: ['Wash your hands frequently', 'Avoid close contact with people who are infected', 'Eat a balanced diet', 'Get enough sleep'],
    severity: 'Low',
    isCurable: true
  }
}
