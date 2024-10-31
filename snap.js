

function onShowMobileMenu(){
    const menuSidebar = document.querySelector('.mobile-view-menu-container');
    menuSidebar.style.right = '0px';
}

function onCloseMobileMenu(){
    const menuSidebar = document.querySelector('.mobile-view-menu-container');
    menuSidebar.style.right = '-100%';

    const featuresDownArrow = document.querySelector('.feature-arrow-down');
    const featuresUpArrow = document.querySelector('.feature-arrow-up');
    const features = document.querySelector('.features-menu-list');

    const companyDownArrow = document.querySelector('.company-arrow-down');
    const companyUpArrow = document.querySelector('.company-arrow-up');
    const company = document.querySelector('.company-menu-list');

    featuresDownArrow.style.display = 'inline-block';
    featuresUpArrow.style.display = 'none'
    features.style.display = 'none'

    companyDownArrow.style.display = 'inline-block';
    companyUpArrow.style.display = 'none'
    company.style.display = 'none'
}

function onShowMenuFeatures(){
    const features = document.querySelector('.features-menu-list');
    const featuresDownArrow = document.querySelector('.feature-arrow-down');
    const featuresUpArrow = document.querySelector('.feature-arrow-up');

    
    if (featuresDownArrow.style.display === 'inline-block'){
        featuresUpArrow.style.display = 'inline-block';
        featuresDownArrow.style.display = 'none';
        features.style.display = 'inline-block'
    }else{
        featuresDownArrow.style.display = 'inline-block';
        featuresUpArrow.style.display = 'none'
        features.style.display = 'none'
    }
}

function onShowMenuCompany(){
    const company = document.querySelector('.company-menu-list');
    const companyDownArrow = document.querySelector('.company-arrow-down');
    const companyUpArrow = document.querySelector('.company-arrow-up');

    
    if (companyDownArrow.style.display === 'inline-block'){
        companyUpArrow.style.display = 'inline-block';
        companyDownArrow.style.display = 'none';
        company.style.display = 'inline-block'
    }else{
        companyDownArrow.style.display = 'inline-block';
        companyUpArrow.style.display = 'none'
        company.style.display = 'none'
    }
}

function onShowDesktopFeatureMenu(){
    const desktopFeaturesMenu = document.getElementById('desktopFeaturesMenu');
    const desktopArrowDown = document.getElementById('desktopFeaturesArrowDown');
    const desktopArrowUp = document.getElementById('desktopFeaturesArrowUp');
    
    desktopFeaturesMenu.classList.toggle('showDesktopFeatures')
    desktopArrowDown.classList.toggle('desktop-features-arrow-down')
    desktopArrowUp.classList.toggle('desktop-features-arrow-up')


}

function onShowCompanyMenu(){
    const desktopComapnyMenu = document.getElementById('showCompanyMenu');
    const desktopArrowDown = document.getElementById('desktopCompanyArrowDown');
    const desktopArrowUp = document.getElementById('desktopCompanyArrowUp');

    desktopComapnyMenu.classList.toggle('showDesktopCompany');
    desktopArrowDown.classList.toggle('desktop-company-arrow-down')
    desktopArrowUp.classList.toggle('desktop-company-arrow-up');
}