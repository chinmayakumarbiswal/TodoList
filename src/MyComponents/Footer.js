import React from 'react'

export const Footer = () => {
    let footerStyle={
        position: "fixed",
        bottom: "0px",
        width: "100%"
    }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
        <p className="text-center">
            Design and Devloped by <a href='https://chinmayakumarbiswal.in'>chinmayakumarbiswal</a>
        </p>
    </footer>
  )
}
