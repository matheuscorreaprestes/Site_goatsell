import { IonActionSheet, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar, IonSlides, IonSlide, IonApp, IonItemDivider, IonItem, IonInput, IonLabel } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const slideOpts = {
  initialSlide: 1,
  speed: 400
}

const Tab1: React.FC = () => {

  const [text, setText] = useState<string>();
     
    return (
    <IonApp >
    <IonPage color="dark">
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle color="success"> GoatSell </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark"fullscreen>
      <IonCard >
    <IonSlides >
      <IonSlide>
      <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbU7HlCFeA8fIwS2vJXHWja1xJf2z54zCTAw&usqp=CAU"></IonImg>
      </IonSlide>
      <IonSlide>
      <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEIA1decvlbG7X861umM9MhYz2N8jeklFXA&usqp=CAU "></IonImg>
      </IonSlide>
    </IonSlides>
      <IonCardHeader>
      <IonCardTitle color="light">Bode</IonCardTitle>
      <IonCardSubtitle color="light">R$ 200,00</IonCardSubtitle>
           <IonCardSubtitle color="light">Um bode muito bom para se ter como amigo, animal de estimação ou ate mesmo fonte de comida. Um bode alegraria muito a sua vida!!</IonCardSubtitle>
           <IonCardSubtitle color="light">Sendo um animal de facil criação pois come quase de tudo, podendo se tornar um animal rasoavelmente grande.</IonCardSubtitle>  
           <IonCardSubtitle color="light">Eles podem viver de 15-18 anos e podem pesar ate 140kg. </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>

    <IonCard>
      <IonSlides>
        <IonSlide>
          <IonImg src="https://img.r7.com/images/cabras-represa-italia-cingino-11102018151839604?dimensions=633x446">foto 1</IonImg>
        </IonSlide>
        <IonSlide>
          <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsykGEUJovs3xFvx-0VgUZzPBlyLVPGNqWJA&usqp=CAU">foto2 </IonImg>
        </IonSlide>
      </IonSlides>
      <IonCardHeader>
        <IonCardTitle color="light">Bode aranha</IonCardTitle>
        <IonCardSubtitle color="light">R$ 300,00</IonCardSubtitle>
        <IonCardSubtitle color="light">Bode aranha, um otimo bode para se ter tambem, o unico problema é a sua mania de escalada , podendo subir emm bancos ou mesas de sua casa. Um bode de criaçlão facil tambem por comer de tudo sendo um exelente amigo.</IonCardSubtitle>
        <IonCardSubtitle color="light">O bode aranha é um exelente amigo, pois proporcionara muitaas risadas subindo por tudo</IonCardSubtitle>      
      </IonCardHeader>
    </IonCard>
    <IonGrid>
      <IonRow>  
      <IonItem>
            <IonLabel position="floating">Cadastrar e-mail, para notificações</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
          <IonButton color="warning">Enviar</IonButton>
          </IonRow>
      
      </IonGrid>  
      <IonButton color="danger">Comprar</IonButton>  
      <IonCard >
        <IonCardHeader color="light">
          <IonCardTitle>Contato: comprebode@hotmail.com</IonCardTitle>

        </IonCardHeader>
        </IonCard> 
      </IonContent>
    </IonPage>
    </IonApp>
  );
};

export default Tab1;


