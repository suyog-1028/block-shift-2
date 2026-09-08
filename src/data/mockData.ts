import { 
  User, 
  EventItem, 
  TeamMember, 
  Achievement, 
  MemberTask, 
  EventIdea, 
  EventRegistration,
  Testimonial,
  DailyPractice
} from '../types';

export const INITIAL_USERS: User[] = [
  {
    id: 'user-viewer',
    name: 'University Scholar (Guest)',
    email: 'viewer@student.pillai.edu',
    role: 'viewer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    department: 'School of Computer Science & Engineering',
    year: 'TE (3rd Year)',
    bio: 'Pillai University student exploring TAPAS wellness, mindfulness, and meditation initiatives.'
  },
  {
    id: 'user-member-1',
    name: 'Sahil',
    email: 'sahil@pillai.edu',
    role: 'member',
    avatar: 'https://tapaspce.netlify.app/assets/Sahil-1cfd75ea.jpg',
    department: 'School of Information Technology',
    year: 'TE (3rd Year)',
    team: 'Executive Council',
    bio: 'Secretary of TAPAS Committee. Managing institutional records, daily meditation routines, and university communications.'
  },
  {
    id: 'user-leader-1',
    name: 'Vaibhav',
    email: 'vaibhav@pillai.edu',
    role: 'leader',
    avatar: 'https://tapaspce.netlify.app/assets/Vaibhav-b81311a1.jpg',
    department: 'School of Computer Science & Engineering',
    year: 'BE (Final Year)',
    team: 'Executive Council',
    bio: 'President of TAPAS Committee at Pillai University. Spearheading campus-wide Heartfulness meditation drives, Dhyanotsav fest, and student mental well-being.'
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'event-1',
    title: 'Dhyanratri 2026: 9-Day Journey to Nurture Mind, Body & Soul',
    category: 'Meditation & Wellness',
    status: 'upcoming',
    date: 'October 12 – 21, 2026',
    time: '07:00 PM – 08:00 PM IST (Daily)',
    venue: 'Online Guided Interactive Sessions & Pillai Campus Meditation Hall',
    coverImage: 'https://tapaspce.netlify.app/assets/21Days-bc0d37be.webp',
    description: 'A transformative 9-day journey during Navratri to nurture your mind, body, and soul. Incorporating meditation deepens your inner connection, finds mental clarity, and navigates festivities with peace.',
    fullDetails: 'TAPAS is back with Dhyanratri, a 9-day journey during Navratri to nurture your mind, body, and soul. Incorporating meditation into your Navratri observance can deepen your connection with yourself, help you find mental clarity, and navigate the festivities with mindfulness and devotion. Guided daily evening cleaning and Heartfulness meditation sessions led by certified trainers.',
    coordinator: 'Vaibhav (President) & Shweta (Event Head)',
    coordinatorContact: 'tapas.council@pillai.edu | +91 98201 54321',
    registrationLink: 'https://forms.gle/yEUSVmhyAcvpciTx7',
    capacity: 500,
    registeredCount: 425,
    isFeatured: true,
    perks: ['Digital Participation Certificate', 'Guided Daily Heartfulness Audio Kit', 'Stress Management Toolkit', 'Certificate of Completion'],
    agenda: [
      { time: '07:00 PM', title: 'Daily Relaxation & Breathing Alignment', speakerOrLead: 'Certified Heartfulness Trainer' },
      { time: '07:15 PM', title: 'Guided Heartfulness Meditation (Centering on Heart)', speakerOrLead: 'TAPAS Core Team' },
      { time: '07:45 PM', title: 'Daily Thematic Reflection & Wisdom Discourse', speakerOrLead: 'Faculty Guides' },
      { time: '08:00 PM', title: 'Q&A & Student Interaction Circle', speakerOrLead: 'Vaibhav (President)' }
    ]
  },
  {
    id: 'event-2',
    title: '21 Days Meditation Challenge 2026: "Har Dil Dhyan"',
    category: 'Meditation & Wellness',
    status: 'upcoming',
    date: 'May 15 – June 04, 2026',
    time: '06:30 AM – 07:00 AM IST (Daily Morning Routine)',
    venue: 'Virtual Morning Circles & Pillai Panvel Ashram',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1000&auto=format&fit=crop&q=80',
    description: 'An online structured 21-day routine open for all students and faculty, purposefully designed to inculcate a consistent, lifelong habit of daily meditation and emotional resilience.',
    fullDetails: 'TAPAS-PCE in collaboration with Heartfulness presents the 21 Days Meditation Challenge under the banner "Har Dil Dhyan". It takes 21 days to form a habit. By devoting just 20 minutes every morning, students unlock sharper concentration, reduced exam anxiety, and lasting emotional equilibrium.',
    coordinator: 'Sahil (Secretary) & Ketaki (Publicity Head)',
    coordinatorContact: 'tapas.council@pillai.edu',
    registrationLink: 'https://tapaspce.netlify.app/',
    capacity: 1000,
    registeredCount: 840,
    isFeatured: true,
    perks: ['21-Day Habit Tracker Journal', 'Heartfulness E-Certificate', 'Exclusive Access to Kanha Shanti Vanam Virtual Library'],
    agenda: [
      { time: '06:30 AM', title: 'Mindful Wakeup & Postural Grounding', speakerOrLead: 'Sahil (Secretary)' },
      { time: '06:40 AM', title: '20-Minute Silent Heartfulness Meditation', speakerOrLead: 'Heartfulness Mentor' },
      { time: '07:00 AM', title: 'Habit Anchor Affirmation & Day Kickoff', speakerOrLead: 'TAPAS Council' }
    ]
  },
  {
    id: 'event-3',
    title: 'Dhyanotsav 2026: Flagship Campus Orientation & 3-Day Meditation Fest',
    category: 'Workshop',
    status: 'upcoming',
    date: 'September 24 – 26, 2026',
    time: '10:00 AM – 04:30 PM IST',
    venue: 'Dr. K. M. Vasudevan Pillai Auditorium & Open Lawns, New Panvel Campus',
    coverImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1000&auto=format&fit=crop&q=80',
    description: 'Flagship 3-day campus fest welcoming newly admitted first-year and second-year students into the world of Heartfulness meditation, inner stillness, and peer camaraderie.',
    fullDetails: 'Since the inception of TAPAS with the very first 3-day Dhyanotsav, this offline campus orientation has welcomed thousands of collegiate students. Features guided experiential booths, acoustic ambient music, masterclasses on overcoming academic stress, and healthy refreshment circles.',
    coordinator: 'Susmit (Graphics Head) & Ajay (Social Media Head)',
    coordinatorContact: 'tapas.events@pillai.edu',
    registrationLink: 'https://forms.gle/yEUSVmhyAcvpciTx7',
    capacity: 600,
    registeredCount: 512,
    isFeatured: true,
    perks: ['Official TAPAS Welcome Kit', 'Heartfulness Pocket Meditation Guide', 'Complimentary Refreshments', 'Certificate of Participation'],
    agenda: [
      { time: '10:00 AM', title: 'Inaugural Lamp Lighting & Welcome by Dr. Nivedita Shreyans', speakerOrLead: 'Faculty & Executive Council' },
      { time: '11:00 AM', title: 'The 4 Steps: Relax, Meditate, Rejuvenate & Connect', speakerOrLead: 'Certified Heartfulness Trainer' },
      { time: '01:00 PM', title: 'Mindful Lunch & Acoustic Reflection Break', speakerOrLead: 'Central Concourse' },
      { time: '02:30 PM', title: 'Interactive Student Circles on Overcoming Stress & Burnout', speakerOrLead: 'Student Mentors' },
      { time: '04:00 PM', title: 'Group Meditation & Goodie Bag Distribution', speakerOrLead: 'TAPAS Core Team' }
    ]
  },
  {
    id: 'event-4',
    title: 'Rising with Kindness: International Youth Conference at Kanha Shanti Vanam',
    category: 'Social',
    status: 'completed',
    date: 'August 11 – 14, 2025',
    time: '4-Day Residential Immersion',
    venue: 'Kanha Shanti Vanam, Hyderabad (World Headquarters of Heartfulness)',
    coverImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1000&auto=format&fit=crop&q=80',
    description: 'A premier 3-day International Youth Conference on "Rising with Kindness" at Kanha Shanti Vanam, Hyderabad in collaboration with Heartfulness.',
    fullDetails: 'TAPAS student delegates represented Pillai University at the world’s largest meditation facility, Kanha Shanti Vanam. Engaging in global workshops focused on self-kindness, collective consciousness, and peace-building alongside delegates from over 30 countries.',
    coordinator: 'Resmi Ramakrishnan & Vivek Yadav (TAPAS Alumni Delegation)',
    coordinatorContact: 'tapas.council@pillai.edu',
    capacity: 150,
    registeredCount: 150,
    isFeatured: false,
    perks: ['International Youth Delegate Citation', 'Ashram Residency Experience', 'Global Networking with 5,000+ Youth'],
    agenda: [
      { time: 'Day 1', title: 'Arrival & Welcome to Kanha Shanti Vanam', speakerOrLead: 'Heartfulness Team' },
      { time: 'Day 2', title: 'Rising with Kindness Plenary & Experiential Meditation', speakerOrLead: 'Global Keynote Guests' },
      { time: 'Day 3', title: 'Environmental Sustainability & Compassionate Youth Panels', speakerOrLead: 'Youth Leaders' },
      { time: 'Day 4', title: 'Global Meditation for World Harmony & Valediction', speakerOrLead: 'Kanha Ashram Guides' }
    ]
  },
  {
    id: 'event-5',
    title: 'Yoga for Humanity: International Yoga Day & Wellness Summit',
    category: 'Meditation & Wellness',
    status: 'completed',
    date: 'June 21, 2025',
    time: '07:30 AM – 11:30 AM IST',
    venue: 'Central Concourse & Open Air Quadrangle, Pillai University Campus',
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&auto=format&fit=crop&q=80',
    description: 'Celebration of International Yoga Day led by Dr. Shridevi Kulkarni and certified Heartfulness yogis emphasizing physical vitality and inner equilibrium.',
    fullDetails: 'Organized under the global theme "Yoga for Humanity". Students and faculty gathered for synchronized pranayama, calming asanas, and guided Heartfulness cleaning, fostering holistic health across the campus.',
    coordinator: 'Prof. Madhura Vyavahare & Vignesh (Coverage Head)',
    coordinatorContact: 'tapas.council@pillai.edu',
    capacity: 400,
    registeredCount: 400,
    isFeatured: false,
    perks: ['Yoga Day Participant Certificate', 'Nutritional Breakfast Box', 'Custom Yoga Mat'],
    agenda: [
      { time: '07:30 AM', title: 'Asana Session led by Dr. Shridevi Kulkarni', speakerOrLead: 'Dr. Shridevi Kulkarni' },
      { time: '08:45 AM', title: 'Heartfulness Guided Relaxation & Meditation', speakerOrLead: 'Heartfulness Certified Mentors' },
      { time: '09:45 AM', title: 'Healthy Breakfast & Wellness Discourse', speakerOrLead: 'Campus Nutritionists' },
      { time: '10:30 AM', title: 'Felicitation of Student Yoga Ambassadors', speakerOrLead: 'TAPAS Leads' }
    ]
  },
  {
    id: 'event-6',
    title: 'Mastering Conflict Resolution & Inner Calm Workshop',
    category: 'Workshop',
    status: 'completed',
    date: 'February 18, 2026',
    time: '02:00 PM – 05:30 PM IST',
    venue: 'Seminar Hall 3, Engineering Complex, Pillai University Campus',
    coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop&q=80',
    description: 'Interactive psychological and mindfulness workshop teaching youth how to defuse stress, practice compassionate communication, and resolve peer conflicts.',
    fullDetails: 'Designed specifically for college scholars navigating competitive academics, team projects, and relationship dynamics. Integrates Heartfulness cleaning techniques with modern conflict resolution frameworks.',
    coordinator: 'Komal (Content Head) & Sahil (Secretary)',
    coordinatorContact: 'tapas.council@pillai.edu',
    capacity: 120,
    registeredCount: 120,
    isFeatured: false,
    perks: ['Conflict Resolution Toolkit Handout', 'Practical Mindfulness Guide', 'Certificate of Completion'],
    agenda: [
      { time: '02:00 PM', title: 'Understanding the Physiology of Stress & Reactive Thinking', speakerOrLead: 'Guest Psychologist' },
      { time: '03:00 PM', title: 'Interactive Conflict Simulation Exercises', speakerOrLead: 'Student Facilitators' },
      { time: '04:00 PM', title: 'The Art of Heart-Centered Listening & De-escalation', speakerOrLead: 'Komal (Content Head)' },
      { time: '04:45 PM', title: 'Rejuvenation / Cleaning Practice for Letting Go of Resentment', speakerOrLead: 'Sahil (Secretary)' }
    ]
  }
];

