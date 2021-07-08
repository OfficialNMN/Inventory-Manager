import React from 'react'

export default function Footer(props) {
    let footerStyle={
        position:'relative',
        top:"40vh",
        width:"100%"
    }
    return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>
            <p className='text-center'>
            Copyright &copy; WhatToDo
            </p>
        </footer>
    )
}


