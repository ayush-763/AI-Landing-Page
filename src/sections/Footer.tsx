import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YtSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-[1.25rem] border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[2rem] lg:gap-[1.75rem]">
          <div className="flex gap-[0.5rem] items-center lg:flex-1">
            <Logo className="h-[1.5rem] w-[1.5rem]" />
            <p className="font-medium">AI Startup landing page</p>
          </div>
          <div>
            <nav className="flex flex-col lg:flex-row lg:items-center gap-[1.25rem] lg:flex-1 lg:justify-center">
              <a
                href="#"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Company
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-[1.25rem] lg:flex-1 justify-end">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <YtSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
