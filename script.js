

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
console.log('hello world')