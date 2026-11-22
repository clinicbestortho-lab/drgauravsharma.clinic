export type FaqCategory =
  | 'All'
  | 'General'
  | 'Before Consultation'
  | 'Appointments'
  | 'Clinic'
  | 'Treatment Information'
  | 'Recovery';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  hindiCategory?: string;
  question: string;
  hindiQuestion?: string;
  answer: string;
  hindiAnswer?: string;
  doctorReviewFlag: boolean;
}

export const FAQS: FaqItem[] = [
  // Appointments
  {
    id: 'faq-how-to-book',
    category: 'Appointments',
    question: 'How do I book an outpatient consultation with Dr. Gaurav Sharma?',
    hindiQuestion: 'डॉ. गौरव शर्मा के साथ ओपीडी परामर्श कैसे बुक करें?',
    answer:
      'You can schedule a consultation by calling our clinic reception directly at +91 97602 30687, sending a WhatsApp message, or using the online consultation request form on this website. Our reception desk will verify doctor availability and confirm your appointment slot and session timing.',
    hindiAnswer:
      'आप हमारे क्लिनिक रिसेप्शन पर +91 97602 30687 पर सीधे कॉल करके, व्हाट्सएप संदेश भेजकर, या इस वेबसाइट पर उपलब्ध ऑनलाइन परामर्श फॉर्म भरकर अपॉइंटमेंट ले सकते हैं। हमारा रिसेप्शन स्टाफ डॉक्टर की उपलब्धता की पुष्टि कर आपको समय स्लॉट आवंटित करेगा।',
    doctorReviewFlag: false,
  },
  {
    id: 'faq-same-day-walkin',
    category: 'Appointments',
    question: 'Are same-day walk-in consultations accommodated?',
    hindiQuestion: 'क्या उसी दिन बिना पूर्व समय के परामर्श संभव है?',
    answer:
      '// NEEDS DOCTOR REVIEW: Walk-in patients are accommodated during regular OPD hours when clinical scheduling permits; however, scheduled appointments receive priority to ensure adequate examination time and minimize patient waiting.',
    hindiAnswer:
      'नियमित ओपीडी समय के दौरान बिना अपॉइंटमेंट आने वाले मरीजों को भी देखा जाता है; हालांकि, पहले से निर्धारित अपॉइंटमेंट वाले मरीजों को प्राथमिकता दी जाती है ताकि सभी को पर्याप्त जांच समय मिले और अनावश्यक प्रतीक्षा न करनी पड़े।',
    doctorReviewFlag: true,
  },
  {
    id: 'faq-sunday-consultations',
    category: 'Appointments',
    question: 'Are consultations available on Sundays?',
    hindiQuestion: 'क्या रविवार को परामर्श उपलब्ध है?',
    answer:
      'Yes, Dr. Gaurav Sharma conducts clinical consultations on Sundays between 10:00 AM and 02:00 PM strictly by prior scheduled appointment.',
    hindiAnswer:
      'हां, डॉ. गौरव शर्मा रविवार को सुबह 10:00 बजे से दोपहर 02:00 बजे तक केवल पूर्व निर्धारित अपॉइंटमेंट के आधार पर विशेष परामर्श प्रदान करते हैं।',
    doctorReviewFlag: false,
  },

  // Before Consultation
  {
    id: 'faq-what-to-bring',
    category: 'Before Consultation',
    question: 'What should I bring to my first orthopaedic consultation?',
    hindiQuestion: 'पहले परामर्श में मुझे क्या साथ लाना चाहिए?',
    answer:
      'Please bring all existing physical medical records, including previous X-ray films, MRI plates, CT scans, blood test reports, and a complete list of current daily medications. Wearing loose, comfortable clothing (such as trousers that easily roll up past the knee or a loose shirt for shoulder examination) facilitates thorough joint inspection.',
    hindiAnswer:
      'कृपया अपने सभी पुराने मेडिकल रिकॉर्ड्स साथ लाएं—जैसे पिछले एक्स-रे, एमआरआई, सीटी स्कैन, रक्त जांच रिपोर्ट और वर्तमान में चल रही दवाओं की पर्ची। ढीले व आरामदायक कपड़े पहनें ताकि जोड़ों की शारीरिक जांच आसानी से हो सके।',
    doctorReviewFlag: false,
  },
  {
    id: 'faq-external-films',
    category: 'Before Consultation',
    question: 'Can I bring X-rays or MRI films done at another diagnostic centre?',
    hindiQuestion: 'क्या मैं किसी अन्य सेंटर के एक्स-रे या एमआरआई ला सकता हूँ?',
    answer:
      'Yes, absolutely. Dr. Sharma routinely reviews diagnostic films and reports conducted at accredited external radiology laboratories. Fresh imaging is only advised if your previous films are outdated (more than 3–6 months old) or if specialized weight-bearing mechanical alignment views are required.',
    hindiAnswer:
      'हां, किसी भी मान्यता प्राप्त डायग्नोस्टिक सेंटर या अस्पताल से कराए गए वैध एक्स-रे और एमआरआई फिल्मों की जांच की जाती है। यदि जांच हाल ही की और स्पष्ट है, तो दोबारा जांच कराने की आवश्यकता नहीं होती।',
    doctorReviewFlag: false,
  },
  {
    id: 'faq-first-visit-process',
    category: 'Before Consultation',
    question: 'What happens during the initial consultation?',
    hindiQuestion: 'पहली मुलाकात के दौरान क्या प्रक्रिया होती है?',
    answer:
      'The consultation begins with a detailed clinical discussion of your symptoms, onset, and daily functional limitations, followed by physical joint palpation, range-of-motion measurement, and ligament stability testing. Dr. Sharma then examines your physical X-rays on a viewbox with you, explaining the anatomical findings and discussing conservative or surgical pathways in clear, non-technical language.',
    hindiAnswer:
      'प्रथम परामर्श में विस्तृत शारीरिक परीक्षण, जोड़ों की गति की जांच, पुरानी फिल्मों का अध्ययन और दर्द के सटीक कारणों पर चर्चा शामिल होती है। इसके आधार पर व्यक्तिगत उपचार योजना समझाई जाती है।',
    doctorReviewFlag: false,
  },

  // Clinic
  {
    id: 'faq-clinic-location-landmark',
    category: 'Clinic',
    question: 'Where is the clinic located and what is the landmark in Sikandra?',
    hindiQuestion: 'क्लिनिक कहाँ स्थित है और सिकंदरा में लैंडमार्क क्या है?',
    answer:
      'The clinic is situated at Satyam Complex, Sector-12A, Avas Vikas Colony, on the Sikandra-Bodla Road, Agra (PIN 282007). Key landmarks include Hotel Bhawna Clarks Inn (directly opposite) and Paras Pearls Mall (adjacent).',
    hindiAnswer:
      'क्लिनिक सत्यम कॉम्प्लेक्स, सेक्टर-12A, आवास विकास कॉलोनी, सिकंदरा-बोदला रोड, आगरा में स्थित है। यह होटल भावना क्लार्क्स इन के ठीक सामने और पारस पर्ल्स मॉल के निकट स्थित है।',
    doctorReviewFlag: false,
  },
  {
    id: 'faq-clinic-break-hours',
    category: 'Clinic',
    question: 'Why is there a doctor break from 4:00 PM to 6:00 PM?',
    hindiQuestion: 'शाम 4 से 6 बजे तक ब्रेक क्यों रहता है?',
    answer:
      'The 4:00 PM to 6:00 PM window is dedicated to in-patient hospital rounds, emergency consultations, and elective surgical procedures. Outpatient OPD resumes promptly for the evening session at 6:00 PM and runs through 9:30 PM.',
    hindiAnswer:
      'दोपहर 04:00 से शाम 06:00 बजे के बीच डॉक्टर अस्पताल में भर्ती मरीजों की देखभाल व सर्जिकल प्रक्रियाओं के लिए उपलब्ध रहते हैं। इस दौरान नियमित ओपीडी परामर्श बंद रहता है। शाम की ओपीडी 06:00 बजे पुनः प्रारंभ होती है।',
    doctorReviewFlag: false,
  },
  {
    id: 'faq-cashless-insurance',
    category: 'Clinic',
    question: 'Does the clinic accept health insurance or cashless Mediclaim?',
    hindiQuestion: 'क्या क्लिनिक में कैशलेस मेडिक्लेम या बीमा सुविधा है?',
    answer:
      'Outpatient (OPD) consultations are settled directly at the clinic desk. For surgical admissions and daycare operative interventions, cashless Mediclaim and TPA pre-authorisation assistance is provided through our affiliated hospital partner desks.',
    hindiAnswer:
      'ओपीडी परामर्श व प्लास्टर का भुगतान क्लिनिक काउंटर पर सीधे देय है। जिन सर्जिकल प्रक्रियाओं में अस्पताल में भर्ती होने की आवश्यकता होती है, उनके लिए सूचीबद्ध अस्पतालों के माध्यम से टीपीए व मेडिक्लेम कैशलेस सुविधा उपलब्ध कराई जाती है।',
    doctorReviewFlag: false,
  },

  // General
  {
    id: 'faq-second-opinion',
    category: 'General',
    question: 'Can I consult Dr. Gaurav Sharma for a second opinion on surgery?',
    hindiQuestion: 'क्या मैं सर्जरी के दूसरे सुझाव (सेकंड ओपिनियन) के लिए आ सकता हूँ?',
    answer:
      'Yes. Many patients consult Dr. Sharma specifically to review recommendations for knee replacement, spine surgery, or ligament repair received elsewhere. Dr. Sharma performs an unbiased clinical examination to determine whether conservative joint preservation remains viable or surgery is truly mandatory.',
    hindiAnswer:
      'हां, यदि आपको किसी अन्य अस्पताल में सर्जरी की सलाह दी गई है, तो आप निष्पक्ष द्वितीय परामर्श (Second Opinion) के लिए अपनी पूर्व रिपोर्टों के साथ परामर्श ले सकते हैं। हम गैर-सर्जिकल संभावनाओं का भी ईमानदारी से मूल्यांकन करते हैं।',
    doctorReviewFlag: false,
  },
  {
    id: 'faq-emergency-care',
    category: 'General',
    question: 'Does the clinic handle acute emergency accident trauma at night?',
    hindiQuestion: 'क्या क्लिनिक में रात में आपातकालीन दुर्घटना सेवाएं उपलब्ध हैं?',
    answer:
      'No. The clinic operates scheduled outpatient consultations. Patients suffering high-velocity road accidents, compound fractures with open bleeding wounds, or acute head/spine trauma should report directly to a 24-hour tertiary hospital trauma emergency unit.',
    hindiAnswer:
      'हमारा क्लिनिक निर्धारित ओपीडी परामर्श सेवा प्रदान करता है। गंभीर सड़क दुर्घटनाओं, अत्यधिक रक्तस्राव या खुले फ्रैक्चर के मामलों में तुरंत नजदीकी बड़े ट्रॉमा इमरजेंसी केंद्र में जाना चाहिए।',
    doctorReviewFlag: false,
  },
  {
    id: 'faq-elderly-patient-care',
    category: 'General',
    question: 'Can family members accompany and assist elderly patients?',
    hindiQuestion: 'क्या बुजुर्ग मरीजों के साथ परिजन आ सकते हैं?',
    answer:
      '// NEEDS DOCTOR REVIEW: Yes, we strongly encourage family members or primary caregivers to attend consultations so that treatment plans, home exercises, and medication routines can be discussed and coordinated clearly together.',
    hindiAnswer:
      'वरिष्ठ नागरिकों की विशेष देखभाल की जाती है। क्लिनिक में सुगम प्रवेश, व्हीलचेयर सहायता तथा रक्तचाप, मधुमेह व हड्डियों के घनत्व (ऑस्टियोपोरोसिस) को ध्यान में रखकर सुरक्षित उपचार योजना बनाई जाती है।',
    doctorReviewFlag: true,
  },

  // Treatment Information
  {
    id: 'faq-conservative-first',
    category: 'Treatment Information',
    question: 'Will surgery be recommended on the very first visit?',
    hindiQuestion: 'क्या पहली ही मुलाकात में सर्जरी की सलाह दी जाती है?',
    answer:
      '// NEEDS DOCTOR REVIEW: No. Dr. Sharma adheres strictly to evidence-based joint preservation protocols. Surgery is only considered after conservative measures—such as physiotherapy, pharmacological management, weight offloading, or biological injections—have been exhausted, or when acute skeletal trauma or joint instability dictates definitive surgical reconstruction.',
    hindiAnswer:
      'हां, डॉ. गौरव शर्मा की प्राथमिकता सर्वप्रथम बिना सर्जरी जोड़ों का संरक्षण करना है। 70% से अधिक मामलों में दवा, फिजियोथेरेपी और जीवनशैली में बदलाव से बिना किसी ऑपरेशन के मरीज स्वस्थ हो जाते हैं।',
    doctorReviewFlag: true,
  },
  {
    id: 'faq-tkr-vs-uka',
    category: 'Treatment Information',
    question: 'What is the difference between Total and Partial Knee Replacement?',
    hindiQuestion: 'टोटल और आंशिक (पार्शियल) नी रिप्लेसमेंट में क्या अंतर है?',
    answer:
      'Partial (Unicondylar) Knee Replacement resurfaces only the damaged medial or lateral compartment of the joint, leaving your natural cruciate ligaments (ACL/PCL) and healthy cartilage intact. Total Knee Replacement replaces all three articulating surfaces and is indicated when wear involves multiple compartments of the knee.',
    hindiAnswer:
      'यदि घुटने का केवल अंदरूनी भाग घिसा है और लिगामेंट स्वस्थ हैं, तो आंशिक घुटना प्रत्यारोपण (UKA) संभव है जिसमें कम चीरा और तेज रिकवरी होती है। यदि पूरा जोड़ घिस चुका है, तो पूर्ण घुटना प्रत्यारोपण (TKR) आवश्यक होता है।',
    doctorReviewFlag: false,
  },
  {
    id: 'faq-implant-longevity',
    category: 'Treatment Information',
    question: 'How long do modern joint replacement implants last?',
    hindiQuestion: 'आधुनिक जॉइंट रिप्लेसमेंट इंप्लांट कितने साल चलते हैं?',
    answer:
      '// NEEDS DOCTOR REVIEW: Contemporary high-grade cobalt-chromium, titanium alloys, and highly cross-linked polyethylene or ceramic bearings routinely demonstrate survival rates of 20 to 25+ years under normal daily living and low-impact activity.',
    hindiAnswer:
      'आधुनिक बायो-कंपैटिबल इम्प्लांट्स और सटीक सर्जिकल तकनीक के साथ जोड़ प्रत्यारोपण 20 से 25 वर्षों तक सफलतापूर्वक कार्य करते हैं, जिससे मरीज लंबे समय तक दर्दमुक्त सक्रिय जीवन जी सकते हैं।',
    doctorReviewFlag: true,
  },
  {
    id: 'faq-acl-return-to-sports',
    category: 'Treatment Information',
    question: 'How long after an ACL reconstruction can I return to sports?',
    hindiQuestion: 'एसीएल सर्जरी के कितने समय बाद खेल में वापसी संभव है?',
    answer:
      'Return to sports is strictly criteria-based rather than time-based. Straight-line running typically begins at 3–4 months, with cutting drills and non-contact training at 6 months. Clearance for full contact sports usually occurs between 9 to 12 months following rigorous functional limb symmetry testing.',
    hindiAnswer:
      'आर्थ्रोस्कोपिक एसीएल पुनर्निर्माण के बाद मरीज 2–3 सप्ताह में सामान्य चलने लगते हैं। खेलकूद या भारी गतिविधियों में वापसी चरणबद्ध पुनर्वास के पश्चात 6 से 9 महीनों में सुरक्षित मानी जाती है।',
    doctorReviewFlag: false,
  },
  {
    id: 'faq-shoulder-cuff-pain',
    category: 'Treatment Information',
    question: 'Why does shoulder rotator cuff pain worsen at night?',
    hindiQuestion: 'रोटेटर कफ का दर्द रात में क्यों बढ़ जाता है?',
    answer:
      '// NEEDS DOCTOR REVIEW: Lying flat eliminates gravitational downward pull on the arm, causing the humeral head to sit higher against the subacromial space. This increases impingement pressure on the inflamed or torn tendon and disrupts restorative sleep.',
    hindiAnswer:
      'कंधे के दर्द के अधिकांश मामलों में शुरुआती अवस्था में फिजियोथेरेपी और दवाएं प्रभावी होती हैं। यदि रोटेटर कफ का टेंडन पूरी तरह फट गया हो या हाथ उठाने में असमर्थता हो, तो दूरबीन (आर्थ्रोस्कोपी) सर्जरी की आवश्यकता होती है।',
    doctorReviewFlag: true,
  },

  // Recovery
  {
    id: 'faq-tkr-recovery',
    category: 'Recovery',
    question: 'How soon can a patient walk after Total Knee Replacement?',
    hindiQuestion: 'नी रिप्लेसमेंट के बाद मरीज कब चलना शुरू करता है?',
    answer:
      'Under modern multimodal pain management and nerve blocks, patients typically stand and take their first steps with a walker within 24 to 48 hours of surgery. Independent stair negotiation is usually achieved by week 3–4, and unassisted walking by week 6–8.',
    hindiAnswer:
      'मरीज सर्जरी के अगले ही दिन (24–48 घंटे में) वॉकर के सहारे खड़े होकर चलने लगते हैं। 3–4 सप्ताह में छड़ी से और 6–8 सप्ताह में पूरी तरह बिना किसी सहारे के सामान्य दैनिक कार्य करने में सक्षम हो जाते हैं।',
    doctorReviewFlag: false,
  },
  {
    id: 'faq-daycare-surgery',
    category: 'Recovery',
    question: 'Can I go home on the same day after a daycare procedure?',
    hindiQuestion: 'क्या डेकेयर सर्जरी के बाद उसी दिन घर जा सकते हैं?',
    answer:
      'Yes. Procedures like Carpal Tunnel Release, Trigger Finger Release, and certain diagnostic keyhole arthroscopies are completed under local or regional anesthesia, allowing patients to safely return home within 2 to 4 hours after a post-operative observation period.',
    hindiAnswer:
      'कार्पल टनल रिलीज और ट्रिगर फिंगर जैसी छोटी प्रक्रियाएं लोकल एनेस्थीसिया में की जाती हैं। मरीज को उसी दिन 2–3 घंटे में घर भेज दिया जाता है और अस्पताल में रात बिताने की आवश्यकता नहीं होती।',
    doctorReviewFlag: false,
  },
  {
    id: 'faq-fracture-healing',
    category: 'Recovery',
    question: 'How long does a long-bone fracture take to heal after nailing?',
    hindiQuestion: 'इंटरलॉकिंग नेलिंग के बाद फ्रैक्चर जुड़ने में कितना समय लगता है?',
    answer:
      '// NEEDS DOCTOR REVIEW: Closed interlocking intramedullary nailing preserves biological fracture hematoma and periosteum. Initial bridging callus is typically visible on digital radiographs at 4–6 weeks, with consolidated cortical union occurring around 10–12 weeks depending on age, smoking status, and nutritional state.',
    hindiAnswer:
      'साधारण फ्रैक्चर 6 से 8 सप्ताह में जुड़ जाते हैं, जबकि जटिल हड्डियों में 12 से 16 सप्ताह तक का समय लग सकता है। नियमित एक्स-रे जांच द्वारा हड्डी के जुड़ने की प्रगति की निगरानी की जाती है।',
    doctorReviewFlag: true,
  },
  {
    id: 'faq-elderly-fractures',
    category: 'Recovery',
    question: 'Why is quick surgery essential for elderly hip fractures?',
    hindiQuestion: 'बुजुर्गों के हिप फ्रैक्चर में तुरंत सर्जरी क्यों जरूरी है?',
    answer:
      '// NEEDS DOCTOR REVIEW: Prolonged bed rest in seniors quickly leads to severe systemic complications such as hypostatic pneumonia, painful pressure sores, deep vein thrombosis, and cognitive decline. Bipolar hemiarthroplasty replaces the broken bone so the patient can stand upright and walk with a frame within 24–48 hours.',
    hindiAnswer:
      'बुजुर्गों में कूल्हे का फ्रैक्चर होने पर जल्द से जल्द (बाईपोलर हेमीआर्थ्रोप्लास्टी या फिक्सेशन) सर्जरी की जाती है ताकि मरीज बिस्तर पर न रहे और अगले ही दिन बैठकर चलना शुरू कर सके।',
    doctorReviewFlag: true,
  },
  {
    id: 'faq-sciatica-disc',
    category: 'Recovery',
    question: 'Does a lumbar slip disc heal on its own without surgery?',
    hindiQuestion: 'क्या स्लिप डिस्क बिना सर्जरी के खुद ठीक हो सकती है?',
    answer:
      '// NEEDS DOCTOR REVIEW: Yes, over 90% of acute lumbar disc herniations improve with conservative treatment within 6 to 12 weeks through biological resorption of the herniated nucleus, anti-inflammatory medication, and targeted spine rehabilitation.',
    hindiAnswer:
      'स्लिप डिस्क और साइटिका के 90% से अधिक मामलों में सर्जरी की आवश्यकता नहीं होती। सही आराम, विशिष्ट नर्व दवाएं, पोस्चर सुधार और फिजियोथेरेपी से नस का दबाव और पैरों का दर्द पूरी तरह ठीक हो जाता है।',
    doctorReviewFlag: true,
  },
];
