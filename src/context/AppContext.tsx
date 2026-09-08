import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  User, 
  UserRole, 
  EventItem, 
  TeamMember, 
  Achievement, 
  MemberTask, 
  EventIdea, 
  EventRegistration 
} from '../types';
import { 
  INITIAL_USERS, 
  INITIAL_EVENTS, 
  INITIAL_TEAM, 
  INITIAL_ACHIEVEMENTS, 
  INITIAL_TASKS, 
  INITIAL_IDEAS, 
  INITIAL_REGISTRATIONS 
} from '../data/mockData';

export type PageId = 'home' | 'about' | 'events' | 'team' | 'achievements' | 'login' | 'dashboard';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

interface AppContextType {
  // Navigation
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  selectedEventId: string | null;
  setSelectedEventId: (id: string | null) => void;
  selectedAchievement: Achievement | null;
  setSelectedAchievement: (ach: Achievement | null) => void;

  // Auth & Roles
  currentUser: User;
  setCurrentUser: (user: User) => void;
  switchRole: (role: UserRole) => void;
  loginAs: (role: UserRole, email?: string) => boolean;
  logout: () => void;
  isJoinModalOpen: boolean;
  setIsJoinModalOpen: (open: boolean) => void;

  // Events
  events: EventItem[];
  createEvent: (eventData: Omit<EventItem, 'id' | 'registeredCount'>) => EventItem;
  updateEvent: (id: string, eventData: Partial<EventItem>) => void;
  deleteEvent: (id: string) => void;
  registerForEvent: (eventId: string, studentData: { name: string; email: string; collegeId: string; department: string; year: string }) => boolean;

  // Achievements
  achievements: Achievement[];
  addAchievement: (achievementData: Omit<Achievement, 'id' | 'dateAdded'>) => Achievement;
  deleteAchievement: (id: string) => void;

  // Team
  teamMembers: TeamMember[];

  // Tasks & Member Ideas
  tasks: MemberTask[];
  addTask: (taskData: Omit<MemberTask, 'id'>) => void;
  updateTaskStatus: (taskId: string, status: MemberTask['status']) => void;
  ideas: EventIdea[];
  submitIdea: (idea: Omit<EventIdea, 'id' | 'dateSubmitted' | 'status'>) => void;
  updateIdeaStatus: (ideaId: string, status: EventIdea['status']) => void;

  // Registrations
  registrations: EventRegistration[];
  toggleAttendance: (registrationId: string) => void;

  // Toasts
  toasts: ToastMessage[];
  addToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  EVENTS: 'tapas_events_v1',
  ACHIEVEMENTS: 'tapas_achievements_v1',
  TASKS: 'tapas_tasks_v1',
  IDEAS: 'tapas_ideas_v1',
  REGISTRATIONS: 'tapas_registrations_v1',
  CURRENT_USER_ROLE: 'tapas_role_v1'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Initialize role (default to Viewer, or preserved role)
  const [currentUser, setCurrentUser] = useState<User>(() => {
    const savedRole = localStorage.getItem(STORAGE_KEYS.CURRENT_USER_ROLE) as UserRole | null;
    if (savedRole) {
      const match = INITIAL_USERS.find(u => u.role === savedRole);
      if (match) return match;
    }
    return INITIAL_USERS[0]; // Default: Viewer
  });