export const INITIAL_TEAM: TeamMember[] = [
  {
    id: 'tm-fac-1',
    name: 'Dr. Nivedita Shreyans',
    role: 'Faculty Mentor',
    teamCategory: 'Executive',
    department: 'Faculty Advisory Council',
    year: 'Chief Institutional Advisor',
    photo: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=500&auto=format&fit=crop&q=80',
    bio: 'Faculty Mentor and Chief Advisor for TAPAS at Pillai. Instrumental in establishing the Heartfulness MOU and guiding our student team to the prestigious National Youth Ambassador award.',
    email: 'nivedita.shreyans@pillai.edu',
    linkedin: 'https://linkedin.com',
    achievements: ['National Youth Ambassador Guide Award', 'Pioneered Heartfulness-Pillai MOU Partnership']
  },
  {
    id: 'tm-fac-2',
    name: 'Prof. Madhura Vyavahare',
    role: 'Faculty Coordinator',
    teamCategory: 'Executive',
    department: 'Department of Engineering',
    year: 'Assistant Professor & Student Affairs',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80',
    bio: 'Dedicated faculty mentor overseeing daily meditation schedules, student well-being outreach, and seamless institutional coordination at Pillai University.',
    email: 'madhura.vyavahare@pillai.edu',
    linkedin: 'https://linkedin.com',
    achievements: ['Faculty Coordinator of the Year', 'Guided 5+ Annual Dhyanotsav Fests']
  },
  {
    id: 'tm-pres',
    name: 'Vaibhav',
    role: 'President',
    teamCategory: 'Executive',
    department: 'School of Computer Science & Engineering',
    year: 'BE (Final Year)',
    photo: 'https://tapaspce.netlify.app/assets/Vaibhav-b81311a1.jpg',
    bio: 'President of TAPAS Committee. Leading the student council to expand Heartfulness meditation, mental health awareness, and stress-free campus culture at Pillai University.',
    email: 'vaibhav@pillai.edu',
    linkedin: 'https://linkedin.com',
    achievements: ['Lead Organizer of Dhyanratri 2023–2026', 'Spearheaded 21 Days Meditation Drive']
  },
  {
    id: 'tm-sec',
    name: 'Sahil',
    role: 'Secretary',
    teamCategory: 'Executive',
    department: 'School of Information Technology',
    year: 'TE (3rd Year)',
    photo: 'https://tapaspce.netlify.app/assets/Sahil-1cfd75ea.jpg',
    bio: 'Secretary of TAPAS Committee. Coordinating institutional records, hall logistics, attendance tracking, and inter-collegiate meditation collaborations.',
    email: 'sahil@pillai.edu',
    linkedin: 'https://linkedin.com',
    achievements: ['Coordinated "Har Dil Dhyan" Panvel Ashram Outreach']
  },
  {
    id: 'tm-social',
    name: 'Ajay',
    role: 'Team Leader',
    teamCategory: 'Public Relations',
    department: 'School of Computer Science & Engineering',
    year: 'TE (3rd Year)',
    photo: 'https://tapaspce.netlify.app/assets/IMG_20230803_101241-46757b51.jpg',
    bio: 'Social Media Head. Directing digital campaigns, Instagram reels (@tapas.pce), and daily mindfulness reminders for thousands of student followers.',
    email: 'ajay@pillai.edu',
    instagram: 'https://instagram.com/tapas.pce',
    achievements: ['Grew TAPAS Instagram Community to 3,500+ Active Students']
  },
  {
    id: 'tm-creative',
    name: 'Shraddha',
    role: 'Team Leader',
    teamCategory: 'Creative & Media',
    department: 'School of Information Technology',
    year: 'TE (3rd Year)',
    photo: 'https://tapaspce.netlify.app/assets/Shradha-423bbbfe.jpg',
    bio: 'Creative Head. Envisioning meditative art, stage backdrops, event ambience, and visual aesthetics for Dhyanotsav and Dhyanratri.',
    email: 'shraddha@pillai.edu',
    achievements: ['Artistic Director for Dhyanratri & Dhyanotsav Visuals']
  },
  {
    id: 'tm-publicity',
    name: 'Ketaki',
    role: 'Team Leader',
    teamCategory: 'Public Relations',
    department: 'School of Electronics & Computer Science',
    year: 'SE (2nd Year)',
    photo: 'https://tapaspce.netlify.app/assets/IMG_20230803_100859-31072579.jpg',
    bio: 'Publicity Head. Driving classroom campaigns, poster distribution, and student word-of-mouth outreach across all campus departments.',
    email: 'ketaki@pillai.edu',
    achievements: ['Achieved 800+ Registrations for 21-Day Challenge']
  },
  {
    id: 'tm-coverage',
    name: 'Vignesh',
    role: 'Team Leader',
    teamCategory: 'Creative & Media',
    department: 'School of Mechanical Engineering',
    year: 'TE (3rd Year)',
    photo: 'https://tapaspce.netlify.app/assets/Vignesh-2b466f50.jpg',
    bio: 'Coverage Head. Capturing serene video documentation, event photography, and aftermovies for TAPAS retreats and yoga summits.',
    email: 'vignesh@pillai.edu',
    achievements: ['Official Cinematographer for International Youth Conference']
  },
  {
    id: 'tm-graphics',
    name: 'Susmit',
    role: 'Team Leader',
    teamCategory: 'Creative & Media',
    department: 'School of Computer Science & Engineering',
    year: 'SE (2nd Year)',
    photo: 'https://tapaspce.netlify.app/assets/Susmit-b706f42f.jpg',
    bio: 'Graphics Head. Designing branding banners, UI graphics, flyers, and certificates for all TAPAS-PCE programs.',
    email: 'susmit@pillai.edu',
    achievements: ['Designed Official Visual Identity of TAPAS PCE Website']
  },
  {
    id: 'tm-event',
    name: 'Shweta',
    role: 'Team Leader',
    teamCategory: 'Operations',
    department: 'School of Computer Science & Engineering',
    year: 'TE (3rd Year)',
    photo: 'https://tapaspce.netlify.app/assets/Shweta-ee366a7f.jpg',
    bio: 'Event Head. Directing on-ground event management, auditorium coordination, trainer hospitality, and stage sound systems.',
    email: 'shweta@pillai.edu',
    achievements: ['Executed 15+ Flawless Offline Campus Meditation Drives']
  },
  {
    id: 'tm-content',
    name: 'Komal',
    role: 'Team Leader',
    teamCategory: 'Public Relations',
    department: 'School of Information Technology',
    year: 'TE (3rd Year)',
    photo: 'https://tapaspce.netlify.app/assets/Komal-a9e6bd62.jpg',
    bio: 'Content Head. Penning introspective newsletters, speech scripts, guided contemplation prompts, and meditation articles.',
    email: 'komal@pillai.edu',
    achievements: ['Author of "Mindful Campus" Weekly Newsletter Series']
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: 'National Youth Ambassador Award Distinction',
    year: '2024',
    category: 'Award',
    organizationOrEvent: 'Heartfulness Institute & Kanha Shanti Vanam',
    imageUrl: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for National Youth Ambassador Award Distinction at Heartfulness Institute & Kanha Shanti Vanam. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: 'Guided by Dr. Nivedita Shreyans & Prof. Madhura Vyavahare',
    isFeatured: true,
    dateAdded: '2024-11-10'
  },
  {
    id: 'ach-2',
    title: 'Official Institutional MOU for Campus Mindfulness',
    year: '2023',
    category: 'Certification',
    organizationOrEvent: 'Pillai University & Heartfulness Collaboration',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for Official Institutional MOU for Campus Mindfulness at Pillai University & Heartfulness Collaboration. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: 'Formal partnership promoting student mental health & peace',
    isFeatured: true,
    dateAdded: '2023-08-15'
  },
  {
    id: 'ach-3',
    title: '21 Days "Har Dil Dhyan" Campus Wellness Milestone',
    year: '2025',
    category: 'Impact Milestone',
    organizationOrEvent: 'Panvel & Navi Mumbai Student Wellness Initiative',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for 21 Days "Har Dil Dhyan" Campus Wellness Milestone at Panvel & Navi Mumbai Student Wellness Initiative. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: 'Over 1,200 students completed the meditation habit challenge',
    isFeatured: true,
    dateAdded: '2025-06-12'
  },
  {
    id: 'ach-4',
    title: 'Rising with Kindness: International Youth Conclave Representation',
    year: '2025',
    category: 'Award',
    organizationOrEvent: 'International Youth Conference, Hyderabad',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for Rising with Kindness: International Youth Conclave Representation at International Youth Conference, Hyderabad. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: 'Represented Pillai at Kanha Shanti Vanam among delegates from 30+ nations',
    isFeatured: false,
    dateAdded: '2025-08-20'
  },
  {
    id: 'ach-5',
    title: 'Best Student Mental Health & Well-being Initiative in Maharashtra',
    year: '2024',
    category: 'Award',
    organizationOrEvent: 'Western Regional Student Affairs Summit',
    imageUrl: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for Best Student Mental Health & Well-being Initiative in Maharashtra at Western Regional Student Affairs Summit. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: 'Honored among 150+ student bodies for sustained wellness impact',
    isFeatured: false,
    dateAdded: '2024-10-18'
  },
  {
    id: 'ach-6',
    title: 'Dhyanotsav Campus Orientation Distinction',
    year: '2023',
    category: 'Impact Milestone',
    organizationOrEvent: 'Pillai University Academic Council',
    imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for Dhyanotsav Campus Orientation Distinction at Pillai University Academic Council. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: 'Zero-stress induction for over 3,000 incoming students',
    isFeatured: false,
    dateAdded: '2023-09-30'
  }
];

