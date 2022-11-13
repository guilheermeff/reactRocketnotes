import { useState } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const [links, setLinks] = useState([]);
  const [addLink, setAddLink] = useState("");

  const [tags, setTags] = useState([]);
  const [addTag, setAddTag] = useState("");

  const navigate = useNavigate();

  function handleAddLinks() {
    setLinks(prevState => [...prevState, addLink]);
    setAddLink("");
  }
  
  function handleRemoveLinks(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleAddTags() {
    setTags(prevState => [...prevState, addTag]);
    setAddTag("");
  }

  function handleRemoveTags(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleCreateNote() {
    
    if(!title) {
      return alert("Digite um título para a sua nota!")
    }

    if(addLink) {
      return alert("Existem links não adicionados! Clique no botão de + para adiconar um link")
    }

    if(addTag) {
      return alert("Existem Tags não enviadas dentro dos campos de tags!")
    }
    
    api.post("/notes", {
      title, 
      description,
      links,
      tags
    });

    alert("Nota cadastrada com sucesso!");
    navigate("/");
  }

  return(
    <Container>
      
      <Header />
      
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/home">Voltar</Link>
          </header>
          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          
          <TextArea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((text, index) => (
                <NoteItem
                  key={String(index)} 
                  value={text}
                  onClick={() => handleRemoveLinks(text)}
                />
              ))
            }
            <NoteItem 
              placeholder="Novo link" 
              isNew
              onChange={e => setAddLink(e.target.value)}
              value={addLink}
              onClick={handleAddLinks}
            />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              {
                tags.map((text, index) => (
                  <NoteItem
                    key={String(index)} 
                    value={text}
                    onClick={() => handleRemoveTags(text)}
                  />
                ))
              }
              <NoteItem 
                placeholder="Novo marcador" 
                isNew
                onClick={handleAddTags}
                value={addTag}
                onChange={e => setAddTag(e.target.value)} 
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleCreateNote} />
        </Form>
        
      </main>
    </Container>
  )
}