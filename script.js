

const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {

        if(entry.isIntersecting){
            // const projectSection = e.target.querySelector('.hidden')
            entry.target.classList.add('fadeAnimation')
            // entry.target.classList.remove('hidden')
            // e.target.classList.remove('hidden')
            return
        }
        entry.target.classList.remove('fadeAnimation')
    }
    ) 
})

observer.observe(document.querySelector('.hidden'))

const observerTwo = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {

        if(entry.isIntersecting){
            // const projectSection = e.target.querySelector('.hidden')
            entry.target.classList.add('fadeAnimation')
            // entry.target.classList.remove('hidden')
            // e.target.classList.remove('hidden')
            return
        }
        // entry.target.classList.remove('fadeAnimation')
    }
    ) 
})

observerTwo.observe(document.querySelector('.bioCard'))
observerTwo.observe(document.querySelector('#cofc'))
observerTwo.observe(document.querySelector('#arrow1'))
observerTwo.observe(document.querySelector('#arrow2'))
observerTwo.observe(document.querySelector('#arrow3'))
observerTwo.observe(document.querySelector('#teaching'))
observerTwo.observe(document.querySelector('#generalAssembly'))
observerTwo.observe(document.querySelector('#imgCard'))
