const SideMenu = () => {
    return (
        <div className="flex flex-col">
            <ul className='flex flex-col w-[88px] bg-[#333]'>
                <li className="bg-[#e60012] w-[88px] border-0 border-solid border-r border-r-[#bf0010] hover:bg-[#d10000] hover:cursor-pointer transition duration-500">
                    <svg className="w-2 h-2 relative left-[80px]" fill='#6f0009' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xmlSpace="preserve">
                        <polygon points="0 0 48 0 48 48"></polygon>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.9em" width="1.9em" viewBox="0 0 576 512" fill="white" className="mx-7 mt-3">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                    <p className="text-white text-[12px] text-center mt-1 mb-4">Jeux</p>
                </li>
                <li className="bg-[#e60012] w-[88px] border border-solid border-[#bf0010] hover:bg-[#d10000] hover:cursor-pointer transition duration-500">
                    <svg className="w-2 h-2 relative left-[79px]" fill='#6f0009' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xmlSpace="preserve">
                        <polygon points="0 0 48 0 48 48"></polygon>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" width="2em" viewBox="0 0 30 30" fill="white" className="mx-7 mt-3">
                        <path d="M28.235 20.294h-7.941v7.941A1.77 1.77 0 0 1 18.529 30h-7.058a1.77 1.77 0 0 1-1.765-1.765v-7.941H1.765A1.77 1.77 0 0 1 0 18.529v-7.058a1.77 1.77 0 0 1 1.765-1.765h7.941V1.765A1.77 1.77 0 0 1 11.471 0h7.059a1.77 1.77 0 0 1 1.765 1.765v7.941h7.941A1.77 1.77 0 0 1 30 11.471v7.059a1.77 1.77 0 0 1-1.765 1.764zM7.059 14.118h-3.53a.882.882 0 0 0 0 1.765h3.53a.882.882 0 0 0 0-1.765zm8.823-10.589a.882.882 0 1 0-1.765 0v3.53a.882.882 0 1 0 1.765 0zm0 19.412a.882.882 0 0 0-1.765 0v3.529a.882.882 0 1 0 1.765 0zm10.588-8.824h-3.529a.882.882 0 1 0 0 1.765h3.529a.882.882 0 0 0 0-1.765z">
                        </path>
                    </svg>
                    <p className="text-white text-[12px] text-center mt-1 mb-4">Hardware</p>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default SideMenu