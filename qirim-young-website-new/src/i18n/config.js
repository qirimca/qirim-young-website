"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
const resources = {
    en: {
        translation: {
            // Navigation
            nav: {
                home: "Home",
                about: "About",
                projects: "Projects",
                impact: "Impact",
                getInvolved: "Get Involved",
                donate: "Donate",
                volunteer: "Volunteer",
                transparency: "Transparency",
                news: "News"
            },
            // Home page
            hero: {
                title: "Building Digital Future for Crimean Tatar Language",
                subtitle: "QIRI'M YOUNG creates innovative digital tools and platforms to preserve, study, and develop the Crimean Tatar language for future generations. From national corpus to parallel translation systems.",
                cta: "Support Our Mission",
                learnMore: "Explore Projects",
                stats: {
                    language: "Endangered Language",
                    projects: "Digital Projects",
                    volunteers: "Active Contributors",
                    impact: "Words in Corpus"
                }
            },
            // About section
            about: {
                title: "About QIRI'M YOUNG",
                mission: "Mission",
                vision: "Vision",
                values: "Values",
                missionText: "We develop digital infrastructure for the Crimean Tatar language through corpus linguistics, machine translation, and educational technologies. Our work ensures linguistic data preservation and creates tools for language learning and research.",
                visionText: "A digitally empowered Crimean Tatar language that thrives in modern technology ecosystems, from search engines to AI applications, supporting speakers worldwide.",
                valuesText: "Scientific Approach, Open Source, Community Collaboration, Cultural Respect, Technical Excellence"
            },
            // Projects section
            projects: {
                title: "Our Projects",
                subtitle: "Digital tools and platforms advancing Crimean Tatar language technology",
                nationalCorpus: {
                    title: "National Corpus of Crimean Tatar Language",
                    description: "Open linguistic database with over 1 million words, supporting research and NLP development. Available at ctcorpus.org"
                },
                parallelCorpus: {
                    title: "Parallel Translation Corpus",
                    description: "English-Crimean Tatar parallel texts for machine translation training and bilingual research"
                },
                languageCourses: {
                    title: "Digital Learning Resources",
                    description: "Memrise, Quizlet, and Anki courses for English speakers learning Crimean Tatar language"
                },
                research: {
                    title: "Computational Linguistics Research",
                    description: "Academic publications and collaborations on Crimean Tatar language processing and preservation"
                }
            },
            // Impact page
            impact: {
                title: "Our Impact",
                subtitle: "Measurable outcomes and real-world impact of our mission to preserve and advance Crimean Tatar language through digital innovation and community collaboration.",
                metrics: "Impact Metrics",
                achievements: "Key Achievements",
                testimonials: "Community Testimonials",
                research: "Research Output & Publications",
                joinImpact: "Join Our Growing Impact"
            },
            // Get Involved page
            getInvolved: {
                title: "Get Involved",
                subtitle: "Join our mission to preserve and advance Crimean Tatar language through digital innovation. Together, we can ensure this beautiful language thrives in the digital age.",
                volunteer: "Volunteer Opportunities",
                partnerships: "Partnership Opportunities",
                support: "Ways to Support Our Mission",
                ready: "Ready to Make a Difference?"
            },
            // Transparency page
            transparency: {
                title: "Transparency & Accountability",
                subtitle: "We believe in complete transparency about our mission, operations, and impact. Here you'll find our financial reports, governance structure, and accountability measures.",
                financial: "Financial Transparency",
                governance: "Governance Structure",
                metrics: "Accountability Metrics",
                reports: "Reports & Documents",
                ethics: "Our Ethical Commitments",
                questions: "Questions About Our Transparency?"
            },
            // News page
            news: {
                title: "News & Updates",
                subtitle: "Latest developments, achievements, and project updates from QIRI'M YOUNG's mission to preserve and advance Crimean Tatar language through digital innovation.",
                stayUpdated: "Stay Updated",
                followProgress: "Follow our journey as we build digital tools for Crimean Tatar language preservation."
            },
            // Common
            common: {
                readMore: "Read More",
                learnMore: "Learn More",
                getStarted: "Get Started",
                contactUs: "Contact Us",
                loading: "Loading...",
                viewProject: "Visit Project",
                explore: "Explore",
                download: "Download",
                available: "Available",
                comingSoon: "Coming Soon"
            }
        }
    },
    uk: {
        translation: {
            // Navigation
            nav: {
                home: "Головна",
                about: "Про нас",
                projects: "Проекти",
                impact: "Вплив",
                getInvolved: "Долучитись",
                donate: "Підтримати",
                volunteer: "Волонтерство",
                transparency: "Прозорість",
                news: "Новини"
            },
            // Home page
            hero: {
                title: "Створюємо цифрове майбутнє кримськотатарської мови",
                subtitle: "QIRI'M YOUNG розробляє інноваційні цифрові інструменти та платформи для збереження, вивчення та розвитку кримськотатарської мови для майбутніх поколінь. Від національного корпусу до систем паралельного перекладу.",
                cta: "Підтримати нашу місію",
                learnMore: "Дослідити проекти",
                stats: {
                    language: "Зникаюча мова",
                    projects: "Цифрові проекти",
                    volunteers: "Активні дописувачі",
                    impact: "Слів у корпусі"
                }
            },
            // About section
            about: {
                title: "Про QIRI'M YOUNG",
                mission: "Місія",
                vision: "Бачення",
                values: "Цінності",
                missionText: "Зберігати та розвивати кримськотатарську мову через інноваційні цифрові рішення, забезпечуючи виживання та процвітання нашої культурної спадщини для майбутніх поколінь.",
                visionText: "Світ, де кримськотатарська мова повністю інтегрована в сучасне цифрове життя, доступна всім членам спільноти по всьому світу.",
                valuesText: "Інновації, Збереження культури, Спільнота, Прозорість, Досконалість"
            },
            // Projects section
            projects: {
                title: "Наші проекти",
                subtitle: "Інноваційні цифрові рішення для збереження кримськотатарської спадщини",
                nationalCorpus: {
                    title: "Національний корпус",
                    description: "Всеосяжна база даних як основа для цифрової інтеграції"
                },
                googleTranslate: {
                    title: "Інтеграція Google Translate",
                    description: "Успішно додано кримськотатарську мову до платформи Google Translate"
                },
                aiTools: {
                    title: "ШІ мовні інструменти",
                    description: "Розробка клавіатур, розпізнавання мовлення та ШІ додатків"
                },
                education: {
                    title: "Освітня платформа",
                    description: "Мультимедійна платформа BÜLBÜL для вивчення мови дітьми"
                }
            },
            // Impact page
            impact: {
                title: "Наш вплив",
                subtitle: "Вимірювані результати та реальний вплив нашої місії зі збереження та розвитку кримськотатарської мови через цифрові інновації та співпрацю з громадою.",
                metrics: "Показники впливу",
                achievements: "Ключові досягнення",
                testimonials: "Відгуки спільноти",
                research: "Дослідження та публікації",
                joinImpact: "Приєднуйтесь до нашого впливу"
            },
            // Get Involved page
            getInvolved: {
                title: "Долучитися",
                subtitle: "Приєднуйтесь до нашої місії зі збереження та розвитку кримськотатарської мови через цифрові інновації. Разом ми можемо забезпечити процвітання цієї прекрасної мови в цифрову епоху.",
                volunteer: "Можливості волонтерства",
                partnerships: "Можливості партнерства",
                support: "Способи підтримати нашу місію",
                ready: "Готові змінити світ?"
            },
            // Transparency page
            transparency: {
                title: "Прозорість та підзвітність",
                subtitle: "Ми віримо в повну прозорість щодо нашої місії, діяльності та впливу. Тут ви знайдете наші фінансові звіти, структуру управління та заходи підзвітності.",
                financial: "Фінансова прозорість",
                governance: "Структура управління",
                metrics: "Показники підзвітності",
                reports: "Звіти та документи",
                ethics: "Наші етичні зобов'язання",
                questions: "Питання щодо нашої прозорості?"
            },
            // News page
            news: {
                title: "Новини та оновлення",
                subtitle: "Останні розробки, досягнення та оновлення проектів від QIRI'M YOUNG у місії збереження та розвитку кримськотатарської мови через цифрові інновації.",
                stayUpdated: "Слідкуйте за оновленнями",
                followProgress: "Слідкуйте за нашою подорожжю створення цифрових інструментів для збереження кримськотатарської мови."
            },
            // Common
            common: {
                readMore: "Читати далі",
                learnMore: "Дізнатися більше",
                getStarted: "Почати",
                contactUs: "Зв'язатися з нами",
                loading: "Завантаження...",
                viewProject: "Відвідати проект",
                explore: "Дослідити",
                download: "Завантажити",
                available: "Доступно",
                comingSoon: "Незабаром"
            }
        }
    },
    crh: {
        translation: {
            // Navigation
            nav: {
                home: "Baş Sayfa",
                about: "Aqqında",
                projects: "Loyihalar",
                impact: "Tesir",
                getInvolved: "Qatıl",
                donate: "Destek",
                volunteer: "Gönüllü",
                transparency: "Açıqlıq",
                news: "Haberler"
            },
            // Home page
            hero: {
                title: "Qırımtatar Mirasını Dijital İnnovasyon ile Saqlaw",
                subtitle: "Qırımtatar tiliniñ kelecegini çağdaş teknolojiya ile qurıp, medeni mirasımıznıñ dijital devürde yaşamasını temin etmekte.",
                cta: "Misyonımızğa Destek",
                learnMore: "Daha Çoq Ögren",
                stats: {
                    language: "Til Saqlandı",
                    projects: "Faal Loyihalar",
                    volunteers: "Dünya Gönüllüleri",
                    impact: "Etkilenen Yaşamlar"
                }
            },
            // About section
            about: {
                title: "QIRI'M YOUNG Aqqında",
                mission: "Misyon",
                vision: "Vizyon",
                values: "Qıymetler",
                missionText: "Qırımtatar tilini innovatsion dijital çözümler ile saqlaw ve inkişaf ettirmek, medeni mirasımıznıñ gelecek nesillerge yaşamasını temin etmek.",
                visionText: "Qırımtatar tiliniñ çağdaş dijital yaşantığa tam entegre olğan, dünya çapında cemaat üyelerine erişilebilir olğan bir dünya.",
                valuesText: "İnnovasyon, Medeni Saqlaw, Cemaat, Açıqlıq, Mükemmellik"
            },
            // Projects section  
            projects: {
                title: "Loyihalarımız",
                subtitle: "Qırımtatar mirasını saqlaw içün innovatsion dijital çözümler",
                nationalCorpus: {
                    title: "Milli Korpus",
                    description: "Dijital entegrasyonnıñ temeli olaraq hizmet etken şamil veritabanı"
                },
                googleTranslate: {
                    title: "Google Translate Entegrasyonu",
                    description: "Qırımtatar tilini Google Translate platformasına başarılı olaraq eklendi"
                },
                aiTools: {
                    title: "YZ Til Aletleri",
                    description: "Klavye, konuşma-metin ve YZ uygulamalarınıñ inkişafı"
                },
                education: {
                    title: "Eğitim Platforması",
                    description: "Çocuqlar içün BÜLBÜL multimedya platform"
                }
            },
            // Impact page
            impact: {
                title: "Bizim Tesir",
                subtitle: "Qırımtatar tilini dijital innovasyon ve cemaat işbirliği ile saqlaw ve inkişaf ettirmek misyonımıznıñ ölçülebilir neticeleri ve gerçek tesiri.",
                metrics: "Tesir Ölçüleri",
                achievements: "Anahtariy Başarılar",
                testimonials: "Cemaat Şahadetnameleri",
                research: "Araştırma Çıqtıları ve Yayınlar",
                joinImpact: "Büyüyen Tesirimizge Qatılıñız"
            },
            // Get Involved page
            getInvolved: {
                title: "Qatılıñız",
                subtitle: "Qırımtatar tilini dijital innovasyon ile saqlaw ve inkişaf ettirmek misyonımızğa qatılıñız. Beraber bu güzel tilniñ dijital devürde yaşamasını temin etebiliriz.",
                volunteer: "Gönüllü İmkanları",
                partnerships: "Ortaqlıq İmkanları",
                support: "Misyonımızğa Destek Yolları",
                ready: "Farq Yaratmağa Hazır mısıñız?"
            },
            // Transparency page
            transparency: {
                title: "Şeffaflıq ve Hesap Verebilirlik",
                subtitle: "Misyonımız, faaliyetlerimiz ve tesirimiz aqqında tam şeffaflığa inanırız. Burada mali raporlarımız, yönetim yapımız ve hesap verebilirlik tedbirlerimizi bulacaqsıñız.",
                financial: "Mali Şeffaflıq",
                governance: "Yönetim Yapısı",
                metrics: "Hesap Verebilirlik Ölçüleri",
                reports: "Raporlar ve Belgeler",
                ethics: "Etik Taahhütlerimiz",
                questions: "Şeffaflığımız Aqqında Sorularıñız mı Var?"
            },
            // News page
            news: {
                title: "Haberler ve Güncellemeler",
                subtitle: "QIRI'M YOUNG'nıñ qırımtatar tilini dijital innovasyon ile saqlaw ve inkişaf ettirmek misyonından soñki inkişaflar, başarılar ve loyiha güncellemeleri.",
                stayUpdated: "Güncel Qalıñız",
                followProgress: "Qırımtatar tilini saqlaw içün dijital aletler yaratma yolculuğımızı takip ediñiz."
            },
            // Common
            common: {
                readMore: "Daha Çoq Oquñız",
                learnMore: "Daha Çoq Ögren",
                getStarted: "Başla",
                contactUs: "Bizimle İletişim",
                loading: "Yüklenmekte...",
                viewProject: "Loyihağa Baq",
                explore: "Keşfet",
                download: "İndir",
                available: "Mevcut",
                comingSoon: "Yakında"
            }
        }
    }
};
i18next_1.default
    .use(i18next_browser_languagedetector_1.default)
    .use(react_i18next_1.initReactI18next)
    .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false
    },
    detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage']
    }
});
exports.default = i18next_1.default;
