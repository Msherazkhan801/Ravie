import React from 'react'

const Adress = () => {
  return (
    <>
   <div className="bg-[#f4ecec] text-[#231f20] px-6 pt-12 pb-6">
         {/* Contact Info Section */}
         <div className="max-w-6xl  sm:px-0 md:px-20 flex flex-col md:flex-row  gap-10">
           {/* Raleigh */}
           <div>
             <h3 className="text-2xl font-semibold mb-4">Raleigh, NC</h3>
             <p>150 Fayetteville St Ste 300</p>
             <p>Raleigh, NC 27601</p>
             <div className="mt-4">
               <p className="font-bold">Austin Bauwens</p>
               <p className="font-medium">Co-Founder, Chief Operations Officer</p>
               <p className="mt-1 text-sm">
                 <a
                   href="mailto:austin@ravie.co"
                   className="underline text-[#7b6d6d] hover:text-[#231f20]"
                 >
                   austin@ravie.co
                 </a>{' '}
                 |{' '}
                 <a
                   href="tel:+19192498201"
                   className="underline text-[#7b6d6d] hover:text-[#231f20]"
                 >
                   +1-919-249-8201
                 </a>
               </p>
             </div>
           </div>
   
           {/* NYC */}
           <div>
             <h3 className="text-2xl font-semibold mb-4">NYC</h3>
             <p>108 Stanton St</p>
             <p>New York, NY 10002</p>
             <div className="mt-4">
               <p className="font-bold">Noah Wilde</p>
               <p className="font-medium">Co-Founder, Chief Creative Officer</p>
               <p className="mt-1 text-sm">
                 <a
                   href="mailto:noah@ravie.co"
                   className="underline text-[#7b6d6d] hover:text-[#231f20]"
                 >
                   noah@ravie.co
                 </a>{' '}
                 |{' '}
                 <a
                   href="tel:+19292434691"
                   className="underline text-[#7b6d6d] hover:text-[#231f20]"
                 >
                   +1-929-243-4691
                 </a>
               </p>
             </div>
           </div>
         </div>
       </div>
       </>
  )
}

export default Adress