document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('#search');
    const cityInput = document.querySelector('#cityInput');
    const infosMeteo = document.querySelector('#infos-meteo');

    const style = {
        degres: 'text-2xl text-fuchsia-50 flex',
        p_degres:'px-2',
        icone_degres : '/svg/icons8-température-48.png'
    };

    search.addEventListener('click', (e) => {
        e.preventDefault();
        
        infosMeteo.innerHTML = '';

        const create = document.createElement('div');
        create.classList.add(...style.degres.split(' '));

        const description_degres = document.createElement('p');
        description_degres.textContent = '16ºC';
        create.appendChild(description_degres);

        infosMeteo.appendChild(create);

        //
        const div_img = document.createElement('img')
        div_img.src = style.icone_degres
        div_img.classList.add(style.p_degres)
        create.appendChild(div_img)

        //description
       const description = document.createElement('div')
       const desc= document.createElement('p')
       desc.textContent('bonjour il fait beau aujourdhuis')
       description.classList.add(...style.degres.split(' '))

        infosMeteo.appendChild(description)
    });
});
