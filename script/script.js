const API_URL= "https://rickandmortyapi.com/api/character/";
const search_url= "https://rickandmortyapi.com/api/character/?name="

const form=document.getElementById('form');
const search= document.getElementById('search');
const main= document.getElementById('main');


const getCharacter=(url) =>{
    const peticion = fetch(url)
    peticion.then(res=>{
        res.json().then(data=>{
            showContent(data.results)
        })
    })
}

getCharacter(API_URL);

function showContent(showBody){
    main.innerHTML=''
   

    showBody.forEach((body) => {
        const {name,gender,origin,location,image}=body

        const bodyEL=document.createElement('div')
        bodyEL.classList.add('card')
        bodyEL.innerHTML=`
        <img src=" ${image}" alt="">
            <div class="card-info">
                <h3>${name}</h3>
                <span>${gender}</span>
            </div>
            <div class="overview">
                <h3>overview</h3> 
                ${origin + location}   
            </div>
            `
        main.appendChild(bodyEL)
            
    });
}

// //creando filtrado de busqueda

  form.addEventListener('submit', e =>{
      e.preventDefault()
      const searchTerm= search.value
      if(searchTerm && searchTerm !== ''){
          getCharacter(search_url +searchTerm)
          search.value=""
      }else{
          window.location.reload()
      }
      console.log(searchTerm)
  })



