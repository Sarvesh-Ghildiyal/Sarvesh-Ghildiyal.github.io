import { Link } from "react-router-dom";
import { Linkedin, FileText } from "lucide-react"; // Removed Twitter and MessageCircle
import { FaXTwitter } from "react-icons/fa6"; // for the X (Twitter) logo
import { RiDiscordLine } from "react-icons/ri"; // for the Discord logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-lg font-bold text-primary">
              Sarvesh Ghildiyal
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Building meaningful digital products
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sarvesh-ghildiyal-6646b722b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/ghildiyal_sarv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://discord.com/users/sarvesh0925"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <RiDiscordLine className="h-5 w-5" />
            </a>
            <a
              href="/Sarvesh-Ghildiyal-Resume.pdf"
              download
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Sarvesh Ghildiyal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
