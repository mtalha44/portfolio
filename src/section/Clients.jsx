// import { div } from 'three/tsl'
// import { div } from 'three/tsl'
import { clientReviews } from '../constants'

const Clients = () => {
  return (
    <section className='c-space my-20'>
        <h3 className='head-text'>
            Hear from My Clients
        </h3>
       <div className='client-container'>
  {clientReviews.map(({ id, name, position, img, review }) => (
    <div className='client-review' key={id}>
      <div>
        <p className='text-white font-light'>{review}</p>

        <div className='client-content'>
          <div className='flex gap-3 items-center mt-4'>
            <img src={img} alt={name} className='w-12 h-12 rounded-full object-cover' />
            <div className='flex flex-col'>
              <h4 className='text-white font-semibold'>{name}</h4>
              <p className='text-sm text-gray-400'>{position}</p>
            </div>
          </div>
          <div className='flex self-end items-center gap-2'>
            {
                Array.from({length:5}).map((_, index) => (
                    <img key={index} src='/assets/star.png' alt='Five Stars' className='w-5 h-5'/>
                ))
            } </div>
        </div>
      </div>
    </div>
  ))}
       </div>

    </section>
)
}

export default Clients