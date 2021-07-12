import { TwitterDark, TelegramannDark, TelegramDark } from './Socials'
import { useState } from 'react'

export default function Train() {
  const [hoverState, setHoverState] = useState({
    telegramDark: false,
    telegramannDark: false,
    twitterDark: false
  })

  function handleMouseOver(e) {
    const newState = Object.assign({}, hoverState)
    const closest = e.target.closest('.navIcon')
    if (closest) {
      newState[closest.id] = true
      setHoverState(newState)
    }
  }

  function handleMouseLeave(e) {
    const newState = Object.assign({}, hoverState)
    const closest = e.target.closest('.navIcon')
    if (closest) {
      newState[closest.id] = false
      setHoverState(newState)
    }
  }
  return (
    <div id="footer" className="bg-laptop bg-cover bg-auto bg-left-top bg-no-repeat pt-10 pb-5">
      <div className="flex flex-col-reverse mx-auto lg:max-w-4xl lg:grid lg:grid-cols-3 lg:py-32 py-28 px-10 lg:items-start items-start">
        <div className="">
          <p className="font-gilroy w-64 font-semibold text-base text-gray-200 pb-4 lg:pb-3">
            If you have questions, please visit our telegram community.
          </p>
          <div className="flex flex-row gap-x-5">
            <TelegramDark
              hoverState={hoverState}
              handleMouseOver={handleMouseOver}
              handleMouseLeave={handleMouseLeave}></TelegramDark>
            <TelegramannDark
              hoverState={hoverState}
              handleMouseOver={handleMouseOver}
              handleMouseLeave={handleMouseLeave}></TelegramannDark>
          </div>
        </div>
        <div>
          <p className="font-gilroy font-semibold text-base text-gray-200 lg:pb-3 pb-4  w-48">
            Or follow our updates on Twitter
          </p>
          <div className="pb-10">
            <TwitterDark
              hoverState={hoverState}
              handleMouseOver={handleMouseOver}
              handleMouseLeave={handleMouseLeave}></TwitterDark>
          </div>
        </div>

        <div className="lg:max-w-lg max-w-md sm:text-5xl text-4xl pb-10 font-gilroy font-bold text-gray-200">
          Join Our Community
        </div>
      </div>
      <div className="max-w-4xl px-10 pb-4 mx-auto">
        <img className="w-48" alt="station logo" src="logo09.webp"></img>
      </div>
    </div>
  )
}
