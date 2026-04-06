// ==========================
// SIMULADOR DE INGRESO - QUÍMICA
// ==========================

const questions = [
{ 
    id: 1, 
    block: 'QUÍMICA', 
    text: 'El disulfuro de dihidrógeno (\\( \\mathrm{H_2S_2} \\)) presenta una estructura no plana, con los dos átomos de hidrógeno en planos distintos.', 
    image: 'imagenes/q1_quimica.jpg',
    textAfterImage: 'Se observa que: \\( d_{\\mathrm{(S-H)}} = 1,34 \\text{ Å} \\) y \\( d_{\\mathrm{(S-S)}} = 205 \\times 10^{-12} \\text{ m} \\). (Nota: \\( 1 \\text{ Å} = 10^{-10} \\text{ m} \\)). Determine la suma de todas las longitudes de enlace en nanómetros (nm).',
    options: ['a) 0,473 nm', 'b) 0,405 nm', 'c) 0,358 nm', 'd) 0,550 nm'], 
    answer: 'a' 
},
    { 
        id: 2, 
        block: 'QUÍMICA', 
        text: 'De las siguientes tres proposiciones, ¿cuántas son incorrectas?<br><br>I. Los compuestos pueden separarse en sus constituyentes mediante procesos físicos.<br>II. El cloruro de sodio, \\( \\mathrm{NaCl} \\), es una sustancia molecular.<br>III. El agua de mar y el petróleo son compuestos.', 
        options: ['a) solo I', 'b) I y II', 'c) solo II', 'd) I, II y III'], 
        answer: 'd' 
    },
    { 
        id: 3, 
        block: 'QUÍMICA', 
        text: 'Señale verdadero (V) o Falso (F) según corresponda.<br><br>I. Una mezcla homogénea es monofásica.<br>II. El diamante y el grafito son formas alotrópicas del carbono.<br>III. Una mezcla de mercurio y agua se puede separar por decantación.', 
        options: ['a) FVV', 'b) VVV', 'c) FVF', 'd) FFF'], 
        answer: 'b' 
    },
    { 
        id: 4, 
        block: 'QUÍMICA', 
        text: 'Para dos isótopos de un elemento, se cumple que la suma de neutrones es 38 y la suma de sus números de masa es 72. Halle la carga nuclear del elemento.', 
        options: ['a) 10', 'b) 35', 'c) 17', 'd) 25'], 
        answer: 'c' 
    },
    { 
        id: 5, 
        block: 'QUÍMICA', 
        text: 'Para el catión: \\( {}_{51}^{127}\\mathrm{Sb}^{+3} \\), indique las proposiciones correctas.<br><br>I. Posee 76 neutrones.<br>II. El átomo neutro posee 51 electrones.<br>III. El núcleo atómico posee 48 protones.<br>IV. El catión posee 175 partículas subatómicas fundamentales.', 
        options: ['a) I y II', 'b) II y III', 'c) I, II y IV', 'd) I, II y III'], 
        answer: 'c' 
    },
    { 
        id: 6, 
        block: 'QUÍMICA', 
        text: 'El desarrollo del Modelo Mecano-Cuántico (o Modelo de Nube Electrónica) fue necesario porque el modelo de Bohr:', 
        options: [
            'a) Establecía órbitas elípticas en lugar de circulares para el movimiento del electrón.', 
            'b) Establecía que los átomos eran indivisibles e inmutables, lo cual fue refutado experimentalmente.', 
            'c) No podía explicar la existencia de los protones en el núcleo.', 
            'd) No podía explicar los espectros de emisión y absorción de átomos con más de un electrón (multielectrónicos).'
        ], 
        answer: 'd' 
    },
    { 
        id: 7, 
        block: 'QUÍMICA', 
        text: 'Respecto al Principio de Exclusión de Pauli y la descripción de los electrones en un átomo polielectrónico, ¿qué proposición es correcta?', 
        options: [
            'a) Este principio establece que, en un mismo átomo, dos electrones no pueden tener el mismo valor del número cuántico principal (n).', 
            'b) El principio de Pauli se aplica únicamente a los electrones de valencia y no a los electrones de las capas internas (electrones de carozo).', 
            'c) El principio afirma que dos electrones pueden coexistir en el mismo orbital solo si tienen espines opuestos (diferente número cuántico de espín, s).', 
            'd) La consecuencia directa del principio es que un mismo orbital atómico puede ser ocupado por un máximo de tres electrones.',
        ], 
        answer: 'c' 
    },
    { 
        id: 8, 
        block: 'QUÍMICA', 
        text: 'Según la regla de las diagonales (método gráfico para determinar el orden de llenado de los orbitales atómicos), ¿cuál es el orden correcto de llenado de los siguientes orbitales?', 
        options: [
            'a) &nbsp; \\( 1s \\rightarrow 2p \\rightarrow 2s \\)', 
            'b) &nbsp; \\( 2s \\rightarrow 2p \\rightarrow 3s \\)', 
            'c) &nbsp; \\( 3p \\rightarrow 3d \\rightarrow 4s \\)', 
            'd) &nbsp; \\( 4s \\rightarrow 3p \\rightarrow 3d \\)'
        ], 
        answer: 'b' 
    },
    { 
        id: 9, 
        block: 'QUÍMICA', 
        text: 'La configuración electrónica de un átomo neutro en su estado basal es \\( 1s^2 \\, 2s^2 \\, 2p^6 \\, 3s^2 \\, 3p^2 \\). A partir de esta única información deduzca en el orden respectivo:<br><br>I. Número de electrones no apareados.<br>II. Número de electrones en la capa de valencia.<br>III. Número atómico.', 
        options: ['a) 4 ; 4 ; 14', 'b) 2 ; 4 ; 14', 'c) 3 ; 2 ; 14', 'd) 3 ; 6 ; 28'], 
        answer: 'b' 
    },
    { 
        id: 10, 
        block: 'QUÍMICA', 
        text: 'Respecto a la tabla periódica actual, indique la proposición correcta:', 
        options: [
            'a) Los elementos de un periodo presentan propiedades físicas similares.', 
            'b) Existen 18 columnas, pero solo 16 grupos.', 
            'c) Por lo general los metales más livianos son los menos reactivos.', 
            'd) La serie de actínidos son metales representativos.',
        ], 
        answer: 'b' 
    },
    { 
        id: 11, 
        block: 'QUÍMICA', 
        text: 'Indique Verdadero (V) o Falso (F), según corresponda:<br><br>I. De acuerdo al número de elementos, los metales son más numerosos que los no metales.<br>II. Los no metales pueden presentarse en los estados: sólido, líquido y gaseoso, a temperatura ambiental.<br>III. Todo metal es siempre más duro que un no metal.<br>IV. Solo catorce elementos son considerados lantánidos.', 
        options: ['a) VFFF', 'b) VFVF', 'c) FVVF', 'd) VVFF'], 
        answer: 'd' 
    },
    { 
        id: 12, 
        block: 'QUÍMICA', 
        text: 'El valor de la masa atómica de un elemento que aparece en la tabla periódica corresponde a un promedio ______ de las masas de los ______ que se encuentran de forma natural en la corteza terrestre.', 
        options: [
            'a) geométrico - isótopos', 
            'b) aritmético - alótropos', 
            'c) ponderado - isómeros', 
            'd) ponderado - isótopos'
        ], 
        answer: 'd' 
    },
    { 
        id: 13, 
        block: 'QUÍMICA', 
        text: 'Considere la combinación de los elementos X (\\( Z=20 \\)) y Y (\\( Z=17 \\)) para formar un compuesto. El compuesto formado por la combinación de X y Y tendrá las siguientes características:<br><br>I. Ser un compuesto binario diatómico.<br>II. Ser un compuesto iónico.<br>III. Ser un compuesto covalente no polar.<br>IV. Ser soluble en agua.<br>V. Ser un compuesto covalente polar.<br><br>¿Qué opciones son correctas para el compuesto formado?', 
        options: ['a) II y III', 'b) I y II', 'c) II y IV', 'd) III y V'], 
        answer: 'c' 
    },
    { 
        id: 14, 
        block: 'QUÍMICA', 
        text: 'Indique cual es una molécula polar. Se indica entre paréntesis su geometría molecular.', 
        options: [
            'a) &nbsp; \\( \\mathrm{CHCl_3} \\) &nbsp; (tetraédrica)', 
            'b) &nbsp; \\( \\mathrm{BCl_3} \\) &nbsp; (trigonal plana)', 
            'c) &nbsp; \\( \\mathrm{BeCl_2} \\) &nbsp; (lineal)', 
            'd) &nbsp; \\( \\mathrm{SiH_4} \\) &nbsp; (tetraédrica)',
        ], 
        answer: 'a' 
    },
    { 
        id: 15, 
        block: 'QUÍMICA', 
        text: 'Escoja la opción que tenga los nombres (según IUPAC) correctos de los siguientes compuestos: \\( \\mathrm{SO_3} \\) y \\( \\mathrm{Cl_2O_7} \\).', 
        options: [
            'a) Trióxido de azufre, heptaóxido de dicloro.', 
            'b) Sulfuro de oxígeno (III), cloruro de oxígeno (VII).', 
            'c) Trióxido de monoazufre, óxido de cloro.', 
            'd) Óxido de azufre, heptaóxido de dicloro.'
        ], 
        answer: 'a' 
    },
    { 
        id: 16, 
        block: 'QUÍMICA', 
        text: 'Correlacione número y letra correctamente:<br><br>I. \\( \\mathrm{C} + \\mathrm{O_2} \\rightarrow \\mathrm{CO_2} \\)<br>II. \\( 2\\mathrm{NH_3} \\rightarrow \\mathrm{N_2} + 3\\mathrm{H_2} \\)<br>III. \\( \\mathrm{H_2} + 2\\mathrm{AgCl} \\rightarrow 2\\mathrm{Ag} + 2\\mathrm{HCl} \\)<br>IV. \\( \\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O} \\)<br><br>A. Desplazamiento simple<br>B. Combinación<br>C. Descomposición<br>D. Desplazamiento doble o metátesis', 
        options: [
            'a) IB, IIC, IIIA y IVD', 
            'b) IA, IIB, IIIC y IVD', 
            'c) IB, IID, IIIA y IVC', 
            'd) IA, IID, IIIC y IVB',
        ], 
        answer: 'a' 
    },
    { 
        id: 17, 
        block: 'QUÍMICA', 
        text: 'Un mineral contiene siliciuro de magnesio (\\( \\mathrm{Mg_2Si} \\)) al 65% en masa. Una muestra de este mineral se combina con 320 g de ácido clorhídrico (\\( \\mathrm{HCl} \\)) acuoso, según la siguiente reacción:<br><br>\\( \\mathrm{Mg_2Si} + 4\\mathrm{HCl} \\rightarrow 2\\mathrm{MgCl_2} + \\mathrm{SiH_4} \\)<br><br>Si la muestra del mineral contiene exactamente 400 g de \\( \\mathrm{Mg_2Si} \\) puro, y la reacción se lleva a cabo con un 75% de eficiencia, ¿cuál es el peso del cloruro de magnesio (\\( \\mathrm{MgCl_2} \\)) que se obtiene y cuál es el peso total de la muestra del mineral?<br>Masas Molares (g/mol): \\( \\mathrm{Mg}=24 \\), \\( \\mathrm{Si}=28 \\), \\( \\mathrm{Cl}=35.5 \\), \\( \\mathrm{H}=1 \\)', 
        options: [
            'a) 285 g ; 615,4 g', 
            'b) 300 g ; 548,6 g', 
            'c) 320 g ; 585,0 g', 
            'd) 312 g ; 615,4 g',
        ], 
        answer: 'd' 
    },
    { 
        id: 18, 
        block: 'QUÍMICA', 
        text: 'Respecto al concepto de Peso Equivalente (PE), determine la veracidad (V) o falsedad (F) de cada proposición. (Considere las masas atómicas aproximadas: \\( \\mathrm{Ba}=137 \\), \\( \\mathrm{H}=1 \\), \\( \\mathrm{P}=31 \\), \\( \\mathrm{O}=16 \\)).<br><br>I. El peso equivalente del Bario (\\( \\mathrm{Ba} \\)) en el sulfato de Bario (\\( \\mathrm{BaSO_4} \\)) es 68,5.<br>II. El peso equivalente del ácido fosfórico (\\( \\mathrm{H_3PO_4} \\)) es 49 g/eq cuando actúa como ácido diprótico (reemplaza dos \\( \\mathrm{H^+} \\)).<br>III. El peso equivalente de un elemento siempre es igual a su masa atómica.', 
        options: ['a) VFV', 'b) VVF', 'c) FFV', 'd) VVV'], 
        answer: 'b' 
    },
    { 
        id: 19, 
        block: 'QUÍMICA', 
        text: 'Señale la alternativa que contiene, en ese orden, un ejemplo de solución acuosa, un coloide y una suspensión:', 
        options: [
            'a) Agua potable – Aire puro – Vinagre', 
            'b) Bebida gaseosa – Leche de magnesia – Agua con arena', 
            'c) Salmuera – Mayonesa – Jugo de papaya recién hecho (sin colar)', 
            'd) Bronce – Gelatina – Sangre'
        ], 
        answer: 'c' 
    },
    { 
        id: 20, 
        block: 'QUÍMICA', 
        text: '¿Qué volumen de gas nitrógeno (\\( \\mathrm{N_2} \\)), medido a una presión de 720 mmHg y una temperatura de 27°C, se necesita para reaccionar completamente con 34,0 g de hidrógeno gaseoso (\\( \\mathrm{H_2} \\)) en la reacción de síntesis del amoníaco (\\( \\mathrm{NH_3} \\))?<p>Datos:<p>Pesos atómicos (uma): N = 14; H = 1<br>Constante universal de los gases ideales (R) = 0,0821 l·atm/(K·mol)<br>Conversión de presión: 1 atm = 760 mmHg.<p>Reacción química balanceada:<p> \\( \\mathrm{N_2(g)} + 3\\mathrm{H_2(g)} \\rightarrow 2\\mathrm{NH_3(g)} \\)', 
        options: ['a) 18,34 l', 'b) 55,03 l', 'c) 147,2 l', 'd) 42,76 l'], 
        answer: 'c' 
    }
];

