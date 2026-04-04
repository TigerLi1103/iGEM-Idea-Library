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
    description: '先把基本盘搞懂：比赛怎么跑、队伍怎么分工、评审看什么。',
    to: '/guide',
    badge: '新手起点',
  },
  {
    title: '我准备组队',
    description: '先看赛季流程和角色分工，开局别跑偏。',
    to: '/timeline',
    badge: '组队前必看',
  },
  {
    title: '我已经加入队伍',
    description: '判断你现在在哪一步，先补最该补的那块。',
    to: '/glossary',
  },
  {
    title: '我是队长或负责人',
    description: '重点看节奏、交付物和评审要求，方便你带队控盘。',
    to: '/deliverables',
    badge: '负责人视角',
  },
  {
    title: '我在做项目设计',
    description: '直接去看 Idea Library、villages 和往届案例找方向。',
    to: '/ideas',
  },
  {
    title: '我在查 parts / sequence',
    description: '去 Parts BLAST 贴序列，先把可能相关的 parts 找出来。',
    to: '/parts-blast',
    badge: 'MVP',
  },
];

export const QUICK_LINKS: GuidePath[] = [
  { title: '赛季时间线', description: '按月份看你现在该做啥。', to: '/timeline' },
  { title: '交付物与评审', description: 'wiki、judging、medal 一次讲明白。', to: '/deliverables' },
  { title: '官方资源导航', description: '把官网入口按任务重排，少绕路。', to: '/resources' },
  { title: 'FAQ', description: '新手最常问的问题都在这。', to: '/faq' },
];

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    id: 'explore',
    title: '前期了解与准备',
    period: '赛季前 / 刚接触 iGEM',
    summary: '先把比赛规则看懂，再定题。开局最怕的是方向错了还猛做。',
    tasks: ['了解 iGEM 的基本结构与赛季节奏', '认识 team / project / wiki / judging / awards 的关系', '明确学校/实验室/成员资源边界'],
    pitfalls: ['把 iGEM 误解为单纯科研竞赛', '没搞清 deliverables 就开始冲项目', '只看项目案例，不看比赛规则'],
    recommendedLinks: [
      { label: '查看 iGEM 机制说明', to: '/guide' },
      { label: '先读 FAQ', to: '/faq' },
    ],
  },
  {
    id: 'forming',
    title: '组队与初步规划',
    period: '确定参赛意向后',
    summary: '这阶段先把人和节奏排好，不要一上来就把题做死。',
    tasks: ['确定队长/负责人/核心模块分工', '判断项目方向与 village 的大致匹配', '建立记录机制，别把 wiki 留到最后'],
    pitfalls: ['队伍角色不清晰', '过早追求宏大题目', '没有同步记录与版本管理'],
    recommendedLinks: [
      { label: '看交付物与评审', to: '/deliverables' },
      { label: '看官方资源导航', to: '/resources' },
    ],
  },
  {
    id: 'execution',
    title: '项目设计与执行',
    period: '赛季中段',
    summary: '进执行期后，实验、建模、HP、展示要一起推进，别只冲一条线。',
    tasks: ['推进项目设计、验证与模块协作', '同步整理 wiki 素材与项目叙事', '提早理解 judges 将从哪里认识你的项目'],
    pitfalls: ['只推进 wet lab，忽略叙事结构', '等临近截止才整理 wiki', '模块之间信息断裂'],
    recommendedLinks: [
      { label: '浏览案例与灵感库', to: '/ideas' },
      { label: '使用 Parts BLAST', to: '/parts-blast' },
    ],
  },
  {
    id: 'finale',
    title: '收尾、展示与评审',
    period: '提交与答辩前',
    summary: '收尾阶段就三件事：讲清楚、交齐材料、证据对上评审点。',
    tasks: ['核对交付物完整性', '统一 presentation / wiki / judging narrative', '对照 medal 与 prize 要求查漏补缺'],
    pitfalls: ['只顾着补实验，不顾评审叙事', '奖项目标与证据链不对应', '最后几天才集中做全部展示材料'],
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
    definition: '团队对项目、设计、实验、HP、结果与叙事进行系统展示的网站/页面集合。',
    whyItMatters: '评审理解项目的主要入口之一，不是最后做的“美化页面”。',
    stage: '项目执行期到收尾期',
    misconception: '常见误解是把 wiki 当作赛季最后几天整理文档的地方。',
    resources: [{ label: '交付物与评审', to: '/deliverables' }],
  },
  {
    term: 'Registry / Parts',
    category: 'Parts',
    definition: 'iGEM 中对标准化生物构件的记录、复用和展示体系。',
    whyItMatters: '帮助团队理解已有构件、设计思路和部件复用逻辑。',
    stage: '项目设计与执行阶段',
    misconception: '常见误解是把 parts 库理解成“只属于 wet lab 的参考资料”。',
    resources: [{ label: 'Parts BLAST', to: '/parts-blast' }],
  },
  {
    term: 'Judging',
    category: 'Evaluation',
    definition: '评审体系，用于判断团队项目的完成度、表达质量与奖项匹配度。',
    whyItMatters: '你做什么、怎么展示、怎样组织证据，最终都要回到 judges 的理解路径。',
    stage: '全赛季持续相关',
    misconception: '常见误解是以为 judging 只在最终答辩前才需要考虑。',
    resources: [{ label: '交付物与评审', to: '/deliverables' }],
  },
  {
    term: 'Village',
    category: 'Competition Structure',
    definition: '用于组织项目领域和比较维度的竞赛分组/主题方向。',
    whyItMatters: '帮助你找到项目归属、参考案例和潜在奖项方向。',
    stage: '组队与项目设计阶段',
    misconception: '常见误解是先强行贴 village，再倒推项目。',
    resources: [{ label: '案例与灵感库', to: '/villages' }],
  },
  {
    term: 'Roster',
    category: 'Team',
    definition: '团队正式成员登记与队伍构成信息。',
    whyItMatters: '关系到团队身份、参与资格和管理规范。',
    stage: '组队期与赛季管理阶段',
    misconception: '常见误解是 roster 只是一个无关紧要的名单表。',
    resources: [{ label: '官方资源导航', to: '/resources' }],
  },
  {
    term: 'Human Practices',
    category: 'Project Module',
    definition: '项目与社会、利益相关方、真实场景之间的互动与反馈实践。',
    whyItMatters: 'HP 不是附属品，它能反过来塑造项目设计与论证深度。',
    stage: '项目执行期',
    misconception: '常见误解是把 HP 当成项目完成后的宣传活动。',
    resources: [{ label: 'iGEM 机制说明', to: '/guide' }],
  },
];

export const FAQS = [
  {
    question: '没有实验室还能不能参加 iGEM？',
    answer: '能。没实验室也可以做 dry lab、建模、设计和 HP。关键是早点把资源边界和合作路径谈清楚。',
  },
  {
    question: '只有 coding 或设计背景，可以做什么？',
    answer: '当然可以。coding 和设计背景在 iGEM 很有用：建模、工具、可视化、wiki 结构、展示逻辑都靠这类能力。',
  },
  {
    question: 'wiki 可以最后再做吗？',
    answer: '别拖到最后。wiki 不是排版作业，是全程记录。你晚做一天，后面就多补一天坑。',
  },
  {
    question: '项目一定要非常“硬核”才有竞争力吗？',
    answer: '不一定。比“看起来很硬核”更重要的是：问题讲得清楚、方案能落地、证据能自证。',
  },
  {
    question: '队伍规模多大比较合理？',
    answer: '没有标准人数。能把核心模块覆盖住就行。人少也能打，但分工一定要清楚。',
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
    items: ['medal 与 special prize 的区别', 'judges 主要从哪些材料理解项目', '奖项目标与证据链匹配方式'],
  },
];
