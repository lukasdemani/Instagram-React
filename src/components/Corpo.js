export default function Corpo() {
  const imgsUsuarios = [
    {imagem: "assets/img/9gag.svg", usuario: "9gag"},
    {imagem: "assets/img/meowed.svg", usuario:"meowed"},
    {imagem: "assets/img/barked.svg", usuario:"barked"},
    {imagem: "assets/img/wawawicomics.svg",usuario:"wawawicomics"},
    {imagem: "assets/img/respondeai.svg", usuario:"respondeai"},
    {imagem: "assets/img/filomoderna.svg", usuario:"filomoderna"},
    {imagem: "assets/img/memeriagourmet.svg", usuario:"memeriagourmet"}
  ];

  const postsObject = [
    {imagem: "assets/img/meowed.svg", usuario: "meowed", conteudo: "assets/img/gato-telefone.svg", imagemCurtidas: "assets/img/respondeai.svg", usuarioCurtidas: "respondeai", numCurtidas: "101.523"},
    {imagem: "assets/img/barked.svg", usuario: "barked", conteudo: "assets/img/dog.svg", imagemCurtidas: "assets/img/adorable_animals.svg", usuarioCurtidas: "adorable_animals", numCurtidas: "99.159"}
  ];

  const sugestoesObject = [
    {imagem: "assets/img/bad.vibes.memes.svg",nome: "bad.vibes.memes",razao: "Segue você"},
    {imagem: "assets/img/chibirdart.svg",nome: "chibirdart",razao: "Segue você"},
    {imagem: "assets/img/razoesparaacreditar.svg",nome: "razoesparaacreditar",razao: "Novo no Instagram"},
    {imagem: "assets/img/adorable_animals.svg",nome: "adorable_animals",razao: "Segue você"},
    {imagem: "assets/img/smallcutecats.svg",nome: "smallcutecats",razao: "Segue você"}  
  ];

  const usuarioObject = {imagem: "assets/img/catanacomics.svg", arroba: "catanacomics", nome: "Catana"};
  
    return (
        <div class="corpo">
        <div class="esquerda">
          <div class="stories">
            
            {imgsUsuarios.map(imgUsuario => <Story imagem={imgUsuario.imagem} usuario={imgUsuario.usuario}/>)}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div class="posts">

            {postsObject.map(postObj => <Post imagem={postObj.imagem} usuario={postObj.usuario} conteudo={postObj.conteudo} imagemCurtidas={postObj.imagemCurtidas} usuarioCurtidas={postObj.usuarioCurtidas} numCurtidas={postObj.numCurtidas}/>)}
            
          </div>
        </div>

        <div class="sidebar">

          <Usuario imagem={usuarioObject.imagem} arroba={usuarioObject.arroba} nome={usuarioObject.nome}/>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            
            {sugestoesObject.map(sugestaoObj => <Sugestao imagem={sugestaoObj.imagem} nome={sugestaoObj.nome} razao={sugestaoObj.razao}/>)}

          </div>

          <Footer/>
        </div>
      </div>
    );
}

function Story(props){
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} alt=""/>
      </div>
      <div class="usuario">
        {props.usuario}
      </div>
    </div>
  );
}

function Post(props){
  return(
    <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imagem} alt=""/>
            {props.usuario}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.conteudo} alt=""/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.imagemCurtidas} alt=""/>
            <div class="texto">
              Curtido por <strong>{props.usuarioCurtidas}</strong> e <strong>outras {props.numCurtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
  );
}

function Sugestao(props){
  const { imagem, nome, razao } = props;

  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={imagem} alt=""/>
        <div class="texto">
          <div class="nome">{nome}</div>
          <div class="razao">{razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

function Usuario(props){
  const { imagem, arroba, nome } = props;

  return (
    <div class="usuario">
      <img src={imagem} alt=""/>
      <div class="texto">
        <strong>{arroba}</strong>
        {nome}
      </div>
    </div>
  );
}

function Footer(){
  return (
    <footer>
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </footer>
  );
}