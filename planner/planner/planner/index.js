function criatarefa() {
    
    const tarefa = document.getElementById("tarefa").value
    
    const dia = document.getElementById("dias-semana").value
    

    if (dia == 'domingo') {
        const domingo = document.getElementById('domingo')
        domingo.innerHTML = "<p>" + tarefa + "</p>"
    }


     if (dia == 'segunda') {
        const segunda = document.getElementById('segunda')
        segunda.innerHTML = "<p>" + tarefa + "</p>"
    }

     if (dia == 'terca') {
        const terca = document.getElementById('terca')
        terca.innerHTML = "<p>" + tarefa + "</p>"
    }

     if (dia == 'quarta') {
        const quarta = document.getElementById('quarta')
        quarta.innerHTML = "<p>" + tarefa + "</p>"
    }

     if (dia == 'quinta') {
        const quinta = document.getElementById('quinta')
        quinta.innerHTML = "<p>" + tarefa + "</p>"
    }

     if (dia == 'sexta') {
        const sexta = document.getElementById('sexta')
        sexta.innerHTML = "<p>" + tarefa + "</p>"
    }

    if (dia == 'sabado') {
       const sabado = document.getElementById('sabado')
        sabado.innerHTML = "<p>" + tarefa + "</p>"
    } 

}



