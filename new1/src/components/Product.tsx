import Image from 'next/image'
import img1 from '../../public/images/microphone.jpg'
import img2 from '../../public/images/iphone.jpg'
const Product = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 xl:p-32'>
            <div className='border-[3px] border-red-500'>
              <Image src={img1} alt='microphone-img' className='rounded-full'/>
            </div>
            
            <div className='flex flex-col justify-center items-start gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
              <h4 className='text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold tracking-[1px]'>Best in Class</h4>
              <p className='text-sm md:text-lg lg:text-xl xl:text-2xl opacity-70'>Holisticly predominate extensible testing procedures for reliable supply chains. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
              <div >
                <button className='px-12 py-5 bg-[yellowgreen] border-none outline-none rounded-full text-white text-xl '>CLASSIFY IT</button>
              </div>
            </div>
           
        </div>
        <div >
           <div className='flex'>
              <div>
                <h4>Superior Quality</h4>
                <p>Holisticly predominate extensible testing procedures for reliable supply chains. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                <div>
                  <button>TEST IT</button>
                </div>
              </div>

              <div>
                <Image src={img2} alt='ipone-img'/>
              </div>
            </div>

        </div>
      
    </div>
  )
}

export default Product
