export type UserRole = 'viewer' | 'member' | 'leader';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  department: string;
  year: string;
  team?: string;
  bio?: string;
}

export type EventCategory = 'Cultural' | 'Technical' | 'Social' | 'Workshop' | 'Competition';
export type EventStatus = 'upcoming' | 'completed' | 'draft';

export interface EventAgendaItem {
  time: string;
  title: string;
  speakerOrLead?: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: EventCategory;
  status: EventStatus;
  date: string;
  time: string;
  venue: string;
  coverImage: string;
  description: string;
  fullDetails?: string;
  coordinator: string;
  coordinatorContact?: string;
  registrationLink?: string;
  capacity: number;
  registeredCount: number;
  agenda: EventAgendaItem[];
  perks?: string[];
  isFeatured?: boolean;
}

export type TeamHierarchyLevel = 
  | 'Faculty Coordinator' 
  | 'President' 
  | 'Vice President' 
  | 'Secretary' 
  | 'Team Leader' 
  | 'Core Member' 
  | 'Volunteer';

export interface TeamMember {
  id: string;
  name: string;
  role: TeamHierarchyLevel;
  teamCategory: 'Executive' | 'Technical' | 'Cultural & Arts' | 'Operations' | 'Creative & Media' | 'Public Relations';
  department: string;
  year: string;
  photo: string;
  bio: string;
  email: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  achievements?: string[];
}

export type AchievementCategory = 'Award' | 'Competition Win' | 'Certification' | 'Media Mention' | 'Impact Milestone';

export interface Achievement {
  id: string;
  title: string;
  year: string;
  category: AchievementCategory;
  organizationOrEvent: string;
  imageUrl: string;
  description: string; // Follows the required standard copy
  highlightStats?: string;
  isFeatured?: boolean;
  dateAdded: string;
}

export type TaskStatus = 'todo' | 'in-progress' | 'completed';
export type TaskPriority = 'Low' | 'Medium' | 'High' | 'Urgent';

export interface MemberTask {
  id: string;
  title: string;
  assignedToName: string;
  assignedToId: string;
  eventOrProject: string;
  deadline: string;
  priority: TaskPriority;
  status: TaskStatus;
  description?: string;
}

export interface EventIdea {
  id: string;
  title: string;
  submittedByName: string;
  submittedByEmail: string;
  category: EventCategory;
  estimatedBudget: string;
  description: string;
  status: 'Under Review' | 'Approved' | 'Scheduled';
  dateSubmitted: string;
}

export interface EventRegistration {
  id: string;
  eventId: string;
  eventTitle: string;
  studentName: string;
  studentEmail: string;
  studentCollegeId: string;
  department: string;
  year: string;
  registeredAt: string;
  attended?: boolean;
}
