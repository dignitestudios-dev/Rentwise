import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { IoCloseSharp } from 'react-icons/io5';

const Modal = ({isOpen, setIsOpen}) => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [scale, setScale] = useState(1); 
    // const [initial, setInitial] = useState(true);
    const { theme } = useContext(GlobalContext);
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, []);
    // useEffect(() => {
    //     const handleScroll = () => {
    //     if (window.scrollY > 50) {
    //       if (!isOpen && initial) {
    //         setIsOpen(true);
    //       }
    //       setInitial(false);
    //       if (window.scrollY < 700) {
    //         const scrollY = window.scrollY;
    //         const scaleValue = 0.1 + scrollY / 500;
    //         setScale(scaleValue);
    //       } else {
    //         setTimeout(()=>{
    //             const scrollY = window.scrollY;
    //             const scaleValue = Math.max(0.1, 1.5 - (scrollY - 1400) / 600);
    //             setScale(scaleValue);
    //             if (scaleValue <= 0.1) {
    //                 setIsOpen(false);
    //             }
    //         },2000)
    //       }
    //     }
    //   };
    
    //   window.addEventListener('scroll', handleScroll);
    
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, [isOpen, scale, initial]);
    
  return (
    <div>
      {isOpen && (
        <div className="fixed z-20 overflow-y-auto top-0 w-full left-0">
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75"  />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          
            <div
              className="inline-block duration-500 mt-[200px] md:mt-0 delay-300 relative align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-[15rem] md:max-w-[50rem] sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              style={{
                // transform: `scale(${scale})`, 
                // transition: 'transform 0.4s ease-in-out',
              }}
            >
                  <div>
                <button onClick={()=>{
                    setIsOpen(false);
                }} className={`bg-transparent border absolute w-[24px] h-[24px] md:w-auto md:h-auto md:right-5 z-50 right-3 top-2 text-center md:top-5 rounded-full ${theme=="dark"?"border-[#2438D8] bg-black/40":"border-black/60 bg-white/40"} `} ><IoCloseSharp color={`${theme=="dark"?"#2438D8":"black"}`} className='text-[18px] md:text-[25px]' /></button>
            </div>
              <video
              autoPlay
              loop
                src={theme === 'dark' ? '/dark.mp4' : '/light.mp4'}
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
