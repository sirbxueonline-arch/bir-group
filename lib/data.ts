import {
  Globe,
  Code2,
  Palette,
  ShoppingCart,
  Search,
  Wrench,
} from "lucide-react";

export const portfolioProjects = [
  {
    id: 1,
    title: "Prime Rent A Car",
    category: "Avtomobil İcarəsi",
    description:
      "Real vaxt rejimində mövcudluq, rahat rezervasiya prosesi və Azərbaycan üzrə səyahətçilər üçün nəzərdə tutulmuş müasir interfeys ilə premium avtomobil icarə platforması.",
    url: "https://primerentacar.az",
    gradient: "from-blue-600/20 to-cyan-600/20",
    accentColor: "#3B82F6",
    size: "large" as const,
  },
  {
    id: 2,
    title: "Art & Smile",
    category: "Səhiyyə & Estetika",
    description:
      "İsti estetika ilə klinik peşəkarlığı birləşdirən müasir klinika veb-saytı — onlayn qeydiyyat, müalicə nümayişləri və xəstəyönümlü dizayn.",
    url: "https://artandsmile.az",
    gradient: "from-rose-600/20 to-pink-600/20",
    accentColor: "#F43F5E",
    size: "small" as const,
  },
  {
    id: 3,
    title: "Kasper Lift",
    category: "Sənaye & Mühəndislik",
    description:
      "Aparıcı lift şirkəti üçün korporativ veb-mövcudluq — məhsul kataloqları, texniki spesifikasiyalar və etibarlılıq üçün qurulmuş xidmət sorğu sistemləri.",
    url: "https://kasperlift.az",
    gradient: "from-amber-600/20 to-orange-600/20",
    accentColor: "#F59E0B",
    size: "small" as const,
  },
  {
    id: 4,
    title: "Archilink",
    category: "Memarlıq Platforması",
    description:
      "Memarları, dizaynerləri və müştəriləri birləşdirən vizual cəhətdən zəngin platforma — layihə qalereyaları, 3D nümayişlər və əməkdaşlıq alətləri.",
    url: "https://archilink.az",
    gradient: "from-emerald-600/20 to-teal-600/20",
    accentColor: "#10B981",
    size: "medium" as const,
  },
  {
    id: 5,
    title: "Tryzirva",
    category: "SaaS Platforma",
    description:
      "İntuitiv idarə panelləri, qabaqcıl analitika və qlobal miqyas üçün qurulmuş konversiyaya optimallaşdırılmış onboarding axını olan müasir SaaS məhsulu.",
    url: "https://tryzirva.com",
    gradient: "from-violet-600/20 to-purple-600/20",
    accentColor: "#8B5CF6",
    size: "medium" as const,
  },
];

export const services = [
  {
    icon: Palette,
    title: "Veb Dizayn",
    description:
      "Estetika ilə istifadə rahatlığını balanslaşdıran piksel-mükəmməl interfeyslər. Hər dizayn qərarı strategiya və istifadəçi psixologiyasına əsaslanır.",
  },
  {
    icon: Code2,
    title: "Veb İnkişaf",
    description:
      "Müasir framework-lərlə qurulmuş möhkəm, miqyaslana bilən tətbiqlər. Təmiz kod, yüksək performans və davamlı arxitektura.",
  },
  {
    icon: Globe,
    title: "UI/UX Dizayn",
    description:
      "İstifadəçiləri məmnun edən və konversiyaları artıran araşdırmaya əsaslanan təcrübələr. Wireframe-lərdən interaktiv prototiplərə qədər.",
  },
  {
    icon: ShoppingCart,
    title: "E-Ticarət",
    description:
      "Rahat ödəniş axınları, inventar idarəetməsi və ödəniş şlüzü inteqrasiyaları ilə yüksək konversiyalı onlayn mağazalar.",
  },
  {
    icon: Search,
    title: "SEO Optimallaşdırma",
    description:
      "Görünürlüyü artıran, üzvi trafik cəlb edən və brendinizi axtarış nəticələrinin zirvəsinə çıxaran məlumata əsaslanan SEO strategiyaları.",
  },
  {
    icon: Wrench,
    title: "Texniki Dəstək",
    description:
      "Davamlı texniki dəstək, performans monitorinqi, təhlükəsizlik yeniləmələri və saytınızı ən yüksək performansda saxlamaq üçün daimi təkmilləşdirmələr.",
  },
];

export const stats = [
  { value: 20, suffix: "+", label: "Tamamlanmış Layihə" },
  { value: 5, suffix: "+", label: "Xidmət Göstərilən Sahə" },
  { value: 100, suffix: "%", label: "Müştəri Məmnuniyyəti" },
  { value: 3, suffix: "+", label: "İllik Təcrübə" },
];

export const processSteps = [
  {
    step: "01",
    title: "Kəşf",
    description:
      "Biznesinizi, auditoriyanızı və məqsədlərinizi dərindən araşdırırıq. Tədqiqat və strategiya sessiyaları vasitəsilə layihə yol xəritəsini müəyyən edirik.",
  },
  {
    step: "02",
    title: "Dizayn",
    description:
      "Strategiyanı heyrətamiz vizuallara çeviririk. Vizyonunuzu canlandıran wireframe-lər, maketlər və interaktiv prototiplər hazırlayırıq.",
  },
  {
    step: "03",
    title: "İnkişaf",
    description:
      "Ən müasir texnologiyalarla dəqiqliklə qururuq. Hər kod sətri performans, təhlükəsizlik və miqyaslana bilmə üçün optimallaşdırılıb.",
  },
  {
    step: "04",
    title: "Buraxılış",
    description:
      "Hərtərəfli test, yerləşdirmə və təhvil. Qüsursuz buraxılışı təmin edir və işlərin rəvan getməsi üçün davamlı dəstək göstəririk.",
  },
];

export const testimonials = [
  {
    name: "Elvin Məmmədov",
    role: "CEO, Prime Rent A Car",
    content:
      "Birclick Group onlayn mövcudluğumuzu tamamilə dəyişdirdi. Qurduqları rezervasiya platforması konversiyalarımızı 3 dəfə artırdı. Detallara diqqətləri misilsizdir.",
    rating: 5,
  },
  {
    name: "Leyla Həsənova",
    role: "Təsisçi, Art & Smile",
    content:
      "Birclick ilə işləmək rahat bir təcrübə idi. Brendimizi mükəmməl başa düşdülər və xəstələrimizin sevdiyi bir veb-sayt təqdim etdilər. Həqiqətən peşəkar komanda.",
    rating: 5,
  },
  {
    name: "Rəşad Əliyev",
    role: "CTO, Tryzirva",
    content:
      "Birclick-in texniki təcrübəsi müstəsnadır. SaaS platformamızı sıfırdan gündəlik minlərlə istifadəçini idarə edən miqyaslana bilən arxitektura ilə qurdular.",
    rating: 5,
  },
];

export const navLinks = [
  { label: "Xidmətlər", href: "#services" },
  { label: "İşlərimiz", href: "#work" },
  { label: "Proses", href: "#process" },
  { label: "Rəylər", href: "#testimonials" },
  { label: "Əlaqə", href: "#contact" },
];
