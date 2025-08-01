import { createContext, useContext, useReducer, ReactNode } from 'react';

interface Hive {
  id: number;
  name: string;
  health: string;
  lastInspection: string;
  honey: string;
  status: string;
}

interface Task {
  id: number;
  task: string;
  priority: string;
  due: string;
}

interface AppState {
  hives: Hive[];
  tasks: Task[];
  weather: {
    temperature: string;
    condition: string;
    description: string;
    wind: string;
    humidity: string;
  };
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

type AppAction = 
  | { type: 'ADD_HIVE'; payload: Hive }
  | { type: 'UPDATE_HIVE'; payload: { id: number; updates: Partial<Hive> } }
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'COMPLETE_TASK'; payload: number }
  | { type: 'UPDATE_WEATHER'; payload: AppState['weather'] };

const initialState: AppState = {
  hives: [
    { id: 1, name: "Kupol A", health: "Utmärkt", lastInspection: "2 dagar sedan", honey: "12 kg", status: "active" },
    { id: 2, name: "Kupol B", health: "Bra", lastInspection: "5 dagar sedan", honey: "8 kg", status: "active" },
    { id: 3, name: "Kupol C", health: "Varning", lastInspection: "1 vecka sedan", honey: "4 kg", status: "warning" },
  ],
  tasks: [
    { id: 1, task: "Kontrollera drottning i Kupol C", priority: "high", due: "Idag" },
    { id: 2, task: "Lägg till super i Kupol A", priority: "medium", due: "Denna vecka" },
    { id: 3, task: "Behandling mot varroakvalster", priority: "medium", due: "Nästa vecka" },
  ],
  weather: {
    temperature: "22°C",
    condition: "Soligt",
    description: "Perfekt för inspektion",
    wind: "8 km/h",
    humidity: "65%"
  }
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_HIVE':
      return {
        ...state,
        hives: [...state.hives, action.payload]
      };
    case 'UPDATE_HIVE':
      return {
        ...state,
        hives: state.hives.map(hive =>
          hive.id === action.payload.id
            ? { ...hive, ...action.payload.updates }
            : hive
        )
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'COMPLETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case 'UPDATE_WEATHER':
      return {
        ...state,
        weather: action.payload
      };
    default:
      return state;
  }
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}