// Variables globales
let currentQuestionIndex = 0;
let timerInterval;
const totalTime = 24 * 60; // 24 minutos
let timeRemaining = totalTime;
let userAnswers = {};
let flaggedQuestions = new Set();
let isQuizSubmitted = false;
let isQuizActive = false;

// --- ENVÍO DE CORREO AL ADMIN ---
async function enviarCopiaAlAdmin(results, finalScore) {
    const emailUsuario = window.currentUser ? window.currentUser.email : "Desconocido";
    
    let detalle = "";
    questions.forEach(q => {
        const marcada = userAnswers[q.id] || "N/A";
        detalle += `P${q.id}: Marcó [${marcada.toUpperCase()}] - Correcta [${q.answer.toUpperCase()}] | `;
    });

    const payload = {
        "Estudiante": emailUsuario,
        "Materia": "QUÍMICA",
        "Puntaje": `${finalScore} / 1000`,
        "Aciertos": `${results.correctAnswers} / ${results.totalQuestions}`,
        "Respuestas_Detalle": detalle,
        "_subject": `Resultados Química: ${emailUsuario}`,
        "_captcha": "false",
        "_template": "table"
    };

    try {
        await fetch("https://formsubmit.co/ajax/sebastianneto84@gmail.com", {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
        });
        console.log("Copia de seguridad enviada al admin.");
    } catch (e) {
        console.error("Error al enviar copia:", e);
    }
}

