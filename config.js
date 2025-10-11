module.exports = {
  PORT: process.env.PORT || 5000,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
  MAX_DAILY_HINTS: 5,
  DIFFICULTY_POINTS: {
    easy: 10,
    medium: 20,
    hard: 30
  }
};
