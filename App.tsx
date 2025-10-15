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
    title: 'Lesson 1: Definition of artificial intelligence',
    videoUrl: 'https://www.youtube.com/embed/vnc7bi7ZPc4'
  },
  {
    id: 2,
    title: 'Lesson 2: Artificial intelligence in daily life',
    videoUrl: 'https://www.youtube.com/embed/-cJhh_94D6E'
  },
  {
    id: 3,
    title: 'Lesson 3: Why now?',
    videoUrl: 'https://www.youtube.com/embed/n-TLItyqZKE'
  },
  {
    id: 4,
    title: 'Lesson 4: How does AI work? (Data, Algorithms)',
    videoUrl: 'https://www.youtube.com/embed/iC6MeIOl5HU'
  },
  {
    id: 5,
    title: 'Lesson 5: Classical programming vs. Machine learning',
    videoUrl: 'https://www.youtube.com/embed/5aBOwfL7MUY'
  },
  {
    id: 6,
    title: 'Lesson 6: Modern AI (neural network, Deep learning)',
    videoUrl: 'https://www.youtube.com/embed/hN2ktGzQ7Rk'
  },
  {
    id: 7,
    title: 'Lesson 7: Rule-based AI vs. Machine Learning vs. Deep Learning',
    videoUrl: 'https://www.youtube.com/embed/TV8Br0ealYU'
  },
  {
    id: 8,
    title: 'Lesson 8: Building an AI model',
    videoUrl: 'https://www.youtube.com/embed/hlfiGPe5-6E'
  },
  {
    id: 9,
    title: 'Lesson 9: Data science vs. Machine learning',
    videoUrl: 'https://www.youtube.com/embed/kg-xeI9r9RU'
  },
  {
    id: 10,
    title: 'Lesson 10: Supervised learning: Classification, Regression',
    videoUrl: 'https://www.youtube.com/embed/HKE6AvL6jGE'
  },
  {
    id: 11,
    title: 'Lesson 11: Unsupervised learning: Clustering',
    videoUrl: 'https://www.youtube.com/embed/2is7cn45W54'
  },
  {
    id: 12,
    title: 'Lesson 12: Reinforcement learning',
    videoUrl: 'https://www.youtube.com/embed/_m3acL6iRGU'
  },
  {
    id: 13,
    title: 'Lesson 13: Module summary',
    videoUrl: 'https://www.youtube.com/embed/Ccmp4y_cG94'
  },
  {
    id: 14,
    title: 'Lesson 14: Linear Regression and Least squares',
    videoUrl: 'https://www.youtube.com/embed/TVovqKTzbAA'
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
  },
  {
    id: 24,
    title: 'Lesson 24: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 25,
    title: 'Lesson 25: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 26,
    title: 'Lesson 26: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 27,
    title: 'Lesson 27: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 28,
    title: 'Lesson 28: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 29,
    title: 'Lesson 29: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 30,
    title: 'Lesson 30: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 31,
    title: 'Lesson 31: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 32,
    title: 'Lesson 32: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 33,
    title: 'Lesson 33: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 34,
    title: 'Lesson 34: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 35,
    title: 'Lesson 35: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
  },
  {
    id: 36,
    title: 'Lesson 36: Auto GPT',
    videoUrl: 'https://www.youtube.com/embed/Xx-ZCj57bNo'
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
          ماهية الذكاء الإصطناعي، وما الذي يمكنه أو لا يمكنه فعله 
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
          إذا تساءلت يومًا عن ماهية الذكاء الإصطناعي وكيف أصبح جزءًا من حياتنا، فقد أتيت إلى المكان الصحيح. الهدف من هذه الدورة التدريبية هو إزالة الغموض عن الذكاء الإصطناعي للجميع، بغض النظر عن خلفيتك العلمية.
        </p>

        {/* Banner Image */}
        <Banner imageUrl="https://cdn.leonardo.ai/users/21752c7c-8061-4ab2-9940-b12266151e7f/generations/48387e6c-bdd7-4fdf-aae2-c144cd3b943b/segments/4:4:1/Flux_Dev_photorealistic_course_cover_design_modern_workspace_w_3.jpg" />

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
