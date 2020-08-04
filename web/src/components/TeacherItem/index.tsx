import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'



const TeacherItem = () => {
    return(
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars3.githubusercontent.com/u/47701050?s=460&u=b1b9e466b870ad5560d79134583e463e6c4009eb&v=4"
              alt="Israel Afonso"
            />
            <div>
                <strong>Israel Afonso</strong>
                <span>Matemática</span>
            </div>
          </header>

          <p>
              Entusiasta por Núemros.
              <br /><br />
              Apaixonado pelos conjuntos numéricos e como usá-los no dia-a-dia
          </p>

          <footer>
              <p>
                  Preço/hora
                  <strong>R$ 20,00</strong>
              </p>
              <button type="button">
                  <img src={whatsappIcon} alt="Whatsapp"/>
                  Entrar em contato
              </button>
          </footer>
        </article>
    );
}

export default TeacherItem;