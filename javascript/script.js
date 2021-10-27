const mainItem = [...document.querySelectorAll('.main__item')]
const topBlock = document.querySelectorAll('.top__block')
const followButton = [...document.querySelectorAll('.follow__button')]
const headerImg = document.querySelector('.header__img')
const headerAva = document.querySelector('.ava__text')
const lang = document.querySelectorAll('.lang-item')
const span = document.querySelector('.span-item')
const body = document.querySelector('body')
const langBlock = document.querySelector('.lang')
const navLink = document.querySelectorAll('.nav-link')
const navBtn = document.querySelector('.nav__button')
const footerLogo = document.querySelector('.footer__logo')
const leftTitle = document.querySelector('.left__title1')
const titleJs = [...document.querySelectorAll('.title__js')]
const titleClient = document.querySelector('.ava__title span')
const horward = [...document.querySelectorAll('.howard__title')]
const followTitle = [...document.querySelectorAll('.top__block-title')]
const creatorsBtn = document.querySelector('.creators__button')
const moreBtn = document.querySelector('.more__button')
const navLogo = document.querySelector('.nav__logo')
const auctionsTitle = [...document.querySelectorAll('.auctions__title')] 
const topTitle = document.querySelector('.top__title')
const connectBtn = document.querySelector('.connect__button') 
const headerLeft = document.querySelector('.header__left')
const bidTitle = document.querySelector('.bid__title2')
const priceTitle = [...document.querySelectorAll('.price__title')]
const bidTitle1 = document.querySelector('.bid__title1')
const timeTitle = document.querySelector('.time__title')
const number = [...document.querySelectorAll('.number')]
const timeBtn = document.querySelectorAll('.button__time')
const topText = [...document.querySelectorAll('.top__text')]
const followersTitle = [...document.querySelectorAll('.followers__title')]
const light = document.querySelector('.lightning')
const manu =document.querySelector('.manu__main')
const btnName = document.querySelector('.btn__name')
const btnTitle = document.querySelector('.btn-title')
const bar = document.querySelector('.menu__color')

mainItem.forEach((el) => {
    el.addEventListener('click', (e) => {
        
        let img = el.querySelector('img').getAttribute('src')
        headerImg.querySelector('img').setAttribute('src', img)
        
        let ava = el.querySelector('.ava-img').getAttribute('src')
        headerAva.setAttribute('src', ava)
        
        let title = el.querySelector('.title__js').innerHTML
        leftTitle.innerHTML = title
        
        let name = el.querySelector('.howard__title').innerHTML
        titleClient.innerHTML = name
        
        let bid = el.querySelector('.price__title').innerHTML
        bidTitle.innerHTML = bid
    })
})

topBlock.forEach((el) => {
    el.addEventListener('click', (e) => {
        let img = el.querySelector('img').getAttribute('src')
        headerImg.querySelector('img').setAttribute('src', img)

        let ava = el.querySelector('.ava-img').getAttribute('src')
        headerAva.setAttribute('src', ava)
        
        let nickname = el.querySelector('.top__block-title').innerHTML
        titleClient.innerHTML = nickname
    })
})

followButton.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (el.innerHTML === 'Follow') {
            el.innerHTML = 'Unfollow'
            el.classList.add('red')
        } else if (el.innerHTML === 'Unfollow') {
            el.innerHTML = 'Follow'
            el.classList.remove('red')
        }
    })
})



