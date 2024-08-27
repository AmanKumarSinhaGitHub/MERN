const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Aman Kumar Sinha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
