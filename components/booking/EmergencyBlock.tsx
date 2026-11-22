'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { AlertTriangle, PhoneCall } from 'lucide-react';
import { CLINIC_CONTACT } from '@/lib/clinic';

export function EmergencyBlock() {
  const locale = useLocale();
  const isHi = locale === 'hi';

  return (
    <div
      id="emergency"
      className="scroll-mt-24 rounded-3xl bg-red-50/70 border-2 border-red-200 p-6 sm:p-8 text-[#7F1D1D] space-y-4"
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-2xl bg-red-100 text-red-600 shrink-0 mt-0.5">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-red-950">
            {isHi ? 'आपातकालीन एवं गंभीर आघात प्रोटोकॉल' : 'Emergency & Acute Trauma Protocol'}
          </h3>
          <p className="text-xs uppercase tracking-wider font-semibold text-red-700">
            {isHi ? 'मरीजों एवं परिजनों हेतु अति-महत्वपूर्ण सूचना' : 'Important Notice for Patients & Attendants'}
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-red-900">
        {isHi ? (
          <>
            डॉ. गौरव शर्मा ऑर्थोपेडिक क्लिनिक निर्धारित समय ओपीडी परामर्श एवं नियोजित सर्जिकल देखभाल
            प्रदान करता है।{' '}
            <strong>हमारा क्लिनिक 24 घंटे की तृतीयक कैजुअल्टी इमरजेंसी का विकल्प नहीं है।</strong>
          </>
        ) : (
          <>
            Dr. Gaurav Sharma Orthopaedic Clinic operates scheduled outpatient consultations and
            elective reconstructive surgical pathways.{' '}
            <strong>Our clinic does NOT replace a 24-hour tertiary casualty trauma centre.</strong>
          </>
        )}
      </p>

      <div className="p-4 rounded-2xl bg-white/80 border border-red-200 text-xs sm:text-sm text-red-950 space-y-2">
        <strong className="block text-red-900 uppercase tracking-wide text-xs">
          {isHi
            ? 'यदि निम्नलिखित गंभीर लक्षण हों तो कृपया तुरंत नजदीकी अस्पताल के इमरजेंसी वार्ड में जाएं:'
            : 'Please proceed immediately to the nearest hospital casualty emergency if you experience:'}
        </strong>
        <ul className="list-disc list-inside space-y-1 text-red-900">
          {isHi ? (
            <>
              <li>तेज गति सड़क दुर्घटना एवं अत्यधिक रक्तस्राव</li>
              <li>खुला फ्रैक्चर (कंपाउंड फ्रैक्चर) जहां टूटी हड्डी त्वचा फाड़कर बाहर आ गई हो</li>
              <li>चोट के बाद हाथ या पैर में नाड़ी (पल्स) न मिलना, अंग का सुन्न पड़ना या नीला होना</li>
              <li>तीव्र कमर दर्द के साथ अचानक पेशाब या शौच पर नियंत्रण समाप्त होना (कॉडा इक्विना)</li>
              <li>सिर, गर्दन या रीढ़ की गंभीर चोट के साथ बेहोशी या लकवा (पैरालिसिस)</li>
            </>
          ) : (
            <>
              <li>High-velocity road traffic accident trauma with severe bleeding</li>
              <li>Open or compound bone fracture where bone has punctured through the skin</li>
              <li>Sudden complete loss of pulse, coldness, or blue discoloration in a limb after injury</li>
              <li>Acute cauda equina symptoms (loss of bowel or bladder control accompanying severe back pain)</li>
              <li>Head, neck, or spine trauma with altered consciousness or paralysis</li>
            </>
          )}
        </ul>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-red-800">
        <p>
          {isHi
            ? 'स्थिर, गैर-आपातकालीन जोड़ों की जांच एवं पूर्व-निर्धारित परामर्श हेतु ओपीडी समय में क्लिनिक डेस्क पर संपर्क करें।'
            : 'For stable, scheduled clinical evaluations and non-emergency appointments, please call the clinic desk during OPD hours.'}
        </p>
        <a
          href={`tel:${CLINIC_CONTACT.primaryPhone}`}
          className="inline-flex items-center gap-1.5 font-bold text-red-700 hover:text-red-900 underline shrink-0"
        >
          <PhoneCall className="w-4 h-4" />
          <span>
            {isHi ? `डेस्क नंबर: ${CLINIC_CONTACT.displayPhone}` : `Call Desk: ${CLINIC_CONTACT.displayPhone}`}
          </span>
        </a>
      </div>
    </div>
  );
}
