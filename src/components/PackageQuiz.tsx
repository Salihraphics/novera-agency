'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    points: number;
  }[];
}

interface Result {
  title: string;
  description: string;
  cta: string;
  buttonLink: string;
}

export function PackageQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      text: 'İşletmen şu an hangi aşamada?',
      options: [
        { text: 'Yeni kuruldum veya tek kişilik bir girişimim var', points: 1 },
        { text: 'Aktif çalışıyorum ve büyümek istiyorum', points: 2 },
        { text: 'Oturmuş bir markayım, ölçeklenmek istiyorum', points: 3 },
      ],
    },
    {
      id: 2,
      text: 'Şu an online görünürlüğün nasıl?',
      options: [
        { text: 'Web sitem yok ya da çok eski', points: 1 },
        { text: 'Web sitem var ama yeterince dönüşüm almıyor', points: 2 },
        { text: 'Web + sosyal + reklam var ama profesyonel yönetilmiyor', points: 3 },
      ],
    },
    {
      id: 3,
      text: 'İçerik üretim ihtiyacın ne seviyede?',
      options: [
        { text: 'Ayda 1–2 içerik yeterli', points: 1 },
        { text: 'Haftalık düzenli içerik istiyorum', points: 2 },
        { text: 'Sürekli, planlı ve profesyonel içerik istiyorum', points: 3 },
      ],
    },
    {
      id: 4,
      text: 'Reklam ve büyüme hedefin var mı?',
      options: [
        { text: 'Şu an düşünmüyorum', points: 1 },
        { text: 'Yakın zamanda denemek istiyorum', points: 2 },
        { text: 'Aktif reklam ve performans takibi istiyorum', points: 3 },
      ],
    },
    {
      id: 5,
      text: 'Ajansla çalışma beklentin ne?',
      options: [
        { text: 'Ara sıra destek alsam yeter', points: 1 },
        { text: 'Düzenli iletişim ve destek istiyorum', points: 2 },
        { text: 'Ajans benim ekibim gibi çalışsın', points: 3 },
      ],
    },
  ];

  const results: { [key: string]: Result } = {
    starter: {
      title: 'Başlangıç Paketi Sizin İçin Uygun',
      description:
        "Online'da düzgün ve güvenilir görünmek isteyen işletmeler için ideal başlangıç. Küçük başlayıp sağlam ilerlemek isteyenler için net çözüm.",
      cta: 'Detaylı Bilgi Al',
      buttonLink: '/contact',
    },
    professional: {
      title: 'Profesyonel Paket Sizin İçin Uygun',
      description:
        'Büyüme aşamasındasınız. Bu paket, markanızı sadece göstermekle kalmaz, dönüşüm almanızı sağlar.',
      cta: 'Profesyonel Planı İncele',
      buttonLink: '/contact',
    },
    enterprise: {
      title: 'Kurumsal Paket Sizin İçin Uygun',
      description:
        'Ajans aramıyorsunuz, ekip arıyorsunuz. Bu paket markanızı ölçeklemek için tasarlandı.',
      cta: 'Bizimle İletişime Geç',
      buttonLink: '/contact',
    },
  };

  const getResultType = (): keyof typeof results => {
    if (totalScore <= 7) return 'starter';
    if (totalScore <= 11) return 'professional';
    return 'enterprise';
  };

  const handleAnswer = (points: number) => {
    const newScore = totalScore + points;
    setTotalScore(newScore);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setTotalScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  if (showResult) {
    const resultType = getResultType();
    const result = results[resultType];

    return (
      <section className="py-section bg-white">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="rounded-2xl border-2 border-purple-600 p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {result.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {result.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href={result.buttonLink}
                className="inline-block px-8 py-3 bg-gradient-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
              >
                {result.cta}
              </Link>
              <button
                onClick={handleReset}
                className="inline-block px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-200"
              >
                Testi Tekrar Yap
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <section className="py-section bg-slate-50">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Benim için hangi paket uygun?
          </h2>
          <p className="text-slate-600 mb-6">
            5 sorudan oluşan bu testi yanıtlayarak kendine uygun paketi bul.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-accent h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-slate-500 mt-2">
            Soru {currentQuestion + 1} / {questions.length}
          </p>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            {question.text}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedAnswer(index);
                  setTimeout(() => handleAnswer(option.points), 200);
                }}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left font-medium ${
                  selectedAnswer === index
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-slate-200 bg-slate-50 hover:border-purple-400'
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleReset}
            className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            Testi Sıfırla
          </button>
          <p className="text-sm text-slate-500">
            {currentQuestion > 0 && (
              <span
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1);
                  setTotalScore(totalScore - (questions[currentQuestion - 1].options.find(o => o)?.points || 0));
                  setSelectedAnswer(null);
                }}
                className="text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                ← Geri
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
