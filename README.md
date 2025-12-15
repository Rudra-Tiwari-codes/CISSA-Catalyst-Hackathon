# SkillSync

An interactive practice platform designed for students in Law, Biomedical Sciences, and Finance. SkillSync provides structured question sets across multiple difficulty levels with automated feedback to support learning and skill development.

## Overview

SkillSync addresses the gap in interactive learning tools for non-computer science disciplines. The platform provides domain-specific questions with instant evaluation, progress tracking, and performance analytics.

## Features

### Core Functionality
- **Multi-Subject Support**: Question sets for Law, Biomedical Sciences, and Finance
- **Automated Evaluation**: Answer validation powered by Google Gemini API
- **Progress Tracking**: Comprehensive statistics and performance metrics
- **Difficulty Progression**: Questions categorized across easy, medium, and hard levels
- **Unlimited Attempts**: Practice questions as many times as needed

### Subject Areas

#### Law
- Corporate law principles and case analysis
- Commercial law scenarios
- Company takeovers and corporate governance
- Directors' duties and legal responsibilities

#### Biomedical Sciences
- Core biomedical concepts
- Medical terminology and processes
- Biological systems and mechanisms

#### Finance
- Investment strategies and portfolio management
- Financial analysis and modeling
- Economic principles (macro and micro)
- Quantitative methods
- International finance
- Personal finance fundamentals

## Technical Stack

**Frontend**
- React with React Router
- Styled Components for component styling
- Framer Motion for animations
- Axios for API communication

**Backend**
- Node.js with Express
- Google Gemini API for answer evaluation
- Supabase for data persistence

## Installation

Clone the repository:
```bash
git clone https://github.com/Rudra-Tiwari-codes/CISSA-Catalyst-Hackathon.git
cd CISSA-Catalyst-Hackathon
```

Install dependencies:
```bash
npm run install-all
```

Configure environment variables in `.env`:
```
GEMINI_API_KEY=your_gemini_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

Start the development servers:
```bash
npm run dev
```

The application will run on:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
CISSA-Catalyst-Hackathon/
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── contexts/       # Context providers
│   │   ├── styles/         # Global styles and theme
│   │   └── utils/          # Utility functions
│   └── public/             # Static assets
├── server.js               # Express server
├── Finance Questions/      # Finance question bank
├── Law Questions/          # Law question bank
├── Biomed Questions/       # Biomedical question bank
└── package.json
```

## Scoring System

Questions are scored based on difficulty:
- Easy: 10 points
- Medium: 20 points
- Hard: 30 points

Responses are evaluated using natural language processing to assess correctness and provide detailed feedback.

## Adding Questions

To add new questions to the platform:

1. Create a `.txt` file in the appropriate subject folder
2. Format questions with one question per line
3. Restart the server to load new content

Questions are parsed and loaded automatically on server startup.

Full Video Walkthrough: 

Watch the full demo on YouTube: https://youtu.be/p5IEfjwj8Gk
