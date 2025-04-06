# Course Compass Navigator

A modern web application that helps students navigate their academic journey by providing personalized course recommendations and degree planning tools.

## 🌟 Features

- **Smart Course Recommendations**
  - AI-powered course suggestions based on career goals
  - Personalized learning paths
  - Real-time course availability tracking

- **Interactive Course Roadmap**
  - Visual representation of degree requirements
  - Course prerequisites mapping
  - Progress tracking

- **Course Management**
  - Course selection and scheduling
  - Availability prediction
  - Prerequisites checking

- **Career Path Planning**
  - Career goal alignment
  - Skill development tracking
  - Degree program mapping

- **Chat Interface**
  - AI-powered course advisor
  - Real-time assistance
  - Personalized guidance

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/course-compass-navigator.git
cd course-compass-navigator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_ASSISTANT_ID=your_assistant_id
VITE_COURSE_LIST_ASSISTANT_ID=your_course_list_assistant_id
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 🛠️ Tech Stack

- **Frontend**
  - React
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - React Flow
  - Shadcn UI

- **Backend**
  - Express.js
  - OpenAI API
  - Node.js

- **Development Tools**
  - Vite
  - ESLint
  - Prettier
  - TypeScript

## 📁 Project Structure

```
course-compass-navigator/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── CourseRoadmapVisualizer.tsx
│   │   ├── ChatInterface.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── ...
│   ├── services/
│   │   ├── api.ts
│   │   └── courseSelector.ts
│   ├── data/
│   │   ├── mockData.ts
│   │   └── degreePrograms.ts
│   └── App.tsx
├── public/
├── .env
├── package.json
└── README.md
```

## 🔧 Configuration

### Environment Variables

- `VITE_OPENAI_API_KEY`: Your OpenAI API key
- `VITE_ASSISTANT_ID`: OpenAI Assistant ID for course recommendations
- `VITE_COURSE_LIST_ASSISTANT_ID`: OpenAI Assistant ID for course list management

### API Endpoints

- `/api/chat`: Handle chat interactions
- `/api/chat/status`: Check chat status and retrieve messages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for providing the AI capabilities
- Shadcn UI for the beautiful component library
- React Flow for the interactive graph visualization

## 📞 Support

For support, email support@coursecompass.com or join our Slack channel.

## 🔄 Updates

- **v1.0.0** - Initial release
  - Basic course recommendation system
  - Interactive roadmap visualization
  - Chat interface
  - Course management features

## 📱 Screenshots

[Add screenshots of your application here]

---

Made with ❤️ by the Course Compass Team