  // Events state
  const [events, setEvents] = useState<EventItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EVENTS);
      return saved ? JSON.parse(saved) : INITIAL_EVENTS;
    } catch {
      return INITIAL_EVENTS;
    }
  });

  // Achievements state
  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
      return saved ? JSON.parse(saved) : INITIAL_ACHIEVEMENTS;
    } catch {
      return INITIAL_ACHIEVEMENTS;
    }
  });

  // Tasks state
  const [tasks, setTasks] = useState<MemberTask[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TASKS);
      return saved ? JSON.parse(saved) : INITIAL_TASKS;
    } catch {
      return INITIAL_TASKS;
    }
  });

  // Ideas state
  const [ideas, setIdeas] = useState<EventIdea[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.IDEAS);
      return saved ? JSON.parse(saved) : INITIAL_IDEAS;
    } catch {
      return INITIAL_IDEAS;
    }
  });

  // Registrations state
  const [registrations, setRegistrations] = useState<EventRegistration[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
      return saved ? JSON.parse(saved) : INITIAL_REGISTRATIONS;
    } catch {
      return INITIAL_REGISTRATIONS;
    }
  });

  // Team
  const [teamMembers] = useState<TeamMember[]>(INITIAL_TEAM);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    const id = 'toast-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6);
    setToasts(prev => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
  }, [achievements]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.IDEAS, JSON.stringify(ideas));
  }, [ideas]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(registrations));
  }, [registrations]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER_ROLE, currentUser.role);
  }, [currentUser]);

  // Auth actions
  const switchRole = (role: UserRole) => {
    const targetUser = INITIAL_USERS.find(u => u.role === role) || INITIAL_USERS[0];
    setCurrentUser(targetUser);
    addToast('info', `Switched Role to ${role.toUpperCase()}`, `Now browsing as ${targetUser.name} (${role === 'leader' ? 'Team Leader' : role === 'member' ? 'Committee Member' : 'Public Viewer'})`);
  };

  const loginAs = (role: UserRole, _email?: string) => {
    const target = INITIAL_USERS.find(u => u.role === role) || INITIAL_USERS[0];
    setCurrentUser(target);
    addToast('success', 'Authentication Successful', `Welcome back, ${target.name}!`);
    if (role === 'viewer') {
      setCurrentPage('home');
    } else {
      setCurrentPage('dashboard');
    }
    return true;
  };

  const logout = () => {
    setCurrentUser(INITIAL_USERS[0]); // fallback to viewer
    setCurrentPage('home');
    addToast('info', 'Logged Out', 'You are now viewing TAPAS portal as a public visitor.');
  };

  // Event handlers
  const createEvent = (eventData: Omit<EventItem, 'id' | 'registeredCount'>): EventItem => {
    const newId = 'event-' + Date.now();
    const newEvent: EventItem = {
      ...eventData,
      id: newId,
      registeredCount: 0
    };
    setEvents(prev => [newEvent, ...prev]);
    addToast('success', 'Event Created', `"${newEvent.title}" has been saved as ${newEvent.status}.`);
    return newEvent;
  };

  const updateEvent = (id: string, eventData: Partial<EventItem>) => {
    setEvents(prev => prev.map(ev => ev.id === id ? { ...ev, ...eventData } : ev));
    addToast('success', 'Event Updated', 'Event details have been updated successfully.');
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(ev => ev.id !== id));
    addToast('info', 'Event Removed', 'The event has been deleted from records.');
  };

  const registerForEvent = (
    eventId: string, 
    studentData: { name: string; email: string; collegeId: string; department: string; year: string }
  ): boolean => {
    const targetEvent = events.find(e => e.id === eventId);
    if (!targetEvent) return false;

    // Check existing registration
    const existing = registrations.find(r => r.eventId === eventId && r.studentEmail.toLowerCase() === studentData.email.toLowerCase());
    if (existing) {
      addToast('error', 'Already Registered', 'This email address is already registered for this event.');
      return false;
    }

    if (targetEvent.registeredCount >= targetEvent.capacity) {
      addToast('error', 'Capacity Reached', 'Sorry, this event has already reached its maximum participant limit.');
      return false;
    }

    const newReg: EventRegistration = {
      id: 'reg-' + Date.now(),
      eventId,
      eventTitle: targetEvent.title,
      studentName: studentData.name,
      studentEmail: studentData.email,
      studentCollegeId: studentData.collegeId,
      department: studentData.department,
      year: studentData.year,
      registeredAt: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      attended: false
    };

    setRegistrations(prev => [newReg, ...prev]);
    setEvents(prev => prev.map(ev => ev.id === eventId ? { ...ev, registeredCount: ev.registeredCount + 1 } : ev));
    addToast('success', 'Registration Confirmed!', `You have been registered for ${targetEvent.title}. Check your inbox for confirmation.`);
    return true;
  };

  // Achievement handlers
  const addAchievement = (achievementData: Omit<Achievement, 'id' | 'dateAdded'>): Achievement => {
    const newAch: Achievement = {
      ...achievementData,
      id: 'ach-' + Date.now(),
      dateAdded: new Date().toISOString().split('T')[0]
    };
    setAchievements(prev => [newAch, ...prev]);
    addToast('success', 'Achievement Published', `"${newAch.title}" has been published to the gallery.`);
    return newAch;
  };

  const deleteAchievement = (id: string) => {
    setAchievements(prev => prev.filter(a => a.id !== id));
    addToast('info', 'Achievement Removed', 'The item has been removed from the achievements record.');
  };

  // Task handlers
  const addTask = (taskData: Omit<MemberTask, 'id'>) => {
    const newTask: MemberTask = {
      ...taskData,
      id: 'task-' + Date.now()
    };
    setTasks(prev => [newTask, ...prev]);
    addToast('success', 'Task Assigned', `Task "${newTask.title}" assigned to ${newTask.assignedToName}.`);
  };

  const updateTaskStatus = (taskId: string, status: MemberTask['status']) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status } : t));
    addToast('info', 'Task Status Updated', `Task status changed to ${status.replace('-', ' ')}.`);
  };

  // Idea handlers
  const submitIdea = (ideaData: Omit<EventIdea, 'id' | 'dateSubmitted' | 'status'>) => {
    const newIdea: EventIdea = {
      ...ideaData,
      id: 'idea-' + Date.now(),
      dateSubmitted: new Date().toISOString().split('T')[0],
      status: 'Under Review'
    };
    setIdeas(prev => [newIdea, ...prev]);
    addToast('success', 'Proposal Submitted', 'Your event proposal has been forwarded to the Executive Team.');
  };

  const updateIdeaStatus = (ideaId: string, status: EventIdea['status']) => {
    setIdeas(prev => prev.map(i => i.id === ideaId ? { ...i, status } : i));
    addToast('info', 'Idea Status Updated', `Proposal status marked as ${status}.`);
  };

  const toggleAttendance = (regId: string) => {
    setRegistrations(prev => prev.map(r => r.id === regId ? { ...r, attended: !r.attended } : r));
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedEventId,
        setSelectedEventId,
        selectedAchievement,
        setSelectedAchievement,
        currentUser,
        setCurrentUser,
        switchRole,
        loginAs,
        logout,
        isJoinModalOpen,
        setIsJoinModalOpen,
        events,
        createEvent,
        updateEvent,
        deleteEvent,
        registerForEvent,
        achievements,
        addAchievement,
        deleteAchievement,
        teamMembers,
        tasks,
        addTask,
        updateTaskStatus,
        ideas,
        submitIdea,
        updateIdeaStatus,
        registrations,
        toggleAttendance,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