function startQuiz() {
    const email = window.currentUser ? window.currentUser.email : null;
    if (!email) {
        alert("Error: No se ha podido identificar al usuario. Por favor, inicie sesión de nuevo.");
        return;
    }

    const isAdmin = email === "sebastian.neto@593teveoenlau.ec";
    let attempts = localStorage.getItem(`attempts_quimica_${email}`) || 0; 
    
    if (!isAdmin && attempts >= 2) {
      alert("Ya alcanzaste el límite de 2 intentos para Química. Se cerrará tu sesión.");
      logoutAndReload(); 
      return;
    }

    if (window.currentUser && !isAdmin) {
        let attempts = localStorage.getItem(`attempts_quimica_${window.currentUser.email}`) || 0;
        attempts = parseInt(attempts) + 1;
        localStorage.setItem(`attempts_quimica_${window.currentUser.email}`, attempts);
    }

    isQuizActive = true;
    currentQuestionIndex = 0;
    timeRemaining = totalTime;
    userAnswers = {};
    flaggedQuestions.clear();
    isQuizSubmitted = false;
    document.getElementById('intro-page-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'flex';
    renderQuiz();
    startTimer();
    saveProgress();
}

function renderQuiz() {
    renderNavigation();
    renderQuestion(currentQuestionIndex);
    if (window.MathJax) {
        window.MathJax.typeset();
    }
}

function renderNavigation() {
    const navContainer = document.getElementById('chemistry-nav-buttons');
    if (!navContainer) {
        console.error("Error: No se encontró el div 'chemistry-nav-buttons'.");
        return;
    }
    navContainer.innerHTML = '';

    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.textContent = q.id;
        button.onclick = () => {
            renderQuestion(index);
            saveProgress(); 
        };
        
        if (userAnswers[q.id]) button.classList.add('answered');
        if (flaggedQuestions.has(q.id)) button.classList.add('flagged');
        if (index === currentQuestionIndex) button.classList.add('active');
        
        navContainer.appendChild(button);
    });
}

