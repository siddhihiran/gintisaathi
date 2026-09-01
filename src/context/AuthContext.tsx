import React, { createContext, useContext, useState, useEffect } from 'react';
import { isFirebaseConfigured, auth } from '../services/firebase';
import { onAuthStateChanged, User, signInAnonymously, signOut } from 'firebase/auth';

interface CivicUser {
  uid: string;
  isAnonymous: boolean;
  displayName?: string;
  selectedState?: string;
  savedSEID?: string;
}

interface AuthContextType {
  user: CivicUser | null;
  isLoading: boolean;
  isFirebaseActive: boolean;
  loginGuest: () => Promise<void>;
  logout: () => Promise<void>;
  saveSEID: (seid: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<CivicUser | null>(() => {
    const saved = localStorage.getItem('gintisaathi_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return {
      uid: 'demo-citizen-' + Math.random().toString(36).substring(2, 7),
      isAnonymous: true,
      displayName: 'Citizen Explorer',
      savedSEID: localStorage.getItem('gintisaathi_demo_seid') || undefined,
    };
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser: User | null) => {
        if (firebaseUser) {
          const u: CivicUser = {
            uid: firebaseUser.uid,
            isAnonymous: firebaseUser.isAnonymous,
            displayName: firebaseUser.displayName || 'Verified Citizen',
          };
          setUser(u);
          localStorage.setItem('gintisaathi_user', JSON.stringify(u));
        }
      });
      return () => unsubscribe();
    }
  }, []);

  const loginGuest = async () => {
    setIsLoading(true);
    try {
      if (isFirebaseConfigured && auth) {
        await signInAnonymously(auth);
      } else {
        const mockUser: CivicUser = {
          uid: 'guest-' + Date.now(),
          isAnonymous: true,
          displayName: 'Guest Citizen',
        };
        setUser(mockUser);
        localStorage.setItem('gintisaathi_user', JSON.stringify(mockUser));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    if (isFirebaseConfigured && auth) {
      await signOut(auth);
    }
    setUser(null);
    localStorage.removeItem('gintisaathi_user');
  };

  const saveSEID = (seid: string) => {
    localStorage.setItem('gintisaathi_demo_seid', seid);
    if (user) {
      const updated = { ...user, savedSEID: seid };
      setUser(updated);
      localStorage.setItem('gintisaathi_user', JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isFirebaseActive: isFirebaseConfigured,
        loginGuest,
        logout,
        saveSEID,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
