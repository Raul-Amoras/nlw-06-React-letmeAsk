import { useAuth } from '../hooks/useAuth'; 
import {Link} from 'react-router-dom'


import illusytration from '../assets/images/illustration.svg'
import logoImage from '../assets/images/logo.svg'


import { Button } from '../components/Button';


import '../styles/auth.scss';

export function NewRoom(){
  //  const {user} = useAuth

  return(
    <div id="page-auth">
      <aside>
        <img src={illusytration} alt="Ilustracao simbolizado pergunta e resposta" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImage} alt="Imagem da Logo da Pagina" />
          <h2>Criar uma nova sala</h2>
          <form >
            <input
             type="text" 
             placeholder="Nome da sala"
             />
             <Button type="submit">
               Criar sala
              </Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
   
  
}