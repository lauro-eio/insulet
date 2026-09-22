function enviarDiagnosticoLiderazgo(e) {
  // 1. Obtener la fila ingresada
  var fila = e.values; 
  if (!fila) return;

  // Buscar el correo electrónico en la fila
  var correoUsuario = "";
  for (var k = 0; k < fila.length; k++) {
    if (fila[k] && fila[k].includes("@")) {
      correoUsuario = fila[k];
      break;
    }
  }

  // Contadores
  var conteoPunitivo = 0;   // Perfil 1
  var conteoAmbiguo = 0;    // Perfil 2
  var conteoPositivo = 0;   // Perfil 3

  // Palabras / Frases clave asociadas a cada perfil
  var clavesPunitivo = [
    "Exijo explicaciones", "Señalo públicamente", "Señalo publicamente", "Impones las directrices", 
    "Interpreto el cuestionamiento", "falta de capacidad", "Enfocada únicamente", "Enfocada unicamente", 
    "Presiono al equipo", "sanciona o descalifica", "Unilateral, donde yo expongo", "Desgaste o frustración", 
    "Desgaste o frustracion", "Impono las nuevas", "Impongo las nuevas", "Cuestiono a ambas partes", 
    "No hago mayor énfasis", "No hago mayor enfasis", "control estricto", "Defiendo mi postura", 
    "Mediante presion", "Mediante presión", "Acceso restringido", "falta de compromiso", 
    "La impongo de inmediato", "Garantizar el control"
  ];

  var clavesAmbiguo = [
    "Dejo que el equipo intente", "instrucciones generales pero no defino", "Asignas el objetivo general", 
    "pospongo indefinidamente", "prefiero no intervenir", "Esporadica", "Esporádica", "problema estalle", 
    "pida ayuda a un compañero", "Imprecisa, se abarcan", "Desconexión por falta", "Desconexion por falta", 
    "Trasmito las nuevas", "Transmito las nuevas", "resuelvan entre ellos de forma informal", "Felicito brevemente", 
    "Evito hablar del tema", "Minimizo el detalle", "Confiando en que cada quien", "Distribución parcial", 
    "Distribucion parcial", "Lo ignoro mientras", "La sugiero como opción", "La sugiero como opcion", 
    "Evitar problemas y mantener"
  ];

  var clavesPositivo = [
    "Analizo con el equipo", "Uso el error como", "absoluta claridad para el equipo", "Considero la propuesta", 
    "oportunidad de acompañamiento", "Estructurada, constante", "Promuevo que el equipo me reporte", 
    "evalua la brecha", "evalúa la brecha", "Abierta, fluida y enfocada", "ayuda a retener", "Explico el contexto", 
    "Redefino de inmediato", "Reconozco el esfuerzo", "Priorizo tareas, elimino", "Agradezco la observacion", 
    "Agradezco la observación", "revisiones intermedias", "Transparencia total", "Converso individualmente", 
    "prueba piloto", "Construir un entorno de claridad"
  ];

  // Helper para verificar coincidencias de texto
  function coincide(texto, lista) {
    var t = texto.toLowerCase();
    for (var i = 0; i < lista.length; i++) {
      if (t.indexOf(lista[i].toLowerCase()) !== -1) {
        return true;
      }
    }
    return false;
  }

  // 2. Recorrer la fila enviada
  for (var j = 0; j < fila.length; j++) {
    var resp = fila[j].toString().trim();
    if (!resp || resp.includes("@") || resp.includes("/") && resp.length < 20) continue; // Saltar email y Timestamp

    if (coincide(resp, clavesPunitivo)) {
      conteoPunitivo++;
    } else if (coincide(resp, clavesAmbiguo)) {
      conteoAmbiguo++;
    } else if (coincide(resp, clavesPositivo)) {
      conteoPositivo++;
    }
  }

  // 3. Determinar el Perfil Predominante
  var tituloPerfil = "";
  var descripcionPerfil = "";

  if (conteoPositivo >= conteoPunitivo && conteoPositivo >= conteoAmbiguo) {
    tituloPerfil = "Líder Positivo con Seguridad Psicológica";
    descripcionPerfil = "Tu estilo prioriza la claridad en las funciones, el trato respetuoso y el aprendizaje continuo a partir del error. Fomentas un entorno donde el equipo reporta fallas a tiempo y propone soluciones, maximizando la eficiencia operativa y la retención de talento.";
  } else if (conteoPunitivo >= conteoAmbiguo) {
    tituloPerfil = "Líder Punitivo / Autoritario";
    descripcionPerfil = "Tu estilo está orientado al control estricto y la presión. Ten cuidado: este enfoque suele generar 'silencio defensivo' en el equipo, provocando que las fallas se oculten por temor a reprimendas y aumentando el estrés y la rotación de personal.";
  } else {
    tituloPerfil = "Líder Ambiguo / Reactivo";
    descripcionPerfil = "Tu estilo muestra falta de definición clara en metas, roles y seguimiento. La ambigüedad en las funciones suele elevar la carga mental del equipo, generar duplicidad de tareas y retrasar la resolución proactiva de problemas.";
  }

  // 4. Armar el correo electrónico
  var asunto = "Tu Diagnóstico de Estilo de Liderazgo y Seguridad Psicológica";
  var cuerpoMensaje = "Hola,\n\n" +
    "Gracias por completar el test. Aquí tienes tu resultado de diagnóstico instantáneo:\n\n" +
    "--------------------------------------------------\n" +
    "PERFIL PREDOMINANTE: " + tituloPerfil + "\n" +
    "--------------------------------------------------\n\n" +
    "DESGLOSE DE TUS RESPUESTAS:\n" +
    "- Enfoque Positivo / Seguridad Psicológica: " + conteoPositivo + " de 20\n" +
    "- Enfoque Punitivo / Control: " + conteoPunitivo + " de 20\n" +
    "- Enfoque Ambiguo / Reactivo: " + conteoAmbiguo + " de 20\n\n" +
    "ANÁLISIS DE TU ESTILO:\n" +
    descripcionPerfil + "\n\n" +
    "Saludos,\n" +
    "Equipo de Gestión y Desarrollo de Liderazgo";

  // 5. Enviar el correo
  if (correoUsuario && correoUsuario !== "") {
    MailApp.sendEmail(correoUsuario, asunto, cuerpoMensaje);
  }
}
