-- File: database/migrations/001_initial_schema.sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE user_sessions (
  session_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  current_semester INTEGER,
  target_graduation DATE,
  exam_preference VARCHAR(20),
  total_weekly_hours INTEGER,
  peak_focus_time VARCHAR(50)
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  session_id UUID REFERENCES user_sessions(session_id),
  course_code VARCHAR(10),
  course_title VARCHAR(255),
  credit_units INTEGER,
  semester INTEGER,
  prerequisites TEXT[]
);

CREATE TABLE study_plans (
  id SERIAL PRIMARY KEY,
  session_id UUID REFERENCES user_sessions(session_id),
  plan_type VARCHAR(20), -- 'master', 'semester', 'course'
  plan_data JSONB,
  generated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE progress (
  id SERIAL PRIMARY KEY,
  session_id UUID REFERENCES user_sessions(session_id),
  course_id INTEGER REFERENCES courses(id),
  chapter_id VARCHAR(50),
  status VARCHAR(20), -- 'not_started', 'in_progress', 'completed'
  completed_at TIMESTAMP
);

CREATE TABLE availability (
  session_id UUID REFERENCES user_sessions(session_id),
  day_of_week INTEGER, -- 0-6 (Sunday-Saturday)
  start_time TIME,
  end_time TIME,
  available_type VARCHAR(20) -- 'study', 'work', 'personal'
);
