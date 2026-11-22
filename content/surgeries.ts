export type SurgeryCategory =
  | 'Joint Replacement'
  | 'Arthroscopy & Sports'
  | 'Trauma & Fractures'
  | 'Daycare Surgeries';

export interface RecoveryMilestone {
  timeframe: string;
  hindiTimeframe?: string;
  headline: string;
  hindiHeadline?: string;
  description: string;
  hindiDescription?: string;
}

export interface SurgeryItem {
  slug: string;
  title: string;
  hindiTitle?: string;
  shortTitle: string;
  hindiShortTitle?: string;
  category: SurgeryCategory;
  hindiCategory?: string;
  hospitalStay: string;
  hindiHospitalStay?: string;
  summary: string;
  hindiSummary?: string;
  indication: string;
  hindiIndication?: string;
  highlights: string[];
  hindiHighlights?: string[];
  recoveryTimeline: RecoveryMilestone[];
  procedureSteps: string[];
  hindiProcedureSteps?: string[];
  risksAndAlternatives: {
    alternatives: string[];
    hindiAlternatives?: string[];
    risks: string[];
    hindiRisks?: string[];
    note: string;
    hindiNote?: string;
  };
  relatedProcedures: string[]; // slugs
  relatedFaqIds: string[];
}

export const SURGERIES: SurgeryItem[] = [
  {
    slug: 'total-knee-replacement',
    title: 'Total Knee Replacement (TKR)',
    hindiTitle: 'टोटल नी रिप्लेसमेंट (पूर्ण घुटना प्रत्यारोपण - TKR)',
    shortTitle: 'Total Knee Replacement',
    hindiShortTitle: 'घुटना प्रत्यारोपण (TKR)',
    category: 'Joint Replacement',
    hindiCategory: 'जोड़ प्रत्यारोपण',
    hospitalStay: '3–4 days',
    hindiHospitalStay: '3–4 दिन',
    summary:
      'Replaces worn arthritic cartilage with smooth biocompatible implants; detailed pre-operative templating to match natural bone anatomy.',
    hindiSummary: 'घुटने के घिस चुके कार्टिलेज को उच्च गुणवत्ता वाले बायो-कंपैटिबल इम्प्लांट से बदलकर दर्दमुक्त गतिशीलता बहाल करना।',
    hindiIndication: 'गंभीर ऑस्टियोआर्थराइटिस (ग्रेड 4), हड्डियों का आपस में टकराना, सीढ़ियां चढ़ने व चलने में अत्यधिक कष्ट, एवं पैरों का टेढ़ापन।',
    indication:
      'End-stage tricompartmental osteoarthritis (Grade 4), bone-on-bone joint collapse, severe walking pain, and progressive varus or valgus bowing deformity unresponsive to conservative treatments.',
    highlights: [
      'Precision mechanical alignment and soft-tissue ligament balancing for stable, durable kinematics.',
      'Modern multimodal analgesia and local infiltration blocks enabling safe Day-1 assisted standing.',
      'Accurate axial alignment correction restoring straight weight-bearing leg geometry.',
    ],
    hindiHighlights: [
      'सूक्ष्म संरेखण और ऊतक-संरक्षण तकनीक द्वारा प्राकृतिक गति और लिगामेंट संतुलन की पुनर्स्थापना।',
      'अत्याधुनिक घिसाव-रोधी अत्यधिक क्रॉस-लिंक्ड पॉलीइथाइलीन आवेषण के साथ बायो-कम्पैटिबल कोबाल्ट-क्रोमियम इम्प्लांट्स।',
      'सर्जरी के पहले ही दिन से (डे-1) वॉकर की सहायता से चलना और त्वरित सक्रिय घुटना मोड़ना आरंभ।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Day 1–2 (24–48 Hours)',
        hindiTimeframe: 'दिन 1–2 (24–48 घंटे)',
        headline: 'Early Standing & Bedside Mobilization',
        hindiHeadline: 'शीघ्र खड़ा होना व वॉकर से चलना',
        description:
          'Walker-assisted walking begins under physiotherapist guidance; quadriceps isometric contractions and bedside knee flexion initiated.',
        hindiDescription:
          'फिजियोथेरेपिस्ट की देखरेख में वॉकर के सहारे चलना, पैर की मांसपेशियों का संकुचन और घुटना मोड़ना आरंभ।',
      },
      {
        timeframe: 'Weeks 3–4',
        hindiTimeframe: 'सप्ताह 3–4',
        headline: 'Independent Stairs & Single-Stick Walking',
        hindiHeadline: 'सीढ़ियां चढ़ना व छड़ी के सहारे चलना',
        description:
          'Transition from walker to elbow crutch or walking stick; negotiated stair climbing (up with good leg, down with operated leg) achieved.',
        hindiDescription:
          'वॉकर से एक छड़ी पर आना और सीढ़ियों पर सुरक्षित चढ़ना-उतरना (स्वस्थ पैर पहले, फिर ऑपरेटेड पैर)।',
      },
      {
        timeframe: 'Weeks 6–8',
        hindiTimeframe: 'सप्ताह 6–8',
        headline: 'Full Unassisted Daily Walking',
        hindiHeadline: 'बिना सहारे स्वतंत्र चाल',
        description:
          'Walking without walking aids; routine indoor and outdoor activities restored; progressive endurance walking and driving clearance.',
        hindiDescription:
          'बिना किसी सहारे के सामान्य चलना, दैनिक घरेलू व सामाजिक कार्य, और वाहन चलाने की मेडिकल स्वीकृति।',
      },
    ],
    procedureSteps: [
      'Pre-operative digital sizing and template planning to determine exact femoral and tibial component dimensions.',
      'Minimal-subvastus exposure sparing quadriceps tendon bulk where clinically appropriate.',
      'Sub-millimetre bony cuts removing damaged cartilage while preserving collateral ligament origins.',
      'Trial component insertion with dynamic range-of-motion testing to ensure zero joint laxity.',
      'Definitive fixation using high-viscosity antibiotic-impregnated bone cement and ultra-high-molecular-weight polyethylene insert.',
    ],
    hindiProcedureSteps: [
      'सटीक डिजिटल प्री-ऑपरेटिव प्लानिंग द्वारा फीमर और टिबिया इम्प्लांट के सटीक माप का निर्धारण।',
      'क्वाड्रिसेप्स मांसपेशी और टेंडन को सुरक्षित रखने वाली मिनिमल-सबवास्टस सर्जिकल तकनीक।',
      'क्षतिग्रस्त कार्टिलेज को सब-मिलीमीटर परिशुद्धता से हटाते हुए लिगामेंट्स को सुरक्षित रखना।',
      'ट्रायल इम्प्लांट लगाकर घुटने की पूर्ण गतिशीलता और शून्य जोड़ ढीलेपन का परीक्षण।',
      'एंटीबायोटिक युक्त बोन सीमेंट और घिसाव-रोधी पॉलीइथाइलीन इन्सर्ट के साथ अंतिम फिक्सेशन।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'Structured quadriceps strengthening physiotherapy and lifestyle pacing',
        'Viscosupplementation (hyaluronic acid) or PRP biological joint injections',
        'Unicondylar (partial) knee replacement if only the medial compartment is degenerated',
      ],
      hindiAlternatives: [
      'क्वाड्रिसेप्स मांसपेशियों की मजबूती हेतु नियमित फिजियोथेरेपी व जीवनशैली में सुधार',
      'विस्कोसप्लीमेंटेशन (हयालूरोनिक एसिड) या पीआरपी (PRP) बायोलॉजिकल जॉइंट इंजेक्शन',
      'यदि केवल एक कम्पार्टमेंट घिसा हो तो आंशिक (पार्शियल) घुटना प्रत्यारोपण',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Superficial wound infection risk (<1% under strict laminar airflow theatre protocols)',
        '// NEEDS DOCTOR REVIEW: Deep vein thrombosis (mitigated by routine pharmacological and mechanical prophylaxis)',
        '// NEEDS DOCTOR REVIEW: Residual post-operative stiffness requiring prolonged supervised physical therapy',
      ],
      hindiRisks: [
      'घाव का सतही संक्रमण (<1% जोखिम, आधुनिक लैमिनार एयरफ्लो ऑपरेशन थियेटर प्रोटोकॉल द्वारा सुरक्षित)',
      'नसों में खून का थक्का जमना (DVT - नियमित दवा व विशेष मोजों द्वारा बचाव)',
      'सर्जरी के बाद शुरुआती अकड़न (नियमित फिजियोथेरेपी द्वारा पूर्णतः रोकथाम योग्य)',
    ],
      note: 'Surgery is recommended only when Grade 4 bone-on-bone osteoarthritis permanently restricts independent ambulation and sleep.',
      hindiNote: 'सर्जरी की सिफारिश केवल तभी की जाती है जब गंभीर ग्रेड 4 आर्थराइटिस दैनिक चाल और रात की नींद को स्थायी रूप से बाधित करने लगे।',
    },
    relatedProcedures: ['partial-knee-replacement', 'revision-joint-replacement'],
    relatedFaqIds: ['faq-tkr-recovery', 'faq-implant-longevity', 'faq-second-opinion'],
  },
  {
    slug: 'partial-knee-replacement',
    title: 'Partial / Unicondylar Knee Replacement (UKA)',
    hindiTitle: 'पार्शियल / यूनिकांडाइलर घुटना प्रत्यारोपण (UKA)',
    shortTitle: 'Partial Knee Replacement',
    hindiShortTitle: 'आंशिक घुटना प्रत्यारोपण',
    category: 'Joint Replacement',
    hindiCategory: 'जोड़ प्रत्यारोपण',
    hospitalStay: '1–2 days',
    hindiHospitalStay: '2–3 दिन',
    summary:
      'Resurfaces only the damaged inner compartment; natural ligaments and healthy lateral cartilage stay intact.',
    hindiSummary: 'केवल घिसे हुए हिस्से का प्रत्यारोपण, जिससे प्राकृतिक लिगामेंट और स्वस्थ कार्टिलेज पूरी तरह सुरक्षित रहते हैं।',
    hindiIndication: 'घुटने के केवल अंदरूनी (मीडियल) हिस्से का घिसाव, जबकि बाकी जोड़ और एसीएल लिगामेंट पूरी तरह स्वस्थ हों।',
    indication:
      'Isolated medial or lateral compartment osteoarthritis with an intact anterior cruciate ligament (ACL), preserved opposing compartment, and correctable deformity.',
    highlights: [
      'Preserves the native ACL and PCL, retaining natural proprioception and natural joint kinematics.',
      'Significantly smaller incision, reduced surgical trauma, and minimal perioperative blood loss.',
      'Quicker return to walking, automotive driving, and customary household routines.',
    ],
    hindiHighlights: [
      'स्वस्थ बाहरी कार्टिलेज और एसीएल लिगामेंट को पूरी तरह सुरक्षित रखते हुए केवल घिसे हुए भाग का सटीक बदलाव।',
      'कम चीरा, कम रक्तस्राव और प्राकृतिक जोड़ जैसा स्वाभाविक अहसास।',
      'पारंपरिक टीकेआर की तुलना में तेजी से रिकवरी और अधिकांश मरीजों को 24-48 घंटों में अस्पताल से छुट्टी।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Day 1 (Within Hours)',
        hindiTimeframe: 'दिन 1 (कुछ घंटों में)',
        headline: 'Immediate Weight-Bearing',
        hindiHeadline: 'तत्काल वजन रखकर चलना',
        description:
          'Patients stand and bear weight with a walking frame on the evening of surgery or the following morning.',
        hindiDescription:
          'सर्जरी की शाम या अगली सुबह वॉकर के सहारे मरीज अपने पैरों पर खड़ा होकर चलता है।',
      },
      {
        timeframe: 'Weeks 2–3',
        hindiTimeframe: 'सप्ताह 2–3',
        headline: 'Transition to Independent Ambulation',
        hindiHeadline: 'स्वतंत्र चाल की ओर प्रगति',
        description:
          'Rapid range-of-motion recovery with active knee flexion beyond 110 degrees; walking stick discontinued as confidence returns.',
        hindiDescription:
          'घुटने का 110 डिग्री से अधिक मुड़ना और आत्मविश्वास लौटने पर छड़ी का सहारा भी छूट जाना।',
      },
      {
        timeframe: 'Weeks 4–6',
        hindiTimeframe: 'सप्ताह 4–6',
        headline: 'Restoration of Active Lifestyle',
        hindiHeadline: 'सक्रिय जीवनशैली में पूर्ण वापसी',
        description:
          'Return to long walks, light recreation, and driving with natural joint feel.',
        hindiDescription:
          'प्राकृतिक जोड़ के अहसास के साथ लंबी सैर, हल्की खेलकूद गतिविधियां और ड्राइविंग आरंभ।',
      },
    ],
    procedureSteps: [
      'Direct minimally invasive medial arthrotomy exposing solely the affected condyle.',
      'Careful intra-operative inspection verifying intact ACL and pristine lateral joint surface.',
      'Conservative bone resection sparing substantial subchondral bone reserve.',
      'Secure cementation of unicompartmental femoral runner and tibial tray with mobile or fixed polyethylene bearing.',
    ],
    hindiProcedureSteps: [
      'केवल घिसे हुए अंदरूनी (मीडियल) कम्पार्टमेंट तक पहुंचने के लिए छोटा मिनिमल-इनवेसिव चीरा।',
      'एसीएल, पीसीएल और बाहरी कार्टिलेज की अखंडता का सावधानीपूर्वक प्रत्यक्ष निरीक्षण।',
      'सूक्ष्म मिलीमीटर गाइड्स द्वारा केवल घिसे हुए कार्टिलेज की सतह को छीलकर तैयार करना।',
      'ट्रायल यूनिकांडाइलर कम्पोनेंट लगाकर जोड़ की स्वाभाविक लचक और स्थिरता की पुष्टि।',
      'बायो-कम्पैटिबल सीमेंट द्वारा आंशिक इम्प्लांट का मजबूत स्थिरीकरण।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'High tibial osteotomy (HTO) in younger, heavy manual labourers',
        'Total knee replacement if multiple compartments show degenerative narrowing',
        'Unloader knee brace and targeted muscle conditioning',
      ],
      hindiAlternatives: [
      'अनलोडर नी ब्रेस जो अंदरूनी जोड़ से वजन हटाकर बाहरी हिस्से पर डालता है',
      'लक्षित कार्टिलेज प्रिजर्वेशन फिजियोथेरेपी और वजन नियंत्रण',
      'हयालूरोनिक एसिड या पीआरपी इंजेक्शन',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Progression of arthritis in previously uninvolved lateral compartment over 15–20 years',
        '// NEEDS DOCTOR REVIEW: Bearing dislocation in mobile-bearing designs (rare)',
      ],
      hindiRisks: [
      'भविष्य में बाहरी कम्पार्टमेंट का घिसाव (10-15 वर्षों बाद संभावित)',
      'अस्थि फ्रैक्चर या इम्प्लांट ढीलापन (सटीक सर्जिकल संरेखण द्वारा न्यूनतम)',
      'हल्की सूजन जो पहले कुछ हफ्तों में बर्फ की सिकाई से ठीक हो जाती है',
    ],
      note: 'Strict diagnostic criteria and weight-bearing stress X-rays confirm suitability for partial rather than total replacement.',
      hindiNote: 'पार्शियल नी रिप्लेसमेंट केवल तभी उपयुक्त है जब लिगामेंट्स पूरी तरह स्वस्थ हों और केवल एक कम्पार्टमेंट में घिसाव हो।',
    },
    relatedProcedures: ['total-knee-replacement'],
    relatedFaqIds: ['faq-tkr-vs-uka', 'faq-implant-longevity'],
  },
  {
    slug: 'total-hip-replacement',
    title: 'Total Hip Replacement (THR)',
    hindiTitle: 'टोटल हिप रिप्लेसमेंट (पूर्ण कूल्हा प्रत्यारोपण - THR)',
    shortTitle: 'Total Hip Replacement',
    hindiShortTitle: 'कूल्हा प्रत्यारोपण (THR)',
    category: 'Joint Replacement',
    hindiCategory: 'जोड़ प्रत्यारोपण',
    hospitalStay: '3–4 days',
    hindiHospitalStay: '3–5 दिन',
    summary:
      'Replaces arthritic femoral ball and pelvic socket with modern bearings; restores equal leg length and pain-free hip mechanics.',
    hindiSummary: 'क्षतिग्रस्त बॉल व सॉकेट को आधुनिक सिरेमिक या मेटल इम्प्लांट से बदलकर स्वाभाविक लचक और स्थिरता लौटाना।',
    hindiIndication: 'एवैस्कुलर नेक्रोसिस (AVN स्टेज 3/4), गंभीर ऑस्टियोआर्थराइटिस, एंकाइलोजिंग स्पोंडिलाइटिस या पुराना फ्रैक्चर।',
    indication:
      'Advanced avascular necrosis (AVN Stage 3/4), severe primary or secondary osteoarthritis, post-traumatic arthritis, and ankylosing spondylitis with disabling hip stiffness.',
    highlights: [
      'Anatomic leg-length equalisation and femoral offset restoration planned through pre-operative digital templating.',
      'Modern ceramic-on-crosslinked polyethylene or delta ceramic bearings providing exceptional longevity and ultra-low wear.',
      'Dependable relief from deep groin pain, thigh referral, and painful morning limp.',
    ],
    hindiHighlights: [
      'कूल्हे की प्राकृतिक लंबाई और गतिशीलता लौटाने हेतु आधुनिक सिरेमिक-ऑन-पॉलीइथाइलीन या सिरेमिक जोड़ का प्रयोग।',
      'मांसपेशियों को बिना काटे ऊतक-संरक्षण तकनीकों द्वारा सर्जरी, जिससे डिस्लोकेशन का जोखिम न्यूनतम रहता है।',
      'सर्जरी के दिन ही खड़े होने और बिना दर्द बैठने व चलने की सुरक्षित शुरुआत।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Day 1',
        hindiTimeframe: 'दिन 1 (24 घंटे)',
        headline: 'Early Bedside Mobilization',
        hindiHeadline: 'बिना दर्द खड़ा होना व चलना',
        description:
          'Standing and assisted walking with a walker under physical therapy supervision with full weight-bearing on the operated hip.',
        hindiDescription:
          'सर्जरी के 24 घंटे के भीतर वॉकर के सहारे सुरक्षित चलना और कुर्सी पर बैठना शुरू।',
      },
      {
        timeframe: 'Weeks 3–4',
        hindiTimeframe: 'सप्ताह 2–4',
        headline: 'Independent Indoor Walking',
        hindiHeadline: 'सामान्य दैनिक गतिविधियों की शुरुआत',
        description:
          'Progression from walker to cane; normalization of pelvic posture and abductor strengthening drills.',
        hindiDescription:
          'घर के अंदर बिना सहारे चलना, सीढ़ियां चढ़ना और स्वतंत्र रूप से नहाना व तैयार होना।',
      },
      {
        timeframe: 'Weeks 4–6',
        hindiTimeframe: 'सप्ताह 6–12',
        headline: 'Limp-Free Gait & Daily Activities',
        hindiHeadline: 'पूर्ण गतिशीलता एवं स्वतंत्रता',
        description:
          'Discarding walking aids; resumption of pain-free walking, office work, and car driving.',
        hindiDescription:
          'लंबी सैर, ड्राइविंग, यात्रा और सभी नियमित गतिविधियों में बिना दर्द पूर्ण वापसी।',
      },
    ],
    procedureSteps: [
      'Tissue-sparing surgical exposure protecting the gluteal musculature.',
      'Resection of the collapsed or arthritic femoral head.',
      'Precision reaming of the acetabulum followed by press-fit or cemented cup placement.',
      'Femoral canal preparation and insertion of an anatomical stem.',
      'Modular head assembly and concentric reduction with thorough range-of-motion and stability testing.',
    ],
    hindiProcedureSteps: [
      'मांसपेशियों को बिना काटे ऊतक-संरक्षण तकनीक द्वारा कूल्हे के जोड़ तक पहुंचना।',
      'क्षतिग्रस्त फेमोरल हेड को हटाकर एसिटाबुलम सॉकेट को गोलाकार रूप से तैयार करना।',
      'पेल्विस में टाइटेनियम कप और अत्यधिक टिकाऊ सिरेमिक या क्रॉस-लिंक्ड लाइनर का फिटमेंट।',
      'फीमर हड्डी की नली में टाइटेनियम स्टेम और सिरेमिक बॉल हेड को सुरक्षित बैठाना।',
      'जोड़ को स्वाभाविक स्थिति में लाकर दोनों पैरों की बराबर लंबाई और संपूर्ण स्थिरता की पुष्टि।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'Core decompression with bone marrow aspirate concentrate (for early AVN Stage 1/2)',
        'Conservative analgesia, non-impact swimming/cycling, and walking support',
      ],
      hindiAlternatives: [
      'शुरुआती एवीएन (AVN) में कोर डिकंप्रेशन एवं स्टेम सेल/पीआरपी थेरेपी',
      'वजन कम करना, छड़ी का उपयोग और दर्द निवारक दवाएं',
      'गंभीर कार्टिलेज पतन में सर्जरी ही एकमात्र स्थायी दर्दमुक्ति समाधान है',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Post-operative prosthetic dislocation (prevented with modern large-diameter heads and soft-tissue repair)',
        '// NEEDS DOCTOR REVIEW: Periprosthetic fracture during component seating',
        '// NEEDS DOCTOR REVIEW: Minor limb length discrepancy (<5mm) necessary to achieve stable joint tension',
      ],
      hindiRisks: [
      'कूल्हा खिसकने (डिसलोकेशन) का जोखिम (ऊतक-संरक्षण तकनीक व बड़े सिरेमिक हेड से <0.5%)',
      'पैरों की लंबाई में सूक्ष्म अंतर (डिजिटल प्री-ऑपरेटिव टेम्प्लेटिंग से पूरी तरह नियंत्रित)',
      'डीवीटी और संक्रमण (नियमित दवाओं और सख्त एसेप्टिक तकनीक से रोकथाम)',
    ],
      note: 'Total hip replacement is widely regarded among the most successful reconstructive interventions in modern orthopaedic surgery.',
      hindiNote: 'उन्नत सिरेमिक-ऑन-पॉलीइथाइलीन तकनीक से आधुनिक कूल्हा प्रत्यारोपण 25+ वर्षों तक सक्रिय सेवाएं प्रदान करता है।',
    },
    relatedProcedures: ['bipolar-hemiarthroplasty', 'revision-joint-replacement'],
    relatedFaqIds: ['faq-hip-replacement-avn', 'faq-implant-longevity'],
  },
  {
    slug: 'revision-joint-replacement',
    title: 'Complex & Revision Joint Replacement (TKR & THR)',
    hindiTitle: 'रिवीजन जॉइंट रिप्लेसमेंट (पुनर्निर्माण सर्जरी)',
    shortTitle: 'Revision Joint Replacement',
    hindiShortTitle: 'रिवीजन जोड़ सर्जरी',
    category: 'Joint Replacement',
    hindiCategory: 'जोड़ प्रत्यारोपण',
    hospitalStay: '4–6 days',
    hindiHospitalStay: '4–6 दिन',
    summary:
      'Modular revision systems and trabecular metal augments anchor implants into healthy bone to restore stable walking after earlier surgery.',
    hindiSummary: 'पूर्व में हुए प्रत्यारोपण के ढीले पड़ने, घिसने या फ्रैक्चर होने पर जोड़ को पुनः मजबूत व स्थिर बनाना।',
    hindiIndication: 'पुराने प्रत्यारोपण का ढीला होना, जोड़ का बार-बार उतरना, हड्डी का क्षरण या इम्प्लांट के पास फ्रैक्चर।',
    indication:
      'Persistent pain, aseptic loosening, implant wear, periprosthetic fracture, joint instability, or mechanical failure after prior knee or hip replacement.',
    highlights: [
      'Comprehensive pre-operative workup to rule out or identify low-grade periprosthetic joint infection (PJI).',
      'Modular diaphyseal stems and porous metal augments bypassing bone loss to anchor securely into host bone.',
      'Restores joint stability, proper limb alignment, and pain-free ambulatory independence.',
    ],
    hindiHighlights: [
      'संक्रमण की संपूर्ण जांच और मॉड्यूलर स्टेम व ऑगमेंट तकनीक द्वारा अस्थि दोषों की मजबूत बहाली।',
      'पुराने ढीले इम्प्लांट को सुरक्षित निकालकर स्वस्थ हड्डी में नए रीकंस्ट्रक्टिव इम्प्लांट का स्थिरीकरण।',
      'चरणबद्ध फिजियोथेरेपी और विशेष पुनर्वास योजना द्वारा स्थिर और दर्दमुक्त गति की पुनः प्राप्ति।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Week 1–2',
        hindiTimeframe: 'सप्ताह 1–2',
        headline: 'Protected Mobilization',
        hindiHeadline: 'संरक्षित मोबिलाइजेशन',
        description:
          'Structured weight-bearing tailored to structural bone graft and augment fixation; walker-assisted ambulation.',
        hindiDescription:
          'हड्डी के पुनर्निर्माण की सुरक्षा हेतु वॉकर या ब्रेस के सहारे आंशिक वजन डालकर चलना।',
      },
      {
        timeframe: 'Weeks 4–8',
        hindiTimeframe: 'सप्ताह 4–8',
        headline: 'Progressive Loading',
        hindiHeadline: 'प्रगतिशील भार वहन',
        description:
          'Monitored physiotherapy advancing weight-bearing based on interval digital radiographic bone integration.',
        hindiDescription:
          'एक्स-रे पर हड्डी जुड़ने की पुष्टि के बाद वॉकर से छड़ी पर आना और फिजियोथेरेपी बढ़ाना।',
      },
      {
        timeframe: 'Months 3–6',
        hindiTimeframe: 'महीने 3–6',
        headline: 'Functional Independence',
        hindiHeadline: 'दीर्घकालिक स्थिरता बहाली',
        description:
          'Restoration of functional gait and joint stability for daily activities.',
        hindiDescription:
          'जोड़ की शक्ति और चाल में निरंतर सुधार; बिना दर्द सामान्य दिनचर्या में वापसी।',
      },
    ],
    procedureSteps: [
      'Extensive pre-operative diagnostics including joint fluid aspiration, ESR/CRP, and high-definition CT imaging.',
      'Meticulous extraction of failed components while conserving surrounding bone stock.',
      'Reconstruction of bone deficits using trabecular titanium sleeves, cones, or structural augments.',
      'Insertion of constrained or hinged revision knee implants or long modular revision hip stems.',
    ],
    hindiProcedureSteps: [
      'संक्रमण की संभावना को पूरी तरह खारिज करने हेतु पूर्व-सर्जिकल जांच व कल्चर।',
      'पुराने ढीले या घिसे हुए इम्प्लांट को स्वस्थ हड्डी को नुकसान पहुंचाए बिना सावधानीपूर्वक निकालना।',
      'अस्थि दोषों का सटीक आकलन और पोरस मेटल ऑगमेंट द्वारा हड्डी की संरचना को दोबारा बनाना।',
      'स्वस्थ हड्डी के गहरे हिस्से में मॉड्यूलर स्टेम एक्सटेंशन को मजबूती से लंगर डालना।',
      'अंतिम रीकंस्ट्रक्टिव इम्प्लांट का स्थिरीकरण और जोड़ के लिगामेंट संतुलन की जांच।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'Non-surgical supportive bracing and chronic pain management if patient is medically unfit for revision',
      ],
      hindiAlternatives: [
      'यदि इम्प्लांट ढीला हो चुका है तो रूढ़िवादी उपचार केवल समय खींच सकता है',
      'हड्डी का क्षरण रोकने और गंभीर फ्रैक्चर से बचने के लिए समय पर रिवीजन आवश्यक है',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Greater blood loss and longer surgical duration compared to primary procedures',
        '// NEEDS DOCTOR REVIEW: Prolonged protected weight-bearing requirement',
      ],
      hindiRisks: [
      'हड्डी के फ्रैक्चर या दोष का जोखिम (विशेष ऑगमेंट और स्टेम द्वारा प्रबंधित)',
      'पुनः संक्रमण की संभावना (सख्त एंटीबायोटिक प्रोटोकॉल द्वारा सुरक्षा)',
    ],
      note: 'Revision surgery demands advanced surgical instrumentation, specialised revision inventory, and extensive reconstructive experience.',
      hindiNote: 'रिवीजन सर्जरी एक जटिल प्रक्रिया है जिसमें विशेषज्ञ सर्जन का अनुभव और आधुनिक मॉड्यूलर इम्प्लांट अनिवार्य हैं।',
    },
    relatedProcedures: ['total-knee-replacement', 'total-hip-replacement'],
    relatedFaqIds: ['faq-second-opinion', 'faq-implant-longevity'],
  },
  {
    slug: 'bipolar-hemiarthroplasty',
    title: 'Bipolar Hemiarthroplasty for Hip Fractures',
    hindiTitle: 'बाईपोलर हेमीआर्थ्रोप्लास्टी (हिप फ्रैक्चर सर्जरी)',
    shortTitle: 'Bipolar Hip Hemiarthroplasty',
    hindiShortTitle: 'बाईपोलर हिप सर्जरी',
    category: 'Joint Replacement',
    hindiCategory: 'जोड़ प्रत्यारोपण',
    hospitalStay: '3–4 days',
    hindiHospitalStay: '3–4 दिन',
    summary:
      'Replaces fractured femoral head with dual-mobility prosthesis so elderly patients can walk the next day, avoiding prolonged bed rest.',
    hindiSummary: 'उम्रदराज मरीजों में फीमर गर्दन के फ्रैक्चर के बाद बॉल को बदलकर अगले ही दिन खड़ा करने वाली त्वरित तकनीक।',
    hindiIndication: 'बुजुर्ग मरीजों में फीमर नेक फ्रैक्चर, ताकि वे लंबे समय तक बिस्तर पर न रहें और जटिलताओं से बच सकें।',
    indication:
      'Displaced intracapsular femoral neck fractures (subcapital / transcervical) in elderly patients requiring immediate mobilization.',
    highlights: [
      'Avoids the life-threatening complications of prolonged recumbency: bedsores, hypostatic pneumonia, and thromboembolism.',
      'Dual-mobility inner and outer bearing articulation substantially lowers post-operative dislocation risk.',
      'Rapid return to upright, pain-free walking within 24–48 hours of surgical fixation.',
    ],
    hindiHighlights: [
      'बुजुर्ग मरीजों में फीमर गर्दन के फ्रैक्चर के बाद लंबे समय तक बिस्तर पर रहने के जोखिम से बचाव।',
      'डुअल-आर्टिकुलेटिंग बाईपोलर हेड द्वारा एसिटाबुलम कप के घिसाव को कम करते हुए त्वरित स्थिरता।',
      'सर्जरी के 24 से 48 घंटे के भीतर वॉकर के सहारे चलना शुरू, जिससे जटिलताओं से बचाव होता है।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Day 1–2 (24–48 Hours)',
        hindiTimeframe: 'दिन 1–2',
        headline: 'Immediate Upright Mobilization',
        hindiHeadline: 'बिस्तर से उठना व वॉकर से चलना',
        description:
          'Patient assisted out of bed into a chair and begins full weight-bearing walker ambulation.',
        hindiDescription:
          'लंबे समय बिस्तर पर रहने के जोखिम (निमोनिया, बेडसोर) से बचने हेतु तुरंत चलना शुरू।',
      },
      {
        timeframe: 'Weeks 2–4',
        hindiTimeframe: 'सप्ताह 2–4',
        headline: 'Home Recovery & Wound Healing',
        hindiHeadline: 'घर में सुरक्षित आवागमन',
        description:
          'Stitch/staple removal at day 12–14; progressive indoor walking with frame.',
        hindiDescription:
          'वॉकर के सहारे कमरे से बाहर निकलना, शौचालय का स्वतंत्र उपयोग और पैरों की कसरत।',
      },
      {
        timeframe: 'Weeks 6–8',
        hindiTimeframe: 'सप्ताह 6–8',
        headline: 'Restored Household Independence',
        hindiHeadline: 'छड़ी के सहारे सामान्य चाल',
        description:
          'Return to pre-fracture mobility level with walking stick or independent gait.',
        hindiDescription:
          'स्वतंत्रता में सुधार, हड्डी का जुड़ाव और दैनिक कार्यों में सामान्य वापसी।',
      },
    ],
    procedureSteps: [
      'Lateral or posterior hip exposure under regional spinal/epidural anesthesia.',
      'Extraction of fractured, avascular femoral head fragment.',
      'Calibrated sizing of the native acetabular cartilage diameter.',
      'Femoral stem insertion with cement or press-fit fixation followed by bipolar head assembly.',
      'Reduction and capsular closure with stable range-of-motion verification.',
    ],
    hindiProcedureSteps: [
      'बुजुर्ग मरीजों के लिए सुरक्षित न्यूनतम एक्सपोजर द्वारा टूटे हुए कूल्हे के जोड़ तक पहुंचना।',
      'फ्रैक्चर हुए फेमोरल हेड और गर्दन के टुकड़ों को सावधानीपूर्वक हटाना।',
      'फीमर की हड्डी को तैयार कर सीमेंटेड या अनसीमेंटेड स्टेम को सही अलाइनमेंट में स्थापित करना।',
      'डुअल-आर्टिकुलेटिंग बाईपोलर हेड को जोड़कर प्राकृतिक एसिटाबुलम कप में सुरक्षित बैठाना।',
      'जोड़ की गतिशीलता और डिस्लोकेशन के प्रति स्थिरता की संपूर्ण जांच।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'Cannulated screw fixation (solely in young patients or undisplaced stress fractures)',
        'Total hip replacement in active elderly patients with pre-existing hip osteoarthritis',
      ],
      hindiAlternatives: [
      'सक्रिय बुजुर्गों में टोटल हिप रिप्लेसमेंट (THR) अधिक उपयुक्त विकल्प हो सकता है',
      'बिना सर्जरी बिस्तर पर रखना बुजुर्ग मरीजों के लिए जानलेवा जटिलताएं पैदा कर सकता है',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Acetabular cartilage erosion (cotyloiditis) over long-term follow-up',
        '// NEEDS DOCTOR REVIEW: Medical comorbidities management during acute trauma episode',
      ],
      hindiRisks: [
      'कार्डियो-पल्मोनरी जटिलताएं (प्री-ऑपरेटिव मेडिकल टीम द्वारा सघन निगरानी)',
      'डीवीटी और खून का थक्का जमना (तत्काल मोबिलाइजेशन और दवाओं द्वारा रोकथाम)',
    ],
      note: 'Emergency surgical stabilization within 24–48 hours of hip fracture is critical for elderly survival and functional recovery.',
      hindiNote: 'बुजुर्गों में कूल्हे के फ्रैक्चर के बाद 24 से 48 घंटे के भीतर सर्जरी मरीज के जीवन को बचाने और बिस्तर पर पड़ने से रोकने हेतु आवश्यक है।',
    },
    relatedProcedures: ['total-hip-replacement', 'interlocking-nailing'],
    relatedFaqIds: ['faq-elderly-fractures', 'faq-second-opinion'],
  },
  {
    slug: 'acl-pcl-reconstruction',
    title: 'Knee Arthroscopy & ACL / PCL Reconstruction',
    hindiTitle: 'आर्थ्रोस्कोपिक एसीएल व पीसीएल लिगामेंट पुनर्निर्माण',
    shortTitle: 'ACL / PCL Reconstruction',
    hindiShortTitle: 'एसीएल लिगामेंट सर्जरी',
    category: 'Arthroscopy & Sports',
    hindiCategory: 'आर्थ्रोस्कोपी व स्पोर्ट्स',
    hospitalStay: 'Daycare to 24 hours',
    hindiHospitalStay: '1–2 दिन',
    summary:
      'Rebuilds the stabilizing knee ligament via pencil-sized incisions using high-definition arthroscope and autologous tendon graft.',
    hindiSummary: 'दूरबीन विधि (की-होल) से मरीज के अपने टेंडन ग्राफ्ट द्वारा टूटे लिगामेंट का सटीक पुनर्निर्माण।',
    hindiIndication: 'खेलकूद या दुर्घटना में एसीएल लिगामेंट का पूरी तरह टूटना, जिससे चलने व मुड़ने में घुटना धोखा देता हो।',
    indication:
      'Complete anterior or posterior cruciate ligament tears with knee instability, pivoting giving-way episodes, sports injuries, and multiligament laxity.',
    highlights: [
      'Anatomic femoral and tibial tunnel placement restoring natural rotational stability and joint kinematics.',
      'Keyhole arthroscopic incisions sparing major muscle groups, minimizing surgical scarring and swelling.',
      'Structured criteria-based sports rehabilitation program designed to safely guide return to sports and prevent graft re-tear.',
    ],
    hindiHighlights: [
      'मरीज के अपने हेमस्ट्रिंग या बोन-पटेला टेंडन ग्राफ्ट का उपयोग कर न्यूनतम चीरे वाली आर्थ्रोस्कोपिक सर्जरी।',
      'सटीक एनाटोमिकल टनल प्लेसमेंट द्वारा घुटने की स्वाभाविक रोटेशनल स्थिरता की पूर्ण पुनर्स्थापना।',
      'खिलाड़ियों और सक्रिय युवाओं के लिए खेल में सुरक्षित वापसी हेतु चरणबद्ध पुनर्वास प्रोटोकॉल।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Day 1',
        hindiTimeframe: 'सप्ताह 1–2',
        headline: 'Immediate Quad Firing & Braced Ambulation',
        hindiHeadline: 'ब्रेस व बैसाखी सहारा',
        description:
          'Early active straight-leg raises, cryotherapy, and full weight-bearing walking in a hinged knee brace.',
        hindiDescription:
          'घुटने के ब्रेस में सीधा रखकर पैर पर वजन रखना और क्वाड्रिसेप्स मांसपेशी को सक्रिय करना।',
      },
      {
        timeframe: 'Weeks 4–6',
        hindiTimeframe: 'सप्ताह 3–6',
        headline: 'Full Range of Motion & Normal Gait',
        hindiHeadline: '90–120 डिग्री घुटना मोड़ना',
        description:
          'Weaning off knee brace; achieving 0–120 degree knee flexion; stationary cycling initiated.',
        hindiDescription:
          'ब्रेस खोलकर घुटना मोड़ना, स्थिर साइकिल चलाना और सामान्य चाल की बहाली।',
      },
      {
        timeframe: 'Months 6–9',
        hindiTimeframe: 'महीने 4–9',
        headline: 'Agility Drills & Return to Sports',
        hindiHeadline: 'जॉगिंग से खेल में वापसी',
        description:
          'Running, cutting, and sport-specific plyometric training following functional hop tests and limb symmetry index evaluation.',
        hindiDescription:
          'सख्त न्यूरोमस्कुलर और एजिलिटी ट्रेनिंग के बाद खेल के मैदान पर पूर्ण वापसी।',
      },
    ],
    procedureSteps: [
      'Diagnostic arthroscopy through 4mm portal incisions assessing meniscus and cartilage integrity.',
      'Harvest of autologous hamstring (semitendinosus/gracilis) or bone-patellar tendon-bone autograft.',
      'Preparation and pre-tensioning of the graft on a dedicated surgical preparation board.',
      'Precision drilling of anatomical femoral and tibial tunnels under direct arthroscopic visual control.',
      'Passage of the graft and secure anatomical fixation using cortical suspensory buttons and bio-absorbable interference screws.',
    ],
    hindiProcedureSteps: [
      'आर्थ्रोस्कोपिक कैमरे द्वारा जोड़ के अंदर मेनिस्कस, कार्टिलेज और टूटे लिगामेंट की संपूर्ण जांच।',
      'मरीज के अपने हैमस्ट्रिंग या पटेला टेंडन से मजबूत ऑटोग्राफ्ट तैयार करना।',
      'फीमर और टिबिया में प्राकृतिक लिगामेंट के मूल स्थान पर एनाटोमिकल बोन टनल बनाना।',
      'ग्राफ्ट को टनल के आर-पार खींचकर टाइटेनियम एंडोबटन या बायो-कंपोजिट स्क्रू से सुरक्षित कसना।',
      'घुटने की पूर्ण गतिशीलता और रोटेशनल स्थिरता की लाइव कैमरे पर पुष्टि।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'Conservative physical therapy and functional brace in non-athletic, low-demand patients without pivoting instability',
      ],
      hindiAlternatives: [
      'कम सक्रिय मरीजों में गहन फिजियोथेरेपी और फंक्शनल नी ब्रेस',
      'खिलाड़ियों और सक्रिय वयस्कों में घुटने के संतुलन और भविष्य के कार्टिलेज बचाव हेतु सर्जरी अनिवार्य',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Graft re-tear risk if return to pivoting sports occurs prior to biological graft ligamentization',
        '// NEEDS DOCTOR REVIEW: Mild donor site hamstring weakness or kneeling sensitivity',
      ],
      hindiRisks: [
      'ग्राफ्ट का दोबारा फटना (प्रोटोकॉल के अनुसार पुनर्वास पूरा करने पर <4% जोखिम)',
      'घुटना पूरी तरह सीधा होने में देरी (प्रारंभिक एक्सटेंशन एक्सरसाइज से रोकथाम)',
    ],
      note: 'Reconstruction prevents secondary recurrent joint subluxations that lead to irreversible meniscal tears and early knee osteoarthritis.',
      hindiNote: 'एसीएल सर्जरी के बाद 50% सफलता सही सर्जरी और 50% अनुशासित फिजियोथेरेपी पर निर्भर करती है।',
    },
    relatedProcedures: ['meniscus-repair', 'total-knee-replacement'],
    relatedFaqIds: ['faq-acl-return-to-sports', 'faq-second-opinion'],
  },
  {
    slug: 'meniscus-repair',
    title: 'Arthroscopic Meniscus Repair & Preservation',
    hindiTitle: 'आर्थ्रोस्कोपिक मेनिस्कस रिपेयर व कंजर्वेशन',
    shortTitle: 'Meniscus Repair & Preservation',
    hindiShortTitle: 'मेनिस्कस रिपेयर',
    category: 'Arthroscopy & Sports',
    hindiCategory: 'आर्थ्रोस्कोपी व स्पोर्ट्स',
    hospitalStay: 'Daycare (same-day discharge)',
    hindiHospitalStay: '1 दिन (डे-केयर)',
    summary:
      'Stitches repairable torn cartilage with keyhole suture anchors instead of removing it, protecting the knee from future wear.',
    hindiSummary: 'घुटने के शॉक-एब्जॉर्बर कार्टिलेज (मेनिस्कस) को जोड़ में टांके लगाकर बचाना, ताकि भविष्य में आर्थराइटिस न हो।',
    hindiIndication: 'मेनिस्कस टियर जिसके कारण घुटना मुड़ने में अटकता हो, तेज चुभन हो और जोड़ में सूजन बनी रहे।',
    indication:
      'Bucket-handle, longitudinal, or radial meniscus tears with persistent clicking, catching, joint-line tenderness, or acute joint locking.',
    highlights: [
      'Philosophy of preservation over excision: repairing vascular red-red and red-white zone tears to maintain shock absorption.',
      'Preserves chondral contact area, significantly reducing long-term risk of early secondary knee osteoarthritis.',
      'Outpatient keyhole procedure performed with advanced all-inside and inside-out micro-suture anchors.',
    ],
    hindiHighlights: [
      'घुटने के कार्टिलेज को भविष्य के गठिया से बचाने के लिए "प्रिजर्व द मेनिस्कस" सिद्धांत को प्राथमिकता।',
      'आधुनिक ऑल-इनसाइड और इनसाइड-आउट सूचर तकनीकों द्वारा फटे हुए मेनिस्कस की मजबूत सिलाई।',
      'न्यूनतम आर्थ्रोस्कोपिक छिद्रों द्वारा की जाने वाली प्रक्रिया, जिससे ऊतकों को कम से कम क्षति पहुंचती है।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Weeks 1–4',
        hindiTimeframe: 'सप्ताह 1–4',
        headline: 'Protected Weight-Bearing',
        hindiHeadline: 'संरक्षित ब्रेस और आंशिक वजन',
        description:
          'Crutch-assisted walking in a locked knee brace to protect the healing suture line; non-weight-bearing knee flexion to 90 degrees.',
        hindiDescription:
          'सिलाई को सुरक्षित रखने के लिए ब्रेस में घुटना 90 डिग्री से कम मोड़ना और बैसाखी का उपयोग।',
      },
      {
        timeframe: 'Weeks 4–6',
        hindiTimeframe: 'सप्ताह 4–6',
        headline: 'Brace Weaning & Progressive Loading',
        hindiHeadline: 'पूरा वजन रखना व ब्रेस हटाना',
        description:
          'Advancement to full weight-bearing, active quadriceps and hamstring closed-chain conditioning.',
        hindiDescription:
          'सामान्य चाल पर लौटना और मांसपेशियों की लचक व शक्ति के व्यायाम आरंभ।',
      },
      {
        timeframe: 'Weeks 6–8',
        hindiTimeframe: 'सप्ताह 8–12',
        headline: 'Functional Loading & Unrestricted Bending',
        hindiHeadline: 'सामान्य सक्रिय दिनचर्या',
        description:
          'Full functional recovery, restoration of deep knee bending, and gradual return to sports by month 3–4.',
        hindiDescription:
          'बिना दर्द सामान्य चलना, सीढ़ियां चढ़ना और हल्की खेलकूद गतिविधियों में वापसी।',
      },
    ],
    procedureSteps: [
      'Diagnostic keyhole inspection evaluating tear vascularity, stability, and tissue quality with an arthroscopic probe.',
      'Preparation of tear margins using micro-rasps to stimulate fresh biological bleeding and healing response.',
      'Deployment of specialized all-inside meniscus repair suture devices across the tear.',
      'Tensioning and locking of low-profile bio-inert PEEK or high-strength suture knots.',
      'Final stability check confirming firm anatomical coaptation.',
    ],
    hindiProcedureSteps: [
      'आर्थ्रोस्कोपी द्वारा मेनिस्कस टियर के प्रकार, आकार और रक्त आपूर्ति (रेड जोन) का सूक्ष्म परीक्षण।',
      'कार्टिलेज को जोड़ने के लिए टियर के किनारों को रिफ्रेश कर जैविक हीलिंग को बढ़ावा देना।',
      'उन्नत ऑल-इनसाइड या इनसाइड-आउट सूचर डिवाइस द्वारा फटे हुए हिस्से की मजबूत सिलाई।',
      'जोड़ को मोड़कर और खींचकर टांकों के तनाव और स्थिरता की सीधी जांच।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'Partial meniscectomy (reserved solely for degenerative, avascular white-white zone tears that cannot heal)',
        'Conservative unloading and targeted physiotherapy for stable partial-thickness tears',
      ],
      hindiAlternatives: [
      'डीजेनेरेटिव टियर में फिजियोथेरेपी और सूजन-रोधी दवाएं',
      'यदि टियर अनरिपेयरेबल हो तो केवल खराब हिस्से की पार्सल मेनिसेक्टोमी',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Non-union of repair requiring secondary debridement (5–10% depending on tear biology)',
        '// NEEDS DOCTOR REVIEW: Temporary joint stiffness during protected brace phase',
      ],
      hindiRisks: [
      'टांके न जुड़ना (सख्त पोस्ट-ऑपरेटिव ब्रेसिंग और हीलिंग टाइम देने से बचाव)',
      'अस्थायी जोड़ अकड़न (चरणबद्ध फिजियोथेरेपी से सामान्य)',
    ],
      note: 'Every millimetre of healthy meniscus saved protects the joint cartilage from accelerated degenerative arthritis.',
      hindiNote: 'मेनिस्कस घुटने का शॉक-एब्जॉर्बर है। इसे काटने के बजाय सिलकर बचाना भविष्य के गठिया से रक्षा करता है।',
    },
    relatedProcedures: ['acl-pcl-reconstruction', 'total-knee-replacement'],
    relatedFaqIds: ['faq-acl-return-to-sports', 'faq-second-opinion'],
  },
  {
    slug: 'shoulder-arthroscopy',
    title: 'Shoulder Arthroscopy: Rotator Cuff & Bankart Repair',
    hindiTitle: 'कंधा आर्थ्रोस्कोपी एवं रोटेटर कफ रिपेयर',
    shortTitle: 'Shoulder Arthroscopy',
    hindiShortTitle: 'कंधा दूरबीन सर्जरी',
    category: 'Arthroscopy & Sports',
    hindiCategory: 'आर्थ्रोस्कोपी व स्पोर्ट्स',
    hospitalStay: 'Daycare to 24 hours',
    hindiHospitalStay: '1–2 दिन',
    summary:
      'Reattaches torn tendons and labrum to the bone bed through keyhole ports, restoring overhead strength and stopping recurrent dislocations.',
    hindiSummary: 'दूरबीन द्वारा फटे रोटेटर कफ टेंडन को मजबूत सूचर एंकर से हड्डी पर पुनः स्थापित करना।',
    hindiIndication: 'रोटेटर कफ टेंडन टियर, कंधे का बार-बार उतरना (बैंकॉर्ट रिपेयर), या कंधे की नसों का अत्यधिक टकराव।',
    indication:
      'Full-thickness rotator cuff tendon tears, recurrent shoulder dislocations (Bankart lesion / anterior labral tears), and chronic impingement syndrome.',
    highlights: [
      'Keyhole portals avoid dividing the overlying deltoid muscle, preserving shoulder power and accelerating rehab.',
      'Double-row suture bridge constructs provide wide anatomical compression of the tendon footprint back onto bone.',
      'Restores active overhead lifting power, stops nighttime sleep disruption, and eliminates the fear of joint dislocation.',
    ],
    hindiHighlights: [
      'कीहोल दूरबीन विधि द्वारा रोटेटर कफ के फटे टेंडन और लैब्रल टियर की सूक्ष्म एवं मजबूत री-एंकरिंग।',
      'कंधे की पुरानी अकड़न (फ्रोजन शोल्डर) और बार-बार कंधा उतरने (बैंकर्ट लीजन) का प्रभावी समाधान।',
      'ओपन सर्जरी की तुलना में नगण्य निशान, कम दर्द और फिजियोथेरेपी के साथ कंधे की गति में सुधार।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Weeks 1–4',
        hindiTimeframe: 'सप्ताह 1–4',
        headline: 'Arm Sling Protection & Passive Motion',
        hindiHeadline: 'शोल्डर स्लिंग इमोबिलाइजेशन',
        description:
          'Arm supported in a shoulder immobilizer/abduction sling; gentle passive pendulum movements and elbow/wrist mobility.',
        hindiDescription:
          'टेंडन को हड्डी से जुड़ने का समय देने हेतु स्लिंग सहारा; केवल कलाई व उंगलियां हिलाना।',
      },
      {
        timeframe: 'Weeks 5–8',
        hindiTimeframe: 'सप्ताह 5–8',
        headline: 'Active-Assisted Range of Motion',
        hindiHeadline: 'पैसिव से एक्टिव गति बहाली',
        description:
          'Weaning off sling; guided active-assisted stretching exercises restoring forward elevation and external rotation.',
        hindiDescription:
          'फिजियोथेरेपिस्ट की सहायता से कंधे को ऊपर उठाना और पेंडुलम एक्सरसाइज आरंभ।',
      },
      {
        timeframe: 'Weeks 9–12+',
        hindiTimeframe: 'सप्ताह 10–16',
        headline: 'Rotator Cuff & Scapular Strengthening',
        hindiHeadline: 'मांसपेशियों की मजबूती व पूर्ण गति',
        description:
          'Theraband resistance training; progression to full overhead function, swimming, and recreational sports.',
        hindiDescription:
          'प्रतिरोधक बैंड से रोटेटर कफ स्ट्रेंथनिंग और सिर के ऊपर हाथ ले जाने की पूरी स्वतंत्रता।',
      },
    ],
    procedureSteps: [
      'Patient positioning in beach-chair or lateral decubitus setup with sterile traction.',
      'Glenohumeral joint arthroscopy assessing cartilage, biceps anchor, and labrum.',
      'Subacromial bursectomy and acromioplasty decompressing the rotator cuff space.',
      'Footprint debridement down to bleeding cortical bone to optimize biological tendon-to-bone healing.',
      'Insertion of biocomposite suture anchors and mattress suture passage fixing the cuff securely to bone.',
    ],
    hindiProcedureSteps: [
      'कंधे के जोड़ में कीहोल छिद्रों से कैमरा डालकर रोटेटर कफ, लैब्रम और बाइसेप्स टेंडन की जांच।',
      'सूजन वाले बर्सा और हड्डी के उभार (एक्रोमियन स्पर) को हटाकर टेंडन के लिए स्थान बनाना।',
      'ह्यूमरस हड्डी की सतह को तैयार कर बायो-कम्पोजिट सूचर एंकर स्थापित करना।',
      'मजबूत हाई-स्ट्रेंथ टांकों द्वारा फटे हुए रोटेटर कफ टेंडन को हड्डी पर कसकर दोबारा जोड़ना।',
      'हाथ को घुमाकर जोड़ की गति और मरम्मत की मजबूती की पुष्टि।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'Subacromial corticosteroid injection or PRP therapy for partial tears / tendinopathy',
        'Physical therapy focused on scapular stabilization and rotator cuff strengthening',
        'Reverse shoulder arthroplasty for irreparable cuff tear arthropathy in older patients',
      ],
      hindiAlternatives: [
      'आंशिक टियर में फिजियोथेरेपी, एक्टिविटी मॉडिफिकेशन और सबएक्रोमियल इंजेक्शन',
      'पूरा टियर होने पर बिना सर्जरी टेंडन पीछे सिकुड़ जाता है, जिससे बाद में रिपेयर कठिन हो जाता है',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Post-operative shoulder stiffness (adhesive capsulitis) managed with progressive stretching',
        '// NEEDS DOCTOR REVIEW: Re-tear risk in massive chronic retracted tears with fatty muscle degeneration',
      ],
      hindiRisks: [
      'कंधे की शुरुआती जकड़न (नियमित निर्देशित फिजियो से पूरी तरह ठीक हो जाती है)',
      'टेंडन का दोबारा फटना (प्रारंभिक 6 सप्ताह भारी वजन न उठाने से सुरक्षित)',
    ],
      note: 'Early repair of symptomatic full-thickness cuff tears prevents tendon retraction and irreversible fatty muscle degeneration.',
      hindiNote: 'कंधे की कीहोल दूरबीन सर्जरी में बड़ा चीरा नहीं लगता, जिससे दर्द कम होता है और मरीज जल्दी काम पर लौटता है।',
    },
    relatedProcedures: ['acl-pcl-reconstruction'],
    relatedFaqIds: ['faq-shoulder-cuff-pain', 'faq-second-opinion'],
  },
  {
    slug: 'orif-locking-plates',
    title: 'Intra-Articular Fracture Fixation (ORIF Locking Plates)',
    hindiTitle: 'जोड़ों के जटिल फ्रैक्चर का स्थिरीकरण (ओआरआईएफ लॉकिंग प्लेट्स)',
    shortTitle: 'ORIF Locking Plate Fixation',
    hindiShortTitle: 'ओआरआईएफ फ्रैक्चर फिक्सेशन',
    category: 'Trauma & Fractures',
    hindiCategory: 'ट्रॉमा एवं फ्रैक्चर सर्जरी',
    hospitalStay: '2–4 days',
    hindiHospitalStay: '2–4 दिन',
    summary:
      'Aligns broken joint surfaces under direct vision and secures them with anatomical titanium locking plates to prevent post-traumatic arthritis.',
    hindiSummary: 'जोड़ की टूटी सतह को प्रत्यक्ष नियंत्रण में सही स्थान पर बैठाकर एनाटोमिकल टाइटेनियम लॉकिंग प्लेट से स्थिर करना, जिससे भविष्य में आर्थराइटिस से बचाव हो सके।',
    indication:
      'Displaced intra-articular fractures involving the joint surface (tibial plateau, distal radius, ankle pilon/bimalleolar, distal femur, and proximal humerus).',
    hindiIndication: 'जोड़ों की सतह में विस्थापित फ्रैक्चर (जैसे टिबियल प्लेटू, कलाई/डिस्टल रेडियस, टखने का फ्रैक्चर, फीमर व कंधे का फ्रैक्चर)।',
    highlights: [
      'Direct millimetre-exact anatomical reduction of the articular cartilage surface under direct optical or fluoroscopic control.',
      'Fixed-angle locking plate technology provides rigid internal stability even in osteoporotic or comminuted bone.',
      'Eliminates the need for cumbersome external plaster casts, allowing early joint motion to prevent lifelong stiffness.',
    ],
    hindiHighlights: [
      'फ्लोरोस्कोपी (सी-आर्म) नियंत्रण में जोड़ की सतह को मिलीमीटर की शुद्धता से बिठाकर सुरक्षित करना।',
      'कमजोर या ऑस्टियोपोरोटिक हड्डियों में भी एनाटोमिकल टाइटेनियम लॉकिंग प्लेट्स द्वारा मजबूत आंतरिक स्थिरीकरण।',
      'फ्रैक्चर के बाद प्रारंभिक सक्रिय जोड़ गतिशीलता की अनुमति, जिससे जोड़ में अकड़न नहीं आती।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Days 2–5',
        hindiTimeframe: 'सप्ताह 1–3',
        headline: 'Early Joint Motion',
        hindiHeadline: 'घाव की सुरक्षा व सक्रिय जोड़ गति',
        description:
          'Post-operative soft dressing; immediate gentle active-assisted range-of-motion exercises of adjacent joints.',
        hindiDescription:
          'जोड़ को अकड़ने से बचाने के लिए बिना वजन डाले कोमल सक्रिय गति आरंभ।',
      },
      {
        timeframe: 'Weeks 6–8',
        hindiTimeframe: 'सप्ताह 6–8',
        headline: 'Progressive Partial Weight-Bearing',
        hindiHeadline: 'हड्डी जुड़ाव व आंशिक भार वहन',
        description:
          'Follow-up digital radiographs checking callus formation and joint alignment; transition from crutches to partial loading.',
        hindiDescription:
          'एक्स-रे पर कैलस (नई हड्डी) दिखने पर बैसाखी के सहारे आंशिक वजन डालना।',
      },
      {
        timeframe: 'Weeks 10–12+',
        hindiTimeframe: 'सप्ताह 10–14',
        headline: 'Full Weight-Bearing & Union',
        hindiHeadline: 'पूर्ण भार वहन एवं रिकवरी',
        description:
          'Radiographic osseous union verified; unassisted walking, resistance rehabilitation, and return to vocational activities.',
        hindiDescription:
          'हड्डी के मजबूत जुड़ाव के बाद स्वतंत्र चाल और सामान्य दैनिक कार्यों में पूर्ण वापसी।',
      },
    ],
    procedureSteps: [
      'Detailed pre-operative 3D CT scan reconstruction to map articular fracture fragments.',
      'Careful surgical exposure respecting soft tissue envelope and periosteal vascularity.',
      'Anatomical reduction of articular fragments using subchondral bone graft or synthetic bone substitutes where depression exists.',
      'Temporary fixation with Kirschner wires followed by definitive fixation with low-profile pre-contoured locking plates.',
      'Final intra-operative fluoroscopic confirmation of screw lengths and joint congruity.',
    ],
    hindiProcedureSteps: [
      'एक्स-रे और सी-आर्म फ्लोरोस्कोपी द्वारा टूटी हड्डी और जोड़ की सतह का त्रिआयामी विश्लेषण।',
      'न्यूनतम ऊतक क्षति वाली सर्जिकल तकनीक से फ्रैक्चर वाले जोड़ तक सीधी पहुंच।',
      'जोड़ के टूटे टुकड़ों को मिलीमीटर की शुद्धता से उनके प्राकृतिक स्थान पर बैठाना (रिडक्शन)।',
      'एनाटोमिकल प्री-कंटूअर्ड टाइटेनियम लॉकिंग प्लेट और लॉकिंग स्क्रू द्वारा आंतरिक स्थिरीकरण।',
      'सी-आर्म मशीन पर लाइव एक्स-रे द्वारा जोड़ की पूर्ण चिकनाई और स्क्रू की सही लंबाई की पुष्टि।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'Closed reduction and cast immobilization (only for truly undisplaced, stable fractures)',
        'External fixation (temporary damage-control bridging in severe soft-tissue injury)',
      ],
      hindiAlternatives: [
      'अविस्थापित फ्रैक्चर में प्लास्टर कास्ट',
      'विस्थापित जोड़ फ्रैक्चर में बिना सर्जरी इलाज करने से स्थायी जोड़ विकृति और जल्दी गठिया होता है',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Delayed union or non-union in severely comminuted fractures',
        '// NEEDS DOCTOR REVIEW: Post-traumatic arthritis if articular cartilage sustained severe crushing injury at impact',
      ],
      hindiRisks: [
      'हड्डी जुड़ने में देरी (डायबिटीज व धूम्रपान से बचाव द्वारा कम)',
      'इम्प्लांट में जलन (हड्डी पूरी तरह जुड़ने के 1-2 साल बाद प्लेट निकाली जा सकती है)',
    ],
      note: 'Anatomical reduction of the joint surface within 1–2 mm is the paramount factor preventing premature post-traumatic arthritis.',
      hindiNote: 'जोड़ों के फ्रैक्चर में सबसे महत्वपूर्ण बात यह है कि जोड़ की सतह शीशे की तरह चिकनी और सीधी जोड़ी जाए।',
    },
    relatedProcedures: ['interlocking-nailing', 'bipolar-hemiarthroplasty'],
    relatedFaqIds: ['faq-fracture-healing', 'faq-elderly-fractures'],
  },
  {
    slug: 'interlocking-nailing',
    title: 'Closed Interlocking Nailing for Long Bone Fractures',
    hindiTitle: 'क्लोज्ड इंटरलॉकिंग नेलिंग (लंबी हड्डियों का फ्रैक्चर)',
    shortTitle: 'Interlocking Intramedullary Nailing',
    hindiShortTitle: 'इंटरलॉकिंग नेल सर्जरी',
    category: 'Trauma & Fractures',
    hindiCategory: 'ट्रॉमा व फ्रैक्चर',
    hospitalStay: '2–3 days',
    hindiHospitalStay: '2–3 दिन',
    summary:
      'Titanium rod inserted down the bone canal under real-time X-ray guidance without cutting open the fracture site, preserving natural blood supply.',
    hindiSummary: 'जांघ व पिंडली की लंबी हड्डियों के फ्रैक्चर में बिना बड़ा चीरा लगाए हड्डी के केंद्र में रॉड (नेल) डालना।',
    hindiIndication: 'फीमर (जांघ) व टिबिया (पिंडली) की शाफ्ट का फ्रैक्चर, जिससे मरीज बिना प्लास्टर शीघ्र वजन दे सके।',
    indication:
      'Displaced shaft fractures of the femur (thigh bone), tibia (shin bone), or humerus (arm bone) resulting from road accidents, falls, or sports trauma.',
    highlights: [
      'Biological fixation: does not strip the periosteal blood supply, resulting in faster natural bone callus formation.',
      'Load-sharing internal splint permits early partial and full weight-bearing with walker support.',
      'Small entry portal incisions reduce post-operative surgical site infection risks and blood loss.',
    ],
    hindiHighlights: [
      'जांघ (फीमर) और पिंडली (टिबिया) की लंबी हड्डियों के फ्रैक्चर के लिए क्लोज्ड इंट्रामेडुलरी नेलिंग।',
      'फ्रैक्चर वाले स्थान को बिना खोले दूर से रॉड डालकर हड्डी की प्राकृतिक रक्त आपूर्ति को सुरक्षित रखना।',
      'मजबूत आंतरिक लोड-शेयरिंग सपोर्ट, जिससे मरीज शीघ्र वजन डालकर चलने में सक्षम होता है।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Days 2–3 (48–72 Hours)',
        hindiTimeframe: 'दिन 2–4',
        headline: 'Early Standing & Protected Ambulation',
        hindiHeadline: 'प्रारंभिक वजन वहन',
        description:
          'Immediate bedside mobilization; partial weight-bearing with a walker initiated under physiotherapist supervision.',
        hindiDescription:
          'इंटरलॉकिंग रॉड अत्यधिक मजबूत होती है, जिससे मरीज बैसाखी के सहारे तुरंत पैर रख सकता है।',
      },
      {
        timeframe: 'Weeks 4–6',
        hindiTimeframe: 'सप्ताह 4–6',
        headline: 'Callus Formation & Gait Advancement',
        hindiHeadline: 'हड्डी का मजबूत जैविक जुड़ाव',
        description:
          'Follow-up digital X-rays showing bridging bone; advancement to single crutch or unassisted walking.',
        hindiDescription:
          'मज्जा गुहा के अंदर प्राकृतिक रक्त प्रवाह से हड्डी तेजी से जुड़ती है; चाल में सुधार।',
      },
      {
        timeframe: 'Weeks 10–12+',
        hindiTimeframe: 'सप्ताह 8–12',
        headline: 'Solid Bone Union',
        hindiHeadline: 'बिना सहारे स्वतंत्र चाल',
        description:
          'Consolidated cortical bone union on radiographs; return to heavy occupational tasks and driving.',
        hindiDescription:
          'हड्डी के पूर्ण कंसॉलिडेशन के बाद बिना सहारे चलना, सीढ़ियां चढ़ना और काम पर लौटना।',
      },
    ],
    procedureSteps: [
      'Patient positioned on a specialized radiolucent fracture traction table under C-arm fluoroscopy.',
      'Closed reduction of the fracture fragments without opening the fracture hematoma.',
      'Small percutaneous entry portal made at the bone apex (trochanteric or piriformis entry).',
      'Passage of an intramedullary guide wire across the fracture line into the distal epiphyseal bone.',
      'Insertion of an anatomically shaped titanium nail and placement of proximal and distal locking screws.',
    ],
    hindiProcedureSteps: [
      'ट्रैक्शन टेबल पर बंद विधि (Closed Technique) से हड्डी के दोनों सिरों को सीध में लाना।',
      'हड्डी के ऊपरी सिरे पर छोटा 3-4 सेमी का चीरा लगाकर गाइडवायर को नली के अंदर डालना।',
      'हड्डी की मज्जा गुहा (कनाल) को रीम कर सही मोटाई की टाइटेनियम इंटरलॉकिंग नेल चुनना।',
      'रॉड को फ्रैक्चर के आर-पार बैठाकर ऊपर और नीचे ट्रांसवर्स लॉकिंग स्क्रू से सुरक्षित कसना।',
      'फ्लोरोस्कोपी पर फ्रैक्चर की स्थिरता, लंबाई और रोटेशन की संपूर्ण पुष्टि।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'Plating osteosynthesis (alternative when fracture extends very close to the joint)',
      ],
      hindiAlternatives: [
      'बच्चों में कास्टिंग या इलास्टिक नेल्स',
      'वयस्कों में फीमर और टिबिया की लंबी हड्डियों के लिए इंटरलॉकिंग नेलिंग दुनिया भर में गोल्ड स्टैंडर्ड है',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Locking bolt irritation or prominence requiring later removal',
        '// NEEDS DOCTOR REVIEW: Rotational malalignment if comminution is extensive (mitigated by fluoroscopic checks)',
      ],
      hindiRisks: [
      'स्क्रू का ढीला होना (हड्डी जुड़ने के बाद निकाला जा सकता है)',
      'संक्रमण (<1% जोखिम, न्यूनतम इनवेसिव तकनीक से सुरक्षित)',
    ],
      note: 'Closed intramedullary nailing is the gold-standard biological fixation method worldwide for diaphyseal long bone fractures.',
      hindiNote: 'इंटरलॉकिंग नेलिंग में फ्रैक्चर स्थल को बाहर से नहीं खोला जाता, जिससे हड्डी की प्राकृतिक हीलिंग शक्ति सुरक्षित रहती है।',
    },
    relatedProcedures: ['orif-locking-plates', 'bipolar-hemiarthroplasty'],
    relatedFaqIds: ['faq-fracture-healing', 'faq-elderly-fractures'],
  },
  {
    slug: 'carpal-tunnel-trigger-finger',
    title: 'Carpal Tunnel Release & Trigger Finger Decompression',
    hindiTitle: 'कार्पल टनल रिलीज एवं ट्रिगर फिंगर डिकंप्रेशन',
    shortTitle: 'Carpal Tunnel & Trigger Finger Release',
    hindiShortTitle: 'कार्पल टनल व ट्रिगर फिंगर',
    category: 'Daycare Surgeries',
    hindiCategory: 'डे-केयर सर्जरी',
    hospitalStay: 'Daycare (discharge in 2–3 hours)',
    hindiHospitalStay: 'डे-केयर (2–3 घंटे में घर वापसी)',
    summary:
      'Quick local anesthesia procedure freeing compressed nerves and locked tendons, letting patients return home the same afternoon.',
    hindiSummary: 'लोकल एनेस्थीसिया में की जाने वाली त्वरित प्रक्रिया जो दबी हुई नसों और अटकी उंगलियों के टेंडन को मुक्त करती है, जिससे मरीज उसी दिन घर लौट सकते हैं।',
    indication:
      'Severe median nerve compression causing hand tingling, numbness, and night waking; or painful finger locking/snapping unresponsive to splints or injections.',
    hindiIndication: 'हाथ में सुन्नपन, झनझनाहट और रात में नींद टूटना (कार्पल टनल), या उंगलियों का अटकना (ट्रिगर फिंगर) जो दवा व स्प्लिंट से ठीक न हो रहा हो।',
    highlights: [
      'Performed comfortably under local anesthesia in a sterile daycare procedure suite.',
      'Immediate relief from distressing nighttime tingling, hand numbness, and painful finger clicking.',
      'Walk-in, walk-out procedure with no overnight hospital admission requirement.',
    ],
    hindiHighlights: [
      'सुन्न करने के सुरक्षित स्थानीय इंजेक्शन (लोकल एनेस्थीसिया) द्वारा की जाने वाली आरामदायक प्रक्रिया।',
      'रात में होने वाले हाथ के सुन्नपन, झनझनाहट और उंगलियों के चटकने/अटकने से तुरंत स्थाई राहत।',
      'समान्यतः 20-30 मिनट की प्रक्रिया, जिसके 2-3 घंटे बाद मरीज अपने घर लौट सकता है।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Day 1 (Immediate)',
        hindiTimeframe: 'दिन 1 (उसी दिन)',
        headline: 'Gentle Finger Mobility',
        hindiHeadline: 'तुरंत घर वापसी व उंगलियों की गति',
        description:
          'Patient encouraged to move fingers immediately after surgery to prevent tendon adhesions and promote lymphatic drainage.',
        hindiDescription:
          'प्रक्रिया के 2-3 घंटे बाद मरीज घर लौट सकता है; उंगलियां मोड़ने की पूरी अनुमति।',
      },
      {
        timeframe: 'Days 10–12',
        hindiTimeframe: 'दिन 10–14',
        headline: 'Suture Removal & Light Hand Use',
        hindiHeadline: 'टांके हटाना व हल्की पकड़',
        description:
          'Skin sutures removed at clinic; resumption of light typing, writing, and gentle household tasks.',
        hindiDescription:
          'घाव सूखने पर टांके काटे जाते हैं; कलम पकड़ना, भोजन करना व टाइपिंग सामान्य।',
      },
      {
        timeframe: 'Weeks 3–4',
        hindiTimeframe: 'सप्ताह 3–4',
        headline: 'Full Grip Strength Recovery',
        hindiHeadline: 'पूर्ण ग्रिप स्ट्रेंथ बहाली',
        description:
          'Restoration of firm grip power, alleviation of residual scar sensitivity, and return to unrestricted manual tasks.',
        hindiDescription:
          'हाथ में भारी वजन उठाना, दरवाजा खोलना और सामान्य दिनचर्या में बिना दर्द वापसी।',
      },
    ],
    procedureSteps: [
      'Targeted local anesthetic infiltration ensuring complete numbness of the operative palm/wrist zone.',
      'Precise 1.5–2 cm mini-palmar incision planned within natural skin creases.',
      'Direct visualization and complete division of the transverse carpal ligament (for carpal tunnel) or A1 pulley (for trigger finger).',
      'Direct visual verification that the median nerve or flexor tendon glides freely without constriction.',
      'Fine skin closure with sterile dressing and immediate finger range-of-motion testing.',
    ],
    hindiProcedureSteps: [
      'हथेली या उंगली के आधार पर स्थानीय सुन्न (लोकल एनेस्थीसिया) का हल्का इंजेक्शन।',
      'दबाव वाले स्थान पर छोटा 1.5–2 सेमी का सौंदर्यपूर्ण चीरा।',
      'कार्पल टनल में ट्रांसवर्स कार्पल लिगामेंट को काटकर मीडियन नर्व को पूरी तरह मुक्त करना।',
      'ट्रिगर फिंगर में कसे हुए A1 पुली को काटकर टेंडन के निर्बाध ग्लाइडिंग की जांच।',
      'सूक्ष्म टांके लगाकर हल्का बैंडेज बांधना (मरीज उसी समय उंगलियां हिला सकता है)।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'Nighttime wrist splinting and ergonomic workstation adjustments',
        'Local targeted corticosteroid injection around the tendon sheath or carpal tunnel',
      ],
      hindiAlternatives: [
      'रात में पहनने वाला रिस्ट स्प्लिंट और सूजन-रोधी दवाएं',
      'कार्पल टनल या ट्रिगर पुली में स्थानीय कॉर्टिकोस्टेरॉइड इंजेक्शन',
      'यदि उंगली बार-बार लॉक हो रही हो या हाथ सुन्न रहता हो तो सर्जरी स्थायी समाधान है',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Pillar pain (temporary tenderness over thenar/hypothenar eminence lasting a few weeks)',
        '// NEEDS DOCTOR REVIEW: Delayed recovery of sensation if chronic nerve atrophy pre-existed surgery',
      ],
      hindiRisks: [
      'चीरे के स्थान पर हल्का खिंचाव (कुछ हफ्तों में मालिश से सामान्य)',
      'संक्रमण (नगण्य, डे-केयर एसेप्टिक तकनीक द्वारा पूरी तरह सुरक्षित)',
    ],
      note: 'Early surgical decompression prevents permanent sensory loss and thenar muscle wasting in persistent carpal tunnel syndrome.',
      hindiNote: 'कार्पल टनल और ट्रिगर फिंगर रिलीज 20 मिनट की अत्यंत सुरक्षित डे-केयर प्रक्रिया है जिससे उसी दिन छुट्टी मिल जाती है।',
    },
    relatedProcedures: ['de-quervains-release'],
    relatedFaqIds: ['faq-daycare-surgery', 'faq-second-opinion'],
  },
  {
    slug: 'de-quervains-release',
    title: "De Quervain's Tenosynovitis & Tendon Decompressions",
    hindiTitle: 'डी क्वेरवेन टेनोसाइनोवाइटिस एवं टेंडन रिलीज',
    shortTitle: "De Quervain's Tendon Release",
    hindiShortTitle: 'डी क्वेरवेन टेंडन रिलीज',
    category: 'Daycare Surgeries',
    hindiCategory: 'डे-केयर सर्जरी',
    hospitalStay: 'Daycare (outpatient)',
    hindiHospitalStay: 'डे-केयर (ओपीडी आधार पर)',
    summary:
      'Frees trapped thumb tendons on the wrist under local anesthesia, providing lasting relief from sharp thumb pinch and wrist pain.',
    hindiSummary: 'कलाई के पास अंगूठे के खिंचे हुए टेंडन को लोकल एनेस्थीसिया में ढीला करना, जिससे अंगूठे की पकड़ और कलाई के दर्द से स्थायी राहत मिलती है।',
    indication:
      "Severe pain and swelling on the thumb side of the wrist (positive Finkelstein's test) failing splint immobilization and anti-inflammatory therapy.",
    hindiIndication: 'कलाई के अंगूठे वाले हिस्से में तेज दर्द व सूजन (पॉजिटिव फिनकेल्सटीन टेस्ट) जो आराम, स्प्लिंट या दवाओं से ठीक न हो रही हो।',
    highlights: [
      'Carefully identifies and protects the sensory branches of the superficial radial nerve while completely releasing the tight extensor sheath.',
      'Simple walk-in, walk-out daycare procedure lasting under 25 minutes.',
      'Provides permanent resolution of sharp pinch pain and restores confident thumb gripping and wrist rotation.',
    ],
    hindiHighlights: [
      'कलाई के अंगूठे वाले भाग में कसे हुए पहले एक्सटेंसर कम्पार्टमेंट को सूक्ष्म चीरे से पूरी तरह मुक्त करना।',
      'रेडियल नर्व की संवेदी शाखाओं को पूर्णतः सुरक्षित रखते हुए टेंडन की निर्बाध गति सुनिश्चित करना।',
      'अंगूठे की पकड़, सामान उठाने और कलाई मोड़ने पर होने वाले तीखे दर्द से त्वरित एवं दीर्घकालिक मुक्ति।',
    ],
    recoveryTimeline: [
      {
        timeframe: 'Days 1–3',
        hindiTimeframe: 'दिन 1–3',
        headline: 'Immediate Light Thumb Movement',
        hindiHeadline: 'हल्का बैंडेज व अंगूठे का उपयोग',
        description:
          'Soft wrist bandage; early gentle thumb abduction and wrist flexion/extension encouraged.',
        hindiDescription:
          'मरीज उसी दिन घर जाता है; चाय का कप पकड़ने और लिखने जैसी हल्की गतिविधियों की अनुमति।',
      },
      {
        timeframe: 'Days 10–12',
        hindiTimeframe: 'दिन 10–12',
        headline: 'Stitch Removal & Normal Pinch',
        hindiHeadline: 'टांके हटाना व कलाई की लचक',
        description:
          'Clinic stitch removal; resolution of sharp pain when gripping cups, turning keys, or lifting objects.',
        hindiDescription:
          'टांके काटे जाते हैं; कलाई और अंगूठे को बिना खिंचाव चारों दिशाओं में घुमाना।',
      },
      {
        timeframe: 'Weeks 2–3',
        hindiTimeframe: 'सप्ताह 3–4',
        headline: 'Full Functional Freedom',
        hindiHeadline: 'दर्दमुक्त मजबूत पकड़',
        description:
          'Unrestricted hand and wrist usage, return to sports, cooking, and heavy occupational lifting without discomfort.',
        hindiDescription:
          'कपड़े निचोड़ना, भारी वजन उठाना और खेलकूद में बिना दर्द पूर्ण वापसी।',
      },
    ],
    procedureSteps: [
      'Local anesthetic infiltration along the first extensor compartment of the wrist.',
      'Transverse or longitudinal skin incision placed with care to identify and gently mobilize superficial radial nerve branches.',
      'Longitudinal unroofing of the first dorsal extensor compartment sheath.',
      'Identification and release of any sub-compartments separating the APL and EPB tendons.',
      'Verification of completely unhindered tendon glide on passive thumb flexion.',
    ],
    hindiProcedureSteps: [
      'कलाई के अंगूठे वाले हिस्से पर लोकल एनेस्थीसिया का सुन्न इंजेक्शन।',
      'त्वचा की रेखा के साथ सूक्ष्म 2 सेमी का आड़ा चीरा ताकि निशान न दिखे।',
      'सुपरफिशियल रेडियल नर्व की संवेदी शाखाओं को ध्यानपूर्वक पहचानकर सुरक्षित अलग रखना।',
      'पहले डोर्सल कम्पार्टमेंट की कसी हुई शीथ को लंबाई में काटकर टेंडन को मुक्त करना।',
      'अंगूठे को पूरी तरह मोड़कर और खींचकर टेंडन के बिना रुकावट चलने की पुष्टि।',
    ],
    risksAndAlternatives: {
      alternatives: [
        'Thumb spica brace splinting and activity modification',
        'Ultrasound-guided targeted steroid injection into the tendon sheath',
      ],
      hindiAlternatives: [
      'थंब स्पाइका स्प्लिंट और बर्फ की सिकाई',
      'टेंडन शीथ में स्थानीय एंटी-इन्फ्लेमेटरी इंजेक्शन',
      'यदि दर्द के कारण अंगूठे से सामान छूटने लगे तो 15 मिनट की रिलीज सर्जरी स्थायी समाधान है',
    ],
      risks: [
        '// NEEDS DOCTOR REVIEW: Temporary sensitivity of superficial radial nerve (neurapraxia) resolving spontaneously',
        '// NEEDS DOCTOR REVIEW: Incomplete release if an anatomical septated sub-compartment is missed',
      ],
      hindiRisks: [
      'अस्थायी त्वचा सुन्नपन (रेडियल नर्व की सुरक्षा से नगण्य)',
      'हल्की कोमलता जो कुछ हफ्तों में सामान्य हो जाती है',
    ],
      note: 'Decompression provides definitive relief when chronic inflammation has thickened the fibrous sheath beyond non-surgical recovery.',
      hindiNote: 'माताओं, कामकाजी महिलाओं और मोबाइल का अत्यधिक उपयोग करने वालों में यह समस्या आम है और त्वरित सर्जरी से तुरंत ठीक हो जाती है।',
    },
    relatedProcedures: ['carpal-tunnel-trigger-finger'],
    relatedFaqIds: ['faq-daycare-surgery', 'faq-second-opinion'],
  },
];
