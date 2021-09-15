import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footout'>
            <footer className='container'>
                <p className="float-right"><a href='/'>Back to Top</a></p>
                <p>&copy; 2020-2021 Componey, Inc. &middot;<a href='/'>Privacy</a>&middot;<a href='/'>Terms</a></p>
            </footer>
        </div>
    )
}

export default Footer
