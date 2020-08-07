const array=[]


function criaBlog() {

     const tituloBlog = document.getElementById("titulo-post").value
     const autorBlog = document.getElementById("autor-post").value
     const conteudoBlog = document.getElementById("conteudo-post").value
     document.getElementById("titulo-post").value=""
     document.getElementById("autor-post").value=""
     document.getElementById("conteudo-post").value=""

     criaBlog.innerHTML += value 
     
     const blog = {
     titulo: tituloBlog,
     autor: autorBlog,
     conteudo: conteudoBlog
     }
    
     array.push(blog)
     console.log(array)

    
    
    
}

