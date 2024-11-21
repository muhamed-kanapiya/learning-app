export const marketingPaths = {
  seo: {
    id: 'seo',
    title: '🔍 Search Engine Optimization',
    description: 'Learn how to rank higher in search results',
    icon: '🎯',
    progress: 0,
    achievements: [
      { id: 'seo-basics', title: 'SEO Rookie', description: 'Complete your first SEO lesson', icon: '🌱', unlocked: false },
      { id: 'keyword-master', title: 'Keyword Master', description: 'Master keyword research', icon: '🔑', unlocked: false },
      { id: 'backlink-pro', title: 'Backlink Pro', description: 'Complete off-page SEO section', icon: '🔗', unlocked: false }
    ],
    lessons: [
      {
        title: 'SEO Fundamentals',
        steps: [
          {
            question: 'What is SEO?',
            content: 'SEO (Search Engine Optimization) is the practice of optimizing websites to rank higher in search engines. Ready to learn the key components?',
            options: [
              { text: 'Yes, teach me!', nextStep: 1 }
            ]
          },
          {
            question: 'Key Components of SEO',
            content: 'The three pillars of SEO are:\n1. Technical SEO\n2. On-page SEO\n3. Off-page SEO\n\nWhich would you like to explore first?',
            options: [
              { text: 'Technical SEO', nextStep: 2 },
              { text: 'On-page SEO', nextStep: 3 },
              { text: 'Off-page SEO', nextStep: 4 }
            ]
          }
        ]
      }
    ]
  },
  googleAds: {
    id: 'googleAds',
    title: '💰 Google Ads',
    description: 'Master paid search advertising',
    icon: '📈',
    progress: 0,
    achievements: [
      { id: 'ppc-starter', title: 'PPC Starter', description: 'Create your first campaign', icon: '🎲', unlocked: false },
      { id: 'conversion-king', title: 'Conversion King', description: 'Master conversion tracking', icon: '👑', unlocked: false },
      { id: 'roi-master', title: 'ROI Master', description: 'Optimize campaign ROI', icon: '💎', unlocked: false }
    ],
    lessons: [
      {
        title: 'Google Ads Basics',
        steps: [
          {
            question: 'Introduction to Google Ads',
            content: 'Google Ads is a powerful platform for paid search advertising. Ready to learn how to create effective campaigns?',
            options: [
              { text: "Let's begin!", nextStep: 1 }
            ]
          },
          {
            question: 'Campaign Types',
            content: 'Google Ads offers several campaign types:\n1. Search\n2. Display\n3. Video\n4. Shopping\n\nWhich would you like to learn about?',
            options: [
              { text: 'Search Campaigns', nextStep: 2 },
              { text: 'Display Campaigns', nextStep: 3 },
              { text: 'Video Campaigns', nextStep: 4 }
            ]
          }
        ]
      }
    ]
  },
  analytics: {
    id: 'analytics',
    title: '📊 Analytics',
    description: 'Master data-driven marketing',
    icon: '📈',
    progress: 0,
    achievements: [
      { id: 'data-rookie', title: 'Data Rookie', description: 'Set up your first dashboard', icon: '📊', unlocked: false },
      { id: 'insight-master', title: 'Insight Master', description: 'Master data analysis', icon: '🔍', unlocked: false },
      { id: 'reporting-pro', title: 'Reporting Pro', description: 'Create advanced reports', icon: '📑', unlocked: false }
    ],
    lessons: [
      {
        title: 'Analytics Fundamentals',
        steps: [
          {
            question: 'What is Web Analytics?',
            content: 'Web Analytics helps you understand how users interact with your website. Ready to learn the key metrics?',
            options: [
              { text: 'Yes, show me!', nextStep: 1 }
            ]
          },
          {
            question: 'Key Metrics',
            content: 'Important metrics include:\n1. Page Views\n2. Session Duration\n3. Bounce Rate\n4. Conversion Rate\n\nWhich metric interests you most?',
            options: [
              { text: 'Page Views', nextStep: 2 },
              { text: 'Session Metrics', nextStep: 3 },
              { text: 'Conversion Tracking', nextStep: 4 }
            ]
          }
        ]
      }
    ]
  }
};