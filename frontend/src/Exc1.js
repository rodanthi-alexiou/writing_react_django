import React, {useState} from 'react'
import { Button, Typography, Grid } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link,
  } from "react-router-dom";

  
  
  export default function Exc1() {
    const questions = [
      {
        "questionText": "Το γεγονός πως οι ιδέες του Διαφωτισμού δεν είχαν ιδιαίτερη διάδοση στην απελευθερωμένη Ελλάδα, δεν επηρέασε την πολιτική σκέψη της εποχής.",
        "isCorrect": "false"
      },
      {
        "questionText": "Οι άνθρωποι αξιολογούσαν αρνητικά τις διαμάχες που υπήρχαν ανάμεσα στα κόμματα, καθώς δεν μπορούσαν να κατανοήσουν την αναγκαιότητα των ιδεολογικών συγκρούσεων.",
        "isCorrect": "true"
      },
      {
        "questionText": "Πέρα από τις διαφορές που υπήρχαν μεταξύ των τριών «ξενικών» κομμάτων, οι απόψεις τους σε ορισμένα ζητήματα δεν είχαν σημαντικές αποκλίσεις.",
        "isCorrect": "true"
      },
      {
        "questionText": "Στην οικονομική πολιτική οι απόψεις των κομμάτων δεν διέφεραν σχεδόν καθόλου.",
        "isCorrect": "true"
      },
      {
        "questionText": "Δεν συμφωνούσαν όλα τα κόμματα στην ανάγκη στήριξης της οικονομίας της χώρας στην αγροτική και βιοτεχνική παραγωγή, στο εμπόριο και τη ναυτιλία.",
        "isCorrect": "false"
      },
      {
        "questionText": "Η υποστήριξη της Εθνικής Τράπεζας, που ιδρύθηκε το 1840, απασχολούσε ιδιαίτερα τα «ξενικά» κόμματα στον τομέα της οικονομικής πολιτικής.",
        "isCorrect": "false"
      },
      {
        "questionText": "Τα «ξενικά» κόμματα εκείνης της εποχής δεν είχαν ακόμη σαφή οργανωτική δομή και προγράμματα δράσης.",
        "isCorrect": "true"
      },
      {
        "questionText": "Τα «ξενικά» κόμματα απέφευγαν να καταφύγουν σε χρήση επαναστατικής βίας, προκειμένου να καταστήσουν σαφή την αντίθεσή τους σε επιλογές της κυβέρνησης.",
        "isCorrect": "true"
      },
      {
        "questionText": "Το πρώτο εξάμηνο του 1911 ψηφίστηκαν από τη Βουλή 53 τροποποιήσεις μη θεμελιωδών διατάξεων του συντάγματος.",
        "isCorrect": "true"
      },
      {
        "questionText": "Το βενιζελικό κόμμα ήταν σε μεγάλο βαθμό προσωποπαγές.",
        "isCorrect": "true"
      },
      {
        "questionText": "Το Σοσιαλιστικό Εργατικό Κόμμα Ελλάδος (Σ.Ε.Κ.Ε.) μετονομάστηκε σε Λαϊκό Κόμμα.",
        "isCorrect": "false"
      },
      {
        "questionText": "Οι Φιλελεύθεροι τάσσονταν υπέρ των Κεντρικών Δυνάμεων στον Α΄ Παγκόσμιο πόλεμο.",
        "isCorrect": "false"
      },
      {
        "questionText": "Στις 25 Ιανουαρίου 1921 η Αναθεωρητική Εθνοσυνέλευση που προέκυψε από τις εκλογές του Νοεμβρίου του 1920 ανακηρύχθηκε Συντακτική.",
        "isCorrect": "true"
      },
      {
        "questionText": "Από τα αντιβενιζελικά κόμματα πιο διαλλακτικά ήταν τα κόμματα του Δημητρίου Ράλλη και του Κυριακούλη Μαυρομιχάλη.",
        "isCorrect": "false"
      },
      {
        "questionText": "Το ραλλικό κόμμα ήταν υπέρ του εκσυγχρονισμού.",
        "isCorrect": "false"
      }
    ]


 
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState('none');
  
    const handleAnswerOptionClick = (isCorrect,answer_button) => {
      if (isCorrect === answer_button) {
        setScore(score + 1);
        setAnswer('correct');
      }
      else{
        setAnswer('incorrect');
      }
  
    };
  
    const handleNext = () => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setAnswer('none');
    };
  
    function Correct(){
      return(
        <div className='question-section'>
        <div className='question-text'>Σωστή απάντηση!</div>
        <button  onClick={() => handleNext()}> Επόμενο </button>
        </div>
        
      );
    }
  
    return (
  
      <div className='app'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Ερώτηση {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              
              <button  onClick={() => handleAnswerOptionClick(questions[currentQuestion].isCorrect,'true')}> Σωστό </button>
              <button  onClick={() => handleAnswerOptionClick(questions[currentQuestion].isCorrect,'false')}> Λάθος </button>
            </div>
  
            <div className='question-section'>
            {answer === 'correct' && <Correct />}
          </div>
  
      </div>
  
      
    );
  }