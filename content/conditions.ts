export interface SymptomRegion {
  id: string;
  name: string;
  hindiName: string;
  badge: string;
  hindiBadge?: string;
  summary: string;
  hindiSummary?: string;
  symptoms: string[];
  hindiSymptoms?: string[];
  selfCare: string[];
  hindiSelfCare?: string[];
  surgicalProcedures: {
    name: string;
    hindiName?: string;
    indication: string;
    hindiIndication?: string;
    slug?: string;
  }[];
  whenToConsult: string;
  hindiWhenToConsult?: string;
  ctaText: string;
  hindiCtaText?: string;
  doctorReviewFlag?: boolean;
}

export interface AreaOfCare {
  slug: string;
  title: string;
  hindiTitle: string;
  shortSummary: string;
  hindiShortSummary?: string;
  fullOverview: string[];
  hindiFullOverview?: string[];
  whoShouldConsult: string[];
  hindiWhoShouldConsult?: string[];
  commonQuestions: string[];
  hindiCommonQuestions?: string[];
  conservativeOptions: string[];
  hindiConservativeOptions?: string[];
  surgicalConsiderations: string[];
  hindiSurgicalConsiderations?: string[];
  relatedSurgeries: string[]; // slugs
  relatedFaqIds: string[];
  iconName: string;
}

