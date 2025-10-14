import React from 'react';
import type { Lesson } from '../types';

interface LessonListProps {
  lessons: Lesson[];
  activeLessonIndex: number;
  onSelectLesson: (index: number) => void;
}

/**
 * Renders a list of lesson buttons in a responsive grid.
 * Highlights the currently active lesson and handles click events to switch videos.
 */
export const LessonList: React.FC<LessonListProps> = ({ lessons, activeLessonIndex, onSelectLesson }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {lessons.map((lesson, index) => (
        <button
          key={lesson.id}
          onClick={() => onSelectLesson(index)}
          className={`
            w-full p-4 rounded-lg text-left transition-all duration-200 ease-in-out transform
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-blue-500
            ${
              activeLessonIndex === index
                ? 'bg-blue-600 text-white shadow-md scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-sm'
            }
          `}
        >
          <span className="font-semibold block">{`Lesson ${lesson.id}`}</span>
          <span className="text-sm">{lesson.title}</span>
        </button>
      ))}
    </div>
  );
};
