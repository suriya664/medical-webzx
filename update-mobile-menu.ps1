# PowerShell script to update all HTML files with mobile menu
$mobileMenuPanel = @"
        
        <!-- Mobile Menu Panel -->
        <div class="mobile-menu-panel">
            <ul class="mobile-menu-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button">Home</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="index.html">Home</a></li>
                        <li><a class="dropdown-item" href="index-2.html">Home 2</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button">About</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="about.html">About Us</a></li>
                        <li><a class="dropdown-item" href="testimonials.html">Testimonials</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button">Departments</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="departments.html">All Departments</a></li>
                        <li><a class="dropdown-item" href="department-details.html">Cardiology</a></li>
                        <li><a class="dropdown-item" href="neurology-details.html">Neurology</a></li>
                        <li><a class="dropdown-item" href="pediatrics-details.html">Pediatrics</a></li>
                        <li><a class="dropdown-item" href="orthopedics-details.html">Orthopedics</a></li>
                        <li><a class="dropdown-item" href="dermatology-details.html">Dermatology</a></li>
                        <li><a class="dropdown-item" href="emergency-details.html">Emergency</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button">Doctors</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="doctors.html">All Doctors</a></li>
                        <li><a class="dropdown-item" href="doctor-profile-john-smith.html">Dr. John Smith</a></li>
                        <li><a class="dropdown-item" href="doctor-profile-sarah-johnson.html">Dr. Sarah Johnson</a></li>
                        <li><a class="dropdown-item" href="doctor-profile-michael-brown.html">Dr. Michael Brown</a></li>
                        <li><a class="dropdown-item" href="doctor-profile-emily-davis.html">Dr. Emily Davis</a></li>
                        <li><a class="dropdown-item" href="doctor-profile-robert-wilson.html">Dr. Robert Wilson</a></li>
                        <li><a class="dropdown-item" href="doctor-profile-lisa-anderson.html">Dr. Lisa Anderson</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button">Services</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="services.html">All Services</a></li>
                        <li><a class="dropdown-item" href="service-details.html?service=cardiac-care">Cardiac Care</a></li>
                        <li><a class="dropdown-item" href="service-details.html?service=neurological-services">Neurological Services</a></li>
                        <li><a class="dropdown-item" href="service-details.html?service=pediatric-care">Pediatric Care</a></li>
                        <li><a class="dropdown-item" href="service-details.html?service=orthopedic-services">Orthopedic Services</a></li>
                        <li><a class="dropdown-item" href="service-details.html?service=dermatology">Dermatology</a></li>
                        <li><a class="dropdown-item" href="service-details.html?service=emergency-care">Emergency Care</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button">Appointments</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="appointments.html">Book Appointment</a></li>
                        <li><a class="dropdown-item" href="appointments.html">View Appointments</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button">Gallery</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="gallery.html">Photo Gallery</a></li>
                        <li><a class="dropdown-item" href="gallery.html">Video Gallery</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
            <div class="mobile-menu-dark-toggle">
                <button id="darkModeToggleMobile" class="dark-mode-toggle" aria-label="Toggle dark mode">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
            <div class="mobile-menu-auth">
                <a class="btn btn-outline-primary" href="login.html">Login</a>
                <a class="btn btn-primary" href="register.html">Register</a>
            </div>
        </div>
"@

$files = @('appointments.html', 'contact.html', '404.html', 'faq.html', 'testimonials.html', 'gallery.html', 'view-appointments.html', 'doctors.html', 'doctor-profile.html', 'doctor-profile-john-smith.html', 'doctor-profile-sarah-johnson.html', 'doctor-profile-michael-brown.html', 'doctor-profile-emily-davis.html', 'doctor-profile-robert-wilson.html', 'doctor-profile-lisa-anderson.html', 'department-details.html', 'neurology-details.html', 'pediatrics-details.html', 'orthopedics-details.html', 'dermatology-details.html', 'emergency-details.html', 'index-2.html')

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Replace navbar-toggler
        $content = $content -replace '<button class="navbar-toggler"[^>]*>.*?</button>', '<button class="mobile-menu-toggle" type="button" aria-label="Toggle mobile menu">' + "`n                    <span></span>`n                    <span></span>`n                    <span></span>`n                </button>"
        
        # Add mobile menu panel before </header>
        if ($content -notmatch 'mobile-menu-panel') {
            $content = $content -replace '(</nav>\s*</header>)', $mobileMenuPanel + "`n    </header>"
        }
        
        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "Updated $file"
    }
}

Write-Host "Done!"