export const SYMPTOM_REGIONS: SymptomRegion[] = [
  {
    id: 'knee',
    name: 'Knee Joint',
    hindiName: 'घुटने का जोड़',
    badge: 'TKR • Arthroscopy • Preservation',
    hindiBadge: 'टीकेआर • आर्थ्रोस्कोपी • जोड़ संरक्षण',
    hindiSummary: 'उम्र संबंधी ऑस्टियोआर्थराइटिस, कार्टिलेज का घिसाव, मेनिस्कस टियर, लिगामेंट खिंचाव एवं चलने में घुटनों का टेढ़ापन।',
    summary:
      'Degenerative osteoarthritis, complex joint wear, meniscus tears, ligament sprains, and anterior knee instability.',
    symptoms: [
      'Severe pain or joint stiffness during stair climbing or prolonged walking',
      'Audible clicking, bone-on-bone grinding (crepitus), or sudden joint catching',
      'Persistent swelling and progressive inward or outward bowing of the leg (varus/valgus)',
      'Morning stiffness limiting rising from low chairs or prolonged sitting',
    ],
    hindiSymptoms: [
      'सीढ़ियां चढ़ने-उतरने या चलने पर घुटने में गंभीर दर्द व अकड़न',
      'जोड़ मोड़ने पर कट-कट की आवाज (क्रेपिटस) या घुटने का अचानक अटकना',
      'घुटने में लगातार सूजन और पैरों का अंदर या बाहर की ओर टेढ़ा होना (varus/valgus)',
      'सुबह उठने या लंबे समय बैठने के बाद खड़े होने में अत्यधिक जकड़न'
    ],
    selfCare: [
      'Avoid deep squatting, cross-legged sitting on floor, and repetitive high-impact jumping',
      'Apply cold compression packs for 15–20 minutes after prolonged walking or swelling flare-ups',
      'Wear supportive footwear with cushioned soles to reduce ground-reaction impact forces',
      'Gentle non-weight-bearing straight-leg raises to strengthen quadriceps stability',
    ],
    hindiSelfCare: [
      'जमीन पर पालथी मारकर बैठने, उकड़ू बैठने और भारी वजन उठाने से बचें',
      'दर्द या सूजन बढ़ने पर 15-20 मिनट के लिए बर्फ की ठंडी सिकाई करें',
      'चलते समय झटके कम करने के लिए मुलायम व कुशन वाले आरामदायक जूते पहनें',
      'क्वाड्रिसेप्स मांसपेशियों को मजबूत करने के लिए सीधे पैर उठाने (SLR) की हल्की कसरत करें'
    ],
    surgicalProcedures: [
      {
        name: 'Total Knee Replacement (TKR)',
        hindiName: 'टोटल नी रिप्लेसमेंट (TKR)',
        indication:
          'End-stage tricompartmental osteoarthritis (Grade 4), bone-on-bone collapse, severe walking pain, bowing deformity.',
        hindiIndication:
          'उम्र संबंधी गंभीर ऑस्टियोआर्थराइटिस (ग्रेड 4), हड्डियों का आपस में टकराना, पैरों का टेढ़ापन व असहनीय दर्द।',
        slug: 'total-knee-replacement',
      },
      {
        name: 'Partial / UKA Knee Replacement',
        indication:
          'Isolated medial compartment osteoarthritis with healthy lateral cartilage and intact ACL.',
        slug: 'partial-knee-replacement',
      },
      {
        name: 'Arthroscopy & ACL / PCL Reconstruction',
        indication:
          'Complete ligament tears with pivoting giving-way instability, sports trauma, or multiligament laxity.',
        slug: 'acl-pcl-reconstruction',
      },
      {
        name: 'Arthroscopic Meniscus Repair',
        indication:
          'Bucket-handle, longitudinal, or radial meniscus tears with joint catching and locking.',
        slug: 'meniscus-repair',
      },
      {
        name: 'Complex & Revision Knee Reconstruction',
        indication:
          'Severe deformity (>15° varus/valgus), bone deficits, or failure of a prior knee replacement.',
        slug: 'revision-joint-replacement',
      },
    ],
    whenToConsult:
      'Consult promptly if the knee buckles, gives way, cannot fully straighten, or if persistent pain disrupts sleep and daily walking despite conservative medication and rest.',
    ctaText: 'Book Evaluation for Knee Joint',
    hindiWhenToConsult: 'यदि घुटना चलते समय अचानक लचक खा जाए (धोखा दे), सीधा न हो पाए, या दर्द के कारण रात में नींद खुले और दैनिक दिनचर्या प्रभावित हो, तो तुरंत डॉ. गौरव शर्मा से परामर्श लें।',
    hindiCtaText: 'घुटने के दर्द हेतु परामर्श बुक करें',
    doctorReviewFlag: false,
  },
  {
    id: 'hip',
    name: 'Hip & Pelvis',
    hindiName: 'कूल्हा और पेल्विस',
    badge: 'Total Hip (THR) • AVN • Fractures',
    hindiBadge: 'टोटल हिप (THR) • एवीएन • हिप फ्रैक्चर',
    hindiSummary: 'एवैस्कुलर नेक्रोसिस (AVN), गंभीर हिप आर्थराइटिस, कूल्हे की जकड़न और बुजुर्गों में कूल्हे की हड्डी का टूटना।',
    summary:
      'Avascular necrosis (AVN), advanced degenerative arthritis, pelvic stiffness, and fragility hip fractures.',
    symptoms: [
      '// NEEDS DOCTOR REVIEW: Deep groin pain radiating along the front of the thigh toward the knee',
      '// NEEDS DOCTOR REVIEW: Severe difficulty putting on socks, tying shoes, or cutting toenails due to loss of hip internal rotation',
      '// NEEDS DOCTOR REVIEW: Limping gait with hip stiffness when standing up after prolonged sitting',
      '// NEEDS DOCTOR REVIEW: Sudden inability to bear weight on the leg after a domestic slip or fall',
    ],
    hindiSymptoms: [
      'जांघ के जोड़ (ग्रोइन) में गहरा दर्द जो जांघ के आगे से घुटने तक फैलता है',
      'कूल्हे की गति सीमित होने से मोजे पहनने, जूते के फीते बांधने या पालथी लगाने में भारी कठिनाई',
      'कुर्सी से उठते समय कूल्हे में जकड़न और चलने पर लंगड़ाहट',
      'बुजुर्गों में मामूली गिरने के बाद अचानक पैर पर वजन न रख पाना'
    ],
    selfCare: [
      '// NEEDS DOCTOR REVIEW: Use a walking stick held in the hand opposite to the affected hip to offload joint contact forces',
      '// NEEDS DOCTOR REVIEW: Avoid low seating and deep squatting; use a raised toilet seat and firm upright chairs',
      '// NEEDS DOCTOR REVIEW: Low-impact conditioning such as stationary upright cycling to maintain cartilage nutrition',
    ],
    hindiSelfCare: [
      'कूल्हे पर अत्यधिक दबाव कम करने के लिए विपरीत हाथ में वॉकिंग स्टिक का सहारा लें',
      'नीची कुर्सी और जमीन पर बैठने से बचें; ऊंचे वेस्टर्न कमोड और सीधी कुर्सी का प्रयोग करें',
      'जोड़ के पोषण को बनाए रखने के लिए बिना वजन वाली हल्की साइकिलिंग या फिजियोथेरेपी करें'
    ],
    surgicalProcedures: [
      {
        name: 'Total Hip Replacement (THR)',
        hindiName: 'टोटल हिप रिप्लेसमेंट (THR)',
        indication:
          'Advanced avascular necrosis (AVN stage 3/4), severe primary/secondary osteoarthritis, ankylosing spondylitis.',
        hindiIndication:
          'कूल्हे का एवस्कुलर नेक्रोसिस (AVN स्टेज 3/4), गंभीर ऑस्टियोआर्थराइटिस व चलने में अत्यधिक लाचारी।',
        slug: 'total-hip-replacement',
      },
      {
        name: 'Bipolar Hemiarthroplasty for Hip Fractures',
        indication:
          'Displaced femoral neck fractures in elderly patients requiring immediate next-day mobilization.',
        slug: 'bipolar-hemiarthroplasty',
      },
      {
        name: 'Revision Total Hip Arthroplasty',
        indication:
          'Aseptic cup or stem loosening, recurrent dislocations, or periprosthetic fractures after previous hip surgery.',
        slug: 'revision-joint-replacement',
      },
    ],
    whenToConsult:
      '// NEEDS DOCTOR REVIEW: Consult immediately if you develop a persistent groin limp, inability to cross your legs, night pain disturbing sleep, or following any fall with hip tenderness.',
    ctaText: 'Book Evaluation for Hip & Pelvis',
    hindiWhenToConsult: 'यदि जांघ के जोड़ में लगातार दर्द बना रहे, पैर छोटा लगने लगे, या गिरने के बाद खड़े होने में असमर्थ हों, तो बिना देर किए क्लिनिक में डिजिटल एक्स-रे जांच करवाएं।',
    hindiCtaText: 'कूल्हे की समस्या हेतु परामर्श बुक करें',
    doctorReviewFlag: true,
  },
  {
    id: 'spine',
    name: 'Spine & Lower Back',
    hindiName: 'रीढ़ और निचली पीठ',
    badge: 'Lumbar Spine • Sciatica • Core Rehab',
    hindiBadge: 'कमर दर्द • स्लिप डिस्क • सायटिका • स्पाइनल केयर',
    hindiSummary: 'लम्बर स्पोंडिलोसिस, डिस्क प्रोलैप्स (स्लिप डिस्क), सायटिका, नसों का दबना और रीढ़ की पुरानी जकड़न।',
    summary:
      'Lumbar disc herniation, sciatica nerve pain, spinal canal stenosis, postural deconditioning, and chronic stiffness.',
    symptoms: [
      '// NEEDS DOCTOR REVIEW: Dull aching or sharp low back pain exacerbated by prolonged sitting or forward bending',
      '// NEEDS DOCTOR REVIEW: Sciatica: radiating sharp pain, electric tingling, or numbness down one or both legs past the knee',
      '// NEEDS DOCTOR REVIEW: Neurogenic claudication: heavy cramping in calves after walking 100–200 metres, relieved by sitting',
      '// NEEDS DOCTOR REVIEW: Morning lumbar stiffness lasting over 30 minutes in young adults (spondyloarthritis check)',
    ],
    hindiSymptoms: [
      'निचली कमर में लगातार भारीपन या तेज चुभन जो लंबे समय बैठने या खड़े रहने से बढ़ती है',
      'कूल्हे से लेकर पैर के तलवे तक करंट जैसा झनझनाहट भरा दर्द (सायटिका)',
      'पैरों में सुन्नपन, कमजोरी या चलने पर पिंडलियों में भारीपन होना',
      'झुककर भारी सामान उठाने के बाद अचानक कमर का लॉक हो जाना'
    ],
    selfCare: [
      '// NEEDS DOCTOR REVIEW: Maintain neutral lumbar posture with firm lower back support while sitting; avoid slumping',
      '// NEEDS DOCTOR REVIEW: Avoid bending at the waist to lift objects; always bend your knees and keep loads close to body',
      '// NEEDS DOCTOR REVIEW: Perform gentle core stabilization and hamstring stretches once acute spasms subside',
      '// NEEDS DOCTOR REVIEW: Short, regular flat-surface walks rather than prolonged strict continuous bed rest',
    ],
    hindiSelfCare: [
      'कमर झुकाकर भारी वजन बिल्कुल न उठाएं; घुटने मोड़कर ही नीचे की वस्तु उठाएं',
      'सख्त गद्देदार तख्त पर सोएं और लंबे समय तक लगातार बैठने से बचें (हर 45 मिनट में टहलें)',
      'तीव्र दर्द में पीठ पर गर्म पानी की थैली या हीटिंग पैड से 15-20 मिनट सिकाई करें',
      'रीढ़ की कोर मांसपेशियों को मजबूत करने के लिए सरल भुजंगासन व लम्बर स्ट्रेच करें'
    ],
    surgicalProcedures: [
      {
        name: 'Clinical Neurological Mapping & Diagnostic Workup',
        hindiName: 'क्लिनिकल स्पाइनल एवं न्यूरोलॉजिकल परीक्षण',
        indication:
          'Dermatomal sensory mapping, motor reflex evaluation, and weight-bearing spine imaging correlation.',
        hindiIndication:
          'रीढ़ की नसों पर दबाव (साइटिका), डिस्क का खिसकना, पैर में सुन्नपन व एक्स-रे/एमआरआई जांच का मिलान।',
      },
      {
        name: 'Targeted Non-Surgical Spinal Rehabilitation',
        indication:
          'Structured core transversus abdominis conditioning, targeted anti-inflammatory therapy, and ergonomic correction.',
      },
    ],
    whenToConsult:
      '// NEEDS DOCTOR REVIEW: Consult promptly if back pain radiates down legs, causes foot drop (toe dragging), numbness in the groin area, or bowel/bladder disturbance (red-flag emergency).',
    ctaText: 'Book Evaluation for Spine & Back',
    hindiWhenToConsult: 'यदि सायटिका का दर्द दवाइयों से कम न हो, पैरों की उंगलियों या पंजों में कमजोरी महसूस हो, या पेशाब-शौच पर नियंत्रण में रुकावट आए, तो यह एक मेडिकल इमरजेंसी है और तुरंत जांच आवश्यक है।',
    hindiCtaText: 'रीढ़ व कमर दर्द हेतु परामर्श बुक करें',
    doctorReviewFlag: true,
  },
  {
    id: 'shoulder',
    name: 'Shoulder & Rotator Cuff',
    hindiName: 'कंधा और रोटेटर कफ',
    badge: 'Rotator Cuff • Bankart • Impingement',
    hindiBadge: 'फ्रोजन शोल्डर • रोटेटर कफ • कंधा उतरना',
    hindiSummary: 'रोटेटर कफ टेंडन टियर, फ्रोजन शोल्डर (कंधे का जाम होना), जोड़ का बार-बार उतरना (डिसलोकेशन) और इम्पिंजमेंट सिंड्रोम।',
    summary:
      'Rotator cuff tendon tears, recurrent shoulder dislocations, frozen shoulder (adhesive capsulitis), and subacromial impingement.',
    symptoms: [
      '// NEEDS DOCTOR REVIEW: Inability to sleep on the affected shoulder due to persistent, nagging dull ache',
      '// NEEDS DOCTOR REVIEW: Sharp pain when reaching overhead, combing hair, or putting arms into shirt sleeves',
      '// NEEDS DOCTOR REVIEW: Noticeable weakness when lifting objects with an outstretched arm',
      '// NEEDS DOCTOR REVIEW: Sensation of the shoulder popping or slipping out of socket during throwing or sudden pull',
    ],
    hindiSymptoms: [
      'रात में कंधे के बल सोने पर तेज दर्द होना और हाथ सिर के ऊपर उठाने में असमर्थता',
      'पीठ के पीछे हाथ ले जाने, शर्ट पहनने या बाल संवारने में कंधे की अत्यधिक जकड़न',
      'हाथ को एक निश्चित ऊंचाई पर उठाने पर अचानक तेज करंट जैसा दर्द (आर्क सिंड्रोम)',
      'चोट के बाद कंधे का अपनी जगह से खिसक जाना या ढीलापन महसूस होना'
    ],
    selfCare: [
      '// NEEDS DOCTOR REVIEW: Avoid repetitive overhead reaching and heavy overhead gym pressing during acute flare-ups',
      '// NEEDS DOCTOR REVIEW: Apply ice packs over the anterolateral shoulder for 15 minutes after activity',
      '// NEEDS DOCTOR REVIEW: Gentle pendulum swing exercises with arm hanging loose to prevent adhesive capsulitis',
    ],
    hindiSelfCare: [
      'दर्द वाले कंधे के बल सोने से बचें और तकिए का सहारा लेकर हाथ को आरामदायक स्थिति में रखें',
      'अचानक झटके से भारी वजन उठाने या हाथ को पीछे खींचने वाली गतिविधियों से बचें',
      'कंधे की जकड़न दूर करने के लिए दिन में 2-3 बार पेंडुलम एक्सरसाइज और वॉल क्लाइंबिंग व्यायाम करें',
      'तीव्र दर्द में बर्फ और पुरानी जकड़न में गर्म पानी की सिकाई करें'
    ],
    surgicalProcedures: [
      {
        name: 'Shoulder Arthroscopy & Rotator Cuff Repair',
        hindiName: 'कंधा आर्थ्रोस्कोपी एवं रोटेटर कफ रिपेयर',
        indication:
          'Full-thickness cuff tears, persistent impingement, and chronic tendon retraction failing non-surgical care.',
        hindiIndication:
          'रोटेटर कफ टेंडन का फटना, बार-बार कंधा उतरना और पुरानी अकड़न जो दवाओं व फिजियो से ठीक न हो।',
        slug: 'shoulder-arthroscopy',
      },
      {
        name: 'Arthroscopic Bankart & Labral Repair',
        indication:
          'Recurrent anterior shoulder dislocations and glenoid labrum detachments after trauma.',
        slug: 'shoulder-arthroscopy',
      },
    ],
    whenToConsult:
      '// NEEDS DOCTOR REVIEW: Consult if shoulder pain wakes you from sleep, active overhead lifting is weak, or the joint has dislocated more than once.',
    ctaText: 'Book Evaluation for Shoulder & Cuff',
    hindiWhenToConsult: 'यदि हाथ ऊपर उठाने पर अत्यधिक लाचारी हो, रात में दर्द से नींद न आए, या कंधा बार-बार उतरने लगे, तो विशेषज्ञ द्वारा एमआरआई जांच कराकर परामर्श लें।',
    hindiCtaText: 'कंधे के दर्द हेतु परामर्श बुक करें',
    doctorReviewFlag: true,
  },
  {
    id: 'neck',
    name: 'Neck & Cervical Spine',
    hindiName: 'गर्दन और सर्वाइकल',
    badge: 'Cervical Spine • Radiculopathy • Posture',
    hindiBadge: 'सर्वाइकल स्पोंडिलोसिस • नसों का खिंचाव',
    hindiSummary: 'सर्वाइकल स्पोंडिलोसिस, डिस्क का दबना, गर्दन की पुरानी अकड़न और बांहों में जाने वाला नसों का दर्द (रेडिकुलोपैथी)।',
    summary:
      'Cervical disc disease, nerve root radiculopathy (arm pain & numbness), cervical spondylosis, and postural strain.',
    symptoms: [
      '// NEEDS DOCTOR REVIEW: Chronic neck stiffness and shoulder-blade aching after computer or mobile phone use',
      '// NEEDS DOCTOR REVIEW: Cervical radiculopathy: shooting pain, pins-and-needles, or numbness radiating into arm and fingers',
      '// NEEDS DOCTOR REVIEW: Occipital headaches originating at the base of the skull',
      '// NEEDS DOCTOR REVIEW: Clumsiness in hands (dropping cups, difficulty buttoning shirts) indicating cervical myelopathy',
    ],
    hindiSymptoms: [
      'गर्दन में निरंतर अकड़न और सिर घुमाने पर दर्द व चटकने की आवाज आना',
      'गर्दन से कंधे और हाथ की उंगलियों तक बिजली जैसी झनझनाहट और दर्द',
      'मोबाइल या कंप्यूटर पर लगातार काम करने के बाद सिर के पिछले हिस्से में भारीपन व सिरदर्द',
      'हाथ की हथेलियों या उंगलियों में सुन्नपन और सामान पकड़ने में पकड़ कमजोर होना'
    ],
    selfCare: [
      '// NEEDS DOCTOR REVIEW: Elevate screen heights to eye level to avoid protracted cervical flexion (text-neck posture)',
      '// NEEDS DOCTOR REVIEW: Use a contoured ergonomic cervical pillow supporting the natural neck curve during sleep',
      '// NEEDS DOCTOR REVIEW: Gentle isometric neck extensor and lateral flexor strengthening exercises',
    ],
    hindiSelfCare: [
      'मोबाइल का उपयोग करते समय सिर को ज्यादा देर नीचे न झुकाएं; स्क्रीन को आंखों के स्तर पर रखें',
      'सोते समय बहुत मोटा तकिया इस्तेमाल न करें; पतला सर्वाइकल पिलो ही प्रयोग करें',
      'गर्दन की आइसोमेट्रिक स्ट्रेंथनिंग एक्सरसाइज करें (माथे और सिर के पीछे हाथ रखकर हल्का दबाव दें)',
      'लगातार लंबे समय तक ड्राइविंग या डेस्क वर्क के बीच गर्दन को हल्का स्ट्रेच करें'
    ],
    surgicalProcedures: [
      {
        name: 'Clinical Cervical Radiculopathy Workup',
        hindiName: 'सर्वाइकल स्पोंडिलोसिस व नसों का परीक्षण',
        indication:
          'Differential diagnosis between peripheral nerve entrapment and cervical disc herniation with digital imaging.',
        hindiIndication:
          'गर्दन से हाथ की उंगलियों में जाने वाला सुन्नपन, झनझनाहट व सर्वाइकल डिस्क पर नसों का दबाव।',
      },
    ],
    whenToConsult:
      '// NEEDS DOCTOR REVIEW: Consult immediately if arm weakness develops, fingers feel numb, or you notice unsteadiness while walking.',
    ctaText: 'Book Evaluation for Neck & Cervical',
    hindiWhenToConsult: 'यदि गर्दन के दर्द के साथ हाथों की उंगलियों में सुन्नपन बढ़े, गिलास या कलम पकड़ने में हाथ कांपे, या चक्कर आने लगें, तो तुरंत विशेषज्ञ जांच आवश्यक है।',
    hindiCtaText: 'सर्वाइकल व गर्दन दर्द हेतु परामर्श बुक करें',
    doctorReviewFlag: true,
  },
  {
    id: 'elbow',
    name: 'Elbow & Forearm',
    hindiName: 'कोहनी और अग्रभाग',
    badge: 'Tennis Elbow • Nerve Release • Fractures',
    hindiBadge: 'टेनिस एल्बो • गोल्फर्स एल्बो • फ्रैक्चर',
    hindiSummary: 'टेनिस एल्बो, गोल्फर्स एल्बो, कोहनी की नसों का दबना (क्यूबिटल टनल) और बच्चों व वयस्कों में कोहनी के फ्रैक्चर।',
    summary:
      'Lateral epicondylitis (tennis elbow), golfer’s elbow, cubital tunnel nerve compression, and intra-articular elbow fractures.',
    symptoms: [
      '// NEEDS DOCTOR REVIEW: Sharp pain over the outer elbow bone when lifting cups, turning doorknobs, or wringing clothes',
      '// NEEDS DOCTOR REVIEW: Inner elbow tenderness aggravated by wrist flexion or repetitive gripping',
      '// NEEDS DOCTOR REVIEW: Tingling and numbness in the little and ring fingers caused by ulnar nerve compression (Cubital Tunnel)',
      '// NEEDS DOCTOR REVIEW: Inability to bend or straighten the elbow following a fall on an outstretched hand',
    ],
    hindiSymptoms: [
      'कोहनी के बाहरी उभार पर तीव्र दर्द और चाय का कप या पानी की बाल्टी उठाने में लाचारी',
      'हाथ मिलाने, दरवाजा खोलने या चाबी घुमाने पर कोहनी में तेज खिंचाव',
      'कोहनी के अंदरूनी हिस्से में दर्द जो कलाई की तरफ नीचे जाता हो',
      'हाथ की छोटी और अनामिका उंगली में सुन्नपन या झुनझुनी रहना'
    ],
    selfCare: [
      '// NEEDS DOCTOR REVIEW: Use a counterforce forearm band placed 2 inches below the elbow crease during gripping activities',
      '// NEEDS DOCTOR REVIEW: Perform eccentric wrist extensor strengthening with light resistance',
      '// NEEDS DOCTOR REVIEW: Avoid sustained prolonged elbow flexion beyond 90 degrees during sleep or phone calls',
    ],
    hindiSelfCare: [
      'कलाई को बार-बार मोड़ने और भारी सामान झटके से उठाने से बचें',
      'दर्द निवारण के लिए कोहनी के नीचे फोरआर्म पर टेनिस एल्बो ब्रेस का सही तरीके से प्रयोग करें',
      'दर्द वाली जगह पर दिन में 2 बार 10-15 मिनट बर्फ की मसाज (आइस रोलिंग) करें',
      'कलाई और अग्रभाग की मांसपेशियों की हल्की स्ट्रेचिंग एक्सरसाइज करें'
    ],
    surgicalProcedures: [
      {
        name: 'Biological Injections (PRP) for Refractory Epicondylitis',
        hindiName: 'टेनिस एल्बो बायोलॉजिकल एवं सर्जिकल केयर',
        indication:
          'Chronic tendinosis failing rest, counterforce braces, and targeted physical therapy.',
        hindiIndication:
          'कोहनी के टेंडन में पुराना दर्द व सूजन (टेनिस/गोल्फर्स एल्बो) जो ब्रेस व फिजियोथेरेपी से ठीक न हो रहा हो।',
      },
      {
        name: 'ORIF Locking Plate for Olecranon & Radial Head Fractures',
        indication:
          'Displaced intra-articular elbow fractures requiring anatomical reduction.',
        slug: 'orif-locking-plates',
      },
    ],
    whenToConsult:
      '// NEEDS DOCTOR REVIEW: Consult if elbow pain prevents holding everyday items, the joint locks, or finger numbness persists.',
    ctaText: 'Book Evaluation for Elbow & Forearm',
    hindiWhenToConsult: 'यदि रोजमर्रा के साधारण कार्यों में कोहनी का दर्द बाधा बने, हाथ की उंगलियों में सुन्नता आने लगे, या गिरने के बाद कोहनी में सूजन व विकृति दिखे, तो जांच कराएं।',
    hindiCtaText: 'कोहनी के दर्द हेतु परामर्श बुक करें',
    doctorReviewFlag: true,
  },
  {
    id: 'wrist',
    name: 'Wrist & Hand',
    hindiName: 'कलाई और हाथ',
    badge: 'Carpal Tunnel • Trigger Finger • De Quervain',
    hindiBadge: 'कार्पल टनल • कलाई का फ्रैक्चर • ट्रिगर फिंगर',
    hindiSummary: 'कार्पल टनल सिंड्रोम, डि क्वेरवेन टेनोसिनोवाइटिस, कोलीज फ्रैक्चर और हाथ व उंगलियों के लिगामेंट खिंचाव।',
    summary:
      'Carpal tunnel median nerve entrapment, trigger finger locking, De Quervain’s tenosynovitis, and distal radius fractures.',
    symptoms: [
      '// NEEDS DOCTOR REVIEW: Distressing nighttime numbness and tingling in the thumb, index, and middle fingers (Carpal Tunnel)',
      '// NEEDS DOCTOR REVIEW: Painful snapping, clicking, or locking of fingers in a bent position upon waking (Trigger Finger)',
      '// NEEDS DOCTOR REVIEW: Sharp pain on the thumb-side wrist when gripping cups or twisting jars (De Quervain’s tenosynovitis)',
      '// NEEDS DOCTOR REVIEW: Dinner-fork wrist deformity and intense pain after a domestic fall (Distal Radius fracture)',
    ],
    hindiSymptoms: [
      'रात को सोते समय हाथ और उंगलियों में सुन्नपन, चींटियां रेंगने जैसा अहसास और झनझनाहट',
      'अंगूठे के आधार पर तेज दर्द, विशेषकर मोबाइल टाइपिंग या निचोड़ने की गतिविधि पर',
      'उंगली को मोड़ने के बाद सीधा करने में झटका लगना या अटक जाना (ट्रिगर फिंगर)',
      'हथेली के बल गिरने के बाद कलाई में तेज दर्द, विकृति और अत्यधिक सूजन'
    ],
    selfCare: [
      '// NEEDS DOCTOR REVIEW: Wear a neutral resting wrist splint during sleep to relieve median nerve pressure',
      '// NEEDS DOCTOR REVIEW: Take hourly rest breaks and perform tendon-gliding hand exercises during prolonged typing',
      '// NEEDS DOCTOR REVIEW: Apply warm water soaks in the morning to ease finger tendon stiffness',
    ],
    hindiSelfCare: [
      'रात के समय कलाई को सीधी रखने के लिए न्यूट्रल रिस्ट स्प्लिंट का उपयोग करें',
      'कलाई को अत्यधिक मोड़ने या भारी वजन उठाने वाले कार्यों में विराम लें',
      'दर्द और सूजन कम करने के लिए कलाई पर बर्फ की सिकाई करें',
      'कलाई की गतिशीलता और उंगलियों के लचीलेपन के लिए नियमित कोमल व्यायाम करें'
    ],
    surgicalProcedures: [
      {
        name: 'Carpal Tunnel & Trigger Finger Release',
        hindiName: 'कार्पल टनल एवं ट्रिगर फिंगर रिलीज',
        indication:
          'Severe nerve entrapment or painful finger locking unresponsive to non-surgical treatment (discharge in 2–3 hours).',
        hindiIndication:
          'कलाई की मीडियन नर्व का गंभीर दबाव (कार्पल टनल) या उंगलियों का अटकना (डे-केयर सर्जरी, 2-3 घंटे में छुट्टी)।',
        slug: 'carpal-tunnel-trigger-finger',
      },
      {
        name: "De Quervain's Tendon Decompression",
        indication:
          'Persistent thumb wrist sheath inflammation failing splints and injections.',
        slug: 'de-quervains-release',
      },
      {
        name: 'Distal Radius ORIF Volar Locking Plate',
        indication:
          'Displaced wrist joint fractures restoring exact radial height, tilt, and articular step-off.',
        slug: 'orif-locking-plates',
      },
    ],
    whenToConsult:
      '// NEEDS DOCTOR REVIEW: Consult if thumb muscle weakness develops, hand numbness disrupts sleep, or the wrist swells after an injury.',
    ctaText: 'Book Evaluation for Wrist & Hand',
    hindiWhenToConsult: 'यदि हाथ की उंगलियों में सुन्नपन निरंतर बना रहे, अंगूठे की पकड़ कमजोर हो जाए, या कलाई में चोट के बाद सूजन न उतरे, तो क्लिनिक में दिखाएं।',
    hindiCtaText: 'कलाई व हाथ के दर्द हेतु परामर्श बुक करें',
    doctorReviewFlag: true,
  },
  {
    id: 'ankle',
    name: 'Ankle & Foot',
    hindiName: 'टखना और पैर',
    badge: 'Ankle Fractures • Ligament Sprains • Heel Pain',
    hindiBadge: 'टखने का मोच • एंकल फ्रैक्चर • प्लांटर फैसीआइटिस',
    hindiSummary: 'टखने की मोच (लिगामेंट टियर), एड़ी का दर्द (प्लांटर फैसीआइटिस), अकिलीस टेंडिनाइटिस और एंकल फ्रैक्चर।',
    summary:
      'Ankle fractures, lateral ligament tears, chronic instability, Achilles tendinopathy, and plantar fasciitis.',
    symptoms: [
      '// NEEDS DOCTOR REVIEW: Severe first-step morning heel pain that eases slightly after walking (Plantar Fasciitis)',
      '// NEEDS DOCTOR REVIEW: Lateral ankle swelling, bruising, and tenderness following an inversion twisting injury',
      '// NEEDS DOCTOR REVIEW: Chronic ankle instability with recurrent "giving way" on uneven ground',
      '// NEEDS DOCTOR REVIEW: Achilles tendon tightness, morning stiffness, or sudden sharp pain in the calf during running',
    ],
    hindiSymptoms: [
      'पैर मुड़ने के बाद टखने के बाहरी हिस्से में तेज दर्द, नीलिमा (ब्रूजिंग) और तुरंत सूजन',
      'सुबह बिस्तर से उठकर पहला कदम जमीन पर रखते ही एड़ी में असहनीय चुभन भरा दर्द',
      'एड़ी के पिछले हिस्से में अकिलीस नस में चलने या दौड़ने पर खिंचाव व सूजन',
      'उबड़-खाबड़ जमीन पर चलते समय पैर का बार-बार लचक खाना या मुड़ जाना'
    ],
    selfCare: [
      '// NEEDS DOCTOR REVIEW: R.I.C.E. protocol (Rest, Ice, Compression, Elevation) immediately following an acute sprain',
      '// NEEDS DOCTOR REVIEW: Wear supportive shoes with silicone heel cushioning; avoid walking barefoot on hard floors',
      '// NEEDS DOCTOR REVIEW: Calf and plantar fascia stretching over a step or using a towel pull',
    ],
    hindiSelfCare: [
      'मोच आने पर तुरंत RICE नियम अपनाएं: Rest (आराम), Ice (बर्फ), Compression (क्रेप पट्टी), Elevation (पैर ऊंचा रखें)',
      'एड़ी के दर्द से राहत के लिए सिलिकॉन हील कुशन वाले मुलायम जूते पहनें और नंगे पैर न चलें',
      'सुबह उठने से पहले पिंडलियों और पैर के तलवे की स्ट्रेचिंग करें (तौलिए से पंजे को अपनी ओर खींचें)',
      'ठंडे पानी की बोतल को पैर के तलवे के नीचे रखकर 10 मिनट रोल करें'
    ],
    surgicalProcedures: [
      {
        name: 'Anatomical Ankle Fracture Fixation (ORIF Plates)',
        hindiName: 'एनाटोमिकल एंकल फ्रैक्चर फिक्सेशन व आर्थ्रोस्कोपी',
        indication:
          'Displaced ankle mortise fractures requiring rigid anatomic locking plate and syndesmotic stabilization.',
        hindiIndication:
          'टखने के जोड़ का विस्थापित फ्रैक्चर या गंभीर लिगामेंट टियर जिसके लिए लॉकिंग प्लेट्स द्वारा स्थिरीकरण आवश्यक हो।',
        slug: 'orif-locking-plates',
      },
      {
        name: 'Biological Injections & Custom Orthotic Profiling',
        indication:
          'Chronic plantar fasciopathy, Achilles tendinitis, and flat foot biomechanical offloading.',
      },
    ],
    whenToConsult:
      '// NEEDS DOCTOR REVIEW: Consult if you cannot take four weight-bearing steps immediately after an ankle roll, or if heel pain persists for more than 4 weeks.',
    ctaText: 'Book Evaluation for Ankle & Foot',
    hindiWhenToConsult: 'यदि चोट के बाद पैर पर 4 कदम भी चलना असंभव हो, टखने की सूजन 48 घंटे में कम न हो, या एड़ी का दर्द महीनों से ठीक न हो रहा हो, तो तुरंत डॉ. गौरव शर्मा से परामर्श लें।',
    hindiCtaText: 'टखने व पैर के दर्द हेतु परामर्श बुक करें',
    doctorReviewFlag: true,
  },
];

