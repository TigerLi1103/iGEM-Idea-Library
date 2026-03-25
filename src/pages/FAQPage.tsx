import React from 'react';
import { Card, Badge } from '../components/UI';
import { FAQS } from '../data/guide';

export const FAQPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <section className="max-w-3xl">
        <Badge variant="verified" className="mb-4">FAQ 常见问题</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">先解掉最常见的焦虑问题</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          FAQ 的目标不是堆问题，而是快速回答新手最常遇到、最影响行动的关键疑问。后续你完全可以继续扩展成按“认知 / 执行 / 团队管理”分类的完整问答区。
        </p>
      </section>

      <section className="space-y-4">
        {FAQS.map((faq, index) => (
          <Card key={faq.question} className="p-7">
            <div className="text-sm font-semibold text-emerald-600 mb-2">Q{index + 1}</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{faq.question}</h2>
            <p className="text-slate-600 leading-7">{faq.answer}</p>
          </Card>
        ))}
      </section>
    </div>
  );
};
