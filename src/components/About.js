import React from 'react'

function About(props) {
    
    return (
        <>
            <section className='about'  style={{color: props.mode==='dark'?'white':'#042743'}}>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-sm-12">
                        <h2>About Company Page</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className="btn btn-default btn-lg" style={{color: props.mode==='#000'?'white':'#000'}}>Get in Touch</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
