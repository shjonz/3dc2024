import React from 'react';
import {
  FaTelegramPlane,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Example: React.FC = () => {
  return (
    <footer className=" relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <div className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear}{' '}
            <a href="https://material-tailwind.com/">SUTD 3DC</a>. All Rights
            Reserved.
          </div>

          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <a
              href="https://web.telegram.org/k/#-1354493337"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.linkedin.com/company/gdsc-sutd/mycompany/"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/sutd3dc/?hl=en"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/SUTD-3DC"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Example;
