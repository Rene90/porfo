import Logo from '../assets/rene.png'
function Header(){
    return(
        <header className='py-8'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href='#'>
                        <img src={Logo} alt="imagen"></img>

                    </a>
                    <button className='btn btn-sm'>Trabajemos juntos!</button>

                </div>
            </div>

        </header>
    )

}

export default Header