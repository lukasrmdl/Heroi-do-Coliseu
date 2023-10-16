/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Container,
  Div,
  ForumAuthor,
  ForumForm,
  ForumDate,
  ForumInfo,
  ForumItem,
  ForumDescription,
  ForumTitle,
} from "./styles";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";

import db from "../../Firebase/firestore";
import {
  where,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

import BotaoForm from "../../Components/ButtonForm";
import BotaoEnviaForm from "../../Components/ButtonSendForm";
import InputForm1 from "../../Components/InputForm1";

import Textarea from "@mui/joy/Textarea";

const Forum = () => {
  const [forums, setForums] = useState([]);
  const [isLoaded, setLoaded] = useState(false)
  const [creatingTopic, setCreatingTopic] = useState(false);
  const [topicTitle, setTopicTitle] = useState("");
  const [topicDescription, setTopicDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState("Criar novo Tópico!"); // Variável de estado para o texto do botão

  const { currentUser } = auth;
  const collectionRef = collection(db, "forums");

  useEffect(() => {
    getForums();
    console.log(auth.currentUser);
  }, []);

  const getForums = () => {
    setForums([]);
    getDocs(query(collectionRef, orderBy("create_at", "asc")))
      .then((querySnap) => {
        const docs = querySnap.docs;
        if (!docs.length) throw Error("Sem tópicos!");

        const forums = docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          owner: doc.data().owner_name,
          create_at: doc.data().create_at,
        }));
        setForums(forums);     
        setLoaded(true)
      })
      .catch((e) => console.error(e.message));
  };

  const getUserNameFromFirestore = async (email) => {
    try {
      const usersRef = collection(db, 'users'); 
      const q = query(usersRef, where('email', '==', email)); // Consulta para encontrar o usuário com o mesmo email
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        return userData.name;
      } else {
        console.log('Usuário não encontrado no Firestore.');
        return null;
      }
    } catch (error) {
      console.error('Erro ao buscar o nome do usuário no Firestore:', error);
      return null;
    }
  };
  

  const handleShowForm = () => {
    if (currentUser) {
      setCreatingTopic(!creatingTopic); 
      setButtonText(creatingTopic ? "Criar novo Tópico!" : "Cancelar");
    } else {
      alert("Acesse ou se cadastre para poder criar Tópicos!!");
    }
  };

  const handleTopicSubmit = async (e) => {
    e.preventDefault(); // Evitar o recarregamento da página
    if (!currentUser) {
      alert("Acesse ou se cadastre para poder criar Tópicos!!");
      return;
    }

    // Verifique se tanto o título quanto a descrição estão preenchidos
    if (!topicTitle || !topicDescription) {
      alert("Preencha tanto o título quanto a descrição do tópico!");
      return;
    }

    if (isSubmitting) {
      return; // Não faça nada se já estiver enviando
    }

    setIsSubmitting(true); // Bloqueie o envio

    const timestamp = serverTimestamp();

    const userName = await getUserNameFromFirestore(currentUser.email);

    if (userName !== null) {
      try {
        await addDoc(collectionRef, {
          create_at: timestamp,
          title: topicTitle,
          description: topicDescription,
          messages: [],
          owner: `users/${currentUser.uid}`,
          owner_name: userName,
        });
        console.log("Novo tópico criado com sucesso.");
        setTopicTitle("");
        setTopicDescription("");
        setCreatingTopic(false);
        setButtonText("Criar novo Tópico!");
        getForums();
    } catch (error) {
      console.error("Erro ao criar o tópico:", error);
    } finally {
      setIsSubmitting(false);
    }
    
  }else {
    console.error('Nome do usuário não encontrado.');
  }
  };

  return (
    <Container>
      <Div>
        <h1>Fórum - Tópicos</h1>
        {isLoaded ?
        <ul>
          {forums.map((forum) => (
            <Link to={`/forum/${forum.id}`} key={forum.id}>
              <ForumItem>
                <div>
                  <ForumTitle>{forum.title}</ForumTitle>
                  <ForumDescription>
                    {forum.description.substring(0, 15)}
                  </ForumDescription>
                </div>
                <ForumInfo>
                  <ForumDate>
                    {forum.create_at
                      ? forum.create_at.toDate().toLocaleDateString()
                      : ""}
                  </ForumDate>
                  <ForumAuthor>Autor: {forum.owner}</ForumAuthor>
                </ForumInfo>
              </ForumItem>
            </Link>
          ))}
        </ul>
         : <div className="c-loader"></div>}

        {/* Botão para exibir o formulário de criação de tópico */}
        <BotaoForm type="button" text={buttonText} onClick={handleShowForm} />

        {/* Formulário de criação de tópico */}
        {creatingTopic && (
          <ForumForm>
            <form>
              <InputForm1
                type="text"
                placeholder="Título do Tópico"
                value={topicTitle}
                onChange={(e) => setTopicTitle(e.target.value)}
              />
              <Textarea
                minRows={2}
                maxRows={4}
                color="black"
                name="Soft"
                placeholder="Descrição do Tópico"
                value={topicDescription}
                onChange={(e) => setTopicDescription(e.target.value)}
              />
              ;
              <BotaoEnviaForm
                type="submit"
                text="Criar!"
                onClick={handleTopicSubmit}
                disabled={isSubmitting}
              />
            </form>
          </ForumForm>
        )}
      </Div>
    </Container>
  );
};

export default Forum;
