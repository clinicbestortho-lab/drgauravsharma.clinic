/**
 * Single source of truth for Dr. Gaurav Sharma Orthopaedic Clinic
 * Follows strict medical ethics, regulatory compliance, and factual clinic data.
 */

export interface ClinicTimingSession {
  label: string;
  hindiLabel?: string;
  days: string;
  hindiDays?: string;
  time: string;
  hindiTime?: string;
  note?: string;
  hindiNote?: string;
}

export interface DoctorProfile {
  name: string;
  hindiName?: string;
  honorific: string;
  hindiHonorific?: string;
  degrees: string[];
  accolades: string[];
  hindiAccolades?: string[];
  experienceYears: number;
  experienceDisplay: string;
  hindiExperienceDisplay?: string;
  designation: string;
  hindiDesignation?: string;
  formerDesignation: string;
  hindiFormerDesignation?: string;
  registrationNumber: string;
  registrationCouncil: string;
  hindiRegistrationCouncil?: string;
  bioShort: string;
  hindiBioShort?: string;
  bioDetailed: string[];
  hindiBioDetailed?: string[];
  focusAreas: string[];
  hindiFocusAreas?: string[];
}

export interface ClinicLocation {
  name: string;
  hindiName?: string;
  parentFacilityNote?: string;
  hindiParentFacilityNote?: string;
  addressLine1: string;
  hindiAddressLine1?: string;
  addressLine2: string;
  hindiAddressLine2?: string;
  locality: string;
  hindiLocality?: string;
  city: string;
  hindiCity?: string;
  state: string;
  hindiState?: string;
  postalCode: string;
  country: string;
  hindiCountry?: string;
  landmark: string;
  hindiLandmark?: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  mapsUrl: string;
  googleBusinessProfileUrl: string;
  localitiesServed: string[];
  hindiLocalitiesServed?: string[];
}

export interface ClinicContact {
  primaryPhone: string;
  displayPhone: string;
  whatsappNumber: string;
  whatsappPrefill: string;
  emergencyDepartmentNotice: string;
}

export interface ClinicSocials {
  youtubeChannel: string;
  featuredYoutubeVideo: string;
  instagramReel: string;
  facebookPost: string;
}

