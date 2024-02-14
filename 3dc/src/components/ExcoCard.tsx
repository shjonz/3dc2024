import { Reveal } from "@/components/Reveal";
import { useState } from 'react';

interface ExcoCardsProps {
  name: string;
  role: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  telegram: string;
  image: string;
  href: string;
}

const GitHubButton: React.FC<{ profileUrl: string }> = ({ profileUrl }) => {
  return (
    <a href={profileUrl} className="px-2 hover:-translate-y-1">
      {/* GitHub SVG */}
    </a>
  );
};

const LinkedinButton: React.FC<{ profileUrl: string }> = ({ profileUrl }) => {
  return (
    <a href={profileUrl} className="px-2 hover:-translate-y-1">
      {/* LinkedIn SVG */}
    </a>
  );
};

const EmailButton: React.FC<{ emailAddress: string }> = ({ emailAddress }) => {
  const mailToLink = `mailto:${emailAddress}`;

  return (
    <a href={mailToLink} className="px-2 hover:-translate-y-1">
      {/* Email SVG */}
    </a>
  );
};

const TelegramButton: React.FC<{ profileUrl: string }> = ({ profileUrl }) => {
  return (
    <a href={profileUrl} className="px-2 hover:-translate-y-1">
      {/* Telegram SVG */}
    </a>
  );
};

export const ExcoCards: React.FC<ExcoCardsProps> = ({
  name,
  role,
  description,
  github,
  linkedin,
  email,
  telegram,
  image,
  href,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="mb-24 md:mb-0 py-20">
      <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 transform transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="flex justify-center">
          <div className="flex justify-center -mt-[75px]">
            <img src={image} className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
          </div>
        </div>

        <div className="p-6">
          <Reveal>
            <h5 className="mb-1 text-lg font-bold">{name}</h5>
          </Reveal>
          <Reveal>
            <p className="mb-6 italic">{role}</p>
          </Reveal>
          <Reveal>
            <p className="mb-6">{description}</p>
          </Reveal>
          <ul className="mx-auto flex list-inside justify-center">
            <GitHubButton profileUrl={github} />
            <LinkedinButton profileUrl={linkedin} />
            <EmailButton emailAddress={email} />
            <TelegramButton profileUrl={telegram} />
          </ul>
        </div>
      </div>
    </div>
  );
};
