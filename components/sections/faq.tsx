"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Bir layihə nə qədər vaxt aparır?",
    answer:
      "Layihənin mürəkkəbliyindən asılı olaraq, sadə veb-sayt 2-3 həftəyə, daha böyük platformalar isə 6-8 həftəyə tamamlanır. İlk görüşdə dəqiq müddəti birlikdə müəyyən edirik.",
  },
  {
    question: "Qiymətlər necə müəyyən edilir?",
    answer:
      "Hər layihə unikaldır, ona görə də standart qiymət siyahımız yoxdur. Layihənizin tələblərini dinlədikdən sonra şəffaf və ədalətli bir təklif hazırlayırıq. İlk məsləhət pulsuzdur.",
  },
  {
    question: "Layihədən sonra dəstək göstərirsiniz?",
    answer:
      "Bəli. Buraxılışdan sonra 30 günlük pulsuz texniki dəstək təmin edirik. Bundan sonra aylıq texniki dəstək və baxım paketlərimiz mövcuddur.",
  },
  {
    question: "Hansı texnologiyalardan istifadə edirsiniz?",
    answer:
      "React, Next.js, TypeScript, Tailwind CSS, Node.js kimi müasir texnologiyalardan istifadə edirik. E-ticarət üçün Shopify, CMS üçün isə WordPress inteqrasiyaları da təklif edirik.",
  },
  {
    question: "Mövcud veb-saytımı yeniləyə bilərsiniz?",
    answer:
      "Əlbəttə. Mövcud veb-saytınızı yenidən dizayn edə, performansını artıra və ya yeni funksiyalar əlavə edə bilərik. İlk addım olaraq saytınızı pulsuz audit edirik.",
  },
  {
    question: "SEO xidməti təklif edirsiniz?",
    answer:
      "Bəli. Hər layihəyə əsas SEO optimallaşdırması daxildir. Bundan əlavə, davamlı SEO strategiyası və aylıq hesabatlar üçün ayrıca paketlər təklif edirik.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-gray-900 pr-4 group-hover:text-gray-600 transition-colors">
          {question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-300 transition-colors">
          {isOpen ? (
            <Minus size={14} className="text-gray-500" />
          ) : (
            <Plus size={14} className="text-gray-500" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-gray-500 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-gray-400 mb-4 block">
              Sual-Cavab
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-4">
              Tez-tez verilən suallar
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              Cavabınızı tapa bilmirsinizsə, bizimlə{" "}
              <a href="#contact" className="text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors">
                əlaqə saxlayın
              </a>
              .
            </p>
          </motion.div>

          {/* Right — FAQ items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <div className="border-t border-gray-100">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
