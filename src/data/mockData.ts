import { 
  User, 
  EventItem, 
  TeamMember, 
  Achievement, 
  MemberTask, 
  EventIdea, 
  EventRegistration 
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
    bio: 'Pillai University student exploring TAPAS cultural and technical initiatives.'
  },
  {
    id: 'user-member-1',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@pillai.edu',
    role: 'member',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    department: 'School of Information Technology',
    year: 'TE (3rd Year)',
    team: 'Cultural & Arts',
    bio: 'Core member coordinating campus festivals, acoustic evenings, and inter-collegiate delegation.'
  },
  {
    id: 'user-leader-1',
    name: 'Ananya Nair',
    email: 'ananya.nair@pillai.edu',
    role: 'leader',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    department: 'School of Computer Science & Engineering',
    year: 'BE (Final Year)',
    team: 'Executive / Technical',
    bio: 'President of TAPAS Committee. Leading 60+ committee members, spearheading Alegria university festival collaborations and flagship hackathons.'
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'event-1',
    title: 'IGNITE 2026: Annual Inter-University Innovation Conclave',
    category: 'Technical',
    status: 'upcoming',
    date: 'March 28, 2026',
    time: '10:00 AM – 5:30 PM IST',
    venue: 'Dr. K. M. Vasudevan Pillai Auditorium & Innovation Pavilion, New Panvel Campus',
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&auto=format&fit=crop&q=80',
    description: 'The flagship multi-track symposium bringing together 400+ innovators for hardware prototyping, AI agent design, and venture pitch panels.',
    fullDetails: 'IGNITE 2026 is the premier platform hosted by TAPAS Committee at Pillai University. Featuring keynote speakers from leading tech firms, a live 12-hour build sprint, and seed grants for winning student prototypes. Open to students across Mumbai and Pune universities.',
    coordinator: 'Ananya Nair (President) & Dev Mehta (Tech Lead)',
    coordinatorContact: 'tapas.tech@pillai.edu | +91 98201 54321',
    registrationLink: 'https://tapas.pillai.edu/register/ignite2026',
    capacity: 350,
    registeredCount: 298,
    isFeatured: true,
    perks: ['Certificate of Excellence', 'Industry Mentorship Sessions', '₹1,50,000 Prize Pool', 'Complimentary Delegate Kit & Lunch'],
    agenda: [
      { time: '10:00 AM', title: 'Inaugural Lamp Lighting & Welcome by Vice Chancellor', speakerOrLead: 'Faculty & Executive Council' },
      { time: '10:45 AM', title: 'Keynote: Scalable Systems & Emerging Tech Frontiers', speakerOrLead: 'Ex-Google Tech Lead' },
      { time: '12:00 PM', title: 'Innovation Track Showcase & Prototyping Demos', speakerOrLead: 'All Participating Teams' },
      { time: '01:30 PM', title: 'Networking Buffet & Poster Presentations', speakerOrLead: 'Central Concourse' },
      { time: '02:45 PM', title: 'Panel Discussion: From Campus Project to Startup', speakerOrLead: 'Alumni Founders' },
      { time: '04:30 PM', title: 'Grand Awards Ceremony & Valedictory Session', speakerOrLead: 'TAPAS Core Committee' }
    ]
  },
  {
    id: 'event-2',
    title: 'TARANG: National Cultural Fiesta & Acoustic Night',
    category: 'Cultural',
    status: 'upcoming',
    date: 'April 14, 2026',
    time: '04:00 PM – 9:30 PM IST',
    venue: 'Open Air Amphitheatre, Dr. K. M. Vasudevan Pillai Campus, New Panvel',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1000&auto=format&fit=crop&q=80',
    description: 'A vibrant celebration of music, theatrical arts, classical dance fusion, and an electric live acoustic evening under the stars.',
    fullDetails: 'TARANG brings together the best student performing artists of Pillai University alongside invited bands from premier institutes. Featuring contemporary band battles, beatboxing face-offs, spoken word poetry, and festive light installations designed entirely by TAPAS students.',
    coordinator: 'Aarav Sharma & Priya Deshmukh',
    coordinatorContact: 'cultural.tapas@pillai.edu | +91 98334 11223',
    registrationLink: 'https://tapas.pillai.edu/register/tarang',
    capacity: 600,
    registeredCount: 540,
    isFeatured: true,
    perks: ['VIP Seating for Registered Delegates', 'Official Festival Wristband', 'Refreshments & After-Party Access'],
    agenda: [
      { time: '04:00 PM', title: 'Gates Open & Art Street Installations Preview', speakerOrLead: 'TAPAS Creative Team' },
      { time: '05:00 PM', title: 'Classical & Fusion Dance Ensembles', speakerOrLead: 'Inter-Department Troupes' },
      { time: '06:30 PM', title: 'Battle of the Campus Acoustic Bands', speakerOrLead: 'Top 6 Finalists' },
      { time: '08:00 PM', title: 'Guest Artist Live Performance', speakerOrLead: 'Indie Headliner Band' },
      { time: '09:15 PM', title: 'Finale Vote of Thanks & Light Show', speakerOrLead: 'TAPAS President' }
    ]
  },
  {
    id: 'event-3',
    title: 'SAMARPAN: Community Education & Digital Literacy Drive',
    category: 'Social',
    status: 'upcoming',
    date: 'May 02, 2026',
    time: '09:00 AM – 2:00 PM IST',
    venue: 'Zilla Parishad School & Community Center, Raigad District',
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1000&auto=format&fit=crop&q=80',
    description: 'An impactful social outreach initiative imparting hands-on computer basics, STEM kits, and stationery to 250+ underprivileged schoolchildren.',
    fullDetails: 'Reflecting TAPAS core value of social responsibility, SAMARPAN unites student volunteers from Pillai University to conduct interactive workshops in foundational science, digital literacy, and basic logic for young students in neighbouring rural zones.',
    coordinator: 'Rohan Patil (Social Initiatives Lead)',
    coordinatorContact: 'social.tapas@pillai.edu',
    registrationLink: 'https://tapas.pillai.edu/register/samarpan',
    capacity: 75,
    registeredCount: 68,
    isFeatured: false,
    perks: ['Volunteer Social Impact Certificate', 'University Bus Transit Provided', 'Meal Box Included'],
    agenda: [
      { time: '09:00 AM', title: 'Departure from Pillai University Campus Main Gate', speakerOrLead: 'Logistics Team' },
      { time: '10:00 AM', title: 'Interactive Science & Robotics Demos for Children', speakerOrLead: 'Tech Volunteers' },
      { time: '11:30 AM', title: 'Drawing, Reading & Creative Expression Circles', speakerOrLead: 'Arts Volunteers' },
      { time: '01:00 PM', title: 'Distribution of Learning Kits & Stationery', speakerOrLead: 'TAPAS Leads' }
    ]
  },
  {
    id: 'event-4',
    title: 'Full-Stack GenAI & Web3 Masterclass Bootcamp',
    category: 'Workshop',
    status: 'upcoming',
    date: 'May 16, 2026',
    time: '11:00 AM – 4:00 PM IST',
    venue: 'Advanced Computing Pavilion, 4th Floor, Pillai University',
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&auto=format&fit=crop&q=80',
    description: 'Intensive weekend hands-on bootcamp building intelligent full-stack applications with modern frameworks, cloud APIs, and live deployments.',
    fullDetails: 'Designed for university scholars across all semesters. Covers modern frontend patterns, serverless backend integrations, multimodal AI pipelines, and git workflows. Guided by top senior engineers and TAPAS alumni mentors.',
    coordinator: 'Siddharth Iyer & Dev Mehta',
    coordinatorContact: 'bootcamps.tapas@pillai.edu',
    registrationLink: 'https://tapas.pillai.edu/register/genai-bootcamp',
    capacity: 120,
    registeredCount: 112,
    isFeatured: false,
    perks: ['Hands-on Code Repository Access', 'Verified Digital Credential', 'Free Cloud Credits Voucher'],
    agenda: [
      { time: '11:00 AM', title: 'Architecture of Modern Web Applications', speakerOrLead: 'Dev Mehta' },
      { time: '12:30 PM', title: 'Building Multi-modal AI Agents with Gemini SDK', speakerOrLead: 'Guest Mentor' },
      { time: '02:00 PM', title: 'Hands-on Sprint: Building & Deploying Live Micro-Apps', speakerOrLead: 'All Attendees' },
      { time: '03:30 PM', title: 'Lightning Project Demos & Best Pitch Award', speakerOrLead: 'Review Jury' }
    ]
  },
  {
    id: 'event-5',
    title: 'HACK-TAPAS: 24-Hour National Collegiate Hackathon',
    category: 'Competition',
    status: 'completed',
    date: 'January 18, 2026',
    time: '24 Hours Non-Stop',
    venue: 'Pillai University Central Conclave Arena & Server Labs, New Panvel',
    coverImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&auto=format&fit=crop&q=80',
    description: 'Over 65 shortlisted teams from across India competed across tracks in FinTech, Healthcare, Smart Cities, and Sustainable Campus Living.',
    fullDetails: 'The largest student-organized hackathon in Navi Mumbai. Over 1,200 applicants narrowed down to 65 teams who hacked for 24 continuous hours. Judges included senior directors from TCS, Jio, and leading angel syndicates.',
    coordinator: 'Ananya Nair & Executive Board',
    coordinatorContact: 'hackathon@tapas.pillai.edu',
    capacity: 300,
    registeredCount: 300,
    isFeatured: false,
    perks: ['₹2,00,000 Cash Prize Pool', 'Direct Fast-track Internship Interviews', 'All-Night Red Bull & Pizza Fuel'],
    agenda: [
      { time: '10:00 AM (Day 1)', title: 'Problem Statement Release & Hacking Commences', speakerOrLead: 'TAPAS Core' },
      { time: '06:00 PM (Day 1)', title: 'Mentor Checkpoint 1 & Architecture Review', speakerOrLead: 'Industry Mentors' },
      { time: '02:00 AM (Day 2)', title: 'Midnight Brainstorm & Gaming Break', speakerOrLead: 'Cultural Team' },
      { time: '10:00 AM (Day 2)', title: 'Code Freeze & Grand Finale Presentations', speakerOrLead: 'Grand Jury' }
    ]
  },
  {
    id: 'event-6',
    title: 'PRERANA: Youth Leadership & Public Speaking Colloquium',
    category: 'Workshop',
    status: 'completed',
    date: 'December 12, 2025',
    time: '02:00 PM – 6:00 PM IST',
    venue: 'MES Conclave Hall, Pillai University Campus',
    coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1000&auto=format&fit=crop&q=80',
    description: 'A dynamic masterclass empowering students with executive presence, debate rhetoric, team conflict resolution, and pitch techniques.',
    fullDetails: 'PRERANA focused on nurturing empathetic student leaders. Delivered in collaboration with Toastmasters mentors and TEDx speakers, featuring simulated boardroom crises and persuasive storytelling rounds.',
    coordinator: 'Tanvi Kulkarni (PR & Communications Lead)',
    coordinatorContact: 'pr.tapas@pillai.edu',
    capacity: 150,
    registeredCount: 150,
    isFeatured: false,
    perks: ['Public Speaking Toolkit', 'Certificate of Completion', 'Personalized Speech Feedback'],
    agenda: [
      { time: '02:00 PM', title: 'Mastering Non-Verbal Gravitas and Voice Modulation', speakerOrLead: 'Toastmaster Lead' },
      { time: '03:30 PM', title: 'The Art of the 90-Second Elevator Pitch', speakerOrLead: 'Tanvi Kulkarni' },
      { time: '04:45 PM', title: 'Live Impromptu Speech Face-Off', speakerOrLead: 'Student Participants' }
    ]
  }
];

