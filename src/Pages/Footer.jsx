// Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500">© 2023 Acme Optical. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link to="#" className="text-xs text-gray-500 hover:underline">Terms of Service</Link>
        <Link to="#" className="text-xs text-gray-500 hover:underline">Privacy</Link>
      </nav>
    </footer>
  );
}
