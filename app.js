// DATABASE DE NOTAS DEL PONENTE PARA LAS 40 DIAPOSITIVAS
const speakerNotes = {
  1: {
    prompt: "Inicie la capacitación presentándose y explicando la importancia de aplicar el PAN con rigor en Diabetes.",
    script: `<p><strong>[Ponente]</strong> "Bienvenidos colegas. Hoy abordaremos la diabetes no como una receta de cocina, sino a través del Proceso de Atención Nutricia (PAN). Esta herramienta estandarizada nos permite elevar el rigor científico de la terapia dietética."</p>`,
    tips: "Establezca una postura clínica sólida y empática."
  },
  2: {
    prompt: "Invite a la audiencia a interactuar con la encuesta y comente las respuestas.",
    script: `<p><strong>[Ponente]</strong> "Comencemos con esta pregunta: ¿cuál es el principal reto nutricional en diabetes? Voten en su panel. Veremos cómo la adherencia y la educación son pilares que justifican un diagnóstico estructurado."</p>`,
    tips: "Haga énfasis en que la educación en diabetes es tan importante como el cálculo calórico."
  },
  3: {
    prompt: "Presente los datos del Atlas de la IDF y la Ensanut.",
    script: `<p><strong>[Ponente]</strong> "Las cifras son contundentes: con más de 537 millones de personas afectadas en el mundo y más del 18% en México, la diabetes es una crisis de salud pública donde el nutriólogo es el primer frente de batalla contra las complicaciones."</p>`,
    tips: "Use un tono de urgencia epidemiológica."
  },
  4: {
    prompt: "Explique la definición metabólica de la diabetes.",
    script: `<p><strong>[Ponente]</strong> "La diabetes no es solo 'glucosa alta'. Es un desorden metabólico crónico que daña los tejidos debido al acoplamiento disfuncional de la insulina, lo que genera toxicidad celular."</p>`,
    tips: "Refuerce el concepto de toxicidad celular por hiperglucemia."
  },
  5: {
    prompt: "Analice las diferencias fundamentales entre DM1 y DM2 en la tabla.",
    script: `<p><strong>[Ponente]</strong> "Es crucial entender que en DM1 tenemos una deficiencia absoluta de insulina, mientras que en DM2 el problema primario es la resistencia periférica. Esto cambia por completo la estrategia de intervención."</p>`,
    tips: "Subraye que no se debe tratar a ambos pacientes con el mismo enfoque."
  },
  6: {
    prompt: "Simule el ataque autoinmune haciendo clic en el botón de simulación.",
    script: `<p><strong>[Ponente]</strong> "En la Diabetes Tipo 1, observen cómo los linfocitos T del sistema inmune destruyen selectivamente las células beta del páncreas. Al no haber insulina, la terapia de reemplazo exógena es vital para la vida."</p>`,
    tips: "Explique la fisiopatología inmunológica de forma sencilla."
  },
  7: {
    prompt: "Simule el bloqueo del receptor de insulina en DM2 en pantalla.",
    script: `<p><strong>[Ponente]</strong> "En la Diabetes Tipo 2, la insulina sí se produce, pero como ven en la simulación, el exceso de grasas intracelulares bloquea el receptor. La llave no entra en la cerradura, impidiendo el paso de glucosa a la célula."</p>`,
    tips: "Use la metáfora de la cerradura oxidada por lípidos."
  },
  8: {
    prompt: "Haga clic en los hotspots del cuerpo para explicar las complicaciones crónicas.",
    script: `<p><strong>[Ponente]</strong> "El descontrol glucémico crónico lesiona vasos sanguíneos. Las complicaciones microvasculares afectan ojos y riñones, mientras que las macrovasculares causan infartos y pie diabético."</p>`,
    tips: "Asocie las complicaciones con la importancia del monitoreo dietético."
  },
  9: {
    prompt: "Explique el flujo del modelo ADIME.",
    script: `<p><strong>[Ponente]</strong> "El modelo ADIME es el núcleo del PAN. Consta de Evaluación, Diagnóstico, Intervención, y Monitoreo y Evaluación. Es un ciclo continuo que refina nuestro tratamiento."</p>`,
    tips: "Enfatice que es un ciclo dinámico, no una receta estática."
  },
  10: {
    prompt: "Repase el checklist de recolección de información en consulta.",
    script: `<p><strong>[Ponente]</strong> "En la evaluación, no recolectamos datos al azar. Clasificamos en los 5 dominios del eNCPT para justificar adecuadamente nuestro diagnóstico."</p>`,
    tips: "Indique a los participantes que deben marcar cada casilla al evaluar."
  },
  11: {
    prompt: "Explique la importancia del dominio Historial del Cliente (CH).",
    script: `<p><strong>[Ponente]</strong> "El historial del cliente nos da el contexto. La farmacología actual, los años de evolución y el entorno familiar son determinantes para el éxito del plan."</p>`,
    tips: "Relacione el CH con la capacidad económica de apego al plan."
  },
  12: {
    prompt: "Explique el dominio Antropométrico (AD) en diabetes.",
    script: `<p><strong>[Ponente]</strong> "En antropometría, nos interesa el IMC, pero aún más la circunferencia de cintura, que refleja la grasa visceral responsable de la resistencia a la insulina."</p>`,
    tips: "Recuerde los puntos de corte de cintura para población latina."
  },
  13: {
    prompt: "Analice los datos bioquímicos (BD) y las metas clínicas.",
    script: `<p><strong>[Ponente]</strong> "En los datos bioquímicos evaluamos la HbA1c y el perfil de lípidos. Si hay daño renal detectado por TFG baja, debemos modular inmediatamente el aporte de proteínas."</p>`,
    tips: "Recuerde que TFG <60 requiere restricción proteica moderada."
  },
  14: {
    prompt: "Aborde el dominio Dietético (FH) y los métodos de evaluación.",
    script: `<p><strong>[Ponente]</strong> "El recordatorio de 24 horas y la distribución de carbohidratos nos revelan el comportamiento alimentario del paciente. Buscamos picos de ingesta que saturen al páncreas."</p>`,
    tips: "Explique cómo usar la réplica de alimentos en consulta."
  },
  15: {
    prompt: "Invite a la audiencia a ordenar los datos en los contenedores AD y BD.",
    script: `<p><strong>[Ponente]</strong> "Clasifiquemos estos datos de evaluación. La circunferencia va a Antropometría y la glucosa a Bioquímica. Al ordenarlos, identificamos qué datos bioquímicos cruciales nos hacen falta."</p>`,
    tips: "Muestre que la falta de datos limita la formulación del PES."
  },
  16: {
    prompt: "Diferencie conceptualmente el diagnóstico médico del nutricio.",
    script: `<p><strong>[Ponente]</strong> "Colegas, la diabetes es el diagnóstico del médico. El nuestro describe la ingesta excesiva de carbohidratos o la elección inadecuada de alimentos. Eso es lo que podemos solucionar."</p>`,
    tips: "Ponga ejemplos claros de intrusión de términos médicos en notas nutricionales."
  },
  17: {
    prompt: "Explique la estructura del PES (Problema, Etiología, Signos/Síntomas).",
    script: `<p><strong>[Ponente]</strong> "El PES conecta el Problema con su Etiología a través de 'relacionado con', y a los Signos mediante 'evidenciado por'. Es una regla lógica inquebrantable."</p>`,
    tips: "Use analogías gramaticales sencillas."
  },
  18: {
    prompt: "Analice los 8 ejemplos de PES en diabetes del panel visual.",
    script: `<p><strong>[Ponente]</strong> "Observen estos ejemplos del manual eNCPT. Miren cómo la etiología siempre describe algo que el nutriólogo puede resolver directamente."</p>`,
    tips: "Destaque la codificación formal (ej. NI-5.8.2)."
  },
  19: {
    prompt: "Pida a un voluntario construir el enunciado PES de diabetes y valídelo.",
    script: `<p><strong>[Ponente]</strong> "Armemos este diagnóstico. El problema es la ingesta excesiva, la etiología es el consumo de jugos, y la evidencia es la HbA1c alta. Esta estructura justifica toda nuestra intervención."</p>`,
    tips: "Felicite a los que logren armarlo al primer intento."
  },
  20: {
    prompt: "Explique el planteamiento de metas SMART.",
    script: `<p><strong>[Ponente]</strong> "Nuestras metas de intervención deben ser específicas, medibles y pactadas con el paciente. Reducir equivalentes de azúcar simples en 4 semanas es una meta SMART."</p>`,
    tips: "Promueva la negociación de metas en lugar de la imposición."
  },
  21: {
    prompt: "Analice la distribución del plato saludable individualizado.",
    script: `<p><strong>[Ponente]</strong> "No hay una dieta estándar para diabetes. El plato saludable nos sirve como base visual para distribuir vegetales, proteínas y carbohidratos complejos."</p>`,
    tips: "Enfatice que la mitad del plato debe ser de verduras de bajo índice glucémico."
  },
  22: {
    prompt: "Discuta la evidencia de patrones mediterráneo, DASH y basados en plantas.",
    script: `<p><strong>[Ponente]</strong> "La evidencia favorece la dieta Mediterránea y la DASH. Ambas disminuyen la inflamación endotelial y optimizan el perfil de lípidos."</p>`,
    tips: "Mencione el papel del aceite de oliva extra virgen en la resistencia a la insulina."
  },
  23: {
    prompt: "Explique los pasos del conteo de carbohidratos básico.",
    script: `<p><strong>[Ponente]</strong> "El conteo de carbohidratos básico enseña al paciente a identificar qué alimentos contienen CHO y a cuantificarlos en equivalentes de 15 gramos."</p>`,
    tips: "Muestre tazas medidoras reales si dispone de ellas."
  },
  24: {
    prompt: "Aborde el conteo de carbohidratos avanzado en DM1.",
    script: `<p><strong>[Ponente]</strong> "En DM1 usamos el conteo avanzado. Calculamos la relación I:CHO y el factor de sensibilidad (FSI), ajustando además la Unidad Grasa-Proteína (UGP) para evitar picos tardíos."</p>`,
    tips: "Refuerce que las grasas y proteínas retrasan la digestión pero elevan la glucemia tardía."
  },
  25: {
    prompt: "Explique el conteo de CHO y carga glucémica en DM2.",
    script: `<p><strong>[Ponente]</strong> "En DM2, nos enfocamos en la consistencia de las porciones y en combinar carbohidratos con fibra y proteína para evitar excursiones glucémicas bruscas."</p>`,
    tips: "Evite restricciones absolutas de carbohidratos complejos."
  },
  26: {
    prompt: "Use el calculador dinámico de platillo, insulina prandial, corrección y UGP.",
    script: `<p><strong>[Ponente]</strong> "Usemos el simulador. Agreguen alimentos al plato. Si añadimos pan y tocino, veremos cómo el calculador estima los CHO, la dosis prandial por I:CHO, la corrección por FSI y el bolo por UGP."</p>`,
    tips: "Explique cómo la inclusión de grasas y proteínas del tocino genera UGP y requiere insulina."
  },
  27: {
    prompt: "Simule la regla del 15 usando el temporizador interactivo.",
    script: `<p><strong>[Ponente]</strong> "Ante una hipoglucemia menor a 70 mg/dL, aplicamos la regla del 15. Damos 15g de CHO simples, esperamos 15 minutos en reposo y reevaluamos. Iniciemos el temporizador simulado..."</p>`,
    tips: "Enfatice que no se debe dar chocolate o galletas porque la grasa retrasa la absorción de glucosa."
  },
  28: {
    prompt: "Explique el manejo de la hiperglucemia extrema.",
    script: `<p><strong>[Ponente]</strong> "Ante glucosas mayores a 250 mg/dL, hidratamos agresivamente para diluir la concentración sanguínea y monitoreamos cetonas para descartar cetoacidosis."</p>`,
    tips: "Alerte sobre los signos cardinales de cetoacidosis (respiración Kussmaul, aliento cetónico)."
  },
  29: {
    prompt: "Use el simulador MCG para demostrar el TIR y la variabilidad glucémica.",
    script: `<p><strong>[Ponente]</strong> "El Monitoreo Continuo (MCG) nos permite ver las tendencias. Si comemos carbohidratos, la curva sube; si inyectamos un bolo de insulina, baja al rango meta de 70-180 mg/dL."</p>`,
    tips: "Explique que la meta es mantener el TIR arriba del 70%."
  },
  30: {
    prompt: "Presente los indicadores de monitoreo clínico y conductual.",
    script: `<p><strong>[Ponente]</strong> "El monitoreo evalúa si los signos y síntomas de nuestro diagnóstico mejoraron. Medimos HbA1c y evaluamos si el paciente registra su bitácora."</p>`,
    tips: "Alinee siempre el monitoreo con los signos declarados en el PES."
  },
  31: {
    prompt: "Revise la tabla de metas clínicas ADA 2025.",
    script: `<p><strong>[Ponente]</strong> "Estas son las metas de la ADA 2025. Recuerden que en adultos mayores o pacientes con alta fragilidad clínica, flexibilizamos la meta de HbA1c a menos de 8%."</p>`,
    tips: "Diferencie metas en jóvenes activos vs adultos mayores frágiles."
  },
  32: {
    prompt: "Explique el algoritmo de toma de decisiones nutricionales.",
    script: `<p><strong>[Ponente]</strong> "El plan nutricional se modifica ante hipoglucemias frecuentes o cuando el médico ajusta el esquema de insulina. Es un algoritmo de mejora continua."</p>`,
    tips: "Resalte el papel del trabajo multidisciplinario con el endocrinólogo."
  },
  33: {
    prompt: "Presente el primer caso clínico e invite a votar.",
    script: `<p><strong>[Ponente]</strong> "Analicemos este caso: mujer de 19 años con DM1 reciente, HbA1c de 8.9% y miedo a los CHO. ¿Cuál es su diagnóstico PES prioritario? Voten en pantalla..."</p>`,
    tips: "Destaque que el miedo a los CHO genera hipoglucemias por omitir alimentos."
  },
  34: {
    prompt: "Explique el cálculo del bolo prandial del caso 1.",
    script: `<p><strong>[Ponente]</strong> "Para sus 45g de CHO del desayuno, con un factor I:CHO de 1:15, calculamos 3 unidades de insulina Lispro. Esto le devuelve la flexibilidad y seguridad al comer."</p>`,
    tips: "Muestre cómo el conteo reduce la ansiedad alimentaria."
  },
  35: {
    prompt: "Presente el caso 2 e invite a votar la mejor intervención.",
    script: `<p><strong>[Ponente]</strong> "Caso 2: hombre de 54 años con DM2, obesidad grado II e hipertrigliceridemia. ¿Qué intervención es la más recomendada científicamente?"</p>`,
    tips: "Recuerde que el déficit moderado es más sostenible a largo plazo."
  },
  36: {
    prompt: "Explique la intervención nutricional detallada del caso 2.",
    script: `<p><strong>[Ponente]</strong> "Prescribimos una Dieta Mediterránea de 1800 kcal y elevamos la fibra soluble a 30 g diarios. Esto mejora el perfil lipídico y aumenta la sensibilidad a la insulina."</p>`,
    tips: "Explique la acción de los ácidos grasos monoinsaturadas sobre el receptor."
  },
  37: {
    prompt: "Presente el caso 3 de insulina NPH e invite a votar.",
    script: `<p><strong>[Ponente]</strong> "Caso 3: mujer de 62 años con insulina NPH e insulina rápida regular. ¿Cuál es el factor crítico a evaluar? Voten en su panel."</p>`,
    tips: "Enfatice el perfil de acción de las insulinas intermedias."
  },
  38: {
    prompt: "Explique el acoplamiento de horarios e ingesta del caso 3.",
    script: `<p><strong>[Ponente]</strong> "La insulina NPH tiene picos marcados. El plan nutricional debe coincidir con estos picos para evitar hipoglucemias nocturnas o vespertinas severas."</p>`,
    tips: "Explique la importancia de las colaciones estructuradas en esquemas con NPH."
  },
  39: {
    prompt: "Haga clic en las tarjetas de errores frecuentes para voltearlas y analizarlas.",
    script: `<p><strong>[Ponente]</strong> "Revisemos los 10 errores más comunes. Prohibir frutas o indicar productos light sin criterio son malas prácticas que debemos desterrar de la consulta."</p>`,
    tips: "Fomente la discusión interactiva sobre mitos alimentarios comunes."
  },
  40: {
    prompt: "Sintetice el aprendizaje utilizando el mapa mental integrador.",
    script: `<p><strong>[Ponente]</strong> "Para cerrar, visualicen el mapa mental. El PAN no es papeleo estéril; es una secuencia lógica (Evaluación, Diagnóstico, Intervención y Monitoreo) que protege la salud de nuestros pacientes. Muchas gracias."</p>`,
    tips: "Agradezca a la audiencia e inicie la sesión de preguntas y respuestas."
  }
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 1;
  const totalSlides = 40;
  
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const counter = document.getElementById("slide-counter");
  const progressBar = document.getElementById("progress-bar");
  
  const notesPanel = document.getElementById("speaker-panel");
  const notesToggleBtn = document.getElementById("notes-toggle-btn");
  const notesCloseBtn = document.getElementById("notes-close-btn");
  const speakerContent = document.getElementById("speaker-notes-content");
  const themeToggle = document.getElementById("theme-toggle");

  // UPDATE SLIDE AND NOTES DISPLAY
  function updateSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    const activeSlide = document.getElementById(`slide-${index}`);
    if (activeSlide) {
      activeSlide.classList.add("active");
    }
    
    currentSlide = index;
    
    // Update counter and progress bar
    counter.textContent = `Diapositiva ${currentSlide} de ${totalSlides}`;
    progressBar.style.width = `${(currentSlide / totalSlides) * 100}%`;
    
    // Update button states
    prevBtn.disabled = currentSlide === 1;
    if (currentSlide === totalSlides) {
      nextBtn.innerHTML = `Finalizar <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
    } else {
      nextBtn.innerHTML = `Siguiente <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
    }
    
    // Update speaker notes
    updateSpeakerNotes(currentSlide);
  }

  function updateSpeakerNotes(slideIndex) {
    const notes = speakerNotes[slideIndex];
    if (notes) {
      speakerContent.innerHTML = `
        <div class="speaker-section">
          <div class="speaker-section-title">PULSO INTERACTIVO</div>
          <div class="speaker-prompt">${notes.prompt}</div>
        </div>
        <div class="speaker-section">
          <div class="speaker-section-title">GUION EXACTO (LO QUE DEBE DECIR)</div>
          <div class="speaker-script">${notes.script}</div>
        </div>
        <div class="speaker-section">
          <div class="speaker-section-title">TIP PEDAGÓGICO</div>
          <div style="font-size: 0.8rem; color: #94a3b8; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;">
            ${notes.tips}
          </div>
        </div>
      `;
    }
  }

  // NAVIGATION LISTENERS
  prevBtn.addEventListener("click", () => {
    if (currentSlide > 1) {
      updateSlide(currentSlide - 1);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentSlide < totalSlides) {
      updateSlide(currentSlide + 1);
    } else {
      alert("¡Felicidades! Has completado el recorrido por la Masterclass Interactiva del PAN en Diabetes Mellitus.");
    }
  });

  // KEYBOARD CONTROLS
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "Right") {
      if (currentSlide < totalSlides) updateSlide(currentSlide + 1);
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      if (currentSlide > 1) updateSlide(currentSlide - 1);
    }
  });

  // SPEAKER PANEL TOGGLE
  function toggleNotes() {
    notesPanel.classList.toggle("collapsed");
  }

  notesToggleBtn.addEventListener("click", toggleNotes);
  notesCloseBtn.addEventListener("click", toggleNotes);

  // THEME TOGGLE
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  });

  // WIDGET INTERACTION: SLIDE 2 - SURVEY
  const surveyWidget = document.getElementById("slide-2-survey");
  const surveyResults = document.getElementById("survey-results-box");
  const surveyPlaceholder = document.getElementById("survey-placeholder-text");

  if (surveyWidget && surveyResults && surveyPlaceholder) {
    surveyWidget.addEventListener("click", (e) => {
      const option = e.target.closest(".quiz-option");
      if (option) {
        surveyWidget.querySelectorAll(".quiz-option").forEach(btn => btn.classList.remove("selected"));
        option.classList.add("selected");
        
        surveyPlaceholder.style.display = "none";
        surveyResults.style.display = "flex";
        
        // Load simulated results
        const percentages = { 1: 52, 2: 24, 3: 14, 4: 10 };
        // Increase selected option a bit for feedback
        const selectedId = option.dataset.id;
        
        for (let i = 1; i <= 4; i++) {
          const valText = document.getElementById(`bar-val-${i}`);
          const barFill = document.getElementById(`bar-fill-${i}`);
          if (valText && barFill) {
            valText.textContent = `${percentages[i]}%`;
            barFill.style.width = `${percentages[i]}%`;
          }
        }
      }
    });
  }

  // WIDGET INTERACTION: SLIDE 6 - DM1 SIMULATION
  const btnSimulateDM1 = document.getElementById("btn-simulate-dm1");
  const pathoDm1Status = document.getElementById("patho-dm1-status");
  if (btnSimulateDM1) {
    btnSimulateDM1.addEventListener("click", () => {
      // Animate T-cells attacking beta cells
      const tcell1 = document.getElementById("tcell-1");
      const tcell2 = document.getElementById("tcell-2");
      if (tcell1 && tcell2) {
        tcell1.style.transition = "transform 1.2s ease";
        tcell2.style.transition = "transform 1.2s ease";
        tcell1.style.transform = "translate(-120px, -40px)";
        tcell2.style.transform = "translate(-100px, -20px)";
      }
      
      setTimeout(() => {
        // Destroy beta cells
        for (let i = 1; i <= 3; i++) {
          const bcell = document.getElementById(`bcell-${i}`);
          if (bcell) {
            bcell.classList.add("beta-cell-destroyed");
          }
        }
        if (pathoDm1Status) {
          pathoDm1Status.textContent = "🔓 Linfocitos T destruyen células beta. Deficiencia absoluta de insulina.";
          pathoDm1Status.style.color = "var(--danger)";
        }
        btnSimulateDM1.textContent = "✓ Destrucción Autoinmune Completada";
        btnSimulateDM1.disabled = true;
      }, 1200);
    });
  }

  // WIDGET INTERACTION: SLIDE 7 - DM2 SIMULATION
  const btnSimulateDM2 = document.getElementById("btn-simulate-dm2");
  const pathoDm2Status = document.getElementById("patho-dm2-status");
  if (btnSimulateDM2) {
    btnSimulateDM2.addEventListener("click", () => {
      const key = document.getElementById("insulin-key");
      const keyhead = document.getElementById("insulin-head");
      if (key && keyhead) {
        key.style.transition = "transform 1s ease";
        keyhead.style.transition = "transform 1s ease";
        key.style.transform = "translate(0px, 40px)";
        keyhead.style.transform = "translate(0px, 40px)";
      }
      
      setTimeout(() => {
        const fatBlock = document.getElementById("fat-block");
        if (fatBlock) {
          fatBlock.style.transform = "scale(1.5)";
          fatBlock.style.transition = "transform 0.3s ease";
        }
        if (pathoDm2Status) {
          pathoDm2Status.textContent = "⚠️ La insulina es bloqueada por la lipotoxicidad celular (Glucosa bloqueada).";
          pathoDm2Status.style.color = "var(--danger)";
        }
        btnSimulateDM2.textContent = "✓ Resistencia a la Insulina Evidenciada";
        btnSimulateDM2.disabled = true;
      }, 1000);
    });
  }

  // WIDGET INTERACTION: SLIDE 8 - COMPLICATIONS BODY MAP
  const bodyHotspots = document.querySelectorAll(".body-hotspot");
  const bodyPanel = document.getElementById("body-info-panel");
  const bodyData = {
    brain: {
      title: "🧠 Cerebro: Accidente Cerebrovascular (ACV)",
      text: "El daño macrovascular crónico eleva sustancialmente el riesgo de isquemia cerebral por taponamiento o aterotrombosis arterial."
    },
    eyes: {
      title: "👁️ Ojos: Retinopatía Diabética",
      text: "El daño microvascular lesiona los capilares de la retina, provocando microaneurismas, hemorragias y desprendimiento que puede causar ceguera permanente."
    },
    heart: {
      title: "🫀 Corazón: Cardiopatía Isquémica",
      text: "Acelera la aterosclerosis de las arterias coronarias. Es la principal causa de muerte (infarto agudo al miocardio) en personas con diabetes."
    },
    kidney: {
      title: "🩺 Riñón: Nefropatía Diabética",
      text: "El engrosamiento de la membrana basal glomerular causa hiperfiltración y microalbuminuria, progresando a Enfermedad Renal Crónica Terminal."
    },
    foot: {
      title: "🦶 Extremidades: Pie Diabético",
      text: "La neuropatía (pérdida de sensibilidad) combinada con insuficiencia arterial periférica da origen a úlceras de difícil cicatrización que pueden causar amputación."
    }
  };

  bodyHotspots.forEach(spot => {
    spot.addEventListener("click", () => {
      const id = spot.dataset.id;
      const info = bodyData[id];
      if (info && bodyPanel) {
        bodyPanel.innerHTML = `<strong>${info.title}</strong><br><span style="font-size:0.75rem; color:#cbd5e1;">${info.text}</span>`;
        bodyPanel.classList.add("active");
        
        bodyHotspots.forEach(s => s.style.backgroundColor = "rgba(239, 68, 68, 0.75)");
        spot.style.backgroundColor = "var(--accent)";
      }
    });
  });

  // WIDGET INTERACTION: SLIDE 15 - ASSESSMENT SORTER
  const items = document.querySelectorAll(".sorter-item");
  const bins = document.querySelectorAll(".sorter-bin");
  const validateSorterBtn = document.getElementById("btn-validate-sorter");
  const sorterFeedback = document.getElementById("sorter-feedback");
  const pool = document.getElementById("sorter-pool-items");

  let activeItem = null;

  items.forEach(item => {
    item.addEventListener("click", () => {
      if (activeItem === item) {
        item.style.outline = "none";
        activeItem = null;
      } else {
        if (activeItem) activeItem.style.outline = "none";
        activeItem = item;
        item.style.outline = "2px solid var(--primary)";
      }
    });
  });

  bins.forEach(bin => {
    bin.addEventListener("click", () => {
      if (activeItem) {
        activeItem.style.outline = "none";
        bin.appendChild(activeItem);
        activeItem = null;
      }
    });
  });

  if (validateSorterBtn) {
    validateSorterBtn.addEventListener("click", () => {
      let allCorrect = true;
      let itemsPlaced = 0;
      
      bins.forEach(bin => {
        const domain = bin.dataset.domain;
        const placed = bin.querySelectorAll(".sorter-item");
        placed.forEach(item => {
          itemsPlaced++;
          if (item.dataset.domain !== domain) {
            allCorrect = false;
          }
        });
      });

      if (itemsPlaced < 4) {
        sorterFeedback.textContent = "Por favor, clasifique todos los elementos.";
        sorterFeedback.style.color = "var(--accent)";
      } else if (allCorrect) {
        sorterFeedback.textContent = "¡Clasificación Correcta! Falta evaluar: examen de orina (albuminuria) para confirmar la sospecha de nefropatía.";
        sorterFeedback.style.color = "var(--secondary)";
      } else {
        sorterFeedback.textContent = "Hay discrepancias en la clasificación. Vuelva a intentarlo.";
        sorterFeedback.style.color = "var(--danger)";
        // Return all items to pool
        items.forEach(item => pool.appendChild(item));
      }
    });
  }

  // WIDGET INTERACTION: SLIDE 19 - PES DIABETES PUZZLE
  const dbPieces = document.querySelectorAll("#diabetes-pes-puzzle .puzzle-piece");
  const dbSlots = document.querySelectorAll("#diabetes-pes-puzzle .puzzle-slot");
  const validateDbPuzzleBtn = document.getElementById("btn-validate-db-puzzle");
  const dbPuzzleFeedback = document.getElementById("db-puzzle-feedback");
  const dbPool = document.getElementById("db-puzzle-pieces-pool");

  const dbPlacement = { "db-slot-p": null, "db-slot-e": null, "db-slot-s": null };
  let dbActivePiece = null;

  dbPieces.forEach(piece => {
    piece.addEventListener("click", () => {
      if (dbActivePiece === piece) {
        piece.style.outline = "none";
        dbActivePiece = null;
      } else {
        if (dbActivePiece) dbActivePiece.style.outline = "none";
        dbActivePiece = piece;
        piece.style.outline = "3px solid var(--primary)";
      }
    });
  });

  dbSlots.forEach(slot => {
    slot.addEventListener("click", () => {
      if (dbActivePiece) {
        dbActivePiece.style.outline = "none";
        const current = dbPlacement[slot.id];
        if (current) {
          dbPool.appendChild(current);
          current.classList.remove("placed");
        }
        slot.innerHTML = "";
        slot.appendChild(dbActivePiece);
        dbActivePiece.classList.add("placed");
        dbPlacement[slot.id] = dbActivePiece;
        dbActivePiece = null;
      } else {
        const current = dbPlacement[slot.id];
        if (current) {
          dbPool.appendChild(current);
          current.classList.remove("placed");
          dbPlacement[slot.id] = null;
          slot.innerHTML = `<div style="font-size:0.75rem; color:var(--text-muted)">Coloque la pieza aquí</div>`;
        }
      }
    });
  });

  if (validateDbPuzzleBtn) {
    validateDbPuzzleBtn.addEventListener("click", () => {
      let correct = true;
      let unfilled = false;
      
      dbSlots.forEach(slot => {
        const piece = dbPlacement[slot.id];
        if (!piece) {
          unfilled = true;
          slot.classList.remove("correct");
        } else {
          if (slot.dataset.type === piece.dataset.type) {
            slot.classList.add("correct");
          } else {
            slot.classList.remove("correct");
            correct = false;
          }
        }
      });

      if (unfilled) {
        dbPuzzleFeedback.textContent = "Por favor, llene todas las casillas del rompecabezas.";
        dbPuzzleFeedback.style.color = "var(--accent)";
      } else if (correct) {
        dbPuzzleFeedback.textContent = "¡Impecable! El enunciado diagnóstico PES es clínicamente lógico y justificado.";
        dbPuzzleFeedback.style.color = "var(--secondary)";
      } else {
        dbPuzzleFeedback.textContent = "Estructura incorrecta. P = Problema, E = Etiología, S = Signos/Síntomas.";
        dbPuzzleFeedback.style.color = "var(--danger)";
      }
    });
  }

  // WIDGET INTERACTION: SLIDE 26 - ADVANCED MEAL PLATE BUILDER
  const ichoSlider = document.getElementById("input-calc-icho");
  const glucosaSlider = document.getElementById("input-calc-glucosa");
  const valIcho = document.getElementById("val-calc-icho");
  const valGlucosa = document.getElementById("val-calc-glucosa");
  const plateArea = document.getElementById("interactive-plate-area");
  
  const totalChoText = document.getElementById("total-cho-val");
  const boloChoText = document.getElementById("bolo-cho-val");
  const boloCorrText = document.getElementById("bolo-corr-val");
  const totalUgpText = document.getElementById("total-ugp-val");
  const totalBoloText = document.getElementById("total-bolo-val");

  const foodSelectBtns = document.querySelectorAll(".food-select-btn");
  const foodData = {
    manzana: { label: "🍎", cho: 15, prot: 0, fat: 0, ugp: 0 },
    pan: { label: "🍞", cho: 30, prot: 4, fat: 1, ugp: 0 },
    tocino: { label: "🥓", cho: 0, prot: 12, fat: 28, ugp: 2.8 } // High fat/prot generates UGP
  };

  const selectedFoods = {};

  function updateMealCalculations() {
    let totalCho = 0;
    let totalUgp = 0;
    
    // Clear plate and render selected items
    plateArea.innerHTML = "";
    
    Object.keys(selectedFoods).forEach(id => {
      if (selectedFoods[id]) {
        totalCho += foodData[id].cho;
        totalUgp += foodData[id].ugp;
        
        const emoji = document.createElement("span");
        emoji.className = "plate-food-on-plate";
        emoji.textContent = foodData[id].label;
        plateArea.appendChild(emoji);
      }
    });

    const icho = parseInt(ichoSlider.value);
    const glucosa = parseInt(glucosaSlider.value);
    
    valIcho.textContent = icho;
    valGlucosa.textContent = `${glucosa} mg/dL`;
    
    // Insulin calculations
    const boloCho = totalCho / icho;
    const correctionFactor = 40; // FSI fixed at 40
    const boloCorr = glucosa > 100 ? (glucosa - 100) / correctionFactor : 0;
    
    // Total insulin includes UGP factor (0.5 units insulin per UGP)
    const boloUgpInsulin = totalUgp * 0.5;
    const totalBolo = boloCho + boloCorr + boloUgpInsulin;

    totalChoText.textContent = `${totalCho} g`;
    boloChoText.textContent = `${boloCho.toFixed(1)} U`;
    boloCorrText.textContent = `${boloCorr.toFixed(1)} U`;
    totalUgpText.textContent = `${totalUgp.toFixed(1)} UGP (+${boloUgpInsulin.toFixed(1)} U)`;
    totalBoloText.textContent = `${totalBolo.toFixed(1)} U`;
  }

  foodSelectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      selectedFoods[id] = !selectedFoods[id];
      btn.classList.toggle("active");
      updateMealCalculations();
    });
  });

  if (ichoSlider && glucosaSlider) {
    ichoSlider.addEventListener("input", updateMealCalculations);
    glucosaSlider.addEventListener("input", updateMealCalculations);
  }

  // WIDGET INTERACTION: SLIDE 27 - RULE OF 15 TIMER SIMULATION
  const btnR15Timer = document.getElementById("btn-start-r15-timer");
  const step1Card = document.getElementById("r15-step1");
  const step2Card = document.getElementById("r15-step2");
  const step3Card = document.getElementById("r15-step3");

  if (btnR15Timer) {
    btnR15Timer.addEventListener("click", () => {
      btnR15Timer.disabled = true;
      let count = 5; // simulated 5 seconds representing 15 minutes
      
      step1Card.classList.remove("active");
      step2Card.classList.add("active");
      
      const interval = setInterval(() => {
        btnR15Timer.textContent = `Esperando... ${count}s`;
        count--;
        
        if (count < 0) {
          clearInterval(interval);
          step2Card.classList.remove("active");
          step3Card.classList.add("active");
          btnR15Timer.textContent = "✓ Reevaluación lista";
        }
      }, 1000);
    });
  }

  // WIDGET INTERACTION: SLIDE 29 - CGM SIMULATOR
  const btnCgmEat = document.getElementById("btn-cgm-eat");
  const btnCgmInject = document.getElementById("btn-cgm-inject");
  const cgmText = document.getElementById("cgm-numeric-val");
  const cgmArrow = document.getElementById("cgm-trend-arrow");
  const cgmTrendPath = document.getElementById("cgm-trend-path");

  let cgmGlucose = 140;

  if (btnCgmEat && btnCgmInject && cgmText && cgmArrow && cgmTrendPath) {
    function animateCgmLine(direction) {
      if (direction === "up") {
        cgmTrendPath.setAttribute("d", "M 0 60 L 50 65 L 100 80 L 150 100 L 200 110 L 250 115");
        cgmTrendPath.style.stroke = "var(--accent)";
      } else {
        cgmTrendPath.setAttribute("d", "M 0 60 L 50 55 L 100 40 L 150 25 L 200 15 L 250 10");
        cgmTrendPath.style.stroke = "var(--danger)";
      }
      
      setTimeout(() => {
        // Return to flat trace
        cgmTrendPath.setAttribute("d", "M 0 60 L 50 60 L 100 60 L 150 60 L 200 60 L 250 60");
        cgmTrendPath.style.stroke = "var(--primary)";
      }, 3000);
    }

    btnCgmEat.addEventListener("click", () => {
      cgmGlucose = Math.min(cgmGlucose + 50, 300);
      cgmText.innerHTML = `${cgmGlucose} <span style="font-size:0.75rem; color:var(--text-muted)">mg/dL</span>`;
      cgmArrow.textContent = "↗";
      cgmArrow.className = "cgm-trend-arrow up";
      animateCgmLine("up");
    });

    btnCgmInject.addEventListener("click", () => {
      cgmGlucose = Math.max(cgmGlucose - 60, 50);
      cgmText.innerHTML = `${cgmGlucose} <span style="font-size:0.75rem; color:var(--text-muted)">mg/dL</span>`;
      cgmArrow.textContent = "↘";
      cgmArrow.className = "cgm-trend-arrow down";
      animateCgmLine("down");
    });
  }

  // WIDGET INTERACTION: SLIDE 33 - CASE 1 QUIZ
  const case1Quiz = document.getElementById("case1-quiz");
  const case1Feedback = document.getElementById("case1-feedback");
  if (case1Quiz && case1Feedback) {
    case1Quiz.addEventListener("click", (e) => {
      const option = e.target.closest(".quiz-option");
      if (option) {
        case1Quiz.querySelectorAll(".quiz-option").forEach(btn => btn.classList.remove("selected"));
        option.classList.add("selected");
        case1Feedback.style.display = "block";
        
        if (option.dataset.id === "a") {
          case1Feedback.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
          case1Feedback.style.borderLeftColor = "var(--secondary)";
          case1Feedback.innerHTML = `<strong>¡Correcto!</strong> Ingesta deficiente de CHO relacionado con temor a la hiperglucemia evidenciado por hipoglucemias nocturnas recurrentes por omisión de carbohidratos.`;
        } else {
          case1Feedback.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
          case1Feedback.style.borderLeftColor = "var(--danger)";
          case1Feedback.innerHTML = `<strong>Incorrecto.</strong> El descontrol en insulina es una etiología médica que compete al endocrinólogo. Nuestro PES debe enfocarse en la ingesta o conducta del paciente.`;
        }
      }
    });
  }

  // WIDGET INTERACTION: SLIDE 35 - CASE 2 QUIZ
  const case2Quiz = document.getElementById("case2-quiz");
  const case2Feedback = document.getElementById("case2-feedback");
  if (case2Quiz && case2Feedback) {
    case2Quiz.addEventListener("click", (e) => {
      const option = e.target.closest(".quiz-option");
      if (option) {
        case2Quiz.querySelectorAll(".quiz-option").forEach(btn => btn.classList.remove("selected"));
        option.classList.add("selected");
        case2Feedback.style.display = "block";
        
        if (option.dataset.id === "a") {
          case2Feedback.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
          case2Feedback.style.borderLeftColor = "var(--secondary)";
          case2Feedback.innerHTML = `<strong>¡Correcto!</strong> Un déficit calórico moderado promueve una pérdida de peso sostenible y revierte la resistencia insulínica de forma segura y duradera.`;
        } else {
          case2Feedback.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
          case2Feedback.style.borderLeftColor = "var(--danger)";
          case2Feedback.innerHTML = `<strong>Incorrecto.</strong> Las dietas cetogénicas estrictas a menudo comprometen la función renal y la adherencia en pacientes con diabetes de larga evolución.`;
        }
      }
    });
  }

  // WIDGET INTERACTION: SLIDE 37 - CASE 3 QUIZ
  const case3Quiz = document.getElementById("case3-quiz");
  const case3Feedback = document.getElementById("case3-feedback");
  if (case3Quiz && case3Feedback) {
    case3Quiz.addEventListener("click", (e) => {
      const option = e.target.closest(".quiz-option");
      if (option) {
        case3Quiz.querySelectorAll(".quiz-option").forEach(btn => btn.classList.remove("selected"));
        option.classList.add("selected");
        case3Feedback.style.display = "block";
        
        if (option.dataset.id === "a") {
          case3Feedback.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
          case3Feedback.style.borderLeftColor = "var(--secondary)";
          case3Feedback.innerHTML = `<strong>¡Correcto!</strong> La insulina NPH tiene picos marcados. Coordinar la ingesta dietética con estos picos evita hipoglucemias severas durante la tarde o madrugada.`;
        } else {
          case3Feedback.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
          case3Feedback.style.borderLeftColor = "var(--danger)";
          case3Feedback.innerHTML = `<strong>Incorrecto.</strong> Restringir de forma rígida los CHO en la cena con NPH activa aumenta significativamente el riesgo de hipoglucemia severa a mitad de la noche.`;
        }
      }
    });
  }

  // WIDGET INTERACTION: SLIDE 39 - ERROR CARDS FLIP
  const errorCards = document.querySelectorAll(".error-flip-card");
  errorCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Initial load notes and calculations
  updateSlide(1);
  updateMealCalculations();
});
