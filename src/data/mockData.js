// src/data/mockData.js

export const ALL_DATA = {
  goldPPI: [
    {
      id: 'google-ppi',
      title: 'Google STEP Intern Hiring Challenge',
      host: 'Google',
      points: '2000',
      type: 'Direct Interview',
      tag: 'PPI Offer',
      locked: true,
      reqTier: 'Gold',
      bg: 'bg-gradient-to-r from-yellow-900 to-slate-900',
      img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000',
      deadline: 'Mar 10, 2026'
    },
    {
      id: 'atlassian-ppi',
      title: 'Atlassian Hack-to-Hire',
      host: 'Atlassian',
      points: '2000',
      type: 'Direct Interview',
      tag: 'PPI Offer',
      locked: true,
      reqTier: 'Gold',
      bg: 'bg-gradient-to-r from-blue-900 to-slate-900',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
      deadline: 'Mar 12, 2026'
    }
  ],
  gradeO: [
    {
      id: 'tata-crucible',
      category: 'competition',
      title: 'Tata Crucible Global Innovation Challenge',
      host: 'Tata Group',
      points: '1000',
      type: 'Individual',
      tag: 'Elite',
      bg: 'bg-[#0f172a]',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
      deadline: 'Feb 20, 2026'
    }
  ],
  gradeA: [
    {
      id: 'iitb-techfest',
      category: 'competition',
      title: 'Techfest Coding Challenge',
      host: 'IIT Bombay',
      hostType: 'College',
      points: '700',
      type: 'Team',
      tag: 'Premium College',
      color: 'bg-blue-900',
      img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800',
      deadline: 'Mar 01, 2026'
    },
    {
      id: 'adobe-scholar',
      category: 'competition',
      title: 'Adobe Women in Tech',
      host: 'Adobe',
      hostType: 'Company',
      points: '700',
      type: 'Individual',
      tag: 'Scholarship',
      color: 'bg-purple-900',
      img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
      deadline: 'Mar 15, 2026'
    }
  ],
  gradeB: [
    {
      id: 'python-beginner',
      title: 'Python Beginner Clash',
      host: 'DTU Delhi',
      category: 'drill',
      points: '100',
      time: '45 Mins',
      type: 'Foundational',
      tag: 'College Round',
      img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800',
      deadline: 'Weekly',
      language: 'python'
    },
    {
      id: 'sql-sprint',
      title: 'SQL Data Sprint',
      host: 'Amity University',
      category: 'drill',
      points: '100',
      time: '45 Mins',
      type: 'Foundational',
      tag: 'College Round',
      img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800',
      deadline: 'Weekly',
      language: 'sql'
    },
    {
      id: 'frontend-fun',
      title: 'Frontend UI Challenge',
      host: 'SRM University',
      category: 'drill',
      points: '100',
      time: '60 Mins',
      type: 'Foundational',
      tag: 'College Round',
      img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
      deadline: 'Weekly',
      language: 'javascript'
    }
  ],
  internships: [
    {
      id: 'infosys-intern',
      category: 'internship',
      title: 'Infosys Internship - PPO',
      role: 'SDE Intern',
      stipend: '₹25,000/mo',
      location: 'Bangalore (Hybrid)',
      duration: '6 Months',
      type: 'Job Board',
      color: 'blue',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      deadline: 'Open'
    },
    {
      id: 'zomato-intern',
      category: 'internship',
      title: 'Zomato Product Intern',
      role: 'Product Analyst',
      stipend: '₹40,000/mo',
      location: 'Gurgaon (On-site)',
      duration: '3 Months',
      type: 'Job Board',
      color: 'green',
      img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
      deadline: 'Feb 28, 2026'
    }
  ]
};

export const LEADERBOARD_DATA = [
  { id: 1, name: 'Aarav Gupta', points: 2400, tier: 'Gold' },
  { id: 2, name: 'Sneha Reddy', points: 2150, tier: 'Gold' },
  { id: 3, name: 'Vikram Singh', points: 1980, tier: 'Silver' },
  { id: 4, name: 'Rohan Sharma', points: 1450, tier: 'Silver' },
  { id: 5, name: 'Ishita Patel', points: 1420, tier: 'Silver' }
];

export const CANDIDATE_DATA = [
  { id: 1, name: 'Rohan Sharma', role: 'SDE Intern', tier: 'Silver', score: '92%', status: 'Pending', match: 'High' },
  { id: 2, name: 'Ananya Das', role: 'SDE Intern', tier: 'Bronze', score: '78%', status: 'Rejected', match: 'Low' },
  { id: 3, name: 'Vikram Singh', role: 'Product Analyst', tier: 'Gold', score: '98%', status: 'Shortlisted', match: 'Perfect' }
];

export const SOCIETY_PARTICIPANTS = [
  { id: 1, name: 'Rohan Sharma', challenge: 'Python Beginner Clash', tier: 'Silver', points: '100 XP', status: 'Completed' },
  { id: 2, name: 'Ananya Das', challenge: 'SQL Data Sprint', tier: 'Bronze', points: '45 XP', status: 'In Progress' },
  { id: 3, name: 'Vikram Singh', challenge: 'Frontend UI Challenge', tier: 'Gold', points: '100 XP', status: 'Completed' }
];