export const DOCTOR_PROFILE: DoctorProfile = {
  name: 'Dr. Gaurav Sharma',
  hindiName: 'डॉ. गौरव शर्मा',
  honorific: 'Dr.',
  hindiHonorific: 'डॉ.',
  degrees: ['M.B.B.S.', 'M.S. (Orthopaedics)'],
  accolades: ['Former Assistant Professor of Orthopaedics'],
  hindiAccolades: ['पूर्व असिस्टेंट प्रोफेसर, ऑर्थोपेडिक्स विभाग'],
  experienceYears: 20,
  experienceDisplay: '20+ Years Clinical & Surgical Experience',
  hindiExperienceDisplay: '20+ वर्षों का समर्पित चिकित्सकीय व सर्जिकल अनुभव',
  designation: 'Consultant Orthopaedic & Joint Replacement Surgeon',
  hindiDesignation: 'कंसल्टेंट ऑर्थोपेडिक एवं जॉइंट रिप्लेसमेंट सर्जन',
  formerDesignation: 'Former Assistant Professor of Orthopaedics',
  hindiFormerDesignation: 'पूर्व असिस्टेंट प्रोफेसर, हड्डी रोग विभाग',
  registrationNumber: '48757',
  registrationCouncil: 'U.P. Medical Council (UPMC)',
  hindiRegistrationCouncil: 'उत्तर प्रदेश मेडिकल काउंसिल (UPMC)',
  bioShort:
    'Consultant orthopaedic and joint replacement surgeon in Sikandra, Agra with over two decades of dedicated bone, joint, and reconstructive surgical practice. Structured around clinical integrity, clear diagnosis, and joint preservation first.',
  hindiBioShort:
    'सिकंदरा, आगरा में दो दशकों से अधिक समय से सेवारत वरिष्ठ हड्डी एवं जोड़ प्रत्यारोपण विशेषज्ञ। गहन नैदानिक परीक्षण, स्पष्ट निदान और जोड़ों के प्राकृतिक संरक्षण को प्राथमिकता।',
  bioDetailed: [
    'Dr. Gaurav Sharma is an established consultant orthopaedic and joint reconstruction surgeon practising in Sikandra, Agra. With more than 20 years of surgical and clinical background, he completed his MS (Orthopaedics) and served as an Assistant Professor of Orthopaedics, training undergraduate and postgraduate surgical residents.',
    'His clinical practice centres on comprehensive physical examination, transparent clinical reasoning, and conservative joint preservation wherever viable. When surgical intervention becomes necessary—such as in advanced osteoarthritis, acute sports tears, or complex skeletal trauma—he performs tissue-preserving primary and revision joint replacements and arthroscopic procedures aimed at rapid early mobilisation.',
    'Practising at Satyam Complex, Sikandra, he serves patients from across Agra, Sikandra, Bodla, Dayalbagh, Runakta, and neighbouring Western Uttar Pradesh districts.',
  ],
  hindiBioDetailed: [
    'डॉ. गौरव शर्मा सिकंदरा, आगरा में एक प्रतिष्ठित कंसल्टेंट ऑर्थोपेडिक व जोड़ प्रत्यारोपण सर्जन हैं। 20 वर्षों से अधिक के समृद्ध सर्जिकल अनुभव के साथ, उन्होंने एमएस (हड्डी रोग) की उपाधि प्राप्त की तथा मेडिकल कॉलेज में असिस्टेंट प्रोफेसर के पद पर रहते हुए स्नातक व स्नातकोत्तर चिकित्सकों को प्रशिक्षित किया।',
    'उनकी क्लिनिकल पद्धति का मुख्य आधार संपूर्ण शारीरिक जांच, पारदर्शी चिकित्सकीय संवाद तथा जब तक संभव हो बिना सर्जरी जोड़ों का संरक्षण है। जब सर्जरी आवश्यक हो जाती है—जैसे घुटने का गंभीर घिसाव (आर्थराइटिस), लिगामेंट इंजरी या जटिल फ्रैक्चर—वे ऊतकों को सुरक्षित रखने वाली उन्नत तकनीकों से शीघ्र रिकवरी सुनिश्चित करते हैं।',
    'सत्यम कॉम्प्लेक्स, सिकंदरा में स्थित क्लिनिक के माध्यम से वे आगरा, सिकंदरा, बोदला, दयालबाग, रुनकता तथा आसपास के पश्चिमी उत्तर प्रदेश के मरीजों को विश्वसनीय सेवाएं दे रहे हैं।',
  ],
  focusAreas: [
    'Primary & Partial Knee Replacement (TKR & UKA)',
    'Total Hip Replacement (THR) & Bipolar Arthroplasty',
    'Complex Knee & Revision Joint Reconstruction',
    'Minimally Invasive Knee & Shoulder Arthroscopy (ACL / Meniscus / Rotator Cuff)',
    'Complex Fracture Fixation (ORIF Locking Plates & Interlocking Nailing)',
    'Back Pain, Spine & Lumbar Stiffness Evaluation',
    'Sports Injury Assessment & Biological Joint Preservation (PRP / Viscosupplementation)',
    'Daycare Hand & Peripheral Nerve Surgeries (Carpal Tunnel & Trigger Finger)',
  ],
  hindiFocusAreas: [
    'पूर्ण एवं आंशिक घुटना प्रत्यारोपण (TKR व UKA)',
    'कूल्हा प्रत्यारोपण (THR) एवं बाईपोलर हेमीआर्थ्रोप्लास्टी',
    'जटिल घुटना पुनर्निर्माण एवं रिवीजन सर्जरी',
    'दूरबीन विधि से घुटना व कंधा आर्थ्रोस्कोपी (ACL / मेनिस्कस / रोटेटर कफ)',
    'जटिल फ्रैक्चर उपचार (लॉकिंग प्लेट्स एवं इंटरलॉकिंग नेलिंग)',
    'कमर दर्द, साइटिका एवं स्पाइन विकारों का परीक्षण',
    'खेलकूद की चोटें एवं बायोलॉजिकल जोड़ संरक्षण (PRP थेरेपी)',
    'डे-केयर सर्जरी (कार्पल टनल एवं ट्रिगर फिंगर रिलीज)',
  ],
};

