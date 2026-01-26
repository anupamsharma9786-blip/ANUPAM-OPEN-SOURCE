import React from 'react'
import './dock.scss'

const Dock = () => {
  return (
    <footer className='dock'>
        <div className="icon github"><img src="/Doc-icons/github-fill.svg" alt="" /></div>
        <div className="icon calendar"><img src="/Doc-icons/calendar-line.svg" alt="" /></div>
        <div className="icon file"><img src="/Doc-icons/file-pdf-line.svg" alt="" /></div>
        <div className="icon links"><img src="/Doc-icons/links-line.svg" alt="" /></div>
        <div className="icon mail"><img src="/Doc-icons/mail-line.svg" alt="" /></div>
        <div className="icon spotify"><img src="/Doc-icons/spotify-fill.svg" alt="" /></div>
        <div className="icon notes"><img src="/Doc-icons/sticky-note-line.svg" alt="" /></div>
        <div className="icon terminal"><img src="/Doc-icons/terminal-box-line.svg" alt="" /></div>

    </footer>
  )
}

export default Dock
