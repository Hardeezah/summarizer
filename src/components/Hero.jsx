import logo from '../assets/logo copy.svg'

const Hero = () => {
  return (
    //<div></div>
    <header className="w-full flex justify-center
    items-center flex-col ">
        <nav className="flex justify-between pt-3
        items-center flex-row w-full mb-10">
            <div className='flex w-28 object-contain' >
                <img src={logo} alt="" 
                className="w-8  object-contain"/>
                <h1 className='ml-2 text-2xl font-bold '>Sumr</h1>
            </div>
            
            
            <button type='button' 
            onClick={() => window.open('./')}
            className="black_btn"
            >
                Github
            </button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md-hidden'/> <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Summarize any article with the power of OpenAI GPT-4. <br className='max-md-hidden'/>
        </h2>
    </header>
  )
}

export default Hero
