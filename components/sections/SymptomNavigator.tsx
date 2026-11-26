'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { SYMPTOM_REGIONS } from '@/content/conditions';
import { PLATE_FRONT_BASE64, PLATE_BACK_BASE64 } from '@/content/anatomyPlates';
import { AnimatePresence, motion } from 'motion/react';
import {
  Activity,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  Stethoscope,
  ScanLine,
  ArrowRight,
  MessageSquare,
  Search,
  Bookmark,
  Plus,
  Minus,
  RotateCcw,
  Printer,
  HelpCircle,
  X,
  Check,
  Compass,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { CLINIC_CONTACT } from '@/lib/clinic';

type ViewMode = 'front' | 'back';

interface AnatomyData {
  short: string;
  hindiShort: string;
  bones: string[];
  hindiBones: string[];
  overview: string;
  hindiOverview: string;
  movement: string;
  hindiMovement: string;
  clue: string;
  hindiClue: string;
  front: number[]; // [leftX, y, rightX?]
  back: number[];
  iconPath: string;
}

const ANATOMY_REGIONS: Record<string, AnatomyData> = {
  neck: {
    short: 'Neck',
    hindiShort: 'गर्दन',
    bones: ['Cervical vertebrae (C1–C7)', 'Atlas', 'Axis', 'Brachial Plexus'],
    hindiBones: ['सर्वाइकल कशेरुकाएं (C1–C7)', 'एटलस', 'एक्सिस', 'ब्रेकियल प्लेक्सस'],
    overview:
      'Seven cervical vertebrae form the neck. The upper two (atlas & axis) support the skull and supply multi-axial rotational head turn.',
    hindiOverview:
      'सात सर्वाइकल कशेरुकाएं गर्दन की रीढ़ बनाती हैं। शीर्ष दो कशेरुकाएं (एटलस और एक्सिस) खोपड़ी का भार संभालती हैं और सिर को चारों तरफ घुमाने में मदद करती हैं।',
    movement:
      'Turning to look over your shoulder uses rotation in the cervical spine. The atlantoaxial joint supplies roughly 50% of that total rotation.',
    hindiMovement:
      'कंधे के पीछे देखने के लिए सिर घुमाना सर्वाइकल रीढ़ के रोटेशन से होता है। एटलैंटोएक्सियल जोड़ इस रोटेशन का लगभग 50% हिस्सा प्रदान करता है।',
    clue: 'Which region contains the atlas, axis, and cervical nerve roots?',
    hindiClue: 'शरीर का कौन सा हिस्सा सिर का भार संभालता है और जिसमें C1–C7 नसों की जड़ें होती हैं?',
    front: [0.456, 0.166],
    back: [0.493, 0.158],
    iconPath: 'M8 3c1 2 1 4 0 6m8-6c-1 2-1 4 0 6M8 9c2 2 6 2 8 0M9 12v8m6-8v8M9 16h6',
  },
  shoulder: {
    short: 'Shoulder',
    hindiShort: 'कंधा',
    bones: ['Humerus head', 'Scapula (Glenoid)', 'Clavicle', 'Rotator cuff'],
    hindiBones: ['ह्यूमरस हेड (बांह की हड्डी)', 'स्कैपुला (ग्लेनॉइड)', 'हंसली (क्लैविक्ल)', 'रोटेटर कफ'],
    overview:
      'The spherical humeral head rests in the shallow glenoid socket of the scapula. Four rotator cuff muscles stabilize and power arm elevation.',
    hindiOverview:
      'गोलाकार ह्यूमरल हेड कंधे की उथली ग्लेनॉइड सॉकेट में बैठता है। चार रोटेटर कफ मांसपेशियां और टेंडन हाथ को ऊपर उठाने और घुमाने में स्थिरता प्रदान करते हैं।',
    movement:
      'Reaching overhead for high shelves requires synchronized glenohumeral elevation and upward rotation of the scapula.',
    hindiMovement:
      'ऊंचाई से सामान उतारने के लिए ग्लेनोह्यूमरल जॉइंट और स्कैपुला की समन्वित गति की आवश्यकता होती है।',
    clue: 'Which region features a shallow socket dynamically stabilized by the rotator cuff?',
    hindiClue: 'शरीर का कौन सा जोड़ अत्यधिक गतिशील बॉल-एंड-सॉकेट है जिसे रोटेटर कफ सहारा देता है?',
    front: [0.25, 0.211, 0.65],
    back: [0.21, 0.186, 0.746],
    iconPath: 'M4 13c1-5 4-8 8-8s7 3 8 8M4 13l3 5m13-5-3 5M7 18h10M12 5v6',
  },
  elbow: {
    short: 'Elbow',
    hindiShort: 'कोहनी',
    bones: ['Humerus', 'Radius', 'Ulna (Olecranon)'],
    hindiBones: ['ह्यूमरस', 'रेडियस', 'अल्ना (ओलेक्रैनन)'],
    overview:
      'The distal humerus articulates with the radius and ulna. Proximal radioulnar joints allow rotational forearm pronation and supination.',
    hindiOverview:
      'बांह की निचली ह्यूमरस हड्डी फोरआर्म की रेडियस और अल्ना से जुड़ती है। रेडियोअलनर जोड़ हथेली को ऊपर और नीचे मोड़ने की अनुमति देते हैं।',
    movement:
      'Lifting a glass toward your mouth flexes the humeroulnar joint, while turning the palm upward engages radioulnar supination.',
    hindiMovement:
      'पानी का गिलास मुंह तक ले जाने में कोहनी का जोड़ मुड़ता है, जबकि हथेली को सीधा करने में फोरआर्म घूमता है।',
    clue: 'Which joint flexes to bring an object toward the chest and rotates forearm palms up?',
    hindiClue: 'हाथ को सीने की ओर मोड़ने और हथेली को ऊपर की ओर घुमाने में कौन सा जोड़ कार्य करता है?',
    front: [0.168, 0.376, 0.72],
    back: [0.16, 0.363, 0.81],
    iconPath: 'M5 4l5 7-2 3 4 6m7-16-5 7 2 3-4 6',
  },
  wrist: {
    short: 'Wrist & Hand',
    hindiShort: 'कलाई व हाथ',
    bones: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Median nerve'],
    hindiBones: ['कार्पल हड्डियां (8)', 'मेटाकार्पल्स', 'फैलेंजेस (उंगलियां)', 'मीडियन नर्व'],
    overview:
      'Eight small carpal bones form the flexible wrist arch. Digit joints work in coordinated kinetic chains for power grip and precision pincer grasp.',
    hindiOverview:
      'आठ छोटी कार्पल हड्डियां कलाई का लचीला आर्च बनाती हैं। उंगलियों के जोड़ मिलकर मजबूत पकड़ और महीन पिंचर ग्रिप बनाते हैं।',
    movement:
      'Turning a door key brings the thumb into opposition across the palm to firmly pinch against the index fingertip.',
    hindiMovement:
      'चाबी घुमाने या कलम पकड़ने के लिए अंगूठा हथेली के आर-पार जाकर तर्जनी उंगली से मजबूती से मिलता है।',
    clue: 'Where do eight carpal bones and finger phalanges work together for grip?',
    hindiClue: 'हाथ की बारीक पकड़ और ग्रिप के लिए कौन सी आठ छोटी हड्डियां और उंगलियों के जोड़ मिलकर काम करते हैं?',
    front: [0.155, 0.513, 0.8],
    back: [0.125, 0.511, 0.824],
    iconPath: 'M9 3v8m3-9v8m3-7v7m3-4v8l-4 6H9l-4-7 2-3 2 2',
  },
  spine: {
    short: 'Lower Back',
    hindiShort: 'निचली कमर',
    bones: ['L1–L5 Lumbar vertebrae', 'Intervertebral discs', 'Facet joints', 'Sacrum'],
    hindiBones: ['L1–L5 लम्बर कशेरुकाएं', 'डिस्क', 'फैसेट जॉइंट्स', 'सेक्रम'],
    overview:
      'The lumbar spine supports axial body weight while enabling flexion, extension, and lateral bending via hydrated shock-absorbing intervertebral discs.',
    hindiOverview:
      'लम्बर रीढ़ शरीर के ऊपरी हिस्से का भार वहन करती है और डिस्क के कुशन द्वारा झुकने, मुड़ने और लचीलेपन में मदद करती है।',
    movement:
      'Bending forward to lift an object combines segmental lumbar vertebral flexion with pelvic anterior tilt at the hip joints.',
    hindiMovement:
      'जमीन से सामान उठाने के लिए आगे झुकने में लम्बर रीढ़ का घुमाव और कूल्हे का लचीलापन एक साथ काम करता है।',
    clue: 'Which region contains five major load-bearing vertebrae and cushion discs?',
    hindiClue: 'शरीर के किस हिस्से में भार संभालने वाली पांच प्रमुख कशेरुकाएं और शॉक-एब्जॉर्बर डिस्क होती हैं?',
    front: [0.454, 0.405],
    back: [0.495, 0.38],
    iconPath: 'M12 2v20M8 5c2 1 6 1 8 0M8 9c2 1 6 1 8 0M8 13c2 1 6 1 8 0M8 17c2 1 6 1 8 0',
  },
  hip: {
    short: 'Hip Joint',
    hindiShort: 'कूल्हा',
    bones: ['Femoral head', 'Acetabulum', 'Pelvic bone', 'Labrum'],
    hindiBones: ['फीमर हेड', 'एसिटाबुलम सॉकेट', 'पेल्विक हड्डी', 'लेब्रम'],
    overview:
      'A deep ball-and-socket synovial joint transmitting upper-body gravitational loads to the lower extremities with high intrinsic stability.',
    hindiOverview:
      'एक गहरा और मजबूत बॉल-एंड-सॉकेट जोड़ जो शरीर के ऊपरी वजन को पैरों में स्थानांतरित करता है और प्राकृतिक स्थिरता देता है।',
    movement:
      'Climbing bus stairs or stepping over obstacles flexes and externally rotates the hip to lift the thigh cleanly.',
    hindiMovement:
      'बस की सीढ़ियां चढ़ने या कदम आगे बढ़ाने में कूल्हा मुड़ता है और जांघ को ऊपर उठाता है।',
    clue: 'Which ball-and-socket joint fits the femoral head into the deep acetabular cup?',
    hindiClue: 'कौन सा गहरा बॉल-एंड-सॉकेट जोड़ जांघ की हड्डी को पेल्विस कप में स्थिर रूप से जोड़ता है?',
    front: [0.324, 0.49, 0.585],
    back: [0.304, 0.486, 0.677],
    iconPath: 'M6 5c-1 4 1 7 4 8l2 2 2-2c3-1 5-4 4-8M8 13l-1 6m9-6 1 6M9 13l3-2 3 2',
  },
  knee: {
    short: 'Knee Joint',
    hindiShort: 'घुटना',
    bones: ['Distal Femur', 'Proximal Tibia', 'Patella', 'Medial & Lateral Menisci'],
    hindiBones: ['डिस्टल फीमर', 'प्रॉक्सिमल टिबिया', 'पटेला (कटोरी)', 'मीडियल व लेटरल मेनिस्कस'],
    overview:
      'The largest weight-bearing hinge joint in the body. Two fibrocartilaginous menisci absorb shocks, and the patella maximizes quadriceps extension leverage.',
    hindiOverview:
      'शरीर का सबसे बड़ा वजन उठाने वाला हिंज जोड़। दो मेनिस्कस कार्टिलेज झटके सोखते हैं और पटेला हड्डी पैर को सीधा करने की ताकत बढ़ाती है।',
    movement:
      'Rising from a chair or climbing stairs activates the quadriceps to forcefully extend the knee joint against gravity.',
    hindiMovement:
      'कुर्सी से उठने या सीढ़ियां चढ़ने में जांघ की मांसपेशियां घुटने के जोड़ को सीधा करने के लिए खिंचती हैं।',
    clue: 'Which joint includes the patella, cruciate ligaments, and two shock-absorbing menisci?',
    hindiClue: 'कौन सा प्रमुख जोड़ पटेला, क्रूसिएट लिगामेंट्स और दो शॉक-एब्जॉर्बर मेनिस्कस से मिलकर बनता है?',
    front: [0.386, 0.711, 0.519],
    back: [0.398, 0.708, 0.574],
    iconPath: 'M9 3c2 2 2 5 1 7l-1 2 2 2-1 7M15 3c-2 2-2 5-1 7l1 2-2 2 1 7 M8 12h8',
  },
  ankle: {
    short: 'Ankle & Foot',
    hindiShort: 'टखना व पैर',
    bones: ['Tibia mortise', 'Fibula', 'Talus', 'Calcaneus (Heel)'],
    hindiBones: ['टिबिया मॉर्टिस', 'फिबुला', 'टैलस', 'कैल्केनियस (एड़ी)'],
    overview:
      'The tibial mortise grasps the talus to form a hinge mortise. Together with the subtalar joint and foot arches, it enables stable gait and propulsion.',
    hindiOverview:
      'टिबिया और फिबुला मिलकर टैलस हड्डी को हिंज की तरह जकड़ते हैं। सबटैलर जोड़ और पैर का आर्च चलने में संतुलन और गति प्रदान करते हैं।',
    movement:
      'Pushing off the ground during walking plantarflexes the ankle via the Achilles tendon to propel body mass forward.',
    hindiMovement:
      'चलते समय जमीन से पैर को आगे धकेलने में अकिलीस टेंडन और टखने का जोड़ शरीर को गति देता है।',
    clue: 'Which region contains the talus bone resting directly atop the calcaneus heel?',
    hindiClue: 'एड़ी की हड्डी (कैल्केनियस) के ठीक ऊपर टैलस हड्डी किस जोड़ में स्थित होती है?',
    front: [0.404, 0.906, 0.489],
    back: [0.429, 0.916, 0.556],
    iconPath: 'M9 3v8l-3 5c-1 2 0 4 2 4h10c2 0 3-2 1-4l-5-5V3M9 11h5',
  },
};

export function SymptomNavigator() {
  const locale = useLocale();
  const isHi = locale === 'hi';

  const [selectedRegionId, setSelectedRegionId] = useState<string>('knee');
  const [view, setView] = useState<ViewMode>('front');
  const [scale, setScale] = useState<number>(1);
  const [side, setSide] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [savedOnly, setSavedOnly] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'clinical' | 'anatomy'>('clinical');
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [mobileIndexOpen, setMobileIndexOpen] = useState<boolean>(false);

  // Practice Quiz Modal State
  const [quizOpen, setQuizOpen] = useState<boolean>(false);
  const [quizQuestion, setQuizQuestion] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizSelected, setQuizSelected] = useState<string | null>(null);
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);

  // Load bookmarks from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('dr-gaurav-ortho.saved-regions');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setBookmarks(new Set(parsed));
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleBookmark = (id: string) => {
    const next = new Set(bookmarks);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setBookmarks(next);
    try {
      localStorage.setItem('dr-gaurav-ortho.saved-regions', JSON.stringify([...next]));
    } catch {
      // Ignore
    }
  };

  const currentRegion = useMemo(() => {
    return SYMPTOM_REGIONS.find((r) => r.id === selectedRegionId) || SYMPTOM_REGIONS[0];
  }, [selectedRegionId]);

  const currentAnatomy = useMemo(() => {
    return ANATOMY_REGIONS[selectedRegionId] || ANATOMY_REGIONS.knee;
  }, [selectedRegionId]);

  // Compute joint coordinates on 480x610 viewBox
  const getCoordinates = (regionId: string, whichView: ViewMode) => {
    const data = ANATOMY_REGIONS[regionId];
    if (!data) return [];
    const width = whichView === 'front' ? 300 : 260;
    const coords = data[whichView];
    const y = coords[1] * 610;
    const leftX = coords[0];
    const rightX = coords[2];

    if (rightX === undefined) {
      return [{ x: (480 - width) / 2 + leftX * width, y, side: 0 }];
    } else {
      return [
        { x: (480 - width) / 2 + leftX * width, y, side: 0 },
        { x: (480 - width) / 2 + rightX * width, y, side: 1 },
      ];
    }
  };

  const currentPoints = useMemo(() => {
    return getCoordinates(selectedRegionId, view);
  }, [selectedRegionId, view]);

  const activePoint = currentPoints[side] || currentPoints[0] || { x: 240, y: 305 };

  // Camera translation and zoom
  const tx = scale === 1 ? 0 : 240 - scale * activePoint.x;
  const ty = scale === 1 ? 0 : 305 - scale * activePoint.y;

  // Inset close-up viewport
  const insetViewBox = `${activePoint.x - 64} ${activePoint.y - 34} 128 68`;

  // Dynamic Callout HUD math from anatomy-explorer
  const calloutX = activePoint.x * scale + tx;
  const calloutY = activePoint.y * scale + ty;
  const labelText = isHi ? (currentAnatomy.hindiShort || currentRegion.hindiName) : currentAnatomy.short;
  const labelW = Math.max(90, labelText.length * (isHi ? 12 : 8.5) + 24);
  const toRight = calloutX >= 240;
  const boxX = toRight ? Math.min(476 - labelW, calloutX + 55) : Math.max(4, calloutX - 55 - labelW);
  const endX = toRight ? boxX : boxX + labelW;
  const leaderPath = `M${calloutX + (toRight ? 12 : -12)} ${calloutY} L${
    calloutX + (toRight ? 24 : -24)
  } ${calloutY - 12} H${endX}`;

  // Region filtering
  const filteredRegions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return SYMPTOM_REGIONS.filter((region) => {
      const anat = ANATOMY_REGIONS[region.id];
      const matchSearch =
        !q ||
        region.name.toLowerCase().includes(q) ||
        region.hindiName.includes(q) ||
        (anat && anat.bones.some((b) => b.toLowerCase().includes(q))) ||
        (anat && anat.hindiBones && anat.hindiBones.some((b) => b.includes(q))) ||
        (anat && anat.overview.toLowerCase().includes(q)) ||
        (anat && anat.hindiOverview && anat.hindiOverview.includes(q));
      const matchBookmark = !savedOnly || bookmarks.has(region.id);
      return matchSearch && matchBookmark;
    });
  }, [searchQuery, savedOnly, bookmarks]);

  const handleSelectRegion = (id: string, whichSide = 0) => {
    setSelectedRegionId(id);
    setSide(whichSide);
    if (id === 'spine') {
      setView('back');
    } else if (id === 'knee' || id === 'hip') {
      setView('front');
    }
  };

  // Practice Quiz Questions
  const quizQuestions = useMemo(() => {
    return Object.entries(ANATOMY_REGIONS).map(([id, item]) => {
      const reg = SYMPTOM_REGIONS.find((r) => r.id === id);
      return {
        id,
        name: reg?.name || item.short,
        hindiName: reg?.hindiName || item.hindiShort || item.short,
        clue: item.clue,
        hindiClue: item.hindiClue || item.clue,
        overview: item.overview,
        hindiOverview: item.hindiOverview || item.overview,
      };
    });
  }, []);

  const currentQuizItem = quizQuestions[quizQuestion % quizQuestions.length];

  const quizChoices = useMemo(() => {
    const incorrect = quizQuestions.filter((q) => q.id !== currentQuizItem.id).slice(0, 3);
    const combined = [currentQuizItem, ...incorrect];
    return combined.sort((a, b) => a.name.localeCompare(b.name));
  }, [currentQuizItem, quizQuestion, quizQuestions]);

  const handleQuizAnswer = (chosenId: string) => {
    if (quizAnswered) return;
    setQuizSelected(chosenId);
    setQuizAnswered(true);
    if (chosenId === currentQuizItem.id) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setQuizAnswered(false);
    setQuizSelected(null);
    setQuizQuestion((prev) => prev + 1);
  };

  return (
    <section
      id="symptom-navigator"
      className="py-14 md:py-20 bg-white border-b border-[#EAE4D9]"
    >
      {/* 
        Master In-DOM SVG Defs containing the high-resolution skeletal plates.
        Referencing these via <use href="#plate-front"/> makes luminous and ink
        SVG filters render flawlessly in all browsers without CORS or canvas taint.
      */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        aria-hidden="true"
        className="absolute pointer-events-none"
      >
        <defs>
          <image
            id="plate-front"
            href={PLATE_FRONT_BASE64}
            width="300"
            height="610"
            preserveAspectRatio="none"
          />
          <image
            id="plate-back"
            href={PLATE_BACK_BASE64}
            width="260"
            height="610"
            preserveAspectRatio="none"
          />
        </defs>
      </svg>

      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-8 border-b border-[#E2DBD0]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2744]/8 text-[#0F2744] text-xs font-semibold tracking-wide border border-[#0F2744]/15 mb-3">
              <Stethoscope className="w-3.5 h-3.5 text-[#0D7E8A]" />
              <span>
                {isHi
                  ? 'डॉ. गौरव शर्मा · जोड़ एवं अस्थि रोग एनाटॉमी एटलस'
                  : 'Dr. Gaurav Sharma · Interactive Orthopaedic Anatomy Atlas'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
              {isHi ? 'शारीरिक संरचना एवं लक्षण मार्गदर्शिका' : 'Anatomy & Symptom Explorer'}
            </h2>
            <p className="mt-2 text-base text-[#566474] max-w-2xl leading-relaxed">
              {isHi
                ? 'कंकाल तंत्र के किसी भी जोड़ को चुनें और जोड़ की संरचना, प्राकृतिक बायोमैकेनिक्स, बिना सर्जरी देखभाल विकल्प और क्लिनिकल जांच प्रक्रिया समझें।'
                : 'Select any point on the skeleton to explore joint structures, natural biomechanics, conservative care options, and clinical evaluation pathways.'}
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#D5CFC4] text-xs font-bold text-[#334155] hover:bg-[#F3EFEA] hover:text-[#0F2744] shadow-2xs transition-colors min-h-[40px] cursor-pointer"
              title={isHi ? 'चयनित क्षेत्र का क्लिनिकल सारांश प्रिंट करें' : 'Print clinical summary of selected region'}
            >
              <Printer className="w-4 h-4 text-[#0D7E8A]" />
              <span className="hidden sm:inline">{isHi ? 'प्रिंट विवरण' : 'Print Region'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setQuizQuestion(0);
                setQuizScore(0);
                setQuizAnswered(false);
                setQuizSelected(null);
                setQuizOpen(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F2744] text-white text-xs font-bold hover:bg-[#1E3A5F] shadow-xs transition-colors min-h-[40px] cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-[#38BDF8]" />
              <span>{isHi ? 'प्रैक्टिस क्विज़' : 'Practice Quiz'}</span>
            </button>
          </div>
        </div>

        {/* 3-Column Clinical Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* COLUMN 1: Region Index Library (3 cols) */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-[#E2DBD0] p-4 sm:p-5 shadow-2xs space-y-4">
            {/* Mobile Collapsible Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#F0EBE1]">
              <button
                type="button"
                onClick={() => setMobileIndexOpen((prev) => !prev)}
                className="lg:pointer-events-none flex items-center justify-between w-full text-left"
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#0D7E8A]" />
                  <h3 className="text-sm font-bold text-[#0F2744]">
                    {isHi ? 'जोड़ व क्षेत्र सूची' : 'Region Index'}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FAF8F4] text-[#64748B] border border-[#E2DBD0]">
                    {isHi
                      ? `${filteredRegions.length} / 8 क्षेत्र`
                      : `${filteredRegions.length} / 8 areas`}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] lg:hidden transition-transform duration-200 ${
                      mobileIndexOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Collapsible Content on mobile, always visible on desktop */}
            <div className={`space-y-4 ${mobileIndexOpen ? 'block' : 'hidden lg:block'}`}>
              {/* Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isHi ? 'जोड़, हड्डी या लक्षण खोजें...' : 'Search regions or bones...'}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FAF8F4] border border-[#E2DBD0] text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0D7E8A] transition-all"
                />
              </div>

              {/* Filter Chips: All vs Saved */}
              <div className="flex gap-2 text-xs border-b border-[#EAE4D9] pb-3">
                <button
                  type="button"
                  onClick={() => setSavedOnly(false)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                    !savedOnly
                      ? 'bg-[#0F2744] text-white'
                      : 'bg-[#FAF8F4] text-[#64748B] hover:text-[#0F2744]'
                  }`}
                >
                  {isHi ? 'सभी क्षेत्र' : 'All Regions'}
                </button>
                <button
                  type="button"
                  onClick={() => setSavedOnly(true)}
                  className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    savedOnly
                      ? 'bg-[#0F2744] text-white'
                      : 'bg-[#FAF8F4] text-[#64748B] hover:text-[#0F2744]'
                  }`}
                >
                  <Bookmark className="w-3 h-3 text-[#C28E38]" />
                  <span>{isHi ? `सहेजे गए (${bookmarks.size})` : `Saved (${bookmarks.size})`}</span>
                </button>
              </div>

              {/* Region List */}
              <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
                {filteredRegions.length === 0 ? (
                  <div className="p-4 text-center text-xs text-[#94A3B8]">
                    {savedOnly && bookmarks.size === 0
                      ? isHi
                        ? 'कोई सहेजा गया क्षेत्र नहीं है। सहेजने के लिए किसी भी जोड़ के बुकमार्क आइकन पर क्लिक करें।'
                        : 'No bookmarked regions yet. Click the bookmark icon beside any region name to save it here.'
                      : isHi
                      ? 'कोई मेल खाने वाला क्षेत्र नहीं मिला। कृपया दूसरा जोड़ या हड्डी खोजें।'
                      : 'No matching regions found. Try a different bone or joint.'}
                  </div>
                ) : (
                  filteredRegions.map((region) => {
                    const isSelected = region.id === selectedRegionId;
                    const anat = ANATOMY_REGIONS[region.id];

                    return (
                      <button
                        key={region.id}
                        type="button"
                        onClick={() => {
                          handleSelectRegion(region.id);
                          setMobileIndexOpen(false);
                        }}
                        className={`w-full text-left p-3 rounded-xl border text-xs font-semibold transition-all flex items-center gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-[#0F2744] text-white border-[#0F2744] shadow-xs'
                            : 'bg-white text-[#334155] border-[#E8E1D5] hover:bg-[#FAF8F4] hover:text-[#0F2744]'
                        }`}
                      >
                        {/* Bespoke Medical Joint Icon from anatomy-explorer */}
                        <svg
                          viewBox="0 0 24 24"
                          className={`w-5 h-5 shrink-0 ${
                            isSelected ? 'text-[#FFAD74]' : 'text-[#0D7E8A]'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={anat?.iconPath || ''} />
                        </svg>

                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-xs sm:text-sm truncate leading-snug">
                            {isHi ? region.hindiName : region.name}
                          </div>
                          <div
                            className={`text-[11px] truncate ${
                              isSelected ? 'text-[#93C5FD]' : 'text-[#64748B]'
                            }`}
                          >
                            {isHi ? region.hindiBadge : region.badge}
                          </div>
                        </div>

                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isSelected ? 'text-[#FFAD74]' : 'text-[#CBD5E1]'
                          }`}
                        />
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Interactive Skeletal Body Map Stage (5 cols) */}
          <div className="lg:col-span-5 bg-[#0C2438] text-white rounded-2xl border border-[#1E3A5F] overflow-hidden shadow-sm flex flex-col min-h-[580px]">
            {/* Top Bar: View Switcher */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-[#1A3A54] bg-[#091C2C]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFAD74] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#C0D5C6]">
                  {view === 'front'
                    ? isHi
                      ? 'सामने का दृश्य · 1:1 प्राकृतिक अनुपात'
                      : 'Anterior View · 1:1 Scale (Coronal AP)'
                    : isHi
                    ? 'पीछे का दृश्य · 1:1 प्राकृतिक अनुपात'
                    : 'Posterior View · 1:1 Scale'}
                </span>
              </div>

              {/* Front / Back Toggle Pills from anatomy-explorer */}
              <div className="flex items-center gap-1 bg-[#061420] p-1 rounded-xl border border-[#1E3A5F]">
                <button
                  type="button"
                  onClick={() => setView('front')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    view === 'front'
                      ? 'bg-[#E5F0E6] text-[#1C4036] shadow-xs'
                      : 'text-[#BFD4C9] hover:text-white'
                  }`}
                >
                  {isHi ? 'सामने' : 'Front'}
                </button>
                <button
                  type="button"
                  onClick={() => setView('back')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    view === 'back'
                      ? 'bg-[#E5F0E6] text-[#1C4036] shadow-xs'
                      : 'text-[#BFD4C9] hover:text-white'
                  }`}
                >
                  {isHi ? 'पीछे' : 'Back'}
                </button>
              </div>
            </div>

            {/* SVG Interactive Canvas with anatomy-explorer radial glow and dot grid */}
            <div className="relative flex-1 bg-[radial-gradient(ellipse_at_center,rgba(49,86,77,0.35),transparent_71%),radial-gradient(circle,rgba(105,149,134,0.18)_0.8px,transparent_1px)] bg-[size:100%_100%,17px_17px] overflow-hidden min-h-[440px]">
              <svg
                viewBox="0 0 480 610"
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Luminous Green Bone Glow Filter from anatomy-explorer */}
                  <filter id="luminousMedical" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#E3F2D9" />
                    <feComposite in2="SourceGraphic" operator="in" />
                  </filter>
                </defs>

                {/* Camera Group with Smooth Pan and Scale */}
                <g
                  transform={`translate(${tx} ${ty}) scale(${scale})`}
                  className="transition-transform duration-300 ease-out"
                >
                  {/* Luminous Skeletal Plate via In-DOM <use> */}
                  <g filter="url(#luminousMedical)">
                    <use
                      href={view === 'front' ? '#plate-front' : '#plate-back'}
                      x={(480 - (view === 'front' ? 300 : 260)) / 2}
                      y="0"
                    />
                  </g>

                  {/* Marker Pins for All Regions with anatomy-explorer styling */}
                  {SYMPTOM_REGIONS.map((region) => {
                    const isSelected = region.id === selectedRegionId;
                    const points = getCoordinates(region.id, view);

                    return (
                      <g key={region.id}>
                        {points.map((pt, pIdx) => (
                          <g
                            key={pIdx}
                            transform={`translate(${pt.x} ${pt.y}) scale(${1 / scale})`}
                            onClick={() => handleSelectRegion(region.id, pt.side)}
                            className="cursor-pointer group focus:outline-none"
                            tabIndex={0}
                            role="button"
                            aria-label={`Select ${isHi ? region.hindiName : region.name}`}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleSelectRegion(region.id, pt.side);
                              }
                            }}
                          >
                            {/* Hit Area */}
                            <circle cx="0" cy="0" r="18" fill="transparent" />

                            {/* Halo Ring (When Selected) */}
                            {isSelected && (
                              <circle
                                cx="0"
                                cy="0"
                                r="11.5"
                                fill="none"
                                stroke="#FFAD74"
                                strokeWidth="1.4"
                                opacity="0.75"
                                className="animate-pulse"
                              />
                            )}

                            {/* Outer Rim */}
                            <circle
                              cx="0"
                              cy="0"
                              r="6.5"
                              fill={isSelected ? '#F5A36E' : '#164C43'}
                              stroke={isSelected ? '#FFE0BB' : '#C9EAD8'}
                              strokeWidth="1.5"
                              className="transition-colors group-hover:stroke-white group-hover:stroke-[2.5]"
                            />

                            {/* Center Dot */}
                            <circle
                              cx="0"
                              cy="0"
                              r="2"
                              fill={isSelected ? '#432E20' : '#C9EAD8'}
                            />
                          </g>
                        ))}
                      </g>
                    );
                  })}
                </g>

                {/* Dynamic Callout Leader Line and HUD Box from anatomy-explorer */}
                <g pointerEvents="none">
                  {/* Leader Dogleg Path */}
                  <path
                    d={leaderPath}
                    fill="none"
                    stroke="#FFAD74"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />

                  {/* Callout Pill Box */}
                  <rect
                    x={boxX}
                    y={activePoint.y * scale + ty - 26.5}
                    width={labelW}
                    height="29"
                    rx="4"
                    fill="#F9B27D"
                  />

                  {/* Label Text */}
                  <text
                    x={boxX + 10}
                    y={activePoint.y * scale + ty - 7}
                    fill="#392A1F"
                    fontFamily="Segoe UI, sans-serif"
                    fontSize={isHi ? "13" : "14"}
                    fontWeight="700"
                  >
                    {labelText}
                  </text>
                </g>
              </svg>
            </div>

            {/* Hint Bar (matching anatomy-explorer and user reference) */}
            <div className="px-4 py-2 bg-[#081826] border-t border-[#132A3E] text-[11px] text-[#8EA2B4] flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#0D7E8A] shrink-0" />
              <span>
                {isHi
                  ? 'शरीर पर किसी भी जोड़ के बिंदु को स्पर्श करें या ऊपर जोड़ का नाम चुनें।'
                  : 'Tap any anatomical marker on the body or click a joint name above.'}
              </span>
            </div>

            {/* Bottom Controls Foot: Legend, Zoom & Reset from anatomy-explorer */}
            <div className="p-3 sm:p-3.5 border-t border-[#1A3A54] bg-[#091C2C] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD74]" />
                <span className="text-[#D1DFD2] font-semibold">
                  {isHi ? currentRegion.hindiName : currentRegion.name}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setScale((s) => Math.max(1, s - 0.5))}
                  disabled={scale <= 1}
                  className="w-8 h-8 rounded-lg bg-[#0F2744] hover:bg-[#1E3A5F] disabled:opacity-30 disabled:hover:bg-[#0F2744] flex items-center justify-center text-white transition-colors cursor-pointer"
                  title={isHi ? 'ज़ूम आउट' : 'Zoom Out'}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>

                <span className="font-mono text-[11px] px-2 text-[#CBD5E1]">
                  {Math.round(scale * 100)}%
                </span>

                <button
                  type="button"
                  onClick={() => setScale((s) => Math.min(2.5, s + 0.5))}
                  disabled={scale >= 2.5}
                  className="w-8 h-8 rounded-lg bg-[#0F2744] hover:bg-[#1E3A5F] disabled:opacity-30 disabled:hover:bg-[#0F2744] flex items-center justify-center text-white transition-colors cursor-pointer"
                  title={isHi ? 'ज़ूम इन' : 'Zoom In'}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setScale(1);
                    setView('front');
                  }}
                  className="w-8 h-8 rounded-lg bg-[#0F2744] hover:bg-[#1E3A5F] flex items-center justify-center text-white transition-colors ml-1 cursor-pointer"
                  title={isHi ? 'दृश्य रीसेट करें' : 'Reset Explorer View'}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Clinical Diagnostic Profile & Anatomical Inset (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-[#E2DBD0] overflow-hidden shadow-2xs flex flex-col">
            {/* Real-time Magnified Inset Viewport from anatomy-explorer */}
            <div className="h-36 relative bg-[#E2EADE] border-b border-[#C7D3C5] overflow-hidden">
              <svg
                viewBox={insetViewBox}
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full"
              >
                <defs>
                  <filter id="inkDetail" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#244B3D" />
                    <feComposite in2="SourceGraphic" operator="in" />
                  </filter>
                </defs>
                <g filter="url(#inkDetail)">
                  <use
                    href={view === 'front' ? '#plate-front' : '#plate-back'}
                    x={(480 - (view === 'front' ? 300 : 260)) / 2}
                    y="0"
                  />
                </g>
              </svg>

              <div className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded-md bg-[#EDF3E9] text-[#365448] text-[11px] font-bold border border-[#C7D3C5] shadow-2xs">
                {isHi
                  ? `जोड़ का सूक्ष्म दृश्य · ${view === 'front' ? 'सामने' : 'पीछे'}`
                  : `Region close-up · ${view === 'front' ? 'Anterior' : 'Posterior'}`}
              </div>
            </div>

            {/* Profile Body */}
            <div className="p-5 sm:p-6 space-y-5 flex-1">
              {/* Header Title + Bookmark Button */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F2744] leading-tight">
                    {isHi ? currentRegion.hindiName : currentRegion.name}
                  </h3>
                  <div className="text-xs text-[#0D7E8A] font-medium mt-0.5">
                    {isHi ? currentRegion.hindiBadge : currentRegion.badge}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleBookmark(currentRegion.id)}
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    bookmarks.has(currentRegion.id)
                      ? 'bg-[#C28E38]/15 border-[#C28E38] text-[#C28E38]'
                      : 'bg-[#FAF8F4] border-[#E2DBD0] text-[#94A3B8] hover:text-[#0F2744]'
                  }`}
                  title={
                    bookmarks.has(currentRegion.id)
                      ? isHi
                        ? 'सहेजे गए क्षेत्रों से हटाएं'
                        : 'Remove from saved regions'
                      : isHi
                      ? 'परामर्श हेतु सुरक्षित रखें'
                      : 'Bookmark region for consultation'
                  }
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>
              </div>

              {/* View Switcher: Clinical Care vs Anatomical Biomechanics */}
              <div className="flex rounded-xl bg-[#FAF8F4] p-1 border border-[#E2DBD0] text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('clinical')}
                  className={`flex-1 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    activeTab === 'clinical'
                      ? 'bg-[#0F2744] text-white shadow-2xs'
                      : 'text-[#64748B] hover:text-[#0F2744]'
                  }`}
                >
                  {isHi ? 'क्लिनिकल परामर्श' : 'Clinical Triage'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('anatomy')}
                  className={`flex-1 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    activeTab === 'anatomy'
                      ? 'bg-[#0F2744] text-white shadow-2xs'
                      : 'text-[#64748B] hover:text-[#0F2744]'
                  }`}
                >
                  {isHi ? 'एनाटॉमी व गतिशीलता' : 'Anatomy & Movement'}
                </button>
              </div>

              {/* TAB 1: Clinical Triage & Care Pathways */}
              {activeTab === 'clinical' && (
                <div className="space-y-4 text-xs">
                  {/* Category Badge & Summary */}
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0D7E8A]/10 text-[#095962] font-semibold text-[11px] border border-[#0D7E8A]/20 mb-2">
                      {isHi && currentRegion.hindiBadge ? currentRegion.hindiBadge : currentRegion.badge}
                    </span>
                    <p className="text-[#475569] leading-relaxed text-xs">
                      {isHi && currentRegion.hindiSummary ? currentRegion.hindiSummary : currentRegion.summary}
                    </p>
                  </div>

                  {/* Common Clinical Symptoms */}
                  <div className="space-y-2 pt-2 border-t border-[#F0EBE1]">
                    <div className="font-bold text-[#0F2744] flex items-center gap-1.5 text-xs">
                      <Activity className="w-3.5 h-3.5 text-[#0D7E8A]" />
                      <span>{isHi ? 'प्रमुख लक्षण:' : 'Presenting Symptoms:'}</span>
                    </div>
                    <ul className="space-y-1.5 text-[#334155] pl-1">
                      {(isHi && currentRegion.hindiSymptoms ? currentRegion.hindiSymptoms : currentRegion.symptoms).slice(0, 3).map((sym, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7E8A] mt-1.5 shrink-0" />
                          <span>{sym.replace('// NEEDS DOCTOR REVIEW: ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* First-Line Conservative Care */}
                  <div className="space-y-2 pt-2 border-t border-[#F0EBE1]">
                    <div className="font-bold text-[#0F2744] flex items-center gap-1.5 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{isHi ? 'बिना सर्जरी सुरक्षित उपचार विकल्प:' : 'Non-Surgical Conservative Options:'}</span>
                    </div>
                    <ul className="space-y-1.5 text-[#334155] pl-1">
                      {(isHi && currentRegion.hindiSelfCare ? currentRegion.hindiSelfCare : currentRegion.selfCare).slice(0, 2).map((care, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{care.replace('// NEEDS DOCTOR REVIEW: ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Surgical Pathways & Indications */}
                  <div className="space-y-2 pt-2 border-t border-[#F0EBE1]">
                    <div className="font-bold text-[#0F2744] flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C28E38]" />
                        <span>{isHi ? 'सर्जरी की आवश्यकता कब होती है:' : 'Surgical Indications:'}</span>
                      </span>
                      {currentRegion.surgicalProcedures[0]?.slug && (
                        <Link
                          href={`/${locale}/surgeries/${currentRegion.surgicalProcedures[0].slug}`}
                          className="text-[11px] font-bold text-[#0D7E8A] hover:underline"
                        >
                          {isHi ? 'प्रक्रिया विवरण देखें' : 'View Procedure'}
                        </Link>
                      )}
                    </div>
                    <p className="text-[#566474] leading-relaxed">
                      <strong className="text-[#1E293B]">
                        {isHi && currentRegion.surgicalProcedures[0]?.hindiName
                          ? currentRegion.surgicalProcedures[0].hindiName
                          : currentRegion.surgicalProcedures[0]?.name}
                        :
                      </strong>{' '}
                      {isHi && currentRegion.surgicalProcedures[0]?.hindiIndication
                        ? currentRegion.surgicalProcedures[0].hindiIndication
                        : currentRegion.surgicalProcedures[0]?.indication}
                    </p>
                  </div>

                  {/* When to Consult Dr. Gaurav Sharma */}
                  <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9] space-y-1">
                    <div className="font-bold text-[#0F2744] flex items-center gap-1 text-[11px]">
                      <AlertCircle className="w-3 h-3 text-[#C28E38]" />
                      <span>{isHi ? 'डॉ. गौरव शर्मा से कब परामर्श लें:' : 'When to Consult Dr. Gaurav Sharma:'}</span>
                    </div>
                    <p className="text-[11px] text-[#475569] leading-relaxed">
                      {(isHi && currentRegion.hindiWhenToConsult ? currentRegion.hindiWhenToConsult : currentRegion.whenToConsult).replace('// NEEDS DOCTOR REVIEW: ', '')}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: Anatomy & Biomechanics */}
              {activeTab === 'anatomy' && (
                <div className="space-y-4 text-xs">
                  {/* Bone Framework Tags */}
                  <div>
                    <h4 className="font-bold text-[#0F2744] mb-2 text-xs">
                      {isHi ? 'मुख्य कंकाल संरचनाएं:' : 'Key Skeletal Structures:'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {(isHi && currentAnatomy.hindiBones ? currentAnatomy.hindiBones : currentAnatomy.bones).map((bone, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-[#FAF8F4] border border-[#E2DBD0] text-[#0F2744] font-semibold text-[11px]"
                        >
                          {bone}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Anatomical Overview */}
                  <div className="space-y-1.5 pt-2 border-t border-[#F0EBE1]">
                    <h4 className="font-bold text-[#0F2744] text-xs">
                      {isHi ? 'एनाटोमिकल संरचना:' : 'Anatomical Architecture:'}
                    </h4>
                    <p className="text-[#475569] leading-relaxed">
                      {isHi && currentAnatomy.hindiOverview ? currentAnatomy.hindiOverview : currentAnatomy.overview}
                    </p>
                  </div>

                  {/* Biomechanics / Movement */}
                  <div className="space-y-1.5 pt-2 border-t border-[#F0EBE1]">
                    <h4 className="font-bold text-[#0F2744] text-xs">
                      {isHi ? 'जोड़ की प्राकृतिक गतिशीलता:' : 'Joint In Motion:'}
                    </h4>
                    <p className="text-[#475569] leading-relaxed">
                      {isHi && currentAnatomy.hindiMovement ? currentAnatomy.hindiMovement : currentAnatomy.movement}
                    </p>
                  </div>

                  {/* Physical Film Review Note */}
                  <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9] text-[11px] text-[#64748B] flex items-start gap-2">
                    <ScanLine className="w-4 h-4 text-[#0D7E8A] shrink-0 mt-0.5" />
                    <span>
                      {isHi
                        ? 'सत्यम कॉम्प्लेक्स, सिकंदरा, आगरा क्लिनिक में एक्स-रे / एमआरआई फिल्म की प्रत्यक्ष जांच की जाती है।'
                        : 'In-clinic physical film review (X-ray / MRI viewbox correlation) conducted at Satyam Complex, Sikandra, Agra.'}
                    </span>
                  </div>
                </div>
              )}

              {/* Consultation Booking Actions */}
              <div className="pt-3 border-t border-[#E2DBD0] space-y-2">
                <Button
                  href={`/${locale}/contact?concern=${encodeURIComponent(currentRegion.id)}`}
                  variant="accent"
                  size="md"
                  className="w-full font-bold shadow-xs text-xs justify-center"
                >
                  <span>{isHi && currentRegion.hindiCtaText ? currentRegion.hindiCtaText : currentRegion.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                    isHi
                      ? `नमस्ते डॉ. गौरव शर्मा क्लिनिक, मुझे ${currentRegion.hindiName} के दर्द के संबंध में परामर्श लेना है।`
                      : `Hello Dr. Gaurav Sharma Clinic, I would like to consult regarding ${currentRegion.name} pain.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#25D366]/15 text-[#166534] border border-[#25D366]/30 text-xs font-bold hover:bg-[#25D366]/25 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>
                    {isHi
                      ? `व्हाट्सएप परामर्श (${currentRegion.hindiName})`
                      : `WhatsApp Inquiry for ${currentRegion.name}`}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Quiz Modal Dialog */}
      <AnimatePresence>
        {quizOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl border border-[#E2DBD0] shadow-2xl max-w-lg w-full p-6 sm:p-7 space-y-5"
            >
              {/* Dialog Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE1]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F2744]">
                    {isHi ? 'ऑर्थोपेडिक एनाटॉमी क्विज़' : 'Orthopaedic Practice Quiz'}
                  </h3>
                  <span className="text-xs text-[#0D7E8A] font-semibold">
                    {isHi
                      ? `प्रश्न ${(quizQuestion % quizQuestions.length) + 1} / ${quizQuestions.length}`
                      : `Question ${(quizQuestion % quizQuestions.length) + 1} of ${quizQuestions.length}`}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setQuizOpen(false)}
                  className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#0F2744] hover:bg-[#F3EFEA] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Question Prompt */}
              <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9]">
                <p className="text-sm sm:text-base font-semibold text-[#0F2744] leading-relaxed">
                  {isHi ? (currentQuizItem.hindiClue || currentQuizItem.clue) : currentQuizItem.clue}
                </p>
              </div>

              {/* Multiple Choice Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {quizChoices.map((choice) => {
                  const isCorrect = choice.id === currentQuizItem.id;
                  const isChosen = quizSelected === choice.id;

                  let btnStyle =
                    'bg-white text-[#334155] border-[#E2DBD0] hover:bg-[#FAF8F4] hover:text-[#0F2744]';

                  if (quizAnswered) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-50 text-emerald-800 border-emerald-500 font-bold';
                    } else if (isChosen) {
                      btnStyle = 'bg-rose-50 text-rose-800 border-rose-300 font-bold';
                    } else {
                      btnStyle = 'opacity-50 border-[#E2DBD0]';
                    }
                  }

                  return (
                    <button
                      key={choice.id}
                      type="button"
                      disabled={quizAnswered}
                      onClick={() => handleQuizAnswer(choice.id)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                    >
                      <span>{isHi ? choice.hindiName : choice.name}</span>
                      {quizAnswered && isCorrect && (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Message */}
              {quizAnswered && (
                <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0F2744]">
                    {quizSelected === currentQuizItem.id
                      ? isHi ? '✓ सही उत्तर!' : '✓ Correct!'
                      : isHi ? '✗ गलत उत्तर, सही उत्तर हरा चिन्हित है।' : '✗ Not quite. The correct area is highlighted in green.'}
                  </span>
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="px-3 py-1.5 rounded-lg bg-[#0F2744] text-white text-xs font-bold hover:bg-[#1E3A5F] transition-colors cursor-pointer"
                  >
                    {isHi ? 'अगला प्रश्न' : 'Next Question'}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
