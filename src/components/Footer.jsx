const Footer = () => {
  return (
    <>
      <footer className="p-6 flex flex-col items-center md:flex-row md:justify-between max-w-6xl mx-auto">
        <div className="flex space-x-4 pl-8">
          <div className="flex text-2xl items-center cursor-pointer pt-2 text-[#1877F2]">
            <i class="fa-brands fa-facebook"></i>
            {/* <p>Facebook</p> */}
          </div>
          <div className="flex text-2xl items-center cursor-pointer  pt-2 text-[#1DA1F2]">
            <i class="fa-brands fa-twitter"></i>
            {/* <p>Twitter</p> */}
          </div>
          <div className="flex text-2xl items-center cursor-pointer  pt-2 text-[#E4405F]">
            <i class="fa-brands fa-instagram"></i>
            {/* <p>Instagram</p> */}
          </div>
          <div className="flex text-2xl items-center cursor-pointer  pt-2 text-[#181717]">
            <i class="fa-brands fa-github"></i>
            {/* <p>Github</p> */}
          </div>
          <div className="flex text-2xl items-center cursor-pointer  pt-2 text-[#25D366]">
            <i class="fa-brands fa-whatsapp"></i>
            {/* <p>Whatsapp</p> */}
          </div>
        </div>
        <div className="text-sm pt-3 md:pr-10">
          ® 2023 Domegal13-Domegaldev-
        </div>
      </footer>
    </>
  );
};

export default Footer;

//? con iconos

{
  /* <div className="flex space-x-4 pl-8">
  <div className="flex items-center cursor-pointer pb-6 pt-2">
    <i class="fa-brands fa-facebook"></i>
    <p>Facebook</p>
  </div>
  <div className="flex items-center cursor-pointer pb-6 pt-2">
    <i class="fa-brands fa-twitter"></i>
    <p>Twitter</p>
  </div>
  <div className="flex items-center cursor-pointer pb-6 pt-2">
    <i class="fa-brands fa-instagram"></i>
    <p>Instagram</p>
  </div>
  <div className="flex items-center cursor-pointer pb-6 pt-2">
    <i class="fa-brands fa-github"></i>
    <p>Github</p>
  </div>
  <div className="flex items-center cursor-pointer pb-6 pt-2">
    <i class="fa-brands fa-whatsapp"></i>
    <p>Whatsapp</p>
  </div>
</div>; */
}

// {/* <div className="flex flex-col pl-6 pb-4 space-x-4 items-center">
//   <div className="flex space-x-4">
//     <div className="hover:text-blue-500">
//       <svg
//         class="w-6"
//         role="img"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <title>Facebook</title>
//         <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
//       </svg>
//       {/* <img
//               className="w-6 cursor-pointer"
//               src="/facebook.svg"
//               alt="facebook"
//             /> */}
//     </div>
//     <img
//       className="w-6 cursor-pointer hover:text-blue-500"
//       src="/twitter.svg"
//       alt="Twitter"
//     />
//     <img className="w-6" src="/instagram.svg" alt="instagram" />{" "}
//     <img className="w-6" src="/github.svg" alt="Github" />
//     <img className="w-6" src="/whatsapp.svg" alt="Whatsapp" />
//   </div>
//   <div className="text-sm pt-4">® 2023 Domegal13-Domegaldev</div>
// </div>; */}