function renderQuestion(index) {
    currentQuestionIndex = index;
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const q = questions[index];
    document.getElementById('section-title').textContent = q.block;
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';

    let html = `<h3>Pregunta ${q.id}.</h3><p>${q.text}</p>`;

    if (q.image) {
        const style = q.imageStyle || '';
        html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
    }

    if (q.textAfterImage) {
        html += `<p>${q.textAfterImage}</p>`;
    }
    
    html += '<div class="options">';

    q.options.forEach((option, i) => {
        const optionValue = String.fromCharCode(97 + i); 
        const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
        html += `
            <label>
                <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                ${option}
            </label>
        `;
    });
    html += '</div>'; 
    
    questionDiv.innerHTML = html;
    container.appendChild(questionDiv);
    
    if (window.MathJax) {
        window.MathJax.typesetPromise([questionDiv]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }

    updateNavigationButtons();
}

function handleOptionClick(questionId, element) {
    userAnswers[questionId] = element.value;
    saveProgress(); 
    renderNavigation();
}

function updateNavigationButtons() {
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    const flagBtn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(questions[currentQuestionIndex].id)) {
        flagBtn.style.backgroundColor = '#ffc107';
    } else {
        flagBtn.style.backgroundColor = '#6c757d';
    }
    renderNavigation();
}

