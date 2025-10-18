# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KBO Win Rate Calculator is a web-based application that predicts win probabilities for Korean Baseball Organization (KBO) games. The application uses team statistics and starting pitcher ERA data to calculate win rates between two teams.

## Architecture

### Frontend Structure
- **HTML**: `index.html` - Main application interface with Korean UI
- **CSS**: `css/style.css` - Comprehensive styling for responsive web interface
- **JavaScript**:
  - `js/app.js` - Main application logic, UI interactions, progress tracking, and team data management
  - `js/database.js` - Supabase database integration for team statistics
  - `js/winRate.js` - Win probability calculation algorithm using weighted statistical categories

### Data Sources
- **Supabase Database**: Real-time team statistics (batting, pitching, fielding, baserunning)
- **Hardcoded Pitcher Data**: Starting pitcher information with ERA values in `js/app.js`
- **Local Resources**: Team logos and pitcher images in `resources/teams/` directory
- **CSV Data**: Historical team statistics in `Data/` directory for reference

## Key Components

### User Interface Flow
The application follows a 4-step process with visual progress indicators:
1. **Team Selection**: Users select home and away teams from dropdowns
2. **Pitcher Selection**: Users choose starting pitchers for each team
3. **Prediction Execution**: Win rate calculation is performed
4. **Results Display**: Probability results are shown with visual representation

### Win Rate Calculation (`js/winRate.js`)
- Uses weighted categories: batting (35%), pitching (40%), fielding (20%), baserunning (5%)
- Incorporates starting pitcher ERA as a separate factor
- Applies z-score normalization and softmax probability calculation
- Categories have detailed sub-metrics with individual weights

### Database Integration (`js/database.js`)
- Connects to Supabase with hardcoded credentials
- Functions: `getTeamStats(teamName)`, `getAllTeams()`
- Retrieves comprehensive team statistics from multiple tables
- Implements caching for performance optimization

### Application Logic (`js/app.js`)
- Manages team selection and pitcher assignment with real-time validation
- Implements progress step tracking and UI state management
- Handles data transformation between database format and calculation format
- Provides real-time UI updates and prediction results
- Contains hardcoded pitcher data mapped to teams

## Data Structure

### Team Statistics
Teams have statistics across four categories:
- **Batting**: AVG, PA, AB, R, H, 2B, 3B, HR, TB, RBI, SAC, SF
- **Pitching**: ERA, W, L, SV, HLD, WHIP, IP, H, HR, BB, HBP, SO, R, ER
- **Fielding**: E, PK, PO, A, DP, FPCT, PB, SB, CS, CS%
- **Baserunning**: SBA, SB, CS, SB%, OOB, PKO

### Database Tables
- `teams` - Team information with unique idx
- `kbo_team_stats` - Batting statistics
- `kbo_team_pitching_stats` - Pitching statistics
- `kbo_team_fielding_stats` - Fielding statistics
- `kbo_team_baserunning_stats` - Baserunning statistics

## Development

### Running the Application
- Open `index.html` in a web browser (not in `web/` subdirectory)
- No build process required - pure HTML/CSS/JavaScript
- Requires internet connection for Supabase database access
- Uses CDN for Supabase client library and Google Fonts

### File Structure
```
/
├── index.html              # Main application entry point
├── css/style.css          # Application styling
├── js/                    # JavaScript modules
│   ├── app.js            # Main application logic
│   ├── database.js       # Supabase integration
│   └── winRate.js        # Calculation engine
├── resources/teams/       # Team assets (logos, pitcher images)
├── Data/                  # CSV data files for reference
└── test.py               # Simple test script
```

### Testing
- No automated testing framework configured
- Manual testing through browser interface
- Console logging available for debugging database operations
- Basic test.py file exists but appears minimal

## Configuration

### Database Connection
Supabase configuration is hardcoded in `js/database.js`:
- URL: `https://kktjuxbgudwqvbcfqfqs.supabase.co`
- Anonymous key is included in the source code

### Team Name Mapping
The application includes a mapping between database team names and pitcher data keys in `js/app.js` to handle naming inconsistencies between the database and hardcoded pitcher data.