lang.forEach(function (el) {
    el.addEventListener('click', function (e) {
        if (el.innerHTML === '🌞') {
            span.style.left = '0'
            body.style.background = '#FFF'
            langBlock.style.background = 'rgba(0, 0, 0, 0.555)'
            navLink.forEach(function (e) {
                e.style.color = '#000'
            })
            
            moreBtn.style.color = '#000'
            moreBtn.style.border = 'border: solid 1px #8E8E93'
            creatorsBtn.style.color = '#000'
            creatorsBtn.style.border = 'border: solid 1px #8E8E93'
            navLogo.style.color = '#000'
            navBtn.style.background = '#FFF'
            auctionsTitle.forEach((ele) => {
                ele.style.color = '#000'
            })
            topTitle.style.color = '#000'
            connectBtn.style.background = 'rgba(0, 122, 255, 0.12)'
            headerLeft.style.background = '#FFF'
            mainItem.forEach((elem) => {
                elem.style.background = '#FFF'
            })
            topBlock.forEach((eleme) => {
                eleme.style.background = '#FFF'
            })
            number.forEach((elemen) => {
                elemen.style.color = '#000'
            })
            timeBtn.forEach((timer) => {
                timer.style.color = '#2C2C2E'
            })
            titleJs.forEach((js) => {
                js.style.color = '#000'
            })
            priceTitle.forEach((pr) => {
                pr.style.color = '#000'
            })
            followTitle.forEach((fl) => {
                fl.style.color = '#000'
            })
            topText.forEach((tp) => {
                tp.style.color = '#3C3C4399'
            })
            followersTitle.forEach((ft) => {
                ft.style.color = '#000'
            })
            horward.forEach((hw) => {
                hw.style.color = '#8E8E93'
            })
            leftTitle.style.color = '#000'
            titleClient.style.color = '#000'
            bidTitle1.style.color = '#000'
            bidTitle.style.color = '#000'
            timeTitle.style.color = '#000'
            light.style.color = '#000'
            btnTitle.style.color = '#000'
            bar.style.color = '#000'
            
        } else if (el.innerHTML === '🌑') {
            span.style.left = '50%'
            body.style.background = '#000'
            langBlock.style.background = '#FFF'
            navLink.forEach(function (e) {
                e.style.color = '#FFF'
            })
            moreBtn.style.color = '#FFF'
            moreBtn.style.border = 'border: solid 1px #FFF'
            creatorsBtn.style.color = '#FFF'
            creatorsBtn.style.border = 'border: solid 1px #FFF'
            navLogo.style.color = '#FFF'
            navBtn.style.background = '#2C2C2E'
            auctionsTitle.forEach((ele) => {
                ele.style.color = '#FFF'
            })
            topTitle.style.color = '#FFF'
            connectBtn.style.background = '#FFF'
            headerLeft.style.background = 'rgb(44, 44, 46)'
            mainItem.forEach((elem) => {
                elem.style.background = 'rgb(44, 44, 46)'
            })
            topBlock.forEach((eleme) => {
                eleme.style.background = 'rgb(44, 44, 46)'
            })
            number.forEach((elemen) => {
                elemen.style.color = '#FFF'
            })
            timeBtn.forEach((timer) => {
                timer.style.color = '#FFF'
            })
            titleJs.forEach((js) => {
                js.style.color = '#FFF'
            })
            priceTitle.forEach((pr) => {
                pr.style.color = '#FFF'
            })
            followTitle.forEach((fl) => {
                fl.style.color = '#FFF'
            })
            topText.forEach((tp) => {
                tp.style.color = '#FFF'
            })
            followersTitle.forEach((ft) => {
                ft.style.color = '#FFF'
            })
            horward.forEach((hw) => {
                hw.style.color = '#FFF'
            })
            leftTitle.style.color = '#FFF'
            titleClient.style.color = '#FFF'
            bidTitle1.style.color = '#FFF'
            bidTitle.style.color = '#FFF'
            timeTitle.style.color = '#FFF'
            light.style.color = '#FFF'
            btnTitle.style.color = '#FFF'
            bar.style.color = '#FFF'
        }
    })
});




creatorsBtn.addEventListener('click', () => {
    if (creatorsBtn.innerHTML === 'View All Creators') {
        creatorsBtn.innerHTML = 'close'
        manu.classList.add('active')
    } else if (creatorsBtn.innerHTML === 'close') {
        creatorsBtn.innerHTML = 'View All Creators'
        manu.classList.remove('active')
    } else if (creatorsBtn.innerHTML === 'Просмотреть всех авторов') {
        creatorsBtn.innerHTML = 'близко'
        manu.classList.add('active')
    } else if (creatorsBtn.innerHTML === 'близко') {
        creatorsBtn.innerHTML = 'Просмотреть всех авторов'
        manu.classList.remove('active')
    }
})


moreBtn.addEventListener('click', () => {
    if (moreBtn.innerHTML === 'Load More') {
        moreBtn.innerHTML = 'Close'
        btnName.classList.add('active')
    } else if (moreBtn.innerHTML === 'Close') {
        moreBtn.innerHTML = 'Load More'
        btnName.classList.remove('active')
    }
})
