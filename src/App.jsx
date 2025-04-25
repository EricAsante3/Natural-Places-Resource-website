import React, { useRef,useEffect, useState, useContext } from 'react';

const images = [
  '/images/pic1.jpeg',
  '/images/pic2.jpg',
  '/images/pic3.jpeg',
  '/images/pic4.jpg',
  '/images/pic5.jpg',
  '/images/pic6.jpg',
  '/images/pic7.jpeg',
  '/images/pic8.png',
  '/images/pic9.jpg',
  '/images/pic10.jpg',


];

function app() {
  const [lines, setLines] = useState([]);
  const [randomFact, setRandomFact] = useState('Generate fact!');

  const handleClick = () => {
    if (!lines.length) return;
    const random = lines[Math.floor(Math.random() * lines.length)];
    setRandomFact(random);
  };

  // Load file once on mount
  useEffect(() => {

    fetch('/fun_facts.txt')
      .then(res => res.text())
      .then(text => {
        const parsed = text.split(/\r?\n/).filter(line => line.trim() !== '');
        setLines(parsed);
      });
      
  }, []);


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(timer); // cleanup
  }, []);


  return (

<div className=" relative flex flex-col h-full">


  <h1 className='absolute bottom-0 left-5 text-2xl z-50'>Created by Eric Asante - Evst art project</h1>

  <div className="flex flex-none flex-row w-full h-11 sm:h-11   relative  bg-slate-50     lg:h-20">




      <div className=" flex                 p-2      w-full                       justify-center  items-center     sm:items-center       lg:items-center ">

          <div className=' flex flex-row  justify-center  items-center h-full space-x-8'>

          <h1 className='  font-Rag  text-start   text-5xl   lg:text-5xl xl:text-6xl '>
                Lake Bosumtwi:
          </h1>
          
          <button className='bg-white hover:drop-shadow-[-7px_5px_5px_rgba(0,0,0,0.5)] h-full w-36 border-2 border-black rounded-3xl'   onClick={() => window.open('https://ohenebapokufoundation.org/portfolio/lake-bosomtwe-restoration/', '_blank')}>
            Restoration Foundation
          </button>

          <button className='bg-white hover:drop-shadow-[-7px_5px_5px_rgba(0,0,0,0.5)] h-full w-36 border-2 border-black rounded-3xl'   onClick={() => window.open('https://ghana.arocha.org/en/freshwater/', '_blank')}>
          Fresh water Conservation
          </button>

          <button className='bg-white hover:drop-shadow-[-7px_5px_5px_rgba(0,0,0,0.5)] h-full w-36 border-2 border-black rounded-3xl'   onClick={() => window.open('https://www.rufford.org/projects/benjamin-amedi-afful/eco-soil-enhancing-conservation-of-soil-organic-lifeforms-as-bioindicators-in-the-lake-bosomtwe-biosphere-reserve/', '_blank')}>
          Soil Biodiversity Conservation
          </button>

          <button className='bg-white hover:drop-shadow-[-7px_5px_5px_rgba(0,0,0,0.5)] h-full w-36 border-2 border-black rounded-3xl'   onClick={() => window.open('https://www.creativeactioninstitute.org/ghana-waste-management', '_blank')}>
            Waste Management 
          </button>

          </div>


      </div>





  </div>

  <div className='bg-slate-50 w-full p-2 pl-12 pr-12 flex items-center justify-center'>
    <div className='bg-black h-1 rounded-3xl w-full'>
    </div>
  </div>



  <div className=" bg-back flex items-center justify-center w-full h-full  ">


    <div className='bg-white   h-[700px] w-[800px] flex flex-row  border-4 border-black'>

    <div className="flex justify-center items-center p-9 relative w-full h-full  ">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0   max-w-[95%] h-[95%] object-contain transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>

      <div className='flex flex-col w-full h-full p-4 bg-white border-l-2 border-black'>
        <div className='w-full h-full flex flex-col bg-white'>
        <div className='bg-white text-center text-2xl pb-4 border-b-4 bold w-full h-1/12 mb-4'>
          Fun Fact!
        </div>
        <div className='bg-white h-full w-full flex items-center justify-center text-center'>
          <p className='text-3xl w-full '> 

          {randomFact}

          </p>
        </div>
        </div>

        <button onClick={handleClick} className='w-full h-1/4 border-t-4 text-2xl bg-white hover:text-green-600 '>
          Generate New Fact
        </button>
      </div>
    </div>

  </div>








</div>




  )
}

export default app
