import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '数学·AI·Lean',
  description: 'MATH289 中文版 — 数学实践在变化的世界中',
  lang: 'zh-CN',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '论文翻译', link: '/papers/' },
      { text: '课程材料', link: '/tutorials/' },
      { text: '学习笔记', link: '/notes/' },
      { text: '实践资源', link: '/practice/' },
      { text: '学习指南', link: '/guides/' },
      { text: '核心洞察', link: '/insights/' },
    ],

    sidebar: {
      '/papers/': [
        {
          text: '论文翻译',
          items: [
            { text: 'Thurston《数学中的证明与进展》', link: '/papers/thurston' },
            { text: 'Etingof《数学研究中AI的使用》', link: '/papers/etingof' },
            { text: 'Tao-Klowden《数学方法与AI时代的人类思维》', link: '/papers/tao-klowden' },
          ]
        }
      ],
      '/tutorials/': [
        {
          text: '课程材料翻译',
          items: [
            { text: 'Lean 入门教程（Otis）', link: '/tutorials/lean-basics' },
            { text: 'Lean 验证机制（Fred）', link: '/tutorials/lean-kernel' },
          ]
        }
      ],
      '/notes/': [
        {
          text: '论文分析',
          items: [
            { text: '两篇论文对比分析', link: '/notes/comparison' },
            { text: '三篇文献十二原则', link: '/notes/principles' },
            { text: 'Tao-Klowden 深度解读', link: '/notes/tao-klowden-analysis' },
            { text: 'Thurston 局限性分析', link: '/notes/thurston-limitations' },
            { text: '重读 Thurston', link: '/notes/thurston-revisited' },
          ]
        },
        {
          text: '实践分析',
          items: [
            { text: '从 Nat 到 Int', link: '/notes/nat-to-int' },
            { text: '案例全思考过程', link: '/notes/case-study' },
            { text: '函数的十五种理解', link: '/notes/function-understanding' },
            { text: '战术代码如何理解', link: '/notes/tactics' },
          ]
        }
      ],
      '/practice/': [
        {
          text: '实践资源',
          items: [
            { text: 'Lean 安装指南', link: '/practice/installation' },
            { text: 'Lean4 语法速查', link: '/practice/syntax' },
            { text: '人AI协作全流程', link: '/practice/workflow' },
            { text: 'Lean全流程案例', link: '/practice/case-walkthrough' },
          ]
        }
      ],
      '/guides/': [
        {
          text: '学习指南',
          items: [
            { text: 'AI时代学习Lean路线图', link: '/guides/learn-lean' },
            { text: 'AI时代数学系新生指南', link: '/guides/freshman' },
            { text: 'AI算法研究员指南', link: '/guides/researcher' },
            { text: 'LLM时代学习流程', link: '/guides/learning-flow' },
            { text: '学习的本质与内化', link: '/guides/learning-essence' },
          ]
        }
      ],
      '/insights/': [
        {
          text: '核心洞察',
          items: [
            { text: '理解是数学的不变量', link: '/insights/understanding-invariant' },
            { text: 'LLM改变了什么', link: '/insights/llm-changes' },
            { text: '数学家的核心工作', link: '/insights/mathematician-role' },
            { text: '辩证分析', link: '/insights/dialectic' },
          ]
        }
      ],
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除',
            backButtonTitle: '返回',
            noResultsText: '没有结果',
            footer: {
              selectText: '选择',
              navigateText: '导航',
              closeText: '关闭',
            }
          }
        }
      }
    },

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PascalMeng/math289-cn' }
    ],

    footer: {
      message: '基于斯坦福大学 MATH289 课程 · 仅供学习交流',
      copyright: 'Copyright © 2026',
    },

    externalLinkIcon: true,
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    lineNumbers: false,
  },
})
