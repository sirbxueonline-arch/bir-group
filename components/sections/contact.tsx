"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const budgetOptions = [
  "Büdcə aralığını seçin",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
  "Müzakirə edək",
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    description: "",
    budget: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Ad tələb olunur";
    if (!formState.email.trim()) newErrors.email = "E-poçt tələb olunur";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = "Yanlış e-poçt ünvanı";
    if (!formState.description.trim())
      newErrors.description = "Zəhmət olmasa layihənizi təsvir edin";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate() || !formRef.current) return;
    setStatus("loading");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setFormState({ name: "", email: "", description: "", budget: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-0 py-4 bg-transparent border-0 border-b border-gray-200 text-gray-900 text-base placeholder:text-gray-300 focus:outline-none focus:border-gray-900 transition-colors duration-300";

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — CTA copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-gray-400 mb-4 block">
              Əlaqə
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Gəlin birlikdə{" "}
              <span className="italic font-normal text-gray-400">
                quraq
              </span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-md">
              Layihəniz haqqında bizə məlumat verin. 24 saat ərzində sizə geri
              dönəcəyik.
            </p>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                <a href="mailto:kaan.guluzada@gmail.com" className="hover:text-gray-900 transition-colors">
                  kaan.guluzada@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                <span>Bakı, Azərbaycan</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {status === "error" ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                  <span className="text-red-500 text-lg font-bold">!</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Xəta baş verdi
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Mesaj göndərilmədi. Zəhmət olmasa yenidən cəhd edin.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
                >
                  Yenidən cəhd et
                </button>
              </div>
            ) : status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle2 size={40} className="text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mesaj göndərildi!
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  24 saat ərzində sizə geri dönəcəyik.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
                >
                  Başqa mesaj göndər
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Adınız"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className={inputClasses}
                    aria-label="Adınız"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="E-poçtunuz"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className={inputClasses}
                    aria-label="E-poçtunuz"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <select
                    name="budget"
                    value={formState.budget}
                    onChange={(e) =>
                      setFormState({ ...formState, budget: e.target.value })
                    }
                    className={`${inputClasses} ${!formState.budget ? "text-gray-300" : ""}`}
                    aria-label="Büdcə aralığı"
                  >
                    {budgetOptions.map((opt) => (
                      <option
                        key={opt}
                        value={opt === "Büdcə aralığını seçin" ? "" : opt}
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Layihəniz haqqında qısa məlumat..."
                    value={formState.description}
                    onChange={(e) =>
                      setFormState({ ...formState, description: e.target.value })
                    }
                    className={`${inputClasses} resize-none`}
                    aria-label="Layihə təsviri"
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.description}
                    </p>
                  )}
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex items-center gap-3 text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Göndərilir...
                      </>
                    ) : (
                      <>
                        Mesaj göndər
                        <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 group-hover:border-blue-300 group-hover:bg-blue-50 transition-all">
                          <ArrowRight size={16} />
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
