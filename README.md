# Cybersecurity Toolkit
A Django + React application providing useful tools for cybersecurity professionals and enthusiasts.
 
## About
This toolkit was developed to help with various cybersecurity tasks, particularly for reverse engineering challenges. It features a collection of conversion utilities that save time by handling common transformations with built-in input cleaning and validation.

The project uses a Django REST API backend and React frontend for a more responsive and modern user experience. All UI rendering is handled by the React frontend.
 
## Features
- Hexadecimal to ASCII (and vice versa)
- Hexadecimal to decimal (and vice versa)
- Base64 encode and decode
- XOR calculator
- General converter
- Quality of life enhancements

## Project Structure
This project is built with:
- **Backend**: Django + Django REST Framework
- **Frontend**: React + Material UI

### Directory Structure

```
/
├── backend/               # Django app for API endpoints
│   ├── api.py             # REST API endpoints
│   └── serializers.py     # API serializers
├── frontend/              # React frontend application
│   ├── public/            # Static assets
│   └── src/
│       ├── components/    # Reusable React components
│       ├── pages/         # Page components
│       └── services/      # API services
└── manage.py              # Django management script
```

## Setup and Installation

### Backend Setup

1. Create a virtual environment and activate it:
   ```
   python -m venv venv
   venv\Scripts\activate  # On Windows
   source venv/bin/activate  # On Unix/MacOS
   ```

2. Install dependencies:
   ```
   pip install django djangorestframework django-cors-headers
   ```

3. Start the Django server:
   ```
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Access the application at `http://localhost:3000`

## How It Works

1. The React frontend makes API calls to the Django backend to perform calculations and conversions
2. The backend processes the requests and returns the results as JSON responses
3. The frontend displays the results in a user-friendly interface with modern styling

## API Endpoints

The following API endpoints are available:

- `/api/hex-to-ascii/` - Convert hex to ASCII
- `/api/ascii-to-hex/` - Convert ASCII to hex
- `/api/base64-encode/` - Encode text to Base64
- `/api/base64-decode/` - Decode Base64 to text
- `/api/general-conversion/` - General data format conversion
- `/api/xor-calculator/` - Perform XOR operations
