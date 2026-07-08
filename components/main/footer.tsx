import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#030014]/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              SANJAY
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              MERN Stack Developer passionate about building modern,
              responsive and user-friendly web applications.
            </p>
          </div>

          {/* Footer Columns */}
          {FOOTER_DATA.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-lg font-semibold text-white">
                {column.title}
              </h3>

              <div className="flex flex-col gap-4">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                  
                    className="group flex items-center gap-3 text-gray-400 transition-all duration-300 hover:text-purple-400 hover:translate-x-2"
                  >
                    {Icon && (
                      <Icon
                        size={18}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    )}

                    <span>{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Sanjay. All Rights Reserved.
          </p>

          <p>
            Designed & Developed with ❤️ using React, Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};