export const CLINIC_LOCATION: ClinicLocation = {
  name: 'Dr. Gaurav Sharma Orthopaedic Clinic',
  hindiName: 'डॉ. गौरव शर्मा ऑर्थोपेडिक क्लिनिक',
  parentFacilityNote:
    'Dr. Sharma Orthopaedic Clinic (co-located within Dr. Sharma Speciality Clinic premises)',
  hindiParentFacilityNote: 'डॉ. शर्मा ऑर्थोपेडिक क्लिनिक (डॉ. शर्मा स्पेशलिटी क्लिनिक परिसर)',
  addressLine1: 'Satyam Complex, Sector-12A',
  hindiAddressLine1: 'सत्यम कॉम्प्लेक्स, सेक्टर-12A',
  addressLine2: 'Avas Vikas Colony, Sikandra-Bodla Road',
  hindiAddressLine2: 'आवास विकास कॉलोनी, सिकंदरा-बोदला रोड',
  locality: 'Sikandra',
  hindiLocality: 'सिकंदरा',
  city: 'Agra',
  hindiCity: 'आगरा',
  state: 'Uttar Pradesh',
  hindiState: 'उत्तर प्रदेश',
  postalCode: '282007',
  country: 'India',
  hindiCountry: 'भारत',
  landmark: 'Opposite Hotel Bhawna Clarks Inn, adjacent to Paras Pearls Mall',
  hindiLandmark: 'होटल भावना क्लार्क्स इन के सामने, पारस पर्ल्स मॉल के पास',
  geo: {
    latitude: 27.2045, // Sikandra, Agra coordinates
    longitude: 77.9547,
  },
  mapsUrl:
    'https://maps.google.com/?q=Satyam+Complex+Sector+12A+Avas+Vikas+Colony+Sikandra+Agra',
  googleBusinessProfileUrl: 'https://share.google/ggZ6xfMlJq1ZPwulT',
  localitiesServed: [
    'Sikandra',
    'Bodla',
    'Dayalbagh',
    'Avas Vikas Colony',
    'Runakta',
    'Kamla Nagar',
    'Shahganj',
    'Khandari',
    'Agra Cantt',
    'Mathura Road Corridor',
  ],
  hindiLocalitiesServed: [
    'सिकंदरा',
    'बोदला',
    'दयालबाग',
    'आवास विकास कॉलोनी',
    'रुनकता',
    'कमला नगर',
    'शाहगंज',
    'खंदारी',
    'आगरा कैंट',
    'मथुरा रोड कॉरिडोर',
  ],
};