export const AUTHENTIC_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vivek Yadav',
    role: 'Former TAPAS President',
    text: 'TAPAS has profoundly shaped my college life, offering adventure, connections, and personal growth. Its exceptional freedom enables seamless peer and faculty interaction, while collaborative event planning hones decision-making skills. Heartfulness fosters lasting connections, transforming TAPAS into an enduring, supportive family rather than a mere committee. ❤️',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-2',
    name: 'Resmi Ramakrishnan',
    role: 'Former TAPAS Core Leader • National Youth Ambassador',
    text: 'Establishing TAPAS in a technical community reshaped my college journey. Overcoming challenges, we formed a dedicated team, achieving the "National Youth Ambassador" award. Guided by Dr. Nivedita Shreyans and Prof. Madhura Vyavahare, I\'m proud to witness successive TAPAS generations thriving and continuing our dream through impactful campus initiatives.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-3',
    name: 'Romax Rajeev',
    role: 'Former TAPAS Member • Dhyanotsav Pioneer',
    text: 'It\'s been a wonderful time with Tapas, even today after graduating from college 2 years back. The lively events and the peace of mind still reminds me back of the days when we had just started out Tapas with 3 day Dhyanotsav. Looking back in time, the growth of Tapas is unmatched and may it bring peace to all students of our college!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  }
];

