export const seoLessons = [
  {
    title: 'Introduction to SEO',
    steps: [
      {
        question: 'What is SEO?',
        response:
          'SEO (Search Engine Optimization) is the practice of optimizing your website to increase its visibility in search engines like Google. Want to learn the key components of SEO?',
        options: [
          {
            text: 'Yes, tell me more!',
            action: () => 'Yes, I want to learn more about SEO components!',
          },
        ],
      },
      {
        question: 'Key Components',
        response:
          'The main components of SEO are:\n1. On-page SEO (titles, meta descriptions, content)\n2. Off-page SEO (backlinks)\n3. Technical SEO (site speed, mobile-friendliness)\n\nWhich component would you like to learn about first?',
        options: [
          {
            text: 'On-page SEO',
            action: () => "Let's learn about On-page SEO",
          },
          {
            text: 'Off-page SEO',
            action: () => 'I want to know about Off-page SEO',
          },
          {
            text: 'Technical SEO',
            action: () => 'Tell me about Technical SEO',
          },
        ],
      },
    ],
  },
  {
    title: 'On-page SEO',
    steps: [
      {
        question: 'On-page SEO Basics',
        response:
          "On-page SEO involves optimizing individual web pages to rank higher in search results. Let's start with a quick quiz: What's the most important on-page element?",
        options: [
          {
            text: 'Title Tags',
            action: () => 'I think Title Tags are most important',
          },
          {
            text: 'Meta Descriptions',
            action: () => 'I believe Meta Descriptions are key',
          },
          {
            text: 'Content',
            action: () => 'Content must be the most important',
          },
        ],
      },
      {
        question: 'Content is King',
        response:
          'Correct! High-quality, relevant content is the most important factor. Good content should:\n- Answer user questions\n- Be well-researched\n- Include relevant keywords naturally\n- Stay fresh and updated\n\nWant to learn about keyword research?',
        options: [
          {
            text: 'Yes, teach me about keywords',
            action: () => 'Yes, I want to learn about keyword research',
          },
        ],
      },
    ],
  },
  {
    title: 'Keyword Research',
    steps: [
      {
        question: 'Understanding Keywords',
        response:
          'Keyword research helps you understand what your target audience is searching for. There are three main types:\n1. Short-tail keywords (1-2 words)\n2. Long-tail keywords (3+ words)\n3. LSI keywords (related terms)\n\nWhich type would you like to explore?',
        options: [
          {
            text: 'Short-tail keywords',
            action: () => 'Tell me about short-tail keywords',
          },
          {
            text: 'Long-tail keywords',
            action: () => 'I want to learn about long-tail keywords',
          },
          {
            text: 'LSI keywords',
            action: () => 'What are LSI keywords?',
          },
        ],
      },
    ],
  },
  {
    title: 'Off-page SEO',
    steps: [
      {
        question: 'What is Off-page SEO?',
        response:
          'Off-page SEO focuses on actions taken outside of your website to improve its ranking. These include:\n1. Building backlinks\n2. Social signals (engagement on social media)\n3. Brand mentions\n\nWould you like to learn about backlinks or social signals?',
        options: [
          {
            text: 'Backlinks',
            action: () => 'I want to learn about backlinks',
          },
          {
            text: 'Social signals',
            action: () => 'Tell me about social signals',
          },
        ],
      },
      {
        question: 'Backlink Basics',
        response:
          "Backlinks are links from other websites to yours. They are a critical factor in SEO because they indicate trust and authority. Here's how to build backlinks:\n- Create high-quality content\n- Guest post on other blogs\n- Build relationships with other websites\n\nReady to learn how to avoid bad backlinks?",
        options: [
          {
            text: 'Yes, tell me about bad backlinks',
            action: () => 'Yes, I want to avoid bad backlinks',
          },
        ],
      },
    ],
  },
  {
    title: 'Technical SEO',
    steps: [
      {
        question: 'What is Technical SEO?',
        response:
          'Technical SEO ensures that your website meets the technical requirements of search engines. Key areas include:\n1. Site speed optimization\n2. Mobile-friendliness\n3. Structured data (schema markup)\n\nWhich area would you like to explore first?',
        options: [
          {
            text: 'Site speed',
            action: () => "Let's start with site speed",
          },
          {
            text: 'Mobile-friendliness',
            action: () => 'I want to learn about mobile-friendliness',
          },
          {
            text: 'Structured data',
            action: () => 'Tell me about structured data',
          },
        ],
      },
    ],
  },
  {
    title: 'SEO Tools',
    steps: [
      {
        question: 'Best Tools for SEO',
        response:
          'There are many tools available to help with SEO. Here are the most popular ones:\n1. Google Analytics (track performance)\n2. Google Search Console (monitor indexing)\n3. Ahrefs (backlink and keyword research)\n4. SEMrush (all-in-one SEO tool)\n\nWould you like to explore free or paid tools?',
        options: [
          {
            text: 'Free tools',
            action: () => 'Show me free SEO tools',
          },
          {
            text: 'Paid tools',
            action: () => 'I want to learn about paid tools',
          },
        ],
      },
      {
        question: 'Free SEO Tools',
        response:
          'Here are some free tools you can use:\n- Google Analytics: Track user behavior and traffic.\n- Google Search Console: Check for indexing issues and track performance.\n- AnswerThePublic: Find keyword ideas and trends.\n\nWould you like to dive deeper into using Google Analytics?',
        options: [
          {
            text: 'Yes, show me how',
            action: () => 'Teach me how to use Google Analytics',
          },
        ],
      },
    ],
  },
];
