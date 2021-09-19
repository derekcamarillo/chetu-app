import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footout'>
            <footer className='container'>
                <p className="float-right"><a href='/' className='a'>Back to Top</a></p>
                <p>&copy; 2020-2021 Componey, Inc. &middot;<a href='/' className='a'>Privacy</a>&middot;<a href='/' className='a'>Terms</a></p>
            </footer>
        </div>
    )
}

export default Footer
