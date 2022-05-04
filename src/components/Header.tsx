import React from 'react'

interface HeaderProps {
  text: string
}

function Header({ text }: HeaderProps): JSX.Element {
  return (
    <div className='header'>{text}</div>
  )
}

export default Header