export const AREAS_OF_CARE: AreaOfCare[] = [
  {
    slug: 'knee-pain-joint-care',
    title: 'Knee Pain & Joint Care',
    hindiTitle: 'घुटने का दर्द और जोड़ संरक्षण',
    hindiShortSummary:
      'घुटने के पुराने ऑस्टियोआर्थराइटिस, कार्टिलेज के घिसाव और जोड़ों के दर्द के लिए व्यापक गैर-सर्जिकल व सर्जिकल मूल्यांकन।',
    hindiFullOverview: [
      'घुटने का दर्द लाखों वयस्कों को प्रभावित करता है, जो शुरुआती घिसाव से लेकर गंभीर ऑस्टियोआर्थराइटिस तक हो सकता है। हमारा चिकित्सकीय दृष्टिकोण विस्तृत शारीरिक परीक्षण और वजन वहन करने वाले डिजिटल एक्स-रे के माध्यम से घुटने की समस्याओं के सटीक कारण की पहचान करने पर केंद्रित है।',
      'हम जब तक संभव हो जोड़ संरक्षण को प्राथमिकता देते हैं—सर्जरी पर विचार करने से पहले देशी कार्टिलेज को बनाए रखने के लिए लक्षित मांसपेशियों का व्यायाम, जीवनशैली में बदलाव और बायो-इंजेक्शन का समन्वय करते हैं।',
    ],
    hindiWhoShouldConsult: [
      'वे मरीज जिन्हें सीढ़ियां चढ़ने, उकड़ू बैठने या थोड़ी दूर चलने पर भी घुटने में तेज दर्द होता है',
      'जिनके घुटने अंदर (varus) या बाहर (valgus) की तरफ झुकने या टेढ़े होने लगे हैं',
      'जो घुटने की लगातार सूजन, गर्माहट या सुबह की अकड़न से परेशान हैं',
      'वे मरीज जो निष्पक्ष व वस्तुनिष्ठ दूसरी राय (Second Opinion) चाहते हैं कि क्या वाकई सर्जरी आवश्यक है',
    ],
    hindiCommonQuestions: [
      'क्या ग्रेड 3 या 4 ऑस्टियोआर्थराइटिस में घुटना प्रत्यारोपण सर्जरी अनिवार्य है?',
      'क्या फिजियोथेरेपी और लक्षित इंजेक्शन मेरे घुटने के कार्टिलेज को बचा सकते हैं?',
      'डॉ. गौरव शर्मा कैसे निर्धारित करते हैं कि बिना सर्जरी उपचार अभी भी प्रभावी है?',
    ],
    hindiConservativeOptions: [
      'क्वाड्रिसेप्स और हैमस्ट्रिंग मांसपेशियों की मजबूती हेतु व्यायाम',
      'विस्कोसप्लीमेंटेशन (हयालूरोनिक एसिड जॉइंट इंजेक्शन)',
      'शुरुआती घिसाव में पीआरपी (प्लेटलेट-रिच प्लाज्मा) थेरेपी',
      'अनलोडर नी ब्रेस और जीवनशैली में एर्गोनोमिक सुधार',
    ],
    hindiSurgicalConsiderations: [
      'एकल-कम्पार्टमेंट घिसाव हेतु यूनिकॉन्डाइलर (आंशिक) नी रिप्लेसमेंट',
      'गंभीर बहु-कम्पार्टमेंट कार्टिलेज पतन हेतु टोटल नी रिप्लेसमेंट (TKR)',
    ],
    shortSummary:
      'Comprehensive non-surgical and surgical evaluation for knee arthritis, deformity, and chronic degenerative pain.',
    fullOverview: [
      'Knee joint pain affects millions of adults, ranging from early wear to advanced tricompartmental osteoarthritis. Our clinical approach focuses first on pinpointing the exact mechanical and biological cause of knee symptoms through thorough physical examination and weight-bearing digital X-rays.',
      'We prioritize joint preservation whenever viable—combining targeted muscle balance therapy, lifestyle optimization, viscosupplementation, and biological injections to preserve native cartilage before considering surgical options.',
    ],
    whoShouldConsult: [
      'Patients experiencing pain when climbing stairs, squatting, or walking short distances',
      'Individuals with visible inward (varus) or outward (valgus) bowing of the knee',
      'Anyone suffering from persistent knee swelling, warmth, or morning stiffness',
      'Patients seeking a clear, objective second opinion on whether surgery is truly indicated',
    ],
    commonQuestions: [
      'Is knee replacement surgery mandatory for Grade 3 or 4 osteoarthritis?',
      'Can physiotherapy and targeted injections preserve my knee joint cartilage?',
      'How does Dr. Gaurav Sharma determine whether conservative treatment is still effective?',
    ],
    conservativeOptions: [
      'Quadriceps and hamstring kinetic chain strengthening',
      'Viscosupplementation (hyaluronic acid joint injections)',
      'PRP (Platelet-Rich Plasma) therapy for early degeneration',
      'Unloader knee bracing and ergonomic lifestyle modifications',
    ],
    surgicalConsiderations: [
      'Unicondylar (Partial) Knee Replacement for single-compartment disease',
      'Total Knee Replacement for severe multi-compartment collapse',
    ],
    relatedSurgeries: ['total-knee-replacement', 'partial-knee-replacement'],
    relatedFaqIds: ['faq-tkr-recovery', 'faq-tkr-vs-uka'],
    iconName: 'Activity',
  },
  {
    slug: 'joint-replacement-surgeries',
    title: 'Joint Replacement Surgeries (TKR & THR)',
    hindiTitle: 'जोड़ प्रत्यारोपण सर्जरी (TKR और THR)',
    hindiShortSummary:
      'एनाटोमिकल अलाइनमेंट, ऊतक संरक्षण और सर्जरी के पहले दिन चलने (Day-1 Walking) हेतु आधुनिक घुटना व कूल्हा प्रत्यारोपण।',
    hindiFullOverview: [
      'जब जोड़ का कार्टिलेज पूरी तरह घिस जाता है, तो जोड़ प्रत्यारोपण दर्द से स्थायी राहत और सामान्य चाल लौटाने का सबसे प्रभावी उपाय है। डॉ. गौरव शर्मा अंतरराष्ट्रीय स्तर पर प्रमाणित बायो-कंपैटिबल इम्प्लांट्स और ऊतक-संरक्षण तकनीकों के साथ सर्जरी करते हैं।',
      'प्रत्येक प्रक्रिया मरीज की प्राकृतिक शारीरिक रचना के अनुसार प्री-ऑपरेटिव डिजिटल टेम्प्लेटिंग द्वारा नियोजित की जाती है, ताकि दोनों पैरों की लंबाई बराबर रहे और रिकवरी अत्यंत तेज हो।',
    ],
    hindiWhoShouldConsult: [
      'वे मरीज जिनका दैनिक चलना-फिरना हड्डियों के आपस में टकराने के गंभीर दर्द से बाधित हो चुका है',
      'दवाओं के बावजूद रात में दर्द के कारण नींद न आने से परेशान मरीज',
      'कूल्हे के एवस्कुलर नेक्रोसिस (AVN) से ग्रसित व्यक्ति',
      'बुजुर्ग मरीज जो जोड़ों की अत्यधिक जकड़न के कारण अपनी दिनचर्या में दूसरों पर निर्भर हो गए हैं',
    ],
    hindiCommonQuestions: [
      'आधुनिक नी और हिप इम्प्लांट कितने वर्षों तक चलते हैं?',
      'सर्जरी के कितने समय बाद मरीज अपने पैरों पर बिना सहारे चल सकता है?',
      'सर्जरी के बाद दर्द नियंत्रण के लिए कौन से आधुनिक प्रोटोकॉल अपनाए जाते हैं?',
    ],
    hindiConservativeOptions: [
      'बिना सर्जरी विकल्प केवल तब तक उपयोगी होते हैं जब तक जोड़ का ढांचा नष्ट न हुआ हो',
    ],
    hindiSurgicalConsiderations: [
      'सटीक संरेखण के साथ टोटल नी रिप्लेसमेंट (TKR)',
      'सिरेमिक बेयरिंग के साथ टोटल हिप रिप्लेसमेंट (THR)',
      'बुजुर्गों में फीमर गर्दन के फ्रैक्चर हेतु बाईपोलर हेमीआर्थ्रोप्लास्टी',
    ],
    shortSummary:
      'Primary knee and hip replacement engineered for anatomic alignment, tissue preservation, and Day-1 walking.',
    fullOverview: [
      'When articular cartilage is severely worn, joint replacement provides reliable, long-lasting relief from pain and restores upright mobility. Dr. Gaurav Sharma performs modern total knee and hip replacements using proven biocompatible implants and tissue-preserving exposures.',
      'Every procedure is individually planned through pre-operative digital templating to reconstruct the patient’s natural anatomy, restore equal limb length, and support rapid post-operative recovery.',
    ],
    whoShouldConsult: [
      'Patients whose everyday walking is severely restricted by bone-on-bone joint friction',
      'Individuals who experience persistent pain that disturbs sleep despite medication',
      'Patients with advanced avascular necrosis (AVN) of the hip',
      'Elderly individuals with painful joint stiffness limiting independent hygiene and life',
    ],
    commonQuestions: [
      'How many years do modern knee and hip implants last?',
      'How quickly will I be able to walk after a joint replacement?',
      'What pain management protocols are used to ensure comfortable early recovery?',
    ],
    conservativeOptions: [
      'Considered only until bone collapse or severe deformity prevents safe weight-bearing',
    ],
    surgicalConsiderations: [
      'Total Knee Replacement (TKR) with precision mechanical alignment',
      'Total Hip Replacement (THR) with ceramic bearings and delta heads',
      'Bipolar Hemiarthroplasty for fragility hip neck fractures',
    ],
    relatedSurgeries: [
      'total-knee-replacement',
      'total-hip-replacement',
      'bipolar-hemiarthroplasty',
    ],
    relatedFaqIds: ['faq-implant-longevity', 'faq-tkr-recovery', 'faq-hip-replacement-avn'],
    iconName: 'ShieldCheck',
  },
  {
    slug: 'complex-knee-revision',
    title: 'Complex Knee & Revision Surgeries',
    hindiTitle: 'जटिल घुटना एवं पुनरावलोकन सर्जरी',
    hindiShortSummary:
      'गंभीर विकृतियों, पुरानी असफल सर्जरी और हड्डी के नुकसान के लिए उन्नत रिकंस्ट्रक्टिव समाधान।',
    hindiFullOverview: [
      'घुटने की जटिल स्थितियां—जैसे 15-20 डिग्री से अधिक की गंभीर विकृति, अत्यधिक अकड़न, या पहले की गई सर्जरी के इम्प्लांट का ढीला होना—विशेषज्ञ सर्जिकल कौशल और मॉड्यूलर इम्प्लांट सिस्टम की मांग करती हैं।',
      'डॉ. शर्मा पुनरीक्षण (रिवीजन) मामलों का गहन अध्ययन करते हैं, संक्रमण की जांच करते हैं, और स्वस्थ हड्डी में नए इम्प्लांट को मजबूती से बैठाने के लिए विशेष मॉड्यूलर स्टेम व ऑगमेंट का उपयोग करते हैं।',
    ],
    hindiWhoShouldConsult: [
      'पूर्व में हुई घुटना सर्जरी के बाद भी लगातार दर्द या जोड़ में ढीलापन महसूस करने वाले मरीज',
      'घुटने में अत्यधिक टेढ़ापन या पुरानी चोट के कारण हड्डी की कमी वाले व्यक्ति',
      'पुराने इम्प्लांट के घिसने या ढीले होने का संदेह होने पर',
    ],
    hindiCommonQuestions: [
      'रिवीजन सर्जरी प्राथमिक सर्जरी से किस प्रकार भिन्न और जटिल होती है?',
      'हड्डी के नुकसान की भरपाई के लिए किन तकनीकों का प्रयोग किया जाता है?',
    ],
    hindiConservativeOptions: [
      'संरचनात्मक ढीलेपन में रूढ़िवादी उपचार सीमित होता है; गतिशीलता को सहारा देने हेतु ब्रेसिंग',
    ],
    hindiSurgicalConsiderations: [
      'मॉड्यूलर कंस्ट्रेंट और हिंज्ड रिवीजन नी सिस्टम',
      'अस्थि दोषों हेतु पोरस मेटल ऑगमेंट एवं स्टेम एक्सटेंशन',
    ],
    shortSummary:
      'Advanced reconstructive solutions for severe angular deformities, failed prior surgeries, and bone loss.',
    fullOverview: [
      'Complex knee presentations—such as severe fixed flexion contractures, angular deformities exceeding 15–20 degrees, and previously failed or loosened implants—require specialised reconstructive techniques and modular implant systems.',
      'Dr. Sharma evaluates revision cases with meticulous scrutiny, ruling out low-grade infection, establishing anatomical bone deficits, and employing modular stems and porous metal augments to anchor securely into healthy host bone.',
    ],
    whoShouldConsult: [
      'Patients with persistent pain or mechanical instability following an earlier knee replacement',
      'Individuals with severe bowing deformity, extreme stiffness, or bone defects from previous trauma',
      'Patients told their joint deformity is too complex for standard replacement',
    ],
    commonQuestions: [
      'What causes an earlier joint replacement to become loose or painful?',
      'Can a failed knee replacement be safely redone with good walking outcomes?',
      'How does the surgeon reconstruct bone that has been lost over time?',
    ],
    conservativeOptions: [
      'Protective functional bracing and medical optimization while planning definitive reconstruction',
    ],
    surgicalConsiderations: [
      'Constrained Condylar Knee (CCK) and rotating hinge revision systems',
      'Modular titanium metaphyseal sleeves, cones, and augments',
    ],
    relatedSurgeries: ['revision-joint-replacement', 'total-knee-replacement'],
    relatedFaqIds: ['faq-second-opinion', 'faq-implant-longevity'],
    iconName: 'Layers',
  },
  {
    slug: 'back-pain-spine-lumbar',
    title: 'Back Pain, Spine & Lumbar Stiffness',
    hindiTitle: 'कमर दर्द, रीढ़ और लम्बर जकड़न',
    hindiShortSummary:
      'साइटिका, स्लिप डिस्क, लम्बर कनाल स्टेनोसिस और रीढ़ की पुरानी अकड़न के लिए नैदानिक मूल्यांकन एवं लक्षित गैर-सर्जिकल उपचार।',
    hindiFullOverview: [
      'कमर का दर्द अधिकांशतः मांसपेशियों के खिंचाव, डिस्क के खिसकने या रीढ़ की नसों पर दबाव से उत्पन्न होता है। हमारा लक्ष्य बिना अनावश्यक सर्जरी के, सटीक शारीरिक परीक्षण और कोर स्ट्रेंथनिंग द्वारा 80% से अधिक मरीजों को सामान्य जीवन में वापस लाना है।',
    ],
    hindiWhoShouldConsult: [
      'कमर से पैर की उंगलियों तक बिजली जैसी झनझनाहट और दर्द (सायटिका) से पीड़ित लोग',
      'लंबे समय तक बैठने या आगे झुकने पर असहनीय दर्द का अनुभव करने वाले मरीज',
      'पैरों में सुन्नपन या कमजोरी महसूस करने वाले व्यक्ति',
    ],
    hindiCommonQuestions: [
      'क्या हर स्लिप डिस्क में ऑपरेशन की जरूरत होती है?',
      'कमर दर्द के लिए कौन से व्यायाम सबसे सुरक्षित हैं?',
    ],
    hindiConservativeOptions: [
      'कोर स्टेबिलाइजेशन और लम्बर फ्लेक्सिबिलिटी एक्सरसाइज',
      'लम्बर सपोर्ट बेल्ट और बैठने की मुद्रा (एर्गोनोमिक्स) में सुधार',
      'नसों की सूजन कम करने के लिए लक्षित दवाएं व थेरेपी',
    ],
    hindiSurgicalConsiderations: [
      'गंभीर न्यूरोलॉजिकल कमजोरी (पैर का पंजा लटकना) होने पर तत्काल स्पाइनल डिकंप्रेशन',
    ],
    shortSummary:
      'Systematic clinical and neurological workup for disc bulges, sciatica, lumbar spondylosis, and postural strain.',
    fullOverview: [
      'Back pain is one of the most frequent reasons patients visit an orthopaedic clinic. However, true surgical spine emergencies represent a small fraction of cases. The vast majority of back pain originates from muscular deconditioning, disc prolapse, or facet joint arthrosis.',
      'We conduct systematic neurological mapping, dermatomal testing, and posture analysis to formulate targeted non-operative pathways that relieve pain without unnecessary surgery.',
    ],
    whoShouldConsult: [
      'Individuals with shooting pain down one or both legs (sciatica)',
      'Office workers and drivers suffering from persistent dull aching across the lower back',
      'Elderly patients whose legs feel heavy and cramp after walking short distances (claudication)',
      'Young adults experiencing prolonged morning back stiffness',
    ],
    commonQuestions: [
      'Does a slip disc always require surgical intervention?',
      'What are red-flag spinal symptoms requiring immediate medical evaluation?',
      'How does core muscle conditioning prevent recurrent low back episodes?',
    ],
    conservativeOptions: [
      'Systematic core stability conditioning (transversus abdominis and multifidus training)',
      'Ergonomic workstation restructuring and posture correction',
      'Targeted anti-inflammatory therapy and supervised physiotherapy',
    ],
    surgicalConsiderations: [
      'Referred for spinal surgical consultation when progressive motor weakness or cauda equina signs appear',
    ],
    relatedSurgeries: [],
    relatedFaqIds: ['faq-sciatica-disc', 'faq-second-opinion'],
    iconName: 'Compass',
  },
  {
    slug: 'minimally-invasive-arthroscopy',
    title: 'Minimally Invasive Arthroscopy (Knee & Shoulder)',
    hindiTitle: 'कीहोल आर्थ्रोस्कोपी (घुटना एवं कंधा)',
    hindiShortSummary:
      'कीहोल दूरबीन पद्धति द्वारा जोड़ों के अंदर लिगामेंट टियर, कार्टिलेज डैमेज और फ्रोजन शोल्डर का सटीक उपचार।',
    hindiFullOverview: [
      'आर्थ्रोस्कोपी आधुनिक आर्थोपेडिक्स की एक क्रांतिकारी तकनीक है जिसमें छोटे छिद्रों के माध्यम से हाई-डेफिनिशन कैमरा डालकर जोड़ के अंदरूनी हिस्सों की जांच और मरम्मत की जाती है। इसमें आसपास की मांसपेशियों को नुकसान नहीं पहुंचता, जिससे दर्द नगण्य रहता है और रिकवरी अत्यंत तेज होती है।',
    ],
    hindiWhoShouldConsult: [
      'घुटने या कंधे में चोट के बाद अचानक जोड़ लॉक होना या अटक जाना',
      'चलते समय या खेलकूद के दौरान घुटने का लड़खड़ाना (Laxity)',
      'कंधे को ऊपर उठाने या घुमाने में गंभीर लाचारी व दर्द',
    ],
    hindiCommonQuestions: [
      'आर्थ्रोस्कोपी के बाद सामान्य काम पर कब लौटा जा सकता है?',
      'क्या आर्थ्रोस्कोपी में बड़ा चीरा या टांके लगते हैं?',
    ],
    hindiConservativeOptions: [
      'मांसपेशियों का विशेष रिहैबिलिटेशन और सूजन-रोधी दवाएं',
    ],
    hindiSurgicalConsiderations: [
      'एसीएल / पीसीएल लिगामेंट रिकंस्ट्रक्शन',
      'मेनिस्कस रिपेयर एवं पार्सल मेनिसेक्टोमी',
      'शोल्डर रोटेटर कफ रिपेयर व लैब्रल स्टेबिलाइजेशन',
    ],
    shortSummary:
      'Keyhole diagnostic and corrective joint surgery using high-definition cameras and pencil-sized ports.',
    fullOverview: [
      'Arthroscopy allows complete internal visualization of joint structures through pencil-sized puncture incisions. By avoiding large muscle-dividing cuts, arthroscopy preserves native anatomy, lowers infection rates, and enables same-day or 24-hour discharge.',
      'Dr. Sharma utilizes modern HD arthroscopic towers to repair torn ligaments, restitch meniscus cartilage, and decompress impinged tendons with micro-precision.',
    ],
    whoShouldConsult: [
      'Athletes and active individuals experiencing joint catching, clicking, or locking',
      'Patients with MRI-confirmed torn ACL, PCL, or meniscus cartilage',
      'Patients with chronic shoulder impingement or recurrent dislocations',
    ],
    commonQuestions: [
      'How small are the incisions made during keyhole arthroscopy?',
      'Will I be able to walk or move my joint on the same day as the procedure?',
      'Why is arthroscopic meniscus repair preferred over simply removing the cartilage?',
    ],
    conservativeOptions: [
      'Pre-operative joint conditioning and swelling reduction',
    ],
    surgicalConsiderations: [
      'Arthroscopic ACL & PCL Reconstruction with autologous hamstring graft',
      'Meniscus preservation and all-inside repair',
      'Shoulder rotator cuff repair and Bankart labral stabilization',
    ],
    relatedSurgeries: [
      'acl-pcl-reconstruction',
      'meniscus-repair',
      'shoulder-arthroscopy',
    ],
    relatedFaqIds: ['faq-acl-return-to-sports', 'faq-daycare-surgery'],
    iconName: 'Maximize2',
  },
  {
    slug: 'shoulder-rotator-cuff',
    title: 'Shoulder & Rotator Cuff',
    hindiTitle: 'कंधा और रोटेटर कफ',
    hindiShortSummary:
      'कंधे के टेंडन टियर, बार-बार कंधा उतरने और फ्रोजन शोल्डर की संपूर्ण देखभाल व रिहैब।',
    hindiFullOverview: [
      'कंधे का जोड़ शरीर का सबसे अधिक गतिमान जोड़ है। रोटेटर कफ मांसपेशियों में खिंचाव या फटने से हाथ ऊपर उठाने में अत्यधिक दर्द होता है। सटीक जांच द्वारा टेंडन की स्थिति तय कर गैर-सर्जिकल व दूरबीन विधियों से इलाज किया जाता है।',
    ],
    hindiWhoShouldConsult: [
      'बाल संवारने, शर्ट पहनने या पीठ पीछे हाथ ले जाने में असमर्थ मरीज',
      'रात में करवट लेकर सोने पर कंधे में असहनीय दर्द होना',
      'हल्की चोट के बाद भी कंधा अपनी जगह से खिसक जाना (रिकरेंट डिसलोकेशन)',
    ],
    hindiCommonQuestions: [
      'फ्रोजन शोल्डर और रोटेटर कफ टियर में क्या अंतर है?',
      'क्या कंधे के दर्द में फिजियोथेरेपी से पूरा फायदा संभव है?',
    ],
    hindiConservativeOptions: [
      'सुपाइन और पेंडुलम मोबिलाइजेशन एक्सरसाइज',
      'सबएक्रोमियल स्पेस में लक्षित एंटी-इन्फ्लेमेटरी इंजेक्शन',
    ],
    hindiSurgicalConsiderations: [
      'आर्थ्रोस्कोपिक रोटेटर कफ री-एंकरिंग',
      'बैंकर्ट रिपेयर (कंधा उतरने का समाधान)',
    ],
    shortSummary:
      'Diagnostic evaluation and arthroscopic restoration for rotator cuff tears, frozen shoulder, and recurrent dislocations.',
    fullOverview: [
      'The shoulder is the most mobile joint in the human body, relying heavily on a dynamic envelope of tendons called the rotator cuff. Tears or chronic impingement severely restrict overhead motion, disturb sleep, and cause progressive weakness.',
      'Our clinical assessment differentiates between adhesive capsulitis (frozen shoulder), calcific tendinitis, labral tears, and structural cuff tears—directing each patient to either targeted mobilization or arthroscopic repair.',
    ],
    whoShouldConsult: [
      'Patients unable to sleep comfortably on their shoulder due to deep aching pain',
      'Individuals with sharp pain when reaching overhead or behind the back',
      'Athletes or young patients whose shoulder has slipped out of socket',
      'Diabetic patients suffering from progressive frozen shoulder stiffness',
    ],
    commonQuestions: [
      'How do I distinguish between a frozen shoulder and a torn rotator cuff?',
      'Can a torn rotator cuff heal without surgery?',
      'What is the recovery protocol following arthroscopic shoulder tendon repair?',
    ],
    conservativeOptions: [
      'Gentle capsular stretching and passive pendulum protocols',
      'Targeted subacromial injections to break the inflammatory pain cycle',
      'Rotator cuff strengthening exercises using resistance bands',
    ],
    surgicalConsiderations: [
      'Arthroscopic double-row rotator cuff repair',
      'Bankart repair for recurrent shoulder instability',
    ],
    relatedSurgeries: ['shoulder-arthroscopy'],
    relatedFaqIds: ['faq-shoulder-cuff-pain', 'faq-second-opinion'],
    iconName: 'RotateCw',
  },
  {
    slug: 'sports-injuries-acl-ligaments',
    title: 'Sports Injuries & ACL/Ligaments',
    hindiTitle: 'खेल चोटें एवं एसीएल/लिगामेंट पुनर्निर्माण',
    hindiShortSummary:
      'एथलीटों और सक्रिय व्यक्तियों के लिए खेल में सुरक्षित वापसी हेतु बायोमैकेनिकल रिहैब एवं लिगामेंट रीकंस्ट्रक्शन।',
    hindiFullOverview: [
      'दौड़ते, मुड़ते या कूदते समय घुटने या टखने में आई चोटें लिगामेंट को नुकसान पहुंचा सकती हैं। डॉ. शर्मा आधुनिक स्पोर्ट्स मेडिसिन सिद्धांतों के अनुसार खिलाड़ियों की गतिशीलता और स्थिरता की पूर्ण बहाली सुनिश्चित करते हैं।',
    ],
    hindiWhoShouldConsult: [
      'चोट के समय घुटने में \'पॉप\' की आवाज आना और तुरंत अत्यधिक सूजन होना',
      'दिशा बदलते समय जोड़ का संतुलन बिगड़ना या लाचारी महसूस होना',
    ],
    hindiCommonQuestions: [
      'एसीएल सर्जरी के बाद मैदान पर खेल में कब वापसी संभव है?',
      'क्या बिना सर्जरी के लिगामेंट टियर अपने आप जुड़ सकता है?',
    ],
    hindiConservativeOptions: [
      'प्रोप्रीयोसेप्टिव न्यूरोमस्कुलर ट्रेनिंग और स्ट्रेंथनिंग',
      'स्पोर्ट्स फंक्शनल ब्रेसिंग',
    ],
    hindiSurgicalConsiderations: [
      'एनाटोमिकल एसीएल / पीसीएल रिकंस्ट्रक्शन',
    ],
    shortSummary:
      'Rapid sports triage, ligament reconstruction, and functional criteria-based return-to-sport programs.',
    fullOverview: [
      'Sports trauma—whether from competitive athletics, gym workouts, or recreational activities—demands swift, precise clinical evaluation to prevent secondary joint damage. Ligament tears in the knee and ankle destabilize the joint and, if left unaddressed, accelerate cartilage wear.',
      'We combine clinical stability testing with magnetic resonance imaging (MRI) correlation to build clear return-to-play roadmaps balancing biological healing with muscular retraining.',
    ],
    whoShouldConsult: [
      'Active individuals who heard a "pop" in the knee accompanied by immediate swelling',
      'Patients whose knee feels unstable or gives way when turning or pivoting',
      'Athletes with recurrent ankle sprains or persistent heel and tendon pain',
    ],
    commonQuestions: [
      'Can an athlete return to competitive sports after an ACL reconstruction?',
      'Why is delaying treatment for a torn ACL dangerous for the meniscus?',
      'What tests determine when an athlete is safe to return to the field?',
    ],
    conservativeOptions: [
      'Neuromuscular training and proprioceptive balance drills',
      'Functional sports knee and ankle bracing',
    ],
    surgicalConsiderations: [
      'Anatomical single-bundle or double-bundle ACL reconstruction',
      'Multi-ligament knee reconstruction (PCL/MCL/LCL)',
    ],
    relatedSurgeries: ['acl-pcl-reconstruction', 'meniscus-repair'],
    relatedFaqIds: ['faq-acl-return-to-sports'],
    iconName: 'Zap',
  },
  {
    slug: 'fracture-trauma-management',
    title: 'Fracture Care & Trauma Management',
    hindiTitle: 'फ्रैक्चर एवं ट्रॉमा प्रबंधन',
    hindiShortSummary:
      'हाथ, पैर व जोड़ों के जटिल फ्रैक्चर का आधुनिक लॉकिंग प्लेट्स और क्लोज्ड नेलिंग द्वारा जैविक स्थिरीकरण।',
    hindiFullOverview: [
      'दुर्घटना या गिरने से टूटी हड्डियों को सही संरेखण में जोड़ना आवश्यक है ताकि हड्डी जल्दी जुड़े और भविष्य में जोड़ में विकृति न आए। हम न्यूनतम ऊतक क्षति वाले जैविक स्थिरीकरण को प्राथमिकता देते हैं।',
    ],
    hindiWhoShouldConsult: [
      'चोट के बाद अचानक अंग में विकृति, असहनीय दर्द और वजन न रख पाना',
      'पहले कराए गए प्लास्टर या सर्जरी के बाद हड्डी का सही से न जुड़ना (Non-union)',
    ],
    hindiCommonQuestions: [
      'हड्डी जुड़ने में सामान्यतः कितना समय लगता है?',
      'क्या फ्रैक्चर में हमेशा सर्जरी की आवश्यकता होती है?',
    ],
    hindiConservativeOptions: [
      'अविस्थापित फ्रैक्चर में आधुनिक फाइबरग्लास कास्ट एवं स्प्लिंट',
    ],
    hindiSurgicalConsiderations: [
      'ओआरआईएफ (ORIF) एनाटोमिकल लॉकिंग प्लेट्स',
      'क्लोज्ड इंटरलॉकिंग इंट्रामेडुलरी नेलिंग',
    ],
    shortSummary:
      'Rigid internal fixation and biological long-bone nailing for complex fractures, ensuring rapid upright healing.',
    fullOverview: [
      'Bone fractures demand immediate, stable anatomical realignment to enable early movement and prevent long-term joint stiffness. Outdated prolonged plaster casts often lead to joint contractures, muscle wasting, and delayed bone healing.',
      'Dr. Sharma applies modern AO principles of fracture fixation—using anatomical locking plates for joint-surface fractures and closed intramedullary nails for long bone shafts—protecting the biological blood supply so patients can stand and mobilize early.',
    ],
    whoShouldConsult: [
      'Patients who suffered a bone fracture in a road traffic accident, fall, or sports injury',
      'Elderly individuals with fragility hip, wrist, or spine compression fractures',
      'Patients with ununited fractures (non-union) or crooked healing (mal-union) from previous treatment',
    ],
    commonQuestions: [
      'Why is early surgery and standing preferred over prolonged bed rest for elderly hip fractures?',
      'What is the difference between an internal locking plate and closed intramedullary nailing?',
      'Do metal implants need to be removed after the bone has healed?',
    ],
    conservativeOptions: [
      'Plaster cast immobilization for undisplaced, stable wrist or ankle fractures',
    ],
    surgicalConsiderations: [
      'Intra-articular open reduction and internal fixation (ORIF) with locking plates',
      'Closed interlocking nailing for femur and tibia fractures',
      'Bipolar hemiarthroplasty for elderly femoral neck fractures',
    ],
    relatedSurgeries: [
      'orif-locking-plates',
      'interlocking-nailing',
      'bipolar-hemiarthroplasty',
    ],
    relatedFaqIds: ['faq-fracture-healing', 'faq-elderly-fractures'],
    iconName: 'Crosshair',
  },
  {
    slug: 'rehabilitation-mobility-restoration',
    title: 'Rehabilitation & Mobility Restoration',
    hindiTitle: 'पुनर्वास एवं गतिशीलता बहाली',
    hindiShortSummary:
      'सर्जरी या चोट के बाद जोड़ों की पूरी गति, मांसपेशियों की शक्ति और स्वतंत्र चाल लौटाने हेतु संरचित रिहैब प्रोटोकॉल।',
    hindiFullOverview: [
      'सफल ऑर्थोपेडिक उपचार केवल सर्जरी या दवा तक सीमित नहीं है, बल्कि मरीज के अपनी सामान्य दिनचर्या में लौटने पर पूर्ण होता है। हम हर मरीज के लिए व्यक्तिगत पुनर्वास योजना प्रदान करते हैं।',
    ],
    hindiWhoShouldConsult: [
      'सर्जरी के बाद जोड़ में अकड़न या चलने में लड़खड़ाहट महसूस करने वाले मरीज',
      'बुजुर्ग व्यक्ति जो संतुलन बिगड़ने या गिरने के डर से चलने में हिचकिचाते हैं',
    ],
    hindiCommonQuestions: [
      'सर्जरी के बाद फिजियोथेरेपी कितने दिनों तक आवश्यक होती है?',
      'घर पर कौन से व्यायाम सुरक्षित रूप से किए जा सकते हैं?',
    ],
    hindiConservativeOptions: [
      'चरणबद्ध आइसोमेट्रिक एवं आइसोटोनिक व्यायाम',
      'चाल सुधार (Gait Training) एवं बैलेंस थेरेपी',
    ],
    hindiSurgicalConsiderations: [
      'रिहैब एक गैर-सर्जिकल प्रक्रिया है जो सर्जिकल परिणामों को उत्कृष्ट बनाती है',
    ],
    shortSummary:
      'Physiotherapy integration, gait retraining, and recovery milestone tracking for lifelong joint health.',
    fullOverview: [
      'Surgery or medical therapy is only the first step in orthopaedic recovery; restoring full muscle strength, joint flexibility, and confident walking completes the healing process.',
      'Our clinic coordinates closely with certified physiotherapists to guide patients through structured, stage-specific recovery milestones. Every patient receives customized exercise guidance suited to their age, bone quality, and daily functional goals.',
    ],
    whoShouldConsult: [
      'Patients recovering from joint replacement, ligament repair, or fracture fixation',
      'Individuals suffering from prolonged post-injury joint stiffness or muscle weakness',
      'Seniors seeking to improve balance, prevent falls, and maintain independent walking',
    ],
    commonQuestions: [
      'How long does physiotherapy need to continue after knee replacement surgery?',
      'What exercises can be safely performed at home without special equipment?',
      'How can elderly family members prevent domestic slip-and-fall injuries?',
    ],
    conservativeOptions: [
      'Structured home exercise regimens with digital visual guides',
      'Supervised gait retraining and walking aid weaning',
      'Balance and proprioceptive stability conditioning',
    ],
    surgicalConsiderations: [],
    relatedSurgeries: ['total-knee-replacement', 'acl-pcl-reconstruction'],
    relatedFaqIds: ['faq-tkr-recovery', 'faq-elderly-fractures'],
    iconName: 'HeartPulse',
  },
];
