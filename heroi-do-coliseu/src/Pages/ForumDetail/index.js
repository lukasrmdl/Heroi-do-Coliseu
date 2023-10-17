/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';

import db from "../../Firebase/firestore";
import { auth } from "../../Firebase";
import {
  updateDoc,
  arrayUnion,
  getDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import {
  TextBox,
  Container,
  LinkForum,
  Div,
  ForumComment,
  CommentText,
  CommentInfo,
  CommentDate,
  CommentAuthor,
  TopicDetailsAuthor,
  TopicDetailsCreated,
} from "./styles";
import BotaoForm from "../../Components/ButtonForm";
import BotaoEnviaForm from "../../Components/ButtonSendForm";
import Textarea from "@mui/joy/Textarea";
import BotaoDelTopic from "../../Components/ButtonDelTopic";

const MessageItem = ({ message }) => {
  const [isOwner, setIsOwner] = useState(false);
  const { currentUser } = auth;
  const navigate = useNavigate();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  if (currentUser && message.owner_uid === `users/${currentUser.uid}`) {
    setIsOwner(true);
  }

  const handleDeleteMessage = async () => {
    const userConfirmed = window.confirm("Tem certeza de que deseja excluir a mensagem?");
    if (userConfirmed) {
      const messageIDToDelete = message.message_id;
        try {
          await deleteDoc(doc(db, "forums_messages", messageIDToDelete));
          alert("Mensagem excluída com sucesso!");
          window.location.reload();
        } catch (error) {
          console.error("Erro ao excluir a mensagem:", error);
        }
    } else {
      setShowDeleteConfirmation(false); // Cancelar a exclusão se o usuário cancelar
    }
  };


  return (
    <ForumComment>
      <CommentText>{message.text}</CommentText>
      <CommentInfo>
        <CommentAuthor>Autor: {message.owner}</CommentAuthor>
        <CommentDate>
          {message.create_at
            ? message.create_at.toDate().toLocaleDateString()
            : ""}
        </CommentDate>
        {currentUser && currentUser.uid === message.owner_uid && (
          <div className="delete-commnent">
          <button type="button" onClick={handleDeleteMessage}>
          <FaTrash />
          </button>
          </div>
        )}
      </CommentInfo>
    </ForumComment>
  );
};

const ForumDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [forum, setForum] = useState({});
  const [messages, setMessages] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [creatingResponse, setCreatingResponse] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [forumRef, setForumRef] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoaded, setLoaded] = useState(false)
  const [addCommentButtonText, setAddCommentButtonText] = useState(
    "Adicionar novo comentário"
  );

  const { currentUser } = auth;

  useEffect(() => {
    const forumRef = doc(db, "forums", id);

    setForumRef(forumRef);

    getDoc(forumRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setForum(data);

          const messageIds = data.messages || [];

          // Verifique se o usuário é o proprietário
          const { currentUser } = auth;
          if (currentUser && data.owner === `users/${currentUser.uid}`) {
            setIsOwner(true);
          }

          // Consulta para buscar as mensagens apenas se houver IDs
          if (messageIds.length > 0) {
            const messagesRef = collection(db, "forums_messages");
            const messagesQuery = query(
              messagesRef,
              where("__name__", "in", messageIds)
            );

            getDocs(messagesQuery)
            .then((querySnap) => {
              const messagesData = querySnap.docs.map((doc) => doc.data());
              setMessages(messagesData);
              setLoaded(true); // Set loaded state after data retrieval
            })
            .catch((error) => {
              console.error("Erro ao buscar mensagens do fórum:", error);
            });
        } else {
          setLoaded(true); // Set loaded state even if there are no messages
        }
      } else {
          console.error("Fórum não encontrado");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o fórum:", error);
      });
  }, [id]);

  const handleShowForm = () => {
    // Verifique se o usuário está autenticado
    if (currentUser) {
      setCreatingResponse(!creatingResponse);
      if (creatingResponse) {
        setAddCommentButtonText("Adicionar novo comentário");
        setResponseText("");
      } else {
        setAddCommentButtonText("Cancelar");
      }
    } else {
      alert("Acesse ou se cadastre para poder adicionar comentários!!");
    }
  };

  const handleDeleteForum = () => {
    const userConfirmed = window.confirm("Tem certeza de que deseja excluir o fórum?");
        if (userConfirmed) {
          confirmDelete(); // Executar exclusão se o usuário confirmar
        } else {
          setShowDeleteConfirmation(false); // Cancelar a exclusão se o usuário cancelar
        }
  };

  const confirmDelete = async () => {
    if (isOwner) {
      try {
        await deleteDoc(doc(db, "forums", id));
        navigate("/forum");
        alert("Forum excluido com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir o fórum:", error);
      }
    }

    setShowDeleteConfirmation(false);
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

  const handleResponseSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("Acesse ou se cadastre para poder adicionar comentários!!");
      return;
    }

    // Verifique se o texto da resposta está preenchido
    if (!responseText) {
      alert("Preencha o texto da resposta!");
      return;
    }

    if (isSubmitting) {
      return; // Não faça nada se já estiver enviando
    }

    setIsSubmitting(true); // Bloqueie o envio

    const respondsValue = `forums/${forumRef.id}`;
    const timestamp = serverTimestamp();
    const collectionRef = collection(db, "forums_messages");
    let messageRef; 
    const userName = await getUserNameFromFirestore(currentUser.email);

    if (userName !== null) {
      try {
        messageRef = await addDoc(collectionRef, {
          message_id: "",
          create_at: timestamp,
          owner: userName,
          owner_uid: currentUser.uid,
          responds: respondsValue,
          text: responseText,
        });

        await updateDoc(messageRef, {
          message_id: messageRef.id,
        });
      
        await updateDoc(doc(db, "forums", id), {
          messages: arrayUnion(messageRef.id),
        });
      
        console.log("Nova mensagem adicionada com sucesso.");
        setResponseText("");
        setCreatingResponse(false);
        window.location.reload();
      } catch (error) {
        console.error("Erro ao adicionar a mensagem:", error);
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
      <Link to="/forum"><LinkForum>Voltar</LinkForum></Link>
        <div>
          <TextBox>
            <h1>{forum.title}</h1>
            <h2>{forum.description}</h2>
          </TextBox>
          <TopicDetailsAuthor>Autor: {forum.owner_name}</TopicDetailsAuthor>
          <TopicDetailsCreated>
            Criação:{" "}
            {forum.create_at
              ? forum.create_at.toDate().toLocaleDateString()
              : ""}
          </TopicDetailsCreated>
          <div style={{ borderTop: "3px solid #26221B ", marginTop: 15 }}></div>

          <h3>Respostas</h3>
          {isLoaded ?
          <ul>
            {messages.map((message, index) => (
              <MessageItem key={index} message={message} />
            ))}
          </ul>
          : <div className="c-loader"></div>
            }
          {/* Botão para exibir o formulário de criação de tópico */}
          <BotaoForm
            type="button"
            text={addCommentButtonText}
            onClick={handleShowForm}
          />

          
          {/* Formulário de adição de resposta */}
          {creatingResponse && (
            <div>
                <Textarea
                  minRows={2}
                  maxRows={4}
                  color="black"
                  name="Soft"
                  placeholder="Sua resposta"
                  value={responseText}
                  onChange={(e) => setResponseText(e.target.value)}
                />
                <BotaoEnviaForm onClick={handleResponseSubmit} type="submit" text="Enviar" disabled={isSubmitting}/>
            </div>
          )}

          {/* Botões de exclusão (exibidos apenas se o usuário for o proprietário) */}
          {isOwner && (
            <div>
              <BotaoDelTopic type="button" text="Excluir Tópico" onClick={handleDeleteForum}>
                Excluir Fórum
              </BotaoDelTopic>
              {/* Adicione o botão de edição aqui */}
            </div>
          )}
        </div>
      </Div>
    </Container>
  );
};

export default ForumDetail;