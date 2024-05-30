import notFoundImg from '@/assets/Tumbeasts_sign1.png'
import { buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="grid place-items-center h-screen w-screen">
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-7xl'>404</h1>
                <h1 className='text-4xl'>Page Not Found</h1>
                <img className='h-96' src={notFoundImg} alt="Not Found" />
                <Link to={'/'} className={buttonVariants({})}>back to home</Link>
            </div>
        </div>
    )
}

export default NotFound