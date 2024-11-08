import Twitter from "../icons/Twitter";
import Instagram from "../icons/Instagram";
import Logo from "../icons/Logo";
const Footer = () => {
  return (
    <footer className="bg-slate-200 text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Logo />
        <p className="sm:ml-auto sm:mr-0 text-sm text-gray-500 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mx-auto">
          © 2024
          <a
            href="/"
            className="text-gray-600 ml-1 "
            rel="noopener noreferrer"
            target="_blank"
          >
            @sabe-devdev
          </a>
        </p>
        <span className="inline-flex justify-center sm:justify-start"></span>
      </div>
    </footer>
  );
};
export default Footer;
