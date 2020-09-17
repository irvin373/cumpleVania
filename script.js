const dataNotes = [{
  name: 'Pikachu',
  subtitle: 'Pokemon Gen I',
  detail: 'Pikachu is an Electric-type Pokémon introduced in Generation I. Pikachu are small, chubby, and incredibly cute mouse-like Pokémon. They are almost completely covered by yellow fur.',
  picture: './img/ClowThunder.jpg',
  color: 'flex--pikachu',
},
{
  name: 'Piplup',
  subtitle: 'Pokemon Gen IV',
  detail: 'Piplup is the Water-type Starter Pokémon of the Sinnoh region. It was introduced in Generation IV. Piplup has a strong sense of self-esteem. It seldom accepts food that people give because of its pride.',
  picture: 'https://vignette.wikia.nocookie.net/dbzff/images/5/5f/Tanjirou_anime_design.png/revision/latest/top-crop/width/360/height/450?cb=20200225203508',
  color: 'flex--piplup',
},
{
  name: 'Blaziken',
  subtitle: 'Pokemon Gen III',
  detail: 'Blaziken is the Fire/Fighting-type Starter Pokémon of the Hoenn region, introduced in Generation III. Blaziken is a large, bipedal, humanoid bird-like Pokémon that resembles a rooster.',
  picture: 'https://s4.postimg.org/6795hnlql/blaziken.png',
  color: 'flex--blaziken',
},
{
  name: 'Dialga',
  subtitle: 'Pokemon Gen IV',
  detail: 'Dialga is a Steel/Dragon-type Legendary Pokémon. Dialga is a sauropod-like Pokémon. It is mainly blue with some gray, metallic portions, such as its chest plate, which has a diamond in the center. It also has various, light blue lines all over its body.',
  picture: 'https://s4.postimg.org/43yq9zlxp/dialga.png',
  color: 'flex--dialga',
},
{
  name: 'Daniel',
  subtitle: 'Clow Shadow',
  detail: 'Vaniii! Mil felicidades! espero pases super!, todo lo mejor en tu día, mantén siempre tu buena onda y tus ganas de aprender, enseñar y aportar que muestras en todas las comunidades y actividades de las que participas.  sin descuidar el darte tiempo para ver animes para recomendarme XD',
  picture: './img/ClowShadow.jpg',
  color: 'flex--zekrom',
}, {
  name: 'Irvin',
  subtitle: 'Clow Thunder',
  detail: 'Eres la persona que menos esperaba en mi vida, y después de stalkearte y saber mas de ti gracias a mis informantes xD. Pues terminamos hablando saliendo y ahora no imagino que tan diferente seria mi vida sin ti.',
  picture: './img/ClowThunder.jpg',
  color: 'flex--pikachu',
},];

function renderItem({id = 0, name = '', subtitle = '', detail = '', picture = '', color = 'flex--piplup'}) {
  id = id + 1;
  return (`<div class="flex__container ${color} ${id === 1 ? 'flex--active' : 'animate--start'}" data-slide="${id}">
    <div class="flex__item flex__item--left">
      <div class="flex__content">
        <p class="text--sub">${subtitle}</p>
        <h1 class="text--big">${name}</h1>
        <p class="text--normal">${detail}</p>
      </div>
      <p class="text__background">${name}</p>
    </div>
    <div class="flex__item flex__item--right"></div>
    <img class="pokemon__img" src="${picture}" />
  </div>`);
}

function renderNav(name, id) {
  id = id + 1;
  return (`<a href="#" class="slide-nav${id === 1 ? ' active' : ''}" data-slide="${id}">${name}</a>`);
}

function render() {
  const restuls = dataNotes.map((note, index) => renderItem({...note, id: index})).join('');
  const links = dataNotes.map((note, index) => renderNav(note.name, index)).join('');
  document.getElementById("cards").innerHTML = restuls;
  document.getElementById("navi").innerHTML = links;
}

render();