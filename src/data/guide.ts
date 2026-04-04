export interface GuidePath {
  title: string;
  description: string;
  to: string;
  badge?: string;
}

export interface TimelineStage {
  id: string;
  title: string;
  period: string;
  summary: string;
  tasks: string[];
  pitfalls: string[];
  recommendedLinks: { label: string; to: string }[];
}

export interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
  whyItMatters: string;
  stage: string;
  misconception: string;
  resources: { label: string; to: string }[];
}

export const START_PATHS: GuidePath[] = [
  {
    title: '我想了解 iGEM 是什么',
    description: '先把比赛怎么跑看懂，再决定你要怎么参与。',
    to: '/guide',
    badge: '新手起点',
  },
  {
    title: '我准备组队',
    description: '先把人和分工定下来，再排节奏。别开局就乱冲。',
    to: '/timeline',
    badge: '组队前必看',
  },
  {
    title: '我已经加入队伍',
    description: '先判断你在哪个阶段，再补最该补的知识。',
    to: '/glossary',
  },
  {
    title: '我是队长或负责人',
    description: '你先抓三件事：时间线、交付物、评审点。',
    to: '/deliverables',
    badge: '负责人视角',
  },
  {
    title: '我在做项目设计',
    description: '去看 Idea Library 和 villages，先找方向再细化。',
    to: '/ideas',
  },
  {
    title: '我在查 parts / sequence',
    description: '直接去 Parts BLAST 贴序列，先搜到可能相关的 parts。',
    to: '/parts-blast',
    badge: 'MVP',
  },
];

