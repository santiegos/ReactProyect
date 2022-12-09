import React from 'react';

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    
                        <button className='btn btn-primary'><i className="fas fa-home fa-lg"></i></button>
                    
                </li>
                <li className="nav-item">
                
                        <button className='btn btn-primary'><i className="fas fa-laptop fa-lg"></i></button>
                    
                </li>
                <li className="nav-item">
                    
                        <button className='btn btn-primary'><i className="fas fa-mobile fa-lg"></i></button>
                   
                </li>
                <li className="nav-item">
                    
                        <button className='btn btn-primary'><i className="fas fa-tv fa-lg"></i></button>
                   
                </li>
                <li className="nav-item">
                    
                        <button className='btn btn-primary'><i className="fas fa-headphones fa-lg"></i></button>
                    
                </li>
            </ul>
    );
}

export default Categorias;
