import React from 'react';
import foto from '../assets/images/jordan-walke.png';
import heidy from '../assets/images/female-avatar.jpg';
import nohe from '../assets/images/nohe.webp';
import oscar from '../assets/images/118-1188761_avatar-png.png';

function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						{/*<!-- Nav Item - Alerts -->*/}
						

						{/*<!-- Nav Item - Messages -->*/}
						

						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Heidy Díaz</span>
								<img className="img-profile rounded-circle" src={heidy} alt="Heidy Díaz - Creador de React" width="60"/>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Nohelia Rodríquez</span>
								<img className="img-profile rounded-circle" src={nohe} alt=">Nohelia Rodríquez - Creador de React" width="60"/>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Oscar Chiaradía</span>
								<img className="img-profile rounded-circle" src={oscar} alt="Oscar Chiaradía - Creador de React" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;