export const HEARTFULNESS_PRACTICES: DailyPractice[] = [
  {
    id: 'practice-relax',
    title: 'Relaxation',
    subtitle: 'Step 1 • Release Physical Tension',
    description: 'Learning to relax is vital for well-being. It reduces tension in all parts of your body and helps you to stay balanced even in stressful situations.',
    duration: '5 – 7 Minutes',
    icon: 'Wind',
    videoUrl: 'https://www.youtube.com/watch?v=gDClb-yjNdQ',
    actionText: 'Watch Guided Relaxation'
  },
  {
    id: 'practice-meditate',
    title: 'Meditation',
    subtitle: 'Step 2 • Center on the Heart',
    description: 'With regular Heartfulness Meditation, your mind will become centered and shift to deeper levels of feeling, intuition and consciousness.',
    duration: '15 – 20 Minutes (Morning)',
    icon: 'Heart',
    videoUrl: 'https://www.youtube.com/watch?v=gDClb-yjNdQ',
    actionText: 'Experience Meditation'
  },
  {
    id: 'practice-rejuvenate',
    title: 'Rejuvenate (Cleaning)',
    subtitle: 'Step 3 • Daily Mental Detox & Reset',
    description: 'Cleaning fosters lightness of being, joy and a carefree attitude, as emotional burdens, habits, deep conditioning and complexities are removed.',
    duration: '10 – 15 Minutes (Evening)',
    icon: 'Sparkles',
    videoUrl: 'https://www.youtube.com/watch?v=gDClb-yjNdQ',
    actionText: 'Learn Cleaning Method'
  },
  {
    id: 'practice-connect',
    title: 'Inner Connection',
    subtitle: 'Step 4 • Align with the Source',
    description: 'Take a deep breath, because it\'s time to connect with us, your ultimate meditation club. Deepen your bond with inner peace and compassionate community.',
    duration: 'Continuous Habit',
    icon: 'Sun',
    videoUrl: 'https://tapaspce.netlify.app/',
    actionText: 'Connect with Us'
  }
];

