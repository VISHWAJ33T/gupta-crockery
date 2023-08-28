import React from "react";

const Footer = () => {
  return (
    // <div className="footer-box">
    //   <h1
    //     className="text-3xl font-bold mb-5"
    //     style={{ color: "white", textAlign: "center", marginTop: "0px" }}
    //   >
    //     Gupta Crockery
    //   </h1>
    //   <div className="footer-container">
    //     <div className="footer-row">
    //       <div className="footer-column">
    //         <p className="footer-heading">About Us</p>
    //         <a className="footer-link" href="#">
    //           Aim
    //         </a>
    //         <a className="footer-link" href="#">
    //           Vision
    //         </a>
    //         <a className="footer-link" href="#">
    //           Testimonials
    //         </a>
    //       </div>
    //       <div className="footer-column">
    //         <p className="footer-heading">Services</p>
    //         <a className="footer-link" href="#">
    //           Writing
    //         </a>
    //         <a className="footer-link" href="#">
    //           Internships
    //         </a>
    //         <a className="footer-link" href="#">
    //           Coding
    //         </a>
    //         <a className="footer-link" href="#">
    //           Teaching
    //         </a>
    //       </div>
    //       <div className="footer-column">
    //         <p className="footer-heading">Contact Us</p>
    //         <a className="footer-link" href="#">
    //           Uttar Pradesh
    //         </a>
    //         <a className="footer-link" href="#">
    //           Ahemdabad
    //         </a>
    //         <a className="footer-link" href="#">
    //           Indore
    //         </a>
    //         <a className="footer-link" href="#">
    //           Mumbai
    //         </a>
    //       </div>
    //       <div className="footer-column">
    //         <p className="footer-heading">Social Media</p>
    //         <a className="footer-link" href="#">
    //           <i className="fab fa-facebook-f">
    //             <span style={{ marginLeft: "10px" }}>Facebook</span>
    //           </i>
    //         </a>
    //         <a className="footer-link" href="#">
    //           <i className="fab fa-instagram">
    //             <span style={{ marginLeft: "10px" }}>Instagram</span>
    //           </i>
    //         </a>
    //         <a className="footer-link" href="#">
    //           <i className="fab fa-twitter">
    //             <span style={{ marginLeft: "10px" }}>Twitter</span>
    //           </i>
    //         </a>
    //         <a className="footer-link" href="#">
    //           <i className="fab fa-youtube">
    //             <span style={{ marginLeft: "10px" }}>Youtube</span>
    //           </i>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col-reverse sm:flex-row w-full mt-5 gap-y-5 py-10 h-fit sm:min-h-[300px] text-white bg-[#131b2e] px-10 items-start justify-evenly">
      {/* <div className="grid md:grid-cols-2 grid-cols-1 item-center gap-y-3 sm:w-[50%] "> */}
      <div className="flex flex-col item-center gap-y-3 px-5 sm:w-[50%]">
        <div className="flex">
          <img src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" className="shrink-0 bg-white p-1 rounded-full w-8 h-8 overflow-hidden mr-3" alt="" />
          <h4 className="text-lg break-all">Address here Lorem ipsum dolor sit amet consectetur.</h4>
        </div>
        <div className="flex">
          <img src="https://cdn-icons-png.flaticon.com/128/8644/8644744.png" alt="" className="w-8 mr-3 bg-white p-1 rounded-full h-8 overflow-hidden " />
          <h4 className="text-lg">Phone Number here</h4>
        </div>
        <div className="flex">
          <img src="https://cdn-icons-png.flaticon.com/128/11502/11502423.png" alt="" className="w-8 mr-3 bg-white p-1 rounded-full h-8 overflow-hidden " />
          <h4 className="text-lg">Email Address here</h4>
        </div>
        <div className="flex">
          <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" className="w-8 mr-3 bg-white rounded-full h-8 overflow-hidden " />
          <h4 className="text-lg">Instagram here</h4>
        </div>
        <div className="flex">
          <img src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" alt="" className="w-8 mr-3 bg-white rounded-full h-8 overflow-hidden " />
          <h4 className="text-lg">Facebook here</h4>
        </div>
      </div>
      <div className="flex flex-col item-center px-5 sm:items-start justify-start sm:justify-center gap-y-3 sm:w-[50%] ">
        <div className="flex">
          <h4 className="text-3xl font-bold">Gupta Crockery</h4>
        </div>
        <div className="flex">
          <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque neque magnam sequi incidunt cupiditate amet dignissimos magni labore iusto ratione, quam commodi at voluptates reprehenderit, nisi exercitationem doloremque impedit optio voluptate minus odio placeat? Cum molestias quos corrupti odio enim tempore iure impedit id, voluptate deleniti, error delectus iusto soluta!</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
