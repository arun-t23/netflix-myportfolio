import React, { createContext, useContext, ReactNode, useState } from 'react';
import { Profile } from '../types';
import { profileData } from '../data/profile';

type ProfileContextType = {
  profile: Profile;
  updateProfile: (updates: Partial<Profile>) => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile>(profileData);

  const updateProfile = (updates: Partial<Profile>) => {
    setProfile(prev => ({
      ...prev,
      ...updates
    }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
