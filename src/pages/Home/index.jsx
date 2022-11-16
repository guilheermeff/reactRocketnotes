import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { FiPlus } from 'react-icons/fi';

export function Home() {

  const [tags, setTags] = useState([]);
  const [tagSelected, setTagSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  function handleTagSelected(tagName) {

    const alreadySelected = tagSelected.includes(tagName);

    if(alreadySelected) {
      const filteredTags = tagSelected.filter(tag => tag !== tagName);
      setTagSelected(filteredTags);
    } else {
      setTagSelected(prevState => [...prevState, tagName])
    } 
  }

  useEffect(() => {
    async function getTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    getTags();
  },[]);

  useEffect(() => {
    async function getNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`);

      setNotes(response.data)
    }
    getNotes();
  },[tagSelected, search]);

  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText onClick={() => handleTagSelected("all")} title="Todos" isActive={tagSelected.length === 0}/></li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText 
                onClick={() => handleTagSelected(tag.name)} 
                title={tag.name}
                isActive={tagSelected.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" onChange={() => setSearch(e.target.value)} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map(note => (
              <Note 
                key={String(note.id)}
                data={note}
              />
            ))
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}