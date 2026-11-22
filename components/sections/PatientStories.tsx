import React from 'react';
import {
  FEATURE_FLAG_PATIENT_STORIES,
  SEED_PATIENT_STORIES,
} from '@/content/patientStories';
import { ShieldAlert, Quote, CheckCircle2, User } from 'lucide-react';
import { Badge } from '../ui/Badge';

/**
 * NMC COMPLIANCE AND ETHICAL ADVERTISING NOTICE:
 * Under National Medical Commission (NMC) regulations, unsolicited patient testimonials
 * and commercial solicitation are strictly restricted.
 *
 * This component will return null unless FEATURE_FLAG_PATIENT_STORIES is set to true.
 * TODO: Confirm with Dr. Gaurav Sharma and verified written clinical consent records
 * before enabling this section in public production deployment.
 */
export function PatientStories() {
  if (!FEATURE_FLAG_PATIENT_STORIES) {
    return null;
  }

  return (
    <section id="patient-stories" className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="teal" size="sm" className="mb-3">
            Clinical Recovery Logs
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F2744] tracking-tight">
            Patient Recovery Experiences
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#566474]">
            Anonymized patient recovery pathways documented following explicit written consent for
            clinical educational transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SEED_PATIENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-[#E2DBD0] p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#0F2744]/10 text-[#0F2744] flex items-center justify-center font-bold text-sm">
                      {story.patientInitials.slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#0F2744]">{story.patientInitials}</h3>
                      <span className="text-xs text-[#7C8894]">
                        Age {story.age} • {story.location}
                      </span>
                    </div>
                  </div>
                  <Badge variant="green" size="sm">
                    Verified Consent
                  </Badge>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-bold text-[#0D7E8A] block">Diagnosis:</span>
                  <p className="text-xs font-semibold text-[#1A2530]">{story.condition}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9] mb-4 text-xs">
                  <span className="font-bold text-[#0F2744] block mb-0.5">Clinical Pathway:</span>
                  <p className="text-[#475569]">{story.clinicalPathway}</p>
                </div>

                <blockquote className="text-xs text-[#475569] italic relative pl-4 border-l-2 border-[#C28E38] leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-3 border-t border-[#F0EBE1] text-[11px] text-[#64748B] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{story.outcomeSummary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
