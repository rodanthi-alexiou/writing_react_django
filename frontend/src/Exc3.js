import React,{useState,useEffect} from 'react';


function Exc3() {
const questions = [
    {
      "questionText": "Οι συγκροτημένες προσπάθειες για την είσοδο της ελληνικής ναυτιλίας στην εποχή του ατμού ξεκίνησαν στις αρχές του 19ου αιώνα.",
      "isCorrect": "false"
    },
    {
      "questionText": "Πρώτος διοικητής της Εθνικής Τράπεζας ήταν ο Γεώργιος Σταύρου.",
      "isCorrect": "true"
    },
    {
      "questionText": "Ένας από τους παράγοντες που προώθησαν την κατασκευή οδικού δικτύου στην Ελλάδα κατά τον 19ο αιώνα ήταν οι πιο γρήγοροι ρυθμοί αστικοποίησης.",
      "isCorrect": "true"
    },
    {
      "questionText": "Το έργο της διάνοιξης της διώρυγας της Κορίνθου ξεκίνησε το 1891.",
      "isCorrect": "false"
    },
    {
      "questionText": "Οι επιχειρηματικές δραστηριότητες είχαν περισσότερες ευκαιρίες ανάπτυξης στις αγορές των μεγάλων κρατών της Ανατολικής Μεσογείου μέχρι τη δεκαετία του 1870.",
      "isCorrect": "true"
    },
    {
      "questionText": "Τα νομοθετήματα του 1907 επέτρεπαν στην εκάστοτε ελληνική κυβέρνηση να απαλλοτριώνει μεγάλες ιδιοκτησίες, ώστε να μπορεί να τις διανέμει σε ακτήμονες.",
      "isCorrect": "true"
    },
    {
      "questionText": "Η επικράτηση της Μεγάλης Ιδέας ευνόησε την ανάπτυξη του εργατικού κινήματος στην Ελλάδα κατά τον 19ο αιώνα.",
      "isCorrect": "false"
    },
    {
      "questionText": "Η υπερπόντια μετανάστευση στις ΗΠΑ όξυνε τις κοινωνικές εντάσεις που δημιούργησε η σταφιδική κρίση.",
      "isCorrect": "false"
    },
    {
      "questionText": "Η Ελλάδα του μεσοπολέμου (1919-1939) είχε υιοθετήσει αναπτυξιακές πολιτικές.",
      "isCorrect": "true"
    },
    {
      "questionText": "Η βρετανική εταιρεία ΟΥΛΕΝ ανέλαβε το 1925 την κατασκευή του φράγματος και της τεχνητής λίμνης στον Μαραθώνα.",
      "isCorrect": "false"
    },
    {
      "questionText": "Το «Προσωρινόν Πολίτευμα» της Επιδαύρου είχε αντιαπολυταρχικό χαρακτήρα.",
      "isCorrect": "true"
    },
    {
      "questionText": "Οι ιδέες του Διαφωτισμού είχαν ιδιαίτερη διάδοση στην απελευθερωμένη Ελλάδα.",
      "isCorrect": "false"
    },
    {
      "questionText": "Ένα από τα θεμελιώδη δικαιώματα που κατοχυρώθηκαν συνταγματικά το 1844 ήταν η αρχή της λαϊκής κυριαρχίας.",
      "isCorrect": "false"
    },
    {
      "questionText": "Εκφραστής των αιτημάτων των αντιπολιτευτικών ομίλων ήταν ο Αλέξανδρος Παπαναστασίου.",
      "isCorrect": "false"
    },
    {
      "questionText": "Το Εθνικόν Κομιτάτον υπό τον Επαμεινώνδα Δεληγιώργη υποστήριζε την ανάπτυξη του κοινοβουλευτισμού.",
      "isCorrect": "true"
    },
    {
      "questionText": "Η κοινοβουλευτική ομάδα των Ιαπώνων ιδρύθηκε το 1905.",
      "isCorrect": "false"
    },
    {
      "questionText": "Ο Στρατιωτικός Σύνδεσμος διαλύθηκε στις 15 Μαρτίου 1910 έχοντας επιτύχει τις επιδιώξεις του.",
      "isCorrect": "true"
    },
    {
      "questionText": "Μία από τις σπουδαιότερες τροποποιήσεις που ψηφίστηκαν από τη Βουλή το πρώτο εξάμηνο του 1911 αφορούσε τη διασφάλιση της διάκρισης των εξουσιών.",
      "isCorrect": "true"
    },
    {
      "questionText": "Το Εθνικό Κόμμα του Κ. Μαυρομιχάλη διέφερε σημαντικά από το ραλλικό κόμμα.",
      "isCorrect": "false"
    },
    {
      "questionText": "Το κίνημα του Κονδύλη στις 10 Οκτωβρίου 1935 στόχευε στην παλινόρθωση της βασιλείας.",
      "isCorrect": "true"
    },
    {
      "questionText": "Οι προσφυγικές μετακινήσεις του 19ου αιώνα διαμόρφωσαν τον δημογραφικό χάρτη της ανεξάρτητης Ελλάδας.",
      "isCorrect": "true"
    },
    {
      "questionText": "Οι πρόσφυγες από τη Χίο αντιμετώπισαν προβλήματα με τους ντόπιους Κυκλαδίτες.",
      "isCorrect": "false"
    },
    {
      "questionText": "Οι περισσότεροι πρόσφυγες από τα Ψαρά κατέφυγαν στο Ναύπλιο.",
      "isCorrect": "false"
    },
    {
      "questionText": "Ο προσφυγικός συνοικισμός της Ερμούπολης στη Σύρο ιδρύθηκε και εξελίχθηκε χάρη στην κυβερνητική αρωγή.",
      "isCorrect": "false"
    },
    {
      "questionText": "Το προσφυγικό ζήτημα στη διάρκεια της Επανάστασης αντιμετωπίστηκε μεθοδικά από την πολιτική ηγεσία των Ελλήνων.",
      "isCorrect": "false"
    },
    {
      "questionText": "Ο προσφυγικός συνοικισμός στο χωριό Ανίβιτσα της Φθιώτιδας ιδρύθηκε για την αποκατάσταση όλων των προσφύγων του 1854.",
      "isCorrect": "true"
    },
    {
      "questionText": "Το θέμα των σχέσεων αυτοχθόνων και ετεροχθόνων δεν απασχόλησε ιδιαίτερα την κοινή γνώμη.",
      "isCorrect": "false"
    },
    {
      "questionText": "Το Β΄ ψήφισμα όριζε ότι δημόσιοι υπάλληλοι μπορεί να είναι όσοι αποδεδειγμένα συμμετείχαν σε πολεμικά γεγονότα της Επανάστασης μέχρι το 1829.",
      "isCorrect": "true"
    },
    {
      "questionText": "Η συνθήκη ειρήνης της Κωνσταντινούπολης προέβλεπε ρυθμίσεις στη θεσσαλική συνοριακή γραμμή με μικρές βελτιώσεις υπέρ των Τούρκων.",
      "isCorrect": "true"
    },
    {
      "questionText": "Το μεγαλύτερο προσφυγικό κύμα στο δεύτερο μισό του 19ου αιώνα προκλήθηκε λόγω της επανάστασης στην Κρήτη κατά την περίοδο 1866-1869.",
      "isCorrect": "true"
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

export default Exc3;