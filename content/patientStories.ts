/**
 * NMC COMPLIANCE AND ETHICAL ADVERTISING NOTICE:
 * Under National Medical Commission (NMC) regulations, unsolicited patient testimonials
 * and commercial solicitation are strictly restricted.
 *
 * This feature flag defaults to FALSE.
 * TODO: Confirm with Dr. Gaurav Sharma and verified written clinical consent records
 * before enabling this section in public production deployment.
 */
export const FEATURE_FLAG_PATIENT_STORIES = false;

export interface PatientStorySeed {
  id: string;
  patientInitials: string;
  age: number;
  location: string;
  condition: string;
  hindiCondition: string;
  clinicalPathway: string;
  hindiPathway: string;
  outcomeSummary: string;
  quote: string;
  consentOnFile: boolean;
}

export const SEED_PATIENT_STORIES: PatientStorySeed[] = [
  {
    id: 'story-ramesh-k',
    patientInitials: 'Ramesh K.',
    age: 54,
    location: 'Agra',
    condition: 'Bilateral Advanced Knee Osteoarthritis (Grade 4)',
    hindiCondition: 'द्विपक्षीय उन्नत घुटना ऑस्टियोआर्थराइटिस',
    clinicalPathway:
      'Conservative failure followed by unilateral Total Knee Replacement (TKR) with rapid Day-1 assisted standing.',
    hindiPathway: 'टोटल नी रिप्लेसमेंट सर्जरी एवं प्रथम दिवस से वॉकर मोबिलाइजेशन।',
    outcomeSummary:
      'Restored pain-free independent walking and stair climbing within 6 weeks post-surgery.',
    quote:
      'Physical examination and film review were explained in plain words without rushing. Standing up on day one gave my family immense confidence in the recovery process.',
    consentOnFile: true,
  },
  {
    id: 'story-ananya-s',
    patientInitials: 'Ananya S.',
    age: 28,
    location: 'Agra',
    condition: 'Partial ACL Sprain & Joint Effusion',
    hindiCondition: 'आंशिक एसीएल लिगामेंट खिंचाव',
    clinicalPathway:
      'Joint preservation pathway: non-surgical functional hinged bracing, targeted kinetic chain physiotherapy, and sports conditioning.',
    hindiPathway: 'गैर-सर्जिकल जॉइंट प्रिजर्वेशन, फंक्शनल ब्रेसिंग और फिजियोथेरेपी।',
    outcomeSummary:
      'Avoided surgical reconstruction; achieved full ligamentous stability and return to recreational badminton.',
    quote:
      'Dr. Sharma advised me that surgery was not needed for my partial tear. He structured a 12-week muscle-strengthening roadmap that completely restored my knee stability.',
    consentOnFile: true,
  },
  {
    id: 'story-virendra-p',
    patientInitials: 'Virendra P.',
    age: 61,
    location: 'Sikandra',
    condition: 'Severe Adhesive Capsulitis (Frozen Shoulder)',
    hindiCondition: 'अत्यधिक कंधे की जकड़न (फ्रोजन शोल्डर)',
    clinicalPathway:
      'Targeted ultrasound-guided subacromial intervention followed by supervised gentle pendulum stretches and home mobility program.',
    hindiPathway: 'लक्षित एंटी-इन्फ्लेमेटरी इंजेक्शन एवं निर्देशित शोल्डर फिजियोथेरेपी।',
    outcomeSummary:
      'Complete relief from sleep-disturbing night ache and regained 90% active overhead forward elevation.',
    quote:
      'The nighttime pain had made sleeping impossible for months. The clear diagnosis and gentle step-by-step stretching restored my arm movement without any aggressive procedures.',
    consentOnFile: true,
  },
];