export const INITIAL_TEAM: TeamMember[] = [
  {
    id: 'tm-fac-1',
    name: 'Dr. Smita R. Dalvi',
    role: 'Faculty Coordinator',
    teamCategory: 'Executive',
    department: 'School of Engineering & Technology',
    year: 'Professor & Dean of Student Affairs',
    photo: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=500&auto=format&fit=crop&q=80',
    bio: 'Dedicated mentor fostering student autonomy, visionary project incubation, and interdisciplinary collaboration across Pillai University for over 14 years.',
    email: 'smita.dalvi@pillai.edu',
    linkedin: 'https://linkedin.com',
    achievements: ['Best Faculty Advisor Award (University Directorate)', 'Published 25+ IEEE Papers']
  },
  {
    id: 'tm-pres-1',
    name: 'Ananya Nair',
    role: 'President',
    teamCategory: 'Executive',
    department: 'School of Computer Science & Engineering',
    year: 'BE (Final Year)',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    bio: 'Championing institutional excellence, multi-college partnerships, and student-driven impact initiatives. Overseeing all 7 committee wings.',
    email: 'ananya.nair@pillai.edu',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    achievements: ['National Smart India Hackathon Finalist', 'Represented Pillai University at Harvard US-India Initiative']
  },
  {
    id: 'tm-vp-1',
    name: 'Karan Mehra',
    role: 'Vice President',
    teamCategory: 'Executive',
    department: 'School of Information Technology',
    year: 'BE (Final Year)',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    bio: 'Directing strategic operations, logistics execution, cross-departmental coordination, and alumni mentorship programs.',
    email: 'karan.mehra@pillai.edu',
    linkedin: 'https://linkedin.com',
    achievements: ['Organized Alegria Central Tech Stage (8,000+ Footfall)', 'Student Council Gold Medalist']
  },
  {
    id: 'tm-sec-1',
    name: 'Sneha Chawla',
    role: 'Secretary',
    teamCategory: 'Executive',
    department: 'School of Electronics & Telecommunication',
    year: 'TE (3rd Year)',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80',
    bio: 'Managing committee governance, institutional communications, administrative records, budget audits, and university compliance.',
    email: 'sneha.chawla@pillai.edu',
    linkedin: 'https://linkedin.com',
    achievements: ['Academic Excellence Topper 2024-25', 'State Youth Parliament Delegate']
  },
  {
    id: 'tm-lead-tech',
    name: 'Dev Mehta',
    role: 'Team Leader',
    teamCategory: 'Technical',
    department: 'School of Computer Science & Engineering',
    year: 'TE (3rd Year)',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    bio: 'Leading code sprints, campus web architecture, hackathon technical infrastructure, and developer community workshops.',
    email: 'dev.mehta@pillai.edu',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    achievements: ['Winner: Pillai University TechNova 2025', 'Open Source Contributor (500+ GitHub Stars)']
  },
  {
    id: 'tm-lead-cult',
    name: 'Aarav Sharma',
    role: 'Team Leader',
    teamCategory: 'Cultural & Arts',
    department: 'School of Information Technology',
    year: 'TE (3rd Year)',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80',
    bio: 'Curating artistic showcases, music festivals, dramatic productions, and vibrant inter-collegiate cultural delegations.',
    email: 'aarav.sharma@pillai.edu',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    achievements: ['Winner: Inter-University Western Acoustic Solo', 'Creative Producer of TARANG 2025']
  },
  {
    id: 'tm-lead-ops',
    name: 'Aditya Verma',
    role: 'Team Leader',
    teamCategory: 'Operations',
    department: 'School of Mechanical Engineering',
    year: 'TE (3rd Year)',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80',
    bio: 'Overseeing event venue logistics, audio-visual engineering, security protocols, hospitality, and resource staging.',
    email: 'aditya.verma@pillai.edu',
    linkedin: 'https://linkedin.com',
    achievements: ['Managed mega-venue operations for 10+ university conventions without downtime']
  },
  {
    id: 'tm-lead-pr',
    name: 'Tanvi Kulkarni',
    role: 'Team Leader',
    teamCategory: 'Public Relations',
    department: 'School of Automobile & AI Engineering',
    year: 'TE (3rd Year)',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    bio: 'Spearheading campus media presence, corporate sponsorships, guest dignitary relations, and brand stewardship.',
    email: 'tanvi.kulkarni@pillai.edu',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    achievements: ['Secured ₹3.5L corporate sponsorships for 2025 conclave']
  },
  {
    id: 'tm-core-1',
    name: 'Rohan Patil',
    role: 'Core Member',
    teamCategory: 'Operations',
    department: 'School of Computer Science & Engineering',
    year: 'SE (2nd Year)',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=80',
    bio: 'Dedicated coordinator handling stage management, emergency protocols, and social outreach drives.',
    email: 'rohan.patil@pillai.edu',
    achievements: ['Lead Coordinator for SAMARPAN 2025 Outreach']
  },
  {
    id: 'tm-core-2',
    name: 'Priya Deshmukh',
    role: 'Core Member',
    teamCategory: 'Creative & Media',
    department: 'School of Information Technology',
    year: 'SE (2nd Year)',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80',
    bio: 'UI designer, motion animator, and visual storyteller crafting official TAPAS posters and festival reels.',
    email: 'priya.deshmukh@pillai.edu',
    instagram: 'https://instagram.com',
    achievements: ['Official Visual Designer of Alegria Highlights Video']
  },
  {
    id: 'tm-vol-1',
    name: 'Vihaan Joshi',
    role: 'Volunteer',
    teamCategory: 'Technical',
    department: 'School of Computer Science & Engineering',
    year: 'FE (1st Year)',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80',
    bio: 'Enthusiastic first-year engineer assisting registration desks, live streaming rigs, and audio monitoring.',
    email: 'vihaan.joshi@pillai.edu'
  },
  {
    id: 'tm-vol-2',
    name: 'Meera Nambiar',
    role: 'Volunteer',
    teamCategory: 'Cultural & Arts',
    department: 'School of Architecture & Built Environment',
    year: 'FE (1st Year)',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80',
    bio: 'Passionate vocalist and volunteer anchor supporting artist green rooms and backstage logistics.',
    email: 'meera.nambiar@pillai.edu'
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Best Student-Led Institutional Body in Maharashtra',
    year: '2025',
    category: 'Award',
    organizationOrEvent: 'Western Regional Higher Education Summit, Mumbai',
    imageUrl: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for Best Student-Led Institutional Body in Maharashtra at Western Regional Higher Education Summit, Mumbai. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: 'Awarded among 180+ university bodies',
    isFeatured: true,
    dateAdded: '2025-11-15'
  },
  {
    id: 'ach-2',
    title: 'First Prize: National Smart Campus Governance Challenge',
    year: '2025',
    category: 'Competition Win',
    organizationOrEvent: 'All India Student Innovations Forum',
    imageUrl: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for First Prize: National Smart Campus Governance Challenge at All India Student Innovations Forum. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: '₹1,00,000 Cash Prize & Citation',
    isFeatured: true,
    dateAdded: '2025-09-22'
  },
  {
    id: 'ach-3',
    title: 'Exemplary Youth Social Impact Citation',
    year: '2024',
    category: 'Impact Milestone',
    organizationOrEvent: 'Raigad District Educational Welfare Directorate',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for Exemplary Youth Social Impact Citation at Raigad District Educational Welfare Directorate. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: 'Impacted 1,500+ rural students across 12 villages',
    isFeatured: true,
    dateAdded: '2024-12-10'
  },
  {
    id: 'ach-4',
    title: 'National Level Excellence in Cultural Organizing',
    year: '2024',
    category: 'Award',
    organizationOrEvent: 'All-India Inter-University Youth Conclave',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for National Level Excellence in Cultural Organizing at All-India Inter-University Youth Conclave. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: 'Executed flawless 3-day festival for 10,000+ attendees',
    isFeatured: false,
    dateAdded: '2024-04-18'
  },
  {
    id: 'ach-5',
    title: 'Special Media Mention in Education Times Mumbai',
    year: '2025',
    category: 'Media Mention',
    organizationOrEvent: 'The Times of India — Education Times',
    imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for Special Media Mention in Education Times Mumbai at The Times of India — Education Times. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: 'Featured front-page student leadership story',
    isFeatured: false,
    dateAdded: '2025-02-14'
  },
  {
    id: 'ach-6',
    title: 'ISO 9001:2015 Process Compliance & Audit Distinction',
    year: '2023',
    category: 'Certification',
    organizationOrEvent: 'MES Institutional Quality Audit Committee',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    description: 'TAPAS Committee proudly earned recognition for ISO 9001:2015 Process Compliance & Audit Distinction at MES Institutional Quality Audit Committee. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.',
    highlightStats: '100% compliant event documentation standards',
    isFeatured: false,
    dateAdded: '2023-10-05'
  }
];

