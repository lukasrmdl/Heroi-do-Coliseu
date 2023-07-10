/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { Container, Form } from './styles';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import db from '../../Firebase/firestore';

const Wiki = () => {
  const queryPersonagens = collection(db, 'wiki_personagens');
  const queryArenas = collection(db, 'wiki_arenas');
  const queryEquipamentos = collection(db, 'wiki_equipamentos');
  const [docsPersonagens, loadingPersonagens, errorPersonagens] = useCollectionData(queryPersonagens);
  const [docsArenas, loadingArenas, errorArenas] = useCollectionData(queryArenas);
  const [docsEquipamentos, loadingEquipamentos, errorEquipamentos] = useCollectionData(queryEquipamentos);
  const [searchType, setSearchType] = useState('personagens');
  const [searchTerm, setSearchTerm] = useState('');

  let docsToShow = [];

  if (searchType === 'personagens') {
    docsToShow = docsPersonagens;
  } else if (searchType === 'arenas') {
    docsToShow = docsArenas;
  } else if (searchType === 'equipamentos') {
    docsToShow = docsEquipamentos;
  }

  return (
    <Container>
      <div className='templateContainer'>
        <div className='searchInput_Container'>
          <input
            type='text'
            placeholder='Pesquise aqui...'
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className='searchType_Container'>
          <button
            id='buttonSearch1'
            className={searchType === 'personagens' ? 'active' : ''}
            onClick={() => setSearchType('personagens')}
          >
            Personagens
          </button>
          <button
            id='buttonSearch2'
            className={searchType === 'arenas' ? 'active' : ''}
            onClick={() => setSearchType('arenas')}
          >
            Arenas
          </button>
          <button
            id='buttonSearch3'
            className={searchType === 'equipamentos' ? 'active' : ''}
            onClick={() => setSearchType('equipamentos')}
          >
            Equipamentos
          </button>
        </div>
        <div className='template_Container'>
          {docsToShow &&
            docsToShow
              .filter((doc) => {
                if (searchTerm === '') {
                  return doc;
                } else if (
                  (doc.nome_personagem && doc.nome_personagem.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (doc.nome_arena && doc.nome_arena.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (doc.nome_equipamento && doc.nome_equipamento.toLowerCase().includes(searchTerm.toLowerCase()))
                ) {
                  return doc;
                }
              })
              .map((doc) => (
                <div className='Template' key={doc.id}>
                  <div className='personagemTemplate'>
                    {searchType === 'equipamentos' && doc.nome_equipamento && <h3 id='nome_equip'>{doc.nome_equipamento}</h3>}
                    {searchType === 'personagens' && doc.classe_personagem && <h3>{doc.classe_personagem}</h3>}
                    {searchType === 'personagens' && doc.img_personagem && (
                      <img id='img_personagems' src={doc.img_personagem} alt='' />
                    )}
                    {searchType === 'equipamentos' && doc.img_equipamento && (
                      <img id='img_equipamentos' src={doc.img_equipamento} alt='' />
                    )}
                    {searchType === 'personagens' && doc.nome_personagem && <h3>{doc.nome_personagem}</h3>}
                    {searchType === 'arenas' && doc.nome_arena && <h2>{doc.nome_arena}, {doc.local_arena}</h2>}
                    <p className='price'>
                      {searchType === 'equipamentos' && doc.peso_equipamento && <p><b>Peso:</b> {doc.peso_equipamento}</p>}
                      {searchType === 'equipamentos' && doc.uso_equipamento && <p><b>Uso: </b>{doc.uso_equipamento}</p>}
                      {searchType === 'personagens' && doc.idade_personagem }
                      {searchType === 'personagens' && " - " + doc.origem_personagem }
                      {searchType === 'arenas' && doc.extensao_arena}
                      {searchType === 'equipamentos' && doc.atributos_equipamento}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </Container>
  );
};

export default Wiki;
