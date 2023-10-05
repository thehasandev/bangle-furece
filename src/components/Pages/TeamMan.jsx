import { useLocation } from "react-router-dom"
import One from "../../assets/f.jpg"
import Container from '../Common/Container'


function TeamMan() {
    let location = useLocation()
    


  return (
    <section >
      <Container>
        <h2 className='font-pop font-bold text-5xl text-[#444444] text-center pt-[200px] pb-[150px]'>
{location.state.name}
        </h2>
        
        <div className='flex justify-center gap-10'>
            <div className='w-[400px] px-2'>
                <img src={location.state.imgUrl} alt="" />
                <h2 className='font-pop my-2 font-bold text-xl text-[#444444] text-center'>Hi i am {location.state.name}</h2>
                <p className='font-pop font-normal text-sm text-[#444444] text-center'> Generation Solution of Security Ltd.</p>

            </div>

            <div className='w-[750px]'>
                <p className='font-pop font-normal text-sm text-[#444444]'>
                  {location.state.des}
                </p>
            </div>
        </div>
      </Container>
        
    </section>
  )
}

export default TeamMan