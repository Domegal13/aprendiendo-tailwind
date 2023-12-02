const Footer = () => {
  return (
    <>
      <footer className="p-6 flex flex-col items-center md:flex-row md:justify-between max-w-6xl mx-auto">
        <div className="flex space-x-4 pl-8">
          <div className="flex text-2xl items-center cursor-pointer pt-2 text-[#1877F2]">
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div className="flex text-2xl items-center cursor-pointer  pt-2 text-[#1DA1F2]">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="flex text-2xl items-center cursor-pointer  pt-2 text-[#E4405F]">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="flex text-2xl items-center cursor-pointer  pt-2 text-[#181717]">
            <i class="fa-brands fa-github"></i>
          </div>
          <div className="flex text-2xl items-center cursor-pointer  pt-2 text-[#25D366]">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
        </div>
        <div className="text-sm pt-3 md:pr-10">® 2023-Domegal_dev.</div>
      </footer>
    </>
  );
};

export default Footer;

//? con iconos

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
