import { JSX, ReactNode } from "react";
import { Link } from "react-router";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-gray-100">
      <header className="bg-white shadow py-4 px-6">
        <nav className="flex gap-6">
          <Link to="/" className="hover:underline text-blue-600">דף הבית</Link>
          <Link to="/about" className="hover:underline text-blue-600">אודות</Link>
          <Link to="/contact" className="hover:underline text-blue-600">צור קשר</Link>
        </nav>
      </header>

      <main className="p-6">{children}</main>

      <footer className="bg-gray-200 text-center py-4 mt-12 text-sm text-gray-600">
        © כל הזכויות שמורות
      </footer>
    </div>
  );
};

export default Layout;
