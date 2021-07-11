import {useHistory} from 'react-router-dom'

import illusytration from '../assets/images/illustration.svg'
import logoImage from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth' 

import '../styles/auth.scss';

export function Home(){
  const history = useHistory();
  const {user,signInWithGoogle} = useAuth()


  async function handleCreateRoom(){
    if(!user){
      await signInWithGoogle()
    }
    history.push('/rooms/new')
  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img  src={googleIcon} alt="Icone do botao de login" />
            Crie sua sala com o Google
          </button>
          <div className="saparator">ou entre em uma sala</div>
          <form >
            <input
             type="text" 
             placeholder="Digite o codigo da sala"
             />
             <Button type="submit">
               Entrar na sala
              </Button>
          </form>
        </div>
      </main>
    </div>
  )
   
  
}