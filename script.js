
const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('fadeAnimation')
            return
        }
    }
    ) 
})

observer.observe(document.querySelector('.bioCard'))
observer.observe(document.querySelector('#cofc'))
observer.observe(document.querySelector('#teaching'))
observer.observe(document.querySelector('#generalAssembly'))
observer.observe(document.querySelector('#imgCard'))
observer.observe(document.querySelector('#featuredDiv'))
observer.observe(document.querySelector('#projectDiv'))
