import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle';

export default function Navbar(){
    return (
        <div>
            <nav class="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div class="container-fluid">
                    <a class="navbar-brand" href="Home">
                        The Menu
                    </a>
                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="Home">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Home">Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}