export const CORE_OBJECTIVES = [
  {
    title: 'Educating the Youth',
    desc: 'Dedicated to educating the youth about the immense benefits of meditation. By instilling this practice early, we empower students with the tools to lead balanced, focused, and fulfilling lives.'
  },
  {
    title: 'Daily Practice for All',
    desc: 'To make meditation a regular practice, seamlessly integrated into the daily routines of students and teachers. We believe a mindful mind and a compassionate heart lead to a brighter future.'
  },
  {
    title: 'Creating Stress-Free Campuses',
    desc: 'Committed to creating stress-free campuses where faculty, staff, students, and parents find solace and inner peace through sustainable, supportive long-term wellness programs.'
  }
];

export const INITIAL_TASKS: MemberTask[] = [
  {
    id: 'task-1',
    title: 'Set up audio-visual system for Dhyanratri Evening Stream',
    assignedToName: 'Sahil',
    assignedToId: 'user-member-1',
    eventOrProject: 'Dhyanratri 2026',
    deadline: 'October 10, 2026',
    priority: 'High',
    status: 'in-progress',
    description: 'Coordinate with Campus AV technician for meditation hall sound acoustics, dual screens, and streaming rig.'
  },
  {
    id: 'task-2',
    title: 'Prepare Heartfulness welcome meditation kits for Dhyanotsav',
    assignedToName: 'Shraddha',
    assignedToId: 'tm-creative',
    eventOrProject: 'Dhyanotsav 2026 Fest',
    deadline: 'September 20, 2026',
    priority: 'Medium',
    status: 'todo',
    description: 'Assemble pocket meditation booklets, branded cloth wristbands, and reflection journals for attendees.'
  },
  {
    id: 'task-3',
    title: 'Post Instagram reel on "The 4 Steps of Heartfulness"',
    assignedToName: 'Ajay',
    assignedToId: 'tm-social',
    eventOrProject: 'Social Awareness Drive',
    deadline: 'March 25, 2026',
    priority: 'Urgent',
    status: 'in-progress',
    description: 'Produce a 60-second walkthrough highlighting Relax, Meditate, Rejuvenate, and Connect on @tapas.pce.'
  },
  {
    id: 'task-4',
    title: 'Track daily check-ins for 21 Days Meditation Challenge',
    assignedToName: 'Ketaki',
    assignedToId: 'tm-publicity',
    eventOrProject: '21 Days Challenge',
    deadline: 'May 30, 2026',
    priority: 'High',
    status: 'completed',
    description: 'Verify morning attendance records and issue milestone badges to participating students.'
  }
];