export const CLINIC_TIMINGS: ClinicTimingSession[] = [
  {
    label: 'Morning & Afternoon Outpatient Session',
    hindiLabel: 'सुबह व दोपहर ओपीडी परामर्श',
    days: 'Monday to Saturday',
    hindiDays: 'सोमवार से शनिवार',
    time: '09:30 AM – 04:00 PM',
    hindiTime: 'सुबह 09:30 – दोपहर 04:00',
  },
  {
    label: 'Doctor Break & Elective Procedures',
    hindiLabel: 'डॉक्टर ब्रेक एवं प्रक्रियाएं',
    days: 'Monday to Saturday',
    hindiDays: 'सोमवार से शनिवार',
    time: '04:00 PM – 06:00 PM',
    hindiTime: 'दोपहर 04:00 – शाम 06:00',
    note: 'In-patient rounds & procedure window. No routine walk-in OPD.',
    hindiNote: 'अस्पताल राउंड व प्रक्रिया का समय। नियमित वॉक-इन ओपीडी नहीं।',
  },
  {
    label: 'Evening Outpatient Session',
    hindiLabel: 'शाम ओपीडी परामर्श',
    days: 'Monday to Saturday',
    hindiDays: 'सोमवार से शनिवार',
    time: '06:00 PM – 09:30 PM',
    hindiTime: 'शाम 06:00 – रात 09:30',
  },
  {
    label: 'Sunday Clinical Evaluation',
    hindiLabel: 'रविवार विशेष परामर्श',
    days: 'Sunday',
    hindiDays: 'रविवार',
    time: '10:00 AM – 02:00 PM',
    hindiTime: 'सुबह 10:00 – दोपहर 02:00',
    note: 'By prior scheduled appointment only.',
    hindiNote: 'केवल पूर्व निर्धारित अपॉइंटमेंट द्वारा।',
  },
];

export const CLINIC_CONTACT: ClinicContact = {
  primaryPhone: '+919760230687',
  displayPhone: '+91 97602 30687',
  whatsappNumber: '+919760230687',
  whatsappPrefill:
    'Hello Dr. Gaurav Sharma Clinic, I would like to enquire about an orthopaedic consultation.',
  emergencyDepartmentNotice:
    'NOTICE: Outpatient clinic appointments do not replace emergency casualty services. Patients experiencing high-velocity trauma, compound fractures with open skin lacerations, profuse bleeding, or acute neurological deficits must report immediately to the nearest tertiary trauma emergency department.',
};

export const CLINIC_SOCIALS: ClinicSocials = {
  youtubeChannel: 'https://youtu.be/LXH2a25uaQg',
  featuredYoutubeVideo: 'https://youtu.be/LXH2a25uaQg',
  instagramReel: 'https://www.instagram.com/reel/DemOt09vxGa/',
  facebookPost: 'https://www.facebook.com/share/v/1GigbxkjAP/',
};

export const CLINIC_INSURANCE_NOTE =
  'Outpatient (OPD) clinical consultations, in-clinic splinting, and diagnostic film evaluations are payable directly at the clinic reception. For surgical procedures requiring hospital admission, cashless Mediclaim & TPA pre-authorization assistance is facilitated through empanelled hospital partner desks. No upfront online booking charges apply.';

export const COMPLIANCE_NOTICE =
  'NMC & Ethical Practice Notice: This digital platform serves exclusively for patient education, clinic scheduling transparency, and public orientation. In compliance with the National Medical Commission (NMC) professional conduct regulations, information presented here does not constitute a guaranteed clinical prognosis or commercial solicitation. Operative intervention is advised solely following in-person physical clinical examination, diagnostic film correlation (X-rays/MRI), and exhausting conservative avenues.';

export const HINDI_COMPLIANCE_NOTICE =
  'एनएमसी एवं नैतिक चिकित्सा आचार संहिता सूचना: यह डिजिटल प्लेटफॉर्म केवल मरीज शिक्षा, क्लिनिक समय-सारिणी में पारदर्शिता और जन-जागरूकता के उद्देश्य से संचालित है। राष्ट्रीय चिकित्सा आयोग (NMC) के व्यावसायिक आचरण नियमों के अनुसार, यहां दी गई जानकारी किसी गारंटीकृत क्लिनिकल परिणाम या व्यावसायिक प्रचार का हिस्सा नहीं है। किसी भी सर्जिकल प्रक्रिया की सलाह केवल क्लिनिक में प्रत्यक्ष शारीरिक जांच, डिजिटल एक्स-रे व एमआरआई फिल्म समीक्षा और बिना सर्जरी सुरक्षित विकल्पों के समाप्त होने के पश्चात ही दी जाती है।';
