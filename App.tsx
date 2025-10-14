import React, { useState, useRef } from 'react';
import { Banner } from './components/Banner';
import { VideoPlayer } from './components/VideoPlayer';
import { LessonList } from './components/LessonList';
import type { Lesson } from './types';

// --- Easy to Edit Section: Add or change video lesson links here ---
// Simply add a new lesson object to this array. The UI will update automatically.
const courseLessons: Lesson[] = [
  {
    id: 1,
    title: 'Lesson 1: AI & its Applications',
    videoUrl: 'https://www.youtube.com/embed/CQhpM2skOL8'
  },
  {
    id: 2,
    title: 'Lesson 2: Skills required for AI',
    videoUrl: 'https://www.youtube.com/embed/EafvnlUni-8'
  },
  {
    id: 3,
    title: 'Lesson 3: ML & its Applications',
    videoUrl: 'https://www.youtube.com/embed/UNT2LswmIRE'
  },
  {
    id: 4,
    title: 'Lesson 4: Data Analytics lifecycle & Tools',
    videoUrl: 'https://www.youtube.com/embed/LQoo5q-oUGM'
  },
  {
    id: 5,
    title: 'Lesson 5: Customer Segmentation Data',
    videoUrl: 'https://www.youtube.com/embed/F9GKVlRM0dY'
  },
  {
    id: 6,
    title: 'Lesson 6: Machine Learning in Digital Marketing',
    videoUrl: 'https://www.youtube.com/embed/U2qfX6oGZhw'
  },
  {
    id: 7,
    title: 'Lesson 7: Deep Learning & its Architecture',
    videoUrl: 'https://www.youtube.com/embed/dlQZU_cGYA8'
  },
  {
    id: 8,
    title: 'Lesson 8: ML platforms & Algorithms',
    videoUrl: 'https://www.youtube.com/embed/_J646Nv4hmc'
  },
  {
    id: 9,
    title: 'Lesson 9: NLP & Large language mode',
    videoUrl: 'https://www.youtube.com/embed/jwOUNtYwh2Q'
  },
  {
    id: 10,
    title: 'Lesson 10: Text Pre-processing & Tokenization',
    videoUrl: 'https://www.youtube.com/embed/miZQR2SqPEo'
  },
  {
    id: 11,
    title: 'Lesson 11: Transformer ML Model,OpenAI and ChatGPT',
    videoUrl: 'https://www.youtube.com/embed/I_TIRaLp7ZI'
  },
  {
    id: 12,
    title: 'Lesson 12: Website Meta Descriptions Using Python And BERT',
    videoUrl: 'https://www.youtube.com/embed/OZIwkOBaaCQ'
  },
  {
    id: 13,
    title: 'Lesson 13: AI tools in Digital Marketing',
    videoUrl: 'https://www.youtube.com/embed/0lydviKkonw'
  },
  {
    id: 14,
    title: 'Lesson 14: Generative adversarial network (GAN)',
    videoUrl: 'https://www.youtube.com/embed/WZpnB6SyNys'
  },
  {
    id: 15,
    title: 'Lesson 15: Music Generation AI tools',
    videoUrl: 'https://www.youtube.com/embed/0TRVDUAtOYQ'
  },
  {
    id: 16,
    title: 'Lesson 16: Text & Speech Generation AI tools',
    videoUrl: 'https://www.youtube.com/embed/oOa1EtmnSn4'
  },
  {
    id: 17,
    title: 'Lesson 17: Image & Video Generation AI Tools',
    videoUrl: 'https://www.youtube.com/embed/Q11pb0N8cDs'
  },
  {
    id: 18,
    title: 'Lesson 18: Deepfake',
    videoUrl: 'https://www.youtube.com/embed/xEntyDPcCzI'
  },
  {
    id: 19,
    title: 'Lesson 19: Will AI Replace Humans',
    videoUrl: 'https://www.youtube.com/embed/RrUA7bP6XYA'
  },
  {
    id: 20,
    title: 'Lesson 20: Many helpful AI tools',
    videoUrl: 'https://www.youtube.com/embed/7ZYYp6pyiVE'
  },
  {
    id: 21,
    title: 'Lesson 21: How to Build ChatGPT using Personal Data',
    videoUrl: 'https://www.youtube.com/embed/u5zc8mPK3Rc'
  },
  {
    id: 22,
    title: 'Lesson 22: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 23,
    title: 'Lesson 23: Questions and Answers',
    videoUrl: 'https://www.youtube.com/embed/uWns9dY7diM'
  }
];
// ---------------------------------------------------------------------

const App: React.FC = () => {
  // State to keep track of the currently selected lesson's index.
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);
  
  // Create a ref for the video player container to scroll to it.
  const videoPlayerRef = useRef<HTMLDivElement>(null);

  const currentVideoUrl = courseLessons[currentLessonIndex]?.videoUrl || '';

  // Helper function to scroll the video player into view.
  const scrollToPlayer = () => {
    videoPlayerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Handler to update the video when a lesson button is clicked.
  const handleSelectLesson = (index: number) => {
    setCurrentLessonIndex(index);
    scrollToPlayer();
  };

  // Handler for the "Previous" button.
  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prevIndex => prevIndex - 1);
      scrollToPlayer();
    }
  };

  // Handler for the "Next" button.
  const handleNextLesson = () => {
    if (currentLessonIndex < courseLessons.length - 1) {
      setCurrentLessonIndex(prevIndex => prevIndex + 1);
      scrollToPlayer();
    }
  };
  
  const isFirstLesson = currentLessonIndex === 0;
  const isLastLesson = currentLessonIndex === courseLessons.length - 1;

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 min-h-screen">
      <main className="container mx-auto p-4 md:p-8 max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          الذكاء الاصطناعي للتسويق الرقمي و تطبيقاته
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
           بدءا من أساسيات الذكاء الاصطناعي والتعلم الآلي إلى تطبيقاتهما في العالم الحقيقي في مجال الأعمال عبر الإنترنت.
        </p>

        {/* Banner Image */}
        <Banner imageUrl="https://cdn.leonardo.ai/users/21752c7c-8061-4ab2-9940-b12266151e7f/generations/04780d5b-8827-482a-8646-7bb37dc2ff40/segments/1:4:1/Flux_Dev_sleek_minimalist_banner_for_an_online_course_about_Ar_0.jpg" />

        {/* Main Video Display */}
        <div className="my-8" ref={videoPlayerRef}>
          <VideoPlayer src={currentVideoUrl} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={handlePreviousLesson}
              disabled={isFirstLesson}
              className="flex items-center gap-2 px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-all duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:dark:bg-gray-600 disabled:cursor-not-allowed disabled:shadow-none"
              aria-label="Previous lesson"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Previous
            </button>
            <button
              onClick={handleNextLesson}
              disabled={isLastLesson}
              className="flex items-center gap-2 px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-all duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:dark:bg-gray-600 disabled:cursor-not-allowed disabled:shadow-none"
              aria-label="Next lesson"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
        </div>
        
        {/* Lesson Selection Buttons */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
           <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Course Lessons</h2>
            <LessonList 
              lessons={courseLessons}
              activeLessonIndex={currentLessonIndex}
              onSelectLesson={handleSelectLesson}
            />
        </div>

      </main>
      <footer className="text-center p-4 mt-8 text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} HMITS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
