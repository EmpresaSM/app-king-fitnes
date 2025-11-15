import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types para o banco de dados
export type UserProfile = {
  id: string;
  email: string;
  name: string;
  fitness_level: 'iniciante' | 'intermediario' | 'avancado';
  plan: 'basico' | 'premium' | 'vip';
  created_at: string;
  weight?: number;
  height?: number;
  goal?: string;
};

export type Workout = {
  id: string;
  title: string;
  description: string;
  muscle_group: string;
  level: 'iniciante' | 'intermediario' | 'avancado';
  duration: number;
  exercises: Exercise[];
  video_url?: string;
  image_url?: string;
};

export type Exercise = {
  name: string;
  sets: number;
  reps: string;
  rest: number;
  instructions: string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  ingredients: string[];
  instructions: string[];
  image_url?: string;
  meal_type: 'cafe' | 'almoco' | 'jantar' | 'lanche';
};

export type MusicPlaylist = {
  id: string;
  title: string;
  description: string;
  songs: Song[];
  created_by: string;
  is_public: boolean;
};

export type Song = {
  title: string;
  artist: string;
  duration: number;
  url: string;
};

export type Progress = {
  id: string;
  user_id: string;
  date: string;
  weight?: number;
  workout_completed: boolean;
  calories_consumed: number;
  notes?: string;
};