export const INITIAL_TASKS: MemberTask[] = [
  {
    id: 'task-1',
    title: 'Finalize Stage Audio-Visual specs for IGNITE 2026',
    assignedToName: 'Aarav Sharma',
    assignedToId: 'user-member-1',
    eventOrProject: 'IGNITE 2026 Innovation Conclave',
    deadline: 'March 20, 2026',
    priority: 'High',
    status: 'in-progress',
    description: 'Coordinate with Campus AV technician for auditorium mic sets, dual project screens, and livestream testing.'
  },
  {
    id: 'task-2',
    title: 'Draft guest speaker hospitality & travel itinerary',
    assignedToName: 'Aarav Sharma',
    assignedToId: 'user-member-1',
    eventOrProject: 'IGNITE 2026 Innovation Conclave',
    deadline: 'March 22, 2026',
    priority: 'Medium',
    status: 'todo',
    description: 'Prepare welcome kits, book local transit from Mumbai airport, and confirm green room requirements.'
  },
  {
    id: 'task-3',
    title: 'Social Media announcement reels & poster rollout',
    assignedToName: 'Priya Deshmukh',
    assignedToId: 'user-member-2',
    eventOrProject: 'TARANG Acoustic Night',
    deadline: 'March 25, 2026',
    priority: 'Urgent',
    status: 'in-progress',
    description: 'Produce 3 teasers for Instagram page and release official artist lineup poster.'
  },
  {
    id: 'task-4',
    title: 'Procure 250 STEM kit packages for Zilla Parishad school drive',
    assignedToName: 'Rohan Patil',
    assignedToId: 'user-member-3',
    eventOrProject: 'SAMARPAN Social Drive',
    deadline: 'April 10, 2026',
    priority: 'High',
    status: 'completed',
    description: 'Liaise with wholesale educational suppliers and verify kit completeness.'
  }
];