function toggleFlaggedQuestion() {
    const currentId = questions[currentQuestionIndex].id;
    if (flaggedQuestions.has(currentId)) {
        flaggedQuestions.delete(currentId);
    } else {
        flaggedQuestions.add(currentId);
    }
    saveProgress();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
        saveProgress();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
        saveProgress();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            return;
        }
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (timeRemaining % 5 === 0) {
            saveProgress();
        }
    }, 1000);
}

function submitQuiz() {
    if (isQuizSubmitted) return; 
    clearInterval(timerInterval);
    isQuizSubmitted = true;
    isQuizActive = false; 
    localStorage.removeItem("quizStateQuimica"); 
    
    const results = calculateResults();
    const baseScore = 425;
    const variableScore = 575;
    const pointsPerAnswer = variableScore / results.totalQuestions;
    const finalScore = Math.round(baseScore + (results.correctAnswers * pointsPerAnswer));
    enviarCopiaAlAdmin(results, finalScore);

    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'flex';
    displayResultsPage();
}

function calculateResults() {
    let correctAnswers = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.answer) {
            correctAnswers++;
        }
    });
    return { correctAnswers, totalQuestions: questions.length };
}

function displayResultsPage() {
    const existingAdjustedScore = document.querySelector('.adjusted-score-display');
    if (existingAdjustedScore) {
        existingAdjustedScore.remove();
    }
    const results = calculateResults();
    const resultsScoreEl = document.querySelector('.results-score');
    resultsScoreEl.textContent = `Aciertos: ${results.correctAnswers} / ${results.totalQuestions} (${(results.correctAnswers / results.totalQuestions * 100).toFixed(1)}%)`;
    const baseScore = 425;
    const variableScore = 575;
    const pointsPerAnswer = variableScore / results.totalQuestions;
    const finalScore = Math.round(baseScore + (results.correctAnswers * pointsPerAnswer));
    const adjustedScoreEl = document.createElement('p');
    adjustedScoreEl.className = 'results-score adjusted-score-display';
    adjustedScoreEl.style.marginTop = '15px';
    adjustedScoreEl.style.fontSize = '2.8em';
    adjustedScoreEl.innerHTML = `Puntuación Final: <strong style="color: var(--accent-color);">${finalScore} / 1000</strong>`;
    resultsScoreEl.parentNode.insertBefore(adjustedScoreEl, resultsScoreEl.nextSibling);
    
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';
    
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        const block = document.createElement('div');
        block.className = 'results-question-block';
        
        let html = `<h4>Pregunta ${q.id}. ${q.block}</h4><p>${q.text}</p>`;
        
        if (q.image) {
            const style = q.imageStyle || '';
            html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
        }

        html += '<div class="options">';
        q.options.forEach((option, i) => {
            const optionValue = String.fromCharCode(97 + i);
            const isSelected = userAnswer === optionValue;
            const isTheCorrectAnswer = q.answer === optionValue;
            let labelClass = '';
            if (isSelected && isCorrect) labelClass = 'correct';
            else if (isSelected && !isCorrect) labelClass = 'incorrect';
            else if (isTheCorrectAnswer) labelClass = 'correct';
            html += `
                <label class="${labelClass}">
                    <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                    ${option}
                </label>`;
        });
        html += '</div>';
        if (!isCorrect) {
            html += `<p style="color: red; margin-top: 10px;">Tu respuesta: ${userAnswer ? userAnswer.toUpperCase() : 'Ninguna'}. Respuesta correcta: <strong>${q.answer.toUpperCase()}</strong></p>`;
        } else {
            html += `<p style="color: green; margin-top: 10px;">¡Respuesta correcta!</p>`;
        }
        block.innerHTML = html;
        resultsContent.appendChild(block);
    });

    if (window.MathJax) {
        window.MathJax.typesetPromise([resultsContent]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }
}