export const INITIAL_IDEAS: EventIdea[] = [
  {
    id: 'idea-1',
    title: 'Sunset Garden Acoustic Meditation & Gratitude Circle',
    submittedByName: 'Sahil',
    submittedByEmail: 'sahil@pillai.edu',
    category: 'Meditation & Wellness',
    estimatedBudget: '₹12,000',
    description: 'An open-air evening gathering in the university botanical garden featuring acoustic sound bowls, gentle flute harmonies, and guided Heartfulness cleaning before end-semester exams.',
    status: 'Approved',
    dateSubmitted: '2026-03-01'
  },
  {
    id: 'idea-2',
    title: 'Student Mental Health Peer Listening & Tea Lounge',
    submittedByName: 'Komal',
    submittedByEmail: 'komal@pillai.edu',
    category: 'Social',
    estimatedBudget: '₹8,000',
    description: 'A cozy, confidential weekly drop-in space where students can de-stress, sip herbal teas, converse without judgment, and practice 5-minute breathing resets.',
    status: 'Under Review',
    dateSubmitted: '2026-02-18'
  }
];

export const INITIAL_REGISTRATIONS: EventRegistration[] = [
  {
    id: 'reg-101',
    eventId: 'event-1',
    eventTitle: 'Dhyanratri 2026: 9-Day Journey to Nurture Mind, Body & Soul',
    studentName: 'Rohan Joshi',
    studentEmail: 'rohan.j@student.pillai.edu',
    studentCollegeId: 'PU-2023-CS-042',
    department: 'School of Computer Science & Engineering',
    year: 'TE',
    registeredAt: '2026-03-05 11:20 AM',
    attended: false
  },
  {
    id: 'reg-102',
    eventId: 'event-2',
    eventTitle: '21 Days Meditation Challenge 2026: "Har Dil Dhyan"',
    studentName: 'Kavya Pillai',
    studentEmail: 'kavya.p@student.pillai.edu',
    studentCollegeId: 'PU-2024-IT-109',
    department: 'School of Information Technology',
    year: 'SE',
    registeredAt: '2026-03-06 02:45 PM',
    attended: false
  },
  {
    id: 'reg-103',
    eventId: 'event-3',
    eventTitle: 'Dhyanotsav 2026: Campus Orientation & 3-Day Meditation Fest',
    studentName: 'Zoya Merchant',
    studentEmail: 'zoya.m@student.pillai.edu',
    studentCollegeId: 'PU-2023-EXTC-088',
    department: 'School of Electronics & Telecommunication',
    year: 'TE',
    registeredAt: '2026-03-07 09:12 AM',
    attended: false
  }
];
