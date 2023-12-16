import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className='flex flex-row justify-between bg-[#e60012] border-0 border-b-[1px] border-solid border-b-[#bf0010] text-white text-[20px] leading-5 pl-6 pr-4 py-6 h-[70px]'>
            <Link to={''}><svg xmlns="http://www.w3.org/2000/svg" height="1.2em" width="4.8em" viewBox="0 0 128 32" fill='white'>
                <path d="M12.7,8.4h4.6l6.4,10.5V8.4h4.6v15.1h-4.6L17.3,13v10.5h-4.6L12.7,8.4L12.7,8.4L12.7,8.4zM53.3,10h4.5v2h2.4v1.5h-2.4v10h-4.5v-10h-2.4V12h2.4L53.3,10L53.3,10L53.3,10z M30.9,13.5h4.5v10h-4.5L30.9,13.5L30.9,13.5L30.9,13.5z M30.8,8.4h4.5v3.1h-4.5L30.8,8.4L30.8,8.4L30.8,8.4z M110.9,18.4c0,0,0,1.5,0,2.1c0,1.6-0.9,2.3-1.8,2.3s-1.8-0.7-1.8-2.3c0-0.6,0-2.2,0-2.2s0-1.5,0-2.1c0-1.6,0.9-2.2,1.8-2.2s1.8,0.7,1.8,2.2C110.9,16.9,110.9,18,110.9,18.4L110.9,18.4L110.9,18.4L110.9,18.4z M109.1,12.8c-3.6,0-6.5,2.5-6.5,5.6s2.9,5.6,6.5,5.6s6.5-2.5,6.5-5.6S112.7,12.8,109.1,12.8L109.1,12.8zM96.7,8.4h4.4v15.1h-4.4c0,0,0-0.5,0-0.6c-2.4,1.6-5.7,0.9-7.3-1.5c-0.6-0.9-0.9-2-0.9-3.1c0.1-3,2.6-5.3,5.5-5.3c0,0,0.1,0,0.1,0c0.9,0.1,1.8,0.4,2.5,0.9L96.7,8.4L96.7,8.4L96.7,8.4z M96.7,18.4v-1.8c0.1-1-0.6-1.8-1.6-1.9c-1-0.1-1.8,0.6-1.9,1.6c0,0.1,0,0.2,0,0.4c0,0.5,0,1.8,0,1.8s0,1.2,0,1.8c-0.1,1,0.6,1.8,1.6,1.9c1,0.1,1.8-0.6,1.9-1.6c0-0.1,0-0.3,0-0.4C96.7,19.6,96.7,18.4,96.7,18.4L96.7,18.4z M45.8,13c2.7-0.1,4.9,2,5,4.7c0,0.1,0,0.2,0,0.4c0,0.7,0,5.5,0,5.5h-4.4v-6.6c-0.1-1.1-1-1.9-2-1.8c-1.1,0-2,0.8-2.1,1.8c0,0.4,0,6.6,0,6.6h-4.4v-10h4.4c0,0,0,0.8,0,1.1C43.2,13.6,44.4,13.1,45.8,13L45.8,13L45.8,13z M82.1,13c2.7-0.1,4.9,2,5,4.7c0,0.1,0,0.2,0,0.4c0,0.7,0,5.5,0,5.5h-4.4v-6.6c-0.1-1.1-1-1.9-2-1.8c-1.1,0-2,0.8-2.1,1.8c0,0.4,0,6.6,0,6.6h-4.4v-10h4.4c0,0,0,0.8,0,1.1C79.4,13.6,80.7,13.1,82.1,13L82.1,13L82.1,13z M64.3,17c-0.1-0.7,0-1.3,0.3-2c0.3-0.6,0.9-0.9,1.6-0.9l0,0c0.6,0,1.2,0.4,1.6,0.9c0.3,0.6,0.4,1.3,0.3,2L64.3,17L64.3,17z M68,20c0,0,0,0,0,0.6c0,1.8-1.2,2.2-1.8,2.2c-1.1,0-1.9-0.9-1.9-2c0-0.1,0-0.2,0-0.3c0-0.5,0-2.1,0-2.1h8.4c0-3.1-3-5.7-6.6-5.7s-6.6,2.5-6.6,5.6s2.9,5.6,6.6,5.6c2.8,0.1,5.3-1.5,6.3-4.1H68L68,20z M116.3,9.6c0.7,0,1.1,0.2,1.1,0.7c0,0.3-0.2,0.6-0.6,0.7l0.6,1.1h-0.7l-0.5-1.1h-0.3v1.1h-0.6V9.6L116.3,9.6L116.3,9.6z M116.3,8.6c-1.3,0-2.3,1-2.4,2.3c0,1.3,1,2.3,2.3,2.4c1.3,0,2.3-1,2.4-2.3c0,0,0,0,0,0C118.5,9.6,117.5,8.6,116.3,8.6C116.3,8.6,116.3,8.6,116.3,8.6L116.3,8.6z M118.1,10.9c0,1-0.9,1.8-1.9,1.8s-1.8-0.9-1.8-1.9c0-1,0.8-1.8,1.8-1.8C117.3,9,118.1,9.9,118.1,10.9C118.1,10.9,118.1,10.9,118.1,10.9L118.1,10.9z M115.9,10.7h0.3c0.4,0,0.5-0.1,0.5-0.4s-0.2-0.4-0.6-0.4h-0.3L115.9,10.7L115.9,10.7L115.9,10.7z M16.7,32C6.7,32,0,24.8,0,16S6.7,0,16.7,0h94.6c10,0,16.7,7.3,16.7,16s-6.7,16-16.7,16H16.7z M16.8,3.9C8.8,4,3.9,9.3,3.9,16s4.8,12.1,12.8,12.1h94.5c8,0,12.8-5.4,12.8-12.1S119.2,4,111.2,3.9H16.8z"></path>
            </svg></Link>
            <nav className='flex flex-row relative top-[-10px]'>
                <Link to={'/search'}>
                    <div className='flex flex-col items-center mx-3 hover:underline'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" width="1.4em" viewBox="0 0 512 512" fill='white'>
                            <path d="M302.29-.49c-116,.31-209.79,94.6-209.48,210.6a210.06,210.06,0,0,0,45.81,130.38L7.17,471.57a23.46,23.46,0,0,0,16.58,39.92A23.13,23.13,0,0,0,40,504.83L171.49,373.77c90.71,72.29,222.85,57.37,295.14-33.34S524,117.59,433.3,45.3A210,210,0,0,0,302.29-.49Zm0,376.91a166.84,166.84,0,1,1,166.7-167v.33A166.92,166.92,0,0,1,302.29,376.42Z"></path>
                        </svg>
                        <p className='text-[10px]'>Recherche</p>
                    </div>
                </Link>
                <Link to={'/wishes'}>
                    <div className='flex flex-col items-center mx-3 hover:underline'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" width="1.4em" viewBox="0 0 512 512" fill='white'>
                            <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                        </svg>
                        <p className='text-[10px]'>Liste de so...</p>
                    </div>
                </Link>
                <Link to={'/account'}>
                    <div className='flex flex-col items-center mx-3 hover:underline'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" width="1.4em" viewBox="0 0 448 512" fill='white'>
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                        </svg>
                        <p className='text-[10px]'>Connexion</p>
                    </div>
                </Link>
            </nav>
        </header>
    )
}

export default Header