export const INITIAL_IDEAS: EventIdea[] = [
  {
    id: 'idea-1',
    title: 'Campus Solar Buggy Grand Prix & Clean Energy Expo',
    submittedByName: 'Aarav Sharma',
    submittedByEmail: 'aarav.sharma@pillai.edu',
    category: 'Competition',
    estimatedBudget: '₹45,000',
    description: 'A student racing and energy design competition where multi-disciplinary teams build small-scale solar powered remote vehicles and exhibit sustainable engineering.',
    status: 'Under Review',
    dateSubmitted: '2026-03-01'
  },
  {
    id: 'idea-2',
    title: 'Mental Wellness & Creative Journaling Retreat',
    submittedByName: 'Sneha Chawla',
    submittedByEmail: 'sneha.chawla@pillai.edu',
    category: 'Social',
    estimatedBudget: '₹15,000',
    description: 'An open relaxation zone in the university garden with guided acoustic mindfulness, gratitude boards, and peer listening sessions before mid-term exams.',
    status: 'Approved',
    dateSubmitted: '2026-02-18'
  }
];

export const INITIAL_REGISTRATIONS: EventRegistration[] = [
  {
    id: 'reg-101',
    eventId: 'event-1',
    eventTitle: 'IGNITE 2026: Annual Inter-University Innovation Conclave',
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
    eventId: 'event-1',
    eventTitle: 'IGNITE 2026: Annual Inter-University Innovation Conclave',
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
    eventId: 'event-2',
    eventTitle: 'TARANG: National Cultural Fiesta & Acoustic Night',
    studentName: 'Zoya Merchant',
    studentEmail: 'zoya.m@student.pillai.edu',
    studentCollegeId: 'PU-2023-EXTC-088',
    department: 'School of Electronics & Telecommunication',
    year: 'TE',
    registeredAt: '2026-03-07 09:12 AM',
    attended: false
  }
];
