'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import {
  PhoneCall,
  MessageSquare,
  ShieldAlert,
  Activity,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { CLINIC_CONTACT, DOCTOR_PROFILE } from '@/lib/clinic';

export function EmergencyBlock() {
  const locale = useLocale();
  const isHi = locale === 'hi';

  const waPrefill = encodeURIComponent(
    isHi
      ? CLINIC_CONTACT.hindiEmergencyWhatsappPrefill
      : CLINIC_CONTACT.emergencyWhatsappPrefill
  );
  const waUrl = `https://wa.me/${CLINIC_CONTACT.whatsappNumber.replace(/\+/g, '')}?text=${waPrefill}`;

  const acuteConditions = isHi
    ? [
        {
          title: 'अचानक हड्डी फ्रैक्चर',
          subtitle: 'हाथ, पैर, कलाई, कॉलरबोन एवं कूल्हे की हड्डी टूटना',
          icon: '🦴',
        },
        {
          title: 'जोड़ उतरना (डिसलोकेशन)',
          subtitle: 'कंधा, कोहनी या घुटने की कटोरी (पटेला) का अपनी जगह से खिसकना',
          icon: '⚡',
        },
        {
          title: 'गिरने से गंभीर चोट व मोच',
          subtitle: 'अचानक पैर न टिकना, जोड़ों में भारी सूजन व लिगामेंट टियर',
          icon: '🩹',
        },
        {
          title: 'तत्काल प्लास्टर एवं स्प्लिंट',
          subtitle: 'दर्द निवारण व सही स्थिति में हड्डी का तत्काल स्थिरीकरण',
          icon: '🏥',
        },
        {
          title: '24/7 आपातकालीन भर्ती व सर्जरी',
          subtitle: 'आगरा के संबद्ध अस्पतालों में तत्काल ऑपरेशन (ORIF/नेलिंग)',
          icon: '🏨',
        },
        {
          title: 'बुजुर्गों का हिप फ्रैक्चर',
          subtitle: 'गिरने के 24-48 घंटों के भीतर प्राथमिक हेमीआर्थ्रोप्लास्टी व रिकवरी',
          icon: '🛡️',
        },
      ]
    : [
        {
          title: 'Acute Bone Fractures',
          subtitle: 'Immediate management of arm, leg, wrist, collarbone & hip fractures',
          icon: '🦴',
        },
        {
          title: 'Joint Dislocations',
          subtitle: 'Urgent gentle reduction of dislocated shoulder, elbow, or patella',
          icon: '⚡',
        },
        {
          title: 'Post-Fall Trauma & Sports Tears',
          subtitle: 'Severe swelling, locked joints, and sudden inability to bear weight',
          icon: '🩹',
        },
        {
          title: 'Urgent Plaster & Splinting',
          subtitle: 'Rigid immobilization, POP/fiberglass casting & rapid pain control',
          icon: '🏥',
        },
        {
          title: '24/7 Emergency Hospital Admission',
          subtitle: 'Priority surgical fixation (ORIF/nailing) at partner hospitals in Agra',
          icon: '🏨',
        },
        {
          title: 'Geriatric Hip Fracture Care',
          subtitle: 'Timely 24–48 hr surgical stabilization for elderly mobility and safety',
          icon: '🛡️',
        },
      ];

  const firstAidSteps = isHi
    ? [
        {
          num: '1',
          head: 'अंग को स्थिर रखें',
          desc: 'चोटिल हाथ या पैर को जोर से न हिलाएं, मालिश या खिंचाई बिल्कुल न करें।',
        },
        {
          num: '2',
          head: 'कपड़े में बर्फ लपेटकर लगाएं',
          desc: 'सूजन कम करने के लिए बर्फ की ठंडी सिंकाई करें (गर्म सिंकाई या तेल से बचें)।',
        },
        {
          num: '3',
          head: 'मरीज को खाली पेट रखें',
          desc: 'यदि आज ही ऑपरेशन या प्लास्टर की जरूरत हो, तो कुछ भी खाने-पीने से बचें।',
        },
        {
          num: '4',
          head: 'हेल्पलाइन पर सीधे कॉल करें',
          desc: 'डॉक्टर से सीधे परामर्श एवं नजदीकी संबद्ध अस्पताल में तुरंत पहुंचने की सलाह लें।',
        },
      ]
    : [
        {
          num: '1',
          head: 'Immobilize the Limb',
          desc: 'Keep the injured limb supported and still. Do not massage or forcefully pull.',
        },
        {
          num: '2',
          head: 'Apply Ice Wrapped in Cloth',
          desc: 'Cold compression reduces swelling. Strictly avoid heat packs or hot oils.',
        },
        {
          num: '3',
          head: 'Keep the Patient Fasting',
          desc: 'Avoid heavy meals or water if emergency anaesthesia or surgery is anticipated.',
        },
        {
          num: '4',
          head: 'Call the Helpline Immediately',
          desc: 'Get direct surgical guidance, send X-rays on WhatsApp, and arrange bed admission.',
        },
      ];

  return (
    <div
      id="emergency"
      className="scroll-mt-24 rounded-3xl bg-gradient-to-br from-[#0F2744] via-[#16365D] to-[#0A1828] text-white p-6 sm:p-10 shadow-xl border border-white/10 space-y-8 relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C28E38]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0D7E8A]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner & Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span>
              {isHi
                ? '24/7 आपातकालीन ऑर्थोपेडिक सहायता'
                : '24/7 Emergency Orthopaedic Response'}
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            {isHi
              ? 'आपातकालीन फ्रैक्चर एवं तीव्र ट्रॉमा सेवा'
              : 'Emergency Fracture & Acute Orthopaedic Trauma Care'}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            {isHi
              ? 'अचानक हड्डी टूटने (फ्रैक्चर), जोड़ उतरने, गिरने या लिगामेंट इंजरी में डॉ. गौरव शर्मा द्वारा तत्काल चिकित्सकीय मूल्यांकन, प्लास्टर स्थिरीकरण एवं आगरा के प्रमुख अस्पतालों में आपातकालीन सर्जिकल भर्ती।'
              : 'Immediate clinical evaluation, urgent plaster immobilization, and 24/7 emergency surgical admission in Agra by Dr. Gaurav Sharma (MS Orthopaedics, 20+ Yrs Exp.) for acute bone fractures, dislocations, and falls.'}
          </p>
        </div>

        {/* Rapid Contact CTAs */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_CONTACT.primaryPhone}`}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base shadow-lg shadow-red-900/30 transition-all active:scale-[0.98] min-h-[48px]"
          >
            <PhoneCall className="w-5 h-5 animate-bounce" />
            <span>
              {isHi
                ? `इमरजेंसी कॉल: ${CLINIC_CONTACT.displayPhone}`
                : `Emergency Call: ${CLINIC_CONTACT.displayPhone}`}
            </span>
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base shadow-lg shadow-green-900/20 transition-all active:scale-[0.98] min-h-[48px]"
          >
            <MessageSquare className="w-5 h-5" />
            <span>
              {isHi ? 'व्हाट्सएप पर X-Ray / फोटो भेजें' : 'WhatsApp X-Ray / Injury Details'}
            </span>
          </a>
        </div>
      </div>

      {/* Conditions Treated Promptly */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C28E38]">
          <Activity className="w-4 h-4" />
          <span>
            {isHi
              ? 'आपातकालीन स्थिति में त्वरित उपचारित समस्याएं'
              : 'Acute Orthopaedic Emergencies Managed Promptly'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {acuteConditions.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-start gap-3.5"
            >
              <span className="text-2xl shrink-0 p-1 rounded-xl bg-white/10">
                {item.icon}
              </span>
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immediate First-Aid Triage Guide */}
      <div className="relative z-10 p-5 sm:p-6 rounded-2xl bg-black/30 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7E8A]">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span className="text-amber-200">
            {isHi
              ? 'अस्पताल पहुंचने से पहले प्राथमिक सावधानियां (First-Aid Protocol)'
              : 'Immediate First-Aid Protocol While Contacting Us'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {firstAidSteps.map((step) => (
            <div
              key={step.num}
              className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#C28E38] text-[#0F2744] font-bold text-xs flex items-center justify-center">
                  {step.num}
                </span>
                <span className="font-semibold text-white text-xs sm:text-sm">
                  {step.head}
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed pl-8">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hospital Tie-up & Ethical Safety Note */}
      <div className="relative z-10 pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-gray-400 border-t border-white/10">
        <p className="leading-relaxed">
          {isHi ? (
            <>
              <strong className="text-white">क्लिनिक एवं अस्पताल व्यवस्था:</strong> नियमित ओपीडी परामर्श सिकंदरा क्लिनिक में संचालित होते हैं। गंभीर फ्रैक्चर या आपातकालीन सर्जरी की आवश्यकता होने पर डॉ. गौरव शर्मा द्वारा आगरा के संबद्ध 24/7 सुपर-स्पेशलिटी सर्जिकल अस्पतालों में तत्काल भर्ती, कैशलेस मेडिक्लेम एवं इमरजेंसी ऑपरेशन की पूरी व्यवस्था कराई जाती है।
            </>
          ) : (
            <>
              <strong className="text-white">Clinical & Surgical Pathway:</strong> Routine outpatient consultations are held at Satyam Complex, Sikandra. For acute fractures requiring immediate surgery or hospitalization, priority admission and cashless Mediclaim assistance are facilitated round-the-clock at Dr. Sharma&apos;s empanelled surgical partner hospitals in Agra.
            </>
          )}
        </p>

        <div className="flex items-center gap-2 shrink-0 text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>
            {isHi
              ? 'आपातकालीन हेल्पलाइन: 24 घंटे सक्रिय'
              : 'Trauma Helpline: 24/7 Active'}
          </span>
        </div>
      </div>
    </div>
  );
}
