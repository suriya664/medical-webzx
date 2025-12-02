# PowerShell script to update navigation in all HTML files
$files = @(
    'service-details.html',
    'departments.html',
    'department-details.html',
    'neurology-details.html',
    'pediatrics-details.html',
    'orthopedics-details.html',
    'dermatology-details.html',
    'emergency-details.html',
    'doctors.html',
    'doctor-profile.html',
    'doctor-profile-john-smith.html',
    'doctor-profile-sarah-johnson.html',
    'doctor-profile-michael-brown.html',
    'doctor-profile-emily-davis.html',
    'doctor-profile-robert-wilson.html',
    'doctor-profile-lisa-anderson.html',
    'appointments.html',
    'view-appointments.html',
    'gallery.html',
    'testimonials.html',
    'faq.html',
    'contact.html',
    '404.html',
    'index-2.html',
    'login.html',
    'register.html'
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Updating $file..."
        $content = Get-Content $file -Raw
        
        # Update desktop navigation
        $content = $content -replace 'href="#" id="dropdownHome"', 'href="index.html" id="dropdownHome"'
        $content = $content -replace 'href="#" id="dropdown1"', 'href="about.html" id="dropdown1"'
        $content = $content -replace 'href="#" id="dropdown2"', 'href="departments.html" id="dropdown2"'
        $content = $content -replace 'href="#" id="dropdown3"', 'href="doctors.html" id="dropdown3"'
        $content = $content -replace 'href="#" id="dropdown4"', 'href="services.html" id="dropdown4"'
        
        # Remove Appointments and Gallery dropdowns
        $appointmentsPattern = '<li class="nav-item dropdown">\s*<a class="nav-link dropdown-toggle" href="#" id="dropdown5" role="button" data-bs-toggle="dropdown">Appointments</a>\s*<ul class="dropdown-menu">\s*<li><a class="dropdown-item" href="appointments\.html">Book Appointment</a></li>\s*<li><a class="dropdown-item" href="appointments\.html">View Appointments</a></li>\s*</ul>\s*</li>'
        $content = $content -replace $appointmentsPattern, '<li class="nav-item"><a class="nav-link" href="appointments.html">Appointments</a></li>'
        
        $galleryPattern = '<li class="nav-item dropdown">\s*<a class="nav-link dropdown-toggle" href="#" id="dropdown6" role="button" data-bs-toggle="dropdown">Gallery</a>\s*<ul class="dropdown-menu">\s*<li><a class="dropdown-item" href="gallery\.html">Photo Gallery</a></li>\s*<li><a class="dropdown-item" href="gallery\.html">Video Gallery</a></li>\s*</ul>\s*</li>'
        $content = $content -replace $galleryPattern, '<li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>'
        
        # Update mobile menu
        $content = $content -replace 'href="#" role="button">Home</a>', 'href="index.html" role="button">Home</a>'
        $content = $content -replace 'href="#" role="button">About</a>', 'href="about.html" role="button">About</a>'
        $content = $content -replace 'href="#" role="button">Departments</a>', 'href="departments.html" role="button">Departments</a>'
        $content = $content -replace 'href="#" role="button">Doctors</a>', 'href="doctors.html" role="button">Doctors</a>'
        $content = $content -replace 'href="#" role="button">Services</a>', 'href="services.html" role="button">Services</a>'
        
        # Remove mobile Appointments and Gallery dropdowns
        $mobileAppointmentsPattern = '<li class="nav-item dropdown">\s*<a class="nav-link dropdown-toggle" href="#" role="button">Appointments</a>\s*<ul class="dropdown-menu">\s*<li><a class="dropdown-item" href="appointments\.html">Book Appointment</a></li>\s*<li><a class="dropdown-item" href="appointments\.html">View Appointments</a></li>\s*</ul>\s*</li>'
        $content = $content -replace $mobileAppointmentsPattern, '<li class="nav-item"><a class="nav-link" href="appointments.html">Appointments</a></li>'
        
        $mobileGalleryPattern = '<li class="nav-item dropdown">\s*<a class="nav-link dropdown-toggle" href="#" role="button">Gallery</a>\s*<ul class="dropdown-menu">\s*<li><a class="dropdown-item" href="gallery\.html">Photo Gallery</a></li>\s*<li><a class="dropdown-item" href="gallery\.html">Video Gallery</a></li>\s*</ul>\s*</li>'
        $content = $content -replace $mobileGalleryPattern, '<li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>'
        
        Set-Content $file -Value $content -NoNewline
        Write-Host "Updated $file"
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "Done!"

