import React from 'react'
import Home from '../assets/Home.jpg'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg')] before:bg-cover before:bg-center before:opacity-90 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-normal px-12 py-4 bg-[#f8fafc] rounded-lg mr-5 text-black  hover:ring-4 ring-black cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    
        <div className={style.wrapper}>
          <div className={style.container}>
            <div className={style.contentWrapper}>
              <div className={style.copyContainer}>
                <div className={style.title}>
                  Discover Web3
                </div>
                <div className={style.description}>Our world</div>
                <div className={style.ctaContainer}>
                  <button className={style.accentedButton}>Explore</button>
                </div>
                </div>
                <div className={style.cardContainer}>
                    <img className="rounded-t-lg" src='https://images.unsplash.com/photo-1618331833071-ce81bd50d300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8&w=1000&q=80' height={10} width={300} />
                    <div className={style.infoContainer}>
                      <img className="h-[2.25rem] rounded-full" src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' />
                      <div className={style.author}>
                        <div className={style.name}>Deval</div>
                        <a className="text-[#1868b7]"
                  href="https://images.unsplash.com/photo-1618331833071-ce81bd50d300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8&w=1000&q=80"
                >Hola</a>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    
  )
}

export default Hero