// Service Details Dynamic Content
(function() {
    'use strict';
    
    // Service data
    const services = {
        'cardiac-care': {
            title: 'Cardiac Care Services',
            description: 'Comprehensive heart health services for all your cardiovascular needs',
            overview: 'Our Cardiac Care Services provide comprehensive diagnosis, treatment, and management of all types of cardiovascular conditions. We utilize state-of-the-art technology and evidence-based practices to ensure the best outcomes for our patients.',
            overview2: 'From routine heart health check-ups to complex cardiac procedures, our team of experienced cardiologists is dedicated to providing personalized care tailored to each patient\'s unique needs.',
            services: [
                {
                    icon: 'fas fa-heartbeat',
                    title: 'Diagnostic Tests',
                    description: 'ECG, stress tests, echocardiography, and advanced cardiac imaging.'
                },
                {
                    icon: 'fas fa-user-md',
                    title: 'Treatment Plans',
                    description: 'Personalized treatment plans for various cardiac conditions.'
                },
                {
                    icon: 'fas fa-procedures',
                    title: 'Surgical Procedures',
                    description: 'Advanced cardiac surgery and minimally invasive procedures.'
                }
            ],
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
        },
        'neurological-services': {
            title: 'Neurological Services',
            description: 'Advanced diagnosis and treatment for brain and nervous system disorders',
            overview: 'Our Neurological Services provide comprehensive diagnosis and treatment for disorders affecting the brain, spinal cord, and nervous system. We utilize cutting-edge technology including advanced neuroimaging, EEG monitoring, and neurophysiological testing.',
            overview2: 'Our team of experienced neurologists is dedicated to providing personalized treatment plans for conditions such as stroke, epilepsy, Parkinson\'s disease, multiple sclerosis, and other neurological disorders.',
            services: [
                {
                    icon: 'fas fa-brain',
                    title: 'Neurological Testing',
                    description: 'Advanced diagnostic tests including EEG, MRI, CT scans, and neurological examinations.'
                },
                {
                    icon: 'fas fa-user-md',
                    title: 'Stroke Care',
                    description: 'Comprehensive stroke prevention, diagnosis, and rehabilitation services.'
                },
                {
                    icon: 'fas fa-procedures',
                    title: 'Epilepsy Management',
                    description: 'Specialized treatment and management for epilepsy and seizure disorders.'
                }
            ],
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
        },
        'pediatric-care': {
            title: 'Pediatric Care Services',
            description: 'Specialized medical care for infants, children, and adolescents',
            overview: 'Our Pediatric Care Services provide comprehensive medical care for children from infancy through adolescence. Our pediatric team is dedicated to ensuring the health and well-being of your child at every stage of development.',
            overview2: 'We offer routine check-ups, vaccinations, treatment for childhood illnesses, and specialized care for developmental and chronic conditions. Our child-friendly environment and compassionate approach make healthcare visits comfortable for both children and parents.',
            services: [
                {
                    icon: 'fas fa-baby',
                    title: 'Well-Child Visits',
                    description: 'Regular check-ups, growth monitoring, and developmental assessments.'
                },
                {
                    icon: 'fas fa-syringe',
                    title: 'Vaccinations',
                    description: 'Complete immunization schedules to protect your child\'s health.'
                },
                {
                    icon: 'fas fa-stethoscope',
                    title: 'Childhood Illness Treatment',
                    description: 'Expert care for common and complex childhood medical conditions.'
                }
            ],
            image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop'
        },
        'orthopedic-services': {
            title: 'Orthopedic Services',
            description: 'Expert care for bones, joints, and muscles with modern treatment options',
            overview: 'Our Orthopedic Services provide comprehensive treatment for bone, joint, and muscle-related conditions. Our orthopedic specialists offer both surgical and non-surgical treatments tailored to each patient\'s needs.',
            overview2: 'From fractures and sports injuries to joint replacements and spine conditions, we utilize the latest medical technology and surgical techniques to ensure optimal recovery and improved quality of life.',
            services: [
                {
                    icon: 'fas fa-bone',
                    title: 'Fracture Care',
                    description: 'Expert treatment for all types of bone fractures and injuries.'
                },
                {
                    icon: 'fas fa-wheelchair',
                    title: 'Joint Replacement',
                    description: 'Advanced joint replacement surgery for hips, knees, and shoulders.'
                },
                {
                    icon: 'fas fa-running',
                    title: 'Sports Medicine',
                    description: 'Specialized care for sports-related injuries and rehabilitation.'
                }
            ],
            image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop'
        },
        'dermatology': {
            title: 'Dermatology Services',
            description: 'Comprehensive skin care and treatment for various dermatological conditions',
            overview: 'Our Dermatology Services provide comprehensive skin care for various dermatological conditions. We treat everything from common skin issues to complex dermatological diseases.',
            overview2: 'Our dermatologists offer medical and cosmetic dermatology services, including treatment for acne, eczema, psoriasis, skin cancer, and advanced procedures like laser treatments and anti-aging therapies.',
            services: [
                {
                    icon: 'fas fa-hand-sparkles',
                    title: 'Skin Disease Treatment',
                    description: 'Expert diagnosis and treatment for various skin conditions.'
                },
                {
                    icon: 'fas fa-user-md',
                    title: 'Skin Cancer Screening',
                    description: 'Comprehensive skin cancer detection and treatment services.'
                },
                {
                    icon: 'fas fa-spa',
                    title: 'Cosmetic Dermatology',
                    description: 'Laser treatments, anti-aging procedures, and cosmetic enhancements.'
                }
            ],
            image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop'
        },
        'emergency-care': {
            title: 'Emergency Care Services',
            description: '24/7 emergency medical services with rapid response and expert care',
            overview: 'Our Emergency Care Services provide round-the-clock emergency medical care with rapid response and expert treatment. Our emergency department is fully equipped to handle all types of medical emergencies.',
            overview2: 'From trauma and cardiac emergencies to acute illnesses and injuries, our emergency team is trained to provide immediate life-saving interventions and comprehensive emergency care.',
            services: [
                {
                    icon: 'fas fa-ambulance',
                    title: 'Trauma Care',
                    description: 'Immediate treatment for traumatic injuries and accidents.'
                },
                {
                    icon: 'fas fa-heartbeat',
                    title: 'Cardiac Emergencies',
                    description: 'Rapid response and treatment for heart-related emergencies.'
                },
                {
                    icon: 'fas fa-clock',
                    title: '24/7 Availability',
                    description: 'Round-the-clock emergency services with no waiting for critical cases.'
                }
            ],
            image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop'
        }
    };
    
    // Service key mapping (handle aliases)
    const serviceKeyMap = {
        'cardiology': 'cardiac-care',
        'cardiac-care': 'cardiac-care',
        'neurological-services': 'neurological-services',
        'neurology': 'neurological-services',
        'pediatric-care': 'pediatric-care',
        'pediatrics': 'pediatric-care',
        'orthopedic-services': 'orthopedic-services',
        'orthopedics': 'orthopedic-services',
        'dermatology': 'dermatology',
        'emergency-care': 'emergency-care',
        'emergency': 'emergency-care'
    };
    
    // Get service from URL parameter
    function getServiceFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const service = urlParams.get('service');
        const mappedKey = serviceKeyMap[service] || 'cardiac-care'; // Default to cardiac-care
        return mappedKey;
    }
    
    // Update page content
    function updateServiceContent(serviceKey) {
        const service = services[serviceKey];
        if (!service) return;
        
        // Update title and description
        const titleElement = document.querySelector('.section-title h1');
        const descElement = document.querySelector('.section-title p');
        if (titleElement) titleElement.textContent = service.title;
        if (descElement) descElement.textContent = service.description;
        
        // Update overview
        const overviewElements = document.querySelectorAll('.row.mb-5 .col-md-6 p');
        if (overviewElements.length >= 2) {
            overviewElements[0].textContent = service.overview;
            overviewElements[1].textContent = service.overview2;
        }
        
        // Update image
        const imgElement = document.querySelector('.row.mb-5 img');
        if (imgElement) {
            imgElement.src = service.image;
            imgElement.alt = service.title;
        }
        
        // Update services
        const serviceCards = document.querySelectorAll('.row.g-4 .cta-card');
        service.services.forEach((item, index) => {
            if (serviceCards[index]) {
                const icon = serviceCards[index].querySelector('i');
                const title = serviceCards[index].querySelector('h3');
                const desc = serviceCards[index].querySelector('p');
                
                if (icon) {
                    icon.className = item.icon;
                }
                if (title) title.textContent = item.title;
                if (desc) desc.textContent = item.description;
            }
        });
    }
    
    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        const serviceKey = getServiceFromURL();
        updateServiceContent(serviceKey);
    });
})();

