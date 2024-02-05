import Link from 'next/link';
import { FaHome, FaInfoCircle, FaCalendarAlt, FaSignInAlt } from 'react-icons/fa';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex items-center">
      {/* Icon on the left */}
      <div className="mr-auto">
        <FaHome size={24} />
      </div>

      {/* Navigation links */}
      <ul className="flex space-x-4">
        <NavItem href="/" icon={<FaHome size={20} />} label="Home" />
        <NavItem href="/about" icon={<FaInfoCircle size={20} />} label="About" />
        <NavItem href="/events" icon={<FaCalendarAlt size={20} />} label="Events" />
        <NavItem href="/login" icon={<FaSignInAlt size={20} />} label="Login" />
      </ul>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => {
  return (
    <li>
      <Link href={href}>
          {icon}
          <span>{label}</span>
      </Link>
    </li>
  );
};

export default Navigation;
