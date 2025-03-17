import { Mail, Phone, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="px pt-14 w-full h-full bg-primary">
        <div className="flex flex-wrap justify-start md:justify-between items-start">
          <div className=" p-4 ">
            <Link href="/">
              <img src="/logo/brand-logo.png" alt="logo" className="logo-img" />
            </Link>

            <h4 className="font-libre-bold footer-content">
              Sunnyside Chiropractic Care
            </h4>
            <h4 className="footer-content">
              5207 E Belmont Ave, Fresno <br />
              CA, 93727, United States
            </h4>
          </div>
          <div className=" p-4 ">
            <h4 className="footer-content font-semibold">Quick Links</h4>
            <div className="flex items-start space-x-4">
              <div className=" w-fit space-y-3">
                <Link
                  href="/about-us"
                  className="footer-content block underline"
                >
                  About Us
                </Link>
                <Link
                  href="/service"
                  className="footer-content block underline"
                >
                  Our Services
                </Link>
                <Link
                  href="/patients"
                  className="footer-content block underline"
                >
                  For Patients
                </Link>
              </div>

              <div className=" w-fit space-y-3">
                <Link
                  href="/testimonials"
                  className="footer-content block underline"
                >
                  Testimonials
                </Link>
                <Link href="/blog" className="footer-content block underline">
                  Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 ">
            <h4 className="footer-content font-semibold">Contact Us</h4>

            <div className="flex space-x-2 items-center">
              <Mail className="footer-content" />
              <h4 className="footer-content">xyz@gmail.com</h4>
            </div>
            <div className="flex space-x-2 items-center">
              <PhoneCall className="footer-content" />
              <h4 className="footer-content">+15594541000</h4>
            </div>
          </div>
        </div>
        <hr className="w-full h-[0.0625rem] text-[#F5EDE1]" />

        <div className="flex items-center flex-wrap justify-between w-full h-[4%] p-4">
          <h4 className="footer-content underline ">All right reserved</h4>
          <div className="flex items-center justify-between space-x-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
            >
              <g clip-path="url(#clip0_795_260)">
                <path
                  d="M24 13.1264C24 20.1101 19.2344 25.0801 12.1967 25.0801C5.44918 25.0801 0 19.6116 0 12.8401C0 6.06861 5.44918 0.600098 12.1967 0.600098C15.482 0.600098 18.2459 1.80929 20.3754 3.80323L17.0557 7.00636C12.7131 2.80132 4.63771 5.96003 4.63771 12.8401C4.63771 17.1093 8.03607 20.5691 12.1967 20.5691C17.0262 20.5691 18.8361 17.0945 19.1213 15.293H12.1967V11.0831H23.8082C23.9213 11.7099 24 12.312 24 13.1264Z"
                  fill="#F5EDE1"
                />
              </g>
              <defs>
                <clipPath id="clip0_795_260">
                  <rect
                    width="24"
                    height="24.8"
                    fill="white"
                    transform="translate(0 0.600098)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="26"
              viewBox="0 0 22 26"
              fill="none"
            >
              <g clip-path="url(#clip0_795_262)">
                <path
                  d="M11.0049 7.16025C7.88172 7.16025 5.36252 9.76533 5.36252 12.995C5.36252 16.2247 7.88172 18.8298 11.0049 18.8298C14.1281 18.8298 16.6473 16.2247 16.6473 12.995C16.6473 9.76533 14.1281 7.16025 11.0049 7.16025ZM11.0049 16.7884C8.98663 16.7884 7.33663 15.0872 7.33663 12.995C7.33663 10.9028 8.98172 9.20166 11.0049 9.20166C13.0281 9.20166 14.6732 10.9028 14.6732 12.995C14.6732 15.0872 13.0232 16.7884 11.0049 16.7884ZM18.1942 6.92158C18.1942 7.67822 17.6049 8.28252 16.8781 8.28252C16.1465 8.28252 15.5621 7.67314 15.5621 6.92158C15.5621 6.17002 16.1514 5.56064 16.8781 5.56064C17.6049 5.56064 18.1942 6.17002 18.1942 6.92158ZM21.9313 8.30283C21.8478 6.47979 21.4451 4.86494 20.1536 3.53447C18.867 2.204 17.3054 1.7876 15.5424 1.69619C13.7255 1.58955 8.27949 1.58955 6.46252 1.69619C4.70449 1.78252 3.14288 2.19893 1.85136 3.52939C0.559843 4.85986 0.162075 6.47471 0.0736816 8.29775C-0.0294434 10.1767 -0.0294434 15.8083 0.0736816 17.6872C0.157164 19.5103 0.559843 21.1251 1.85136 22.4556C3.14288 23.786 4.69957 24.2024 6.46252 24.2938C8.27949 24.4005 13.7255 24.4005 15.5424 24.2938C17.3054 24.2075 18.867 23.7911 20.1536 22.4556C21.4402 21.1251 21.8429 19.5103 21.9313 17.6872C22.0344 15.8083 22.0344 10.1817 21.9313 8.30283ZM19.584 19.7032C19.2009 20.6985 18.4594 21.4653 17.492 21.8665C16.0433 22.4606 12.6058 22.3235 11.0049 22.3235C9.40404 22.3235 5.96163 22.4556 4.51788 21.8665C3.55538 21.4704 2.81386 20.7036 2.42591 19.7032C1.85136 18.2052 1.98395 14.6505 1.98395 12.995C1.98395 11.3396 1.85627 7.77979 2.42591 6.28682C2.80895 5.2915 3.55047 4.52471 4.51788 4.12354C5.96654 3.52939 9.40404 3.6665 11.0049 3.6665C12.6058 3.6665 16.0482 3.53447 17.492 4.12354C18.4545 4.51963 19.196 5.28643 19.584 6.28682C20.1585 7.78486 20.0259 11.3396 20.0259 12.995C20.0259 14.6505 20.1585 18.2103 19.584 19.7032Z"
                  fill="#F5EDE1"
                />
              </g>
              <defs>
                <clipPath id="clip0_795_262">
                  <rect width="22" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_795_264)">
                <path
                  d="M15.1071 12.0399L10.0071 9.13462V14.9451L15.1071 12.0399ZM20.5714 0H3.42857C1.5375 0 0 1.54123 0 3.43689V20.6214C0 22.517 1.5375 24.0583 3.42857 24.0583H20.5714C22.4625 24.0583 24 22.517 24 20.6214V3.43689C24 1.54123 22.4625 0 20.5714 0ZM21.3429 7.30877C21.75 8.84463 21.75 12.0452 21.75 12.0452C21.75 12.0452 21.75 15.2458 21.3429 16.7763C21.1179 17.6248 20.4589 18.2639 19.6179 18.4894C18.1018 18.9029 12 18.9029 12 18.9029C12 18.9029 5.89821 18.9029 4.38214 18.4948C3.54107 18.2692 2.88214 17.6302 2.65714 16.7817C2.25 15.2458 2.25 12.0452 2.25 12.0452C2.25 12.0452 2.25 8.83926 2.65714 7.30877C2.88214 6.46029 3.54107 5.79439 4.38214 5.56884C5.89821 5.15534 12 5.15534 12 5.15534C12 5.15534 18.1018 5.15534 19.6179 5.56884C20.4589 5.79439 21.1179 6.46029 21.3429 7.30877Z"
                  fill="#F5EDE1"
                />
              </g>
              <defs>
                <clipPath id="clip0_795_264">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
            >
              <g clip-path="url(#clip0_795_266)">
                <path
                  d="M21.7976 0.424805H1.20285C0.867988 0.455251 0.557288 0.612066 0.333902 0.863375C0.110517 1.11468 -0.00879036 1.44163 0.00023274 1.77775V22.2222C-0.00879036 22.5583 0.110517 22.8853 0.333902 23.1366C0.557288 23.3879 0.867988 23.5447 1.20285 23.5751H12.1767V14.5555H9.17017V11.098H12.1767V8.54245C12.0785 7.43037 12.4151 6.32351 13.116 5.45448C13.8168 4.58545 14.8272 4.02192 15.9349 3.88232H16.6865C17.5911 3.85742 18.4961 3.9077 19.3924 4.03265V7.18951H17.4381C15.9349 7.18951 15.7845 7.94114 15.7845 8.84311V11.098H19.2421L18.7911 14.5555H15.7845V23.4248H21.6473C21.9834 23.4338 22.3104 23.3145 22.5617 23.0911C22.813 22.8678 22.9698 22.557 23.0002 22.2222V1.62742C22.9791 1.31542 22.8456 1.02164 22.6245 0.800513C22.4034 0.579389 22.1096 0.445909 21.7976 0.424805V0.424805Z"
                  fill="#F5EDE1"
                />
              </g>
              <defs>
                <clipPath id="clip0_795_266">
                  <rect
                    width="23"
                    height="23.1503"
                    fill="white"
                    transform="translate(0 0.424805)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
            >
              <g clip-path="url(#clip0_795_269)">
                <path
                  d="M22 2.17479C21.1778 2.54141 20.3043 2.78012 19.4099 2.88265C20.3537 2.32107 21.0601 1.43442 21.3967 0.38905C20.5082 0.913493 19.5372 1.2834 18.525 1.48302C17.9059 0.823476 17.1027 0.365265 16.2199 0.167846C15.337 -0.0295729 14.4152 0.0429142 13.5741 0.375901C12.7329 0.708888 12.0113 1.287 11.5028 2.03522C10.9943 2.78344 10.7225 3.66721 10.7225 4.57187C10.7215 4.91866 10.762 5.26432 10.8431 5.60148C9.04843 5.51053 7.29277 5.044 5.68965 4.23205C4.08653 3.4201 2.67162 2.28079 1.53638 0.88777C0.958857 1.88148 0.782115 3.05805 1.04219 4.17758C1.30227 5.29711 1.97958 6.27528 2.93601 6.91263C2.21991 6.88992 1.51952 6.6969 0.89287 6.34956V6.40587C0.892853 7.44778 1.25332 8.45761 1.9131 9.26401C2.57287 10.0704 3.49133 10.6237 4.51261 10.83C4.12481 10.9369 3.72438 10.991 3.32212 10.9909C3.03613 10.9884 2.75088 10.9615 2.46947 10.9104C2.75802 11.8071 3.31924 12.5913 4.07484 13.1536C4.83044 13.716 5.74274 14.0285 6.68446 14.0476C5.08433 15.3004 3.11013 15.9802 1.07788 15.9781C0.717662 15.9769 0.357796 15.9554 0 15.9137C2.06354 17.2394 4.46505 17.9431 6.91773 17.9408C15.219 17.9408 19.7558 11.0633 19.7558 5.10276C19.7558 4.90971 19.7477 4.70861 19.7397 4.51556C20.6263 3.87596 21.3918 3.08328 22 2.17479Z"
                  fill="#F5EDE1"
                />
              </g>
              <defs>
                <clipPath id="clip0_795_269">
                  <rect
                    width="22"
                    height="17.8815"
                    fill="white"
                    transform="translate(0 0.059082)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