export const QUICK_LINKS: GuidePath[] = [
  { title: '赛季时间线', description: '按阶段告诉你现在该做什么。', to: '/timeline' },
  { title: '交付物与评审', description: 'wiki、judging、medal 一次看明白。', to: '/deliverables' },
  { title: '官方资源导航', description: '把官网入口按任务重排，少绕路。', to: '/resources' },
  { title: 'FAQ', description: '最常见的问题直接给答案。', to: '/faq' },
];

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    id: 'explore',
    title: '前期了解与准备',
    period: '赛季前 / 刚接触 iGEM',
    summary: '开局先认路。规则没看懂就定题，后面大概率返工。',
    tasks: ['先看懂 iGEM 基本结构和赛季节奏', '先理清 team / project / wiki / judging / awards 关系', '先确认学校、实验室和成员资源边界'],
    pitfalls: ['把 iGEM 只当科研比赛', '没看交付物就开题', '只看案例，不看规则'],
    recommendedLinks: [
      { label: '看 iGEM 机制说明', to: '/guide' },
      { label: '先读 FAQ', to: '/faq' },
    ],
  },
  {
    id: 'forming',
    title: '组队与初步规划',
    period: '确定参赛意向后',
    summary: '这阶段先把队伍架起来，别急着把题目一次做死。',
    tasks: ['定好队长/负责人和核心模块分工', '判断项目方向和 village 的大致匹配', '从现在开始记录材料，别把 wiki 拖到最后'],
    pitfalls: ['角色不清楚，谁都在补位', '题目贪大，一开始就失控', '没有同步记录，后面全靠回忆'],
    recommendedLinks: [
      { label: '看交付物与评审', to: '/deliverables' },
      { label: '看官方资源导航', to: '/resources' },
    ],
  },
  {
    id: 'execution',
    title: '项目设计与执行',
    period: '赛季中段',
    summary: '执行期别只推一条线。实验、建模、HP、展示要一起走。',
    tasks: ['推进项目设计与验证', '边做边整理 wiki 素材和项目叙事', '提早按评审视角检查证据链'],
    pitfalls: ['只顾 wet lab，展示断档', '临近截止才补 wiki', '模块之间信息不同步'],
    recommendedLinks: [
      { label: '看案例与灵感库', to: '/ideas' },
      { label: '用 Parts BLAST', to: '/parts-blast' },
    ],
  },
  {
    id: 'finale',
    title: '收尾、展示与评审',
    period: '提交与答辩前',
    summary: '收尾就三件事：讲清楚、交齐材料、证据对上评审点。',
    tasks: ['核对交付物是否完整', '统一 presentation / wiki / judging 叙事', '对照 medal 和 prize 要求查漏补缺'],
    pitfalls: ['只补实验，不补叙事', '奖项目标和证据对不上', '最后几天才做全部展示材料'],
    recommendedLinks: [
      { label: '交付物与评审导航', to: '/deliverables' },
      { label: '查看 FAQ', to: '/faq' },
    ],
  },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Wiki',
    category: 'Deliverables',
    definition: '团队展示项目设计、实验、HP 和结果的核心页面。',
    whyItMatters: '评审主要通过它认识你们的项目。',
    stage: '项目执行期到收尾期',
    misconception: '很多人把 wiki 当成最后几天做的排版作业。',
    resources: [{ label: '交付物与评审', to: '/deliverables' }],
  },
  {
    term: 'Registry / Parts',
    category: 'Parts',
    definition: 'iGEM 里记录和复用标准生物构件的体系。',
    whyItMatters: '能帮你更快找到已有思路和可复用部件。',
    stage: '项目设计与执行阶段',
    misconception: '有人以为 parts 只和 wet lab 有关。',
    resources: [{ label: 'Parts BLAST', to: '/parts-blast' }],
  },
  {
    term: 'Judging',
    category: 'Evaluation',
    definition: '评审体系，用来判断项目完成度和奖项匹配度。',
    whyItMatters: '你做什么、怎么讲，最后都要落到评审理解路径上。',
    stage: '全赛季持续相关',
    misconception: '有人以为答辩前再看 judging 就行。',
    resources: [{ label: '交付物与评审', to: '/deliverables' }],
  },
  {
    term: 'Village',
    category: 'Competition Structure',
    definition: '用于组织项目方向和比较维度的分组。',
    whyItMatters: '帮你更快找到同类案例和潜在奖项方向。',
    stage: '组队与项目设计阶段',
    misconception: '有人先硬贴 village，再倒推项目。',
    resources: [{ label: '案例与灵感库', to: '/villages' }],
  },
  {
    term: 'Roster',
    category: 'Team',
    definition: '团队正式成员登记和队伍构成信息。',
    whyItMatters: '关系到团队身份、参赛资格和管理规范。',
    stage: '组队期与赛季管理阶段',
    misconception: '有人觉得 roster 只是个可有可无的名单。',
    resources: [{ label: '官方资源导航', to: '/resources' }],
  },
  {
    term: 'Human Practices',
    category: 'Project Module',
    definition: '项目和真实社会场景、利益相关方之间的互动实践。',
    whyItMatters: 'HP 会反过来影响你的项目设计，不是附属任务。',
    stage: '项目执行期',
    misconception: '有人把 HP 当项目做完后的宣传活动。',
    resources: [{ label: 'iGEM 机制说明', to: '/guide' }],
  },
];

export const FAQS = [
  {
    question: '没有实验室还能不能参加 iGEM？',
    answer: '能。你可以做 dry lab、建模、设计和 HP。前提是早点把资源边界和合作路径谈清楚。',
  },
  {
    question: '只有 coding 或设计背景，可以做什么？',
    answer: '很有用。建模、工具、可视化、wiki 结构、展示逻辑都需要这类能力。',
  },
  {
    question: 'wiki 可以最后再做吗？',
    answer: '别拖。wiki 是全程记录，不是最后一周补作业。',
  },
  {
    question: '项目一定要非常“硬核”才有竞争力吗？',
    answer: '不一定。评审更看重问题是否讲清楚、方案是否落地、证据能不能自证。',
  },
  {
    question: '队伍规模多大比较合理？',
    answer: '没有标准人数。能覆盖核心模块就行。人少也能做，但分工必须清楚。',
  },
];

export const RESOURCE_GROUPS = [
  {
    title: '想组队时需要看的页面',
    items: ['比赛整体机制', '队伍角色与分工', '赛季时间线', 'roster 与基本规则'],
  },
  {
    title: '想准备 wiki 时需要看的页面',
    items: ['交付物与评审导航', '往届优秀案例', '项目记录与叙事结构', '展示材料准备逻辑'],
  },
  {
    title: '想查 rules / awards / judging 时需要看的页面',
    items: ['medal 与 special prize 的区别', 'judges 主要看哪些材料', '奖项目标与证据链怎么对齐'],
  },
];