function saveProgress() {
    if (!isQuizActive || isQuizSubmitted) return;
    const state = {
        currentQuestionIndex,
        userAnswers,
        timeRemaining,
        flaggedQuestions: Array.from(flaggedQuestions)
    };
    localStorage.setItem("quizStateQuimica", JSON.stringify(state));
}

function restoreProgress() {
    const savedState = localStorage.getItem("quizStateQuimica");
    if (savedState) {
        const saved = JSON.parse(savedState);
        isQuizActive = true; 
        document.getElementById('intro-page-container').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'flex';
        currentQuestionIndex = saved.currentQuestionIndex || 0;
        userAnswers = saved.userAnswers || {};
        timeRemaining = saved.timeRemaining || totalTime;
        flaggedQuestions = new Set(saved.flaggedQuestions || []);
        renderQuiz();
        startTimer();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            window.currentUser = user; 
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';

            if (localStorage.getItem("quizStateQuimica")) {
                restoreProgress();
            } else {
                document.getElementById('intro-page-container').style.display = 'flex';
                document.getElementById('quiz-page').style.display = 'none';
                document.getElementById('results-page').style.display = 'none';
            }
        } else {
            window.currentUser = null;
            document.getElementById('login-page').style.display = 'flex';
            document.getElementById('app-container').style.display = 'none';
        }
    });
});

window.addEventListener("beforeunload", (e) => {
    if (isQuizActive && !isQuizSubmitted) {
        const confirmationMessage = '¡Atención! Si cierras o recargas la pestaña, tu intento se enviará automáticamente. ¿Estás seguro?';
        e.returnValue = confirmationMessage; 
        return confirmationMessage;
    }
});

window.addEventListener("pagehide", () => {
    if (isQuizActive && !isQuizSubmitted) {
        saveProgress();
    }
});