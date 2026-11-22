export interface VideoGuidanceItem {
  id: string;
  youtubeId: string;
  titleHindi: string;
  titleEnglish: string;
  descriptionHindi: string;
  descriptionEnglish: string;
  keyPoints: string[];
  durationDisplay: string;
  uploadDate: string;
  language: 'Hindi' | 'English';
  thumbnailUrl: string;
}

export const CLINIC_VIDEOS: VideoGuidanceItem[] = [
  {
    id: 'video-tkr-timeline',
    youtubeId: 'LXH2a25uaQg',
    titleHindi:
      'नी-रिप्लेसमेंट सर्जरी के बाद 3 दिन, 3 सप्ताह और 3 महीने तक क्या रखें सावधानी? जानिए विशेषज्ञ की सलाह',
    titleEnglish:
      'Knee Replacement Recovery Timeline: Essential Precautions for 3 Days, 3 Weeks & 3 Months',
    descriptionHindi:
      'डॉ. गौरव शर्मा द्वारा समझाई गई टोटल नी-रिप्लेसमेंट के बाद की महत्वपूर्ण सावधानियाँ। जानिए शुरुआती 3 दिनों में वॉकर से चलना, 3 सप्ताह में फिजियोथेरेपी व घर की देखभाल, और 3 महीनों में सीढ़ियों व पूर्ण स्वतंत्रता की बहाली कैसे होती है।',
    descriptionEnglish:
      'Dr. Gaurav Sharma explains the critical recovery roadmap following total knee replacement. Practical guidance for early hospital mobilization (first 3 days), structured home care and physical therapy (first 3 weeks), and achieving unassisted stair climbing and active daily living (first 3 months).',
    keyPoints: [
      'पहला चरण (3 दिन): अस्पताल में वॉकर के सहारे कदम उठाना और सूजन नियंत्रण',
      'दूसरा चरण (3 सप्ताह): घर पर फिजियोथेरेपी, सही मुद्रा और घाव की स्वच्छता',
      'तीसरा चरण (3 महीने): स्वतंत्र रूप से सीढ़ियाँ चढ़ना और बिना सहारे सामान्य जीवन',
    ],
    durationDisplay: '8:45',
    uploadDate: '2024-09-15',
    language: 'Hindi',
    thumbnailUrl: '/images/videos/knee-replacement-precautions.jpg',
  },
  {
    id: 'video-winter-joint-pain',
    youtubeId: 'LXH2a25uaQg',
    titleHindi:
      'सर्दियों में बढ़ जाता है जोड़ों का दर्द? जानिए दर्द से बचने के लिए क्या करें और किन गलतियों से बचें',
    titleEnglish:
      'Why Joint Pain Worsens in Winter: Prevention, Remedies & Mistakes to Avoid',
    descriptionHindi:
      'सर्दियों के मौसम में घुटनों और जोड़ों में दर्द, अकड़न और भारीपन क्यों बढ़ जाता है? जानें सिनोवियल फ्लुइड का गाढ़ापन, सही सिकाई (हॉट फॉमेंटेशन) के नियम, और जोड़ों को ठंड से बचाने के सरल घरेलू व चिकित्सकीय उपाय।',
    descriptionEnglish:
      'In-depth discussion on why cold barometric pressure and dropping temperatures exacerbate joint stiffness and arthritis. Covers synovial fluid viscosity, correct temperature for hot compresses, and daily movement drills to keep joints supple throughout winter.',
    keyPoints: [
      'तापमान में गिरावट और जोड़ों के प्राकृतिक द्रव (Synovial Fluid) पर प्रभाव',
      'गर्म सिकाई का सही तरीका और अत्यधिक गर्म पानी की गलती से बचाव',
      'सुबह की अकड़न दूर करने के लिए बिस्तर पर ही किए जाने वाले आसान स्ट्रेच',
    ],
    durationDisplay: '6:30',
    uploadDate: '2024-11-02',
    language: 'Hindi',
    thumbnailUrl: '/images/videos/winter-joint-pain-care.jpg',
  },
];
