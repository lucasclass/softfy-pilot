import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Logo1 from "../../public/assets/logo_01.png" 
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Plataforma" },
  { name: "Preços" },
  { name: "Quem somos" },
  { name: "Especialistas" },
];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
      <Image src={Logo1} alt="Logo" className="w-24 h-24" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className="text-[#36485C] font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
          Abra sua conta
        </p>

        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Login
          </span>
        </div>

        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}
