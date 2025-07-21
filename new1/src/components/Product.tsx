import Image from 'next/image'
import img1 from '../../public/images/microphone.jpg'
import img2 from '../../public/images/iphone.jpg'
const Product = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center gap-20 p-32'>
            <div className='w-10/12'>
              <Image src={img1} alt='microphone-img' className='rounded-full'/>
            </div>
            <div>
              <h4>Best in Class</h4>
              <p>Holisticly predominate extensible testing procedures for reliable supply chains. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
              <div>
                <button>CLASSIFY IT</button>
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
