const hairCut = 1;
const hairCutHighlights = 2;
const hairCutDye = 3;
const hairCutPrice = 1200;
const hairCutHighlightsPrice = 4500;
const hairCutDyePrice = 6000;

const appointmentDateOne = new Date(2023, 5, 26, 19, 0, 0);
const appointmentDateTwo = new Date(2023, 5, 27, 18, 0, 0);
const appointmentDateThree = new Date(2023, 5, 28, 18, 30, 0);
const dateVacation = new Date(2023, 5, 29);

const consumers = [];
consumers[0] = new consumerData("Martin", "Gutierrez", appointmentDateOne);
consumers[1] = new consumerData("Juan", "Benitez", appointmentDateTwo);
consumers[2] = new consumerData("Ivan", "Sandoval", appointmentDateThree);

let appointmentDate;
let barberDate;
let option;
let quitMenu = false;
let askAgain = false;

function validInput(appointmentDate) {
  let containsLetters = false;
  let containsNumbers = false;
  for (let i = 0; i < appointmentDate.length; i++) {
    if (isNaN(appointmentDate[i])) {
      containsLetters = true;
    } else {
      containsNumbers = true;
    }

    if (containsLetters && containsNumbers) return true; // La entrada contiene al menos una letra y un numero
  }
  return false; // La entrada no cumple con los requisitos
}

const barberDateConfirm = (totalPrice) => {
  alert(
    `¡Su cita se registró con exito! Gracias por confiar de nuevo en nosotros. El costo de su servicio será: $${totalPrice}.
    Dia de la cita: ${appointmentDate}.
    `
  );
};
alert(
  `¡Bienvenido a Naribarber! A continuacion elija su servicio. Le comentamos que a partir del ${dateVacation} estaremos cerrados por vacaciones.`
);

do {
  while (!askAgain) {
    appointmentDate = prompt(`
    Elija una fecha dentro del horario de 14 a 20 hs y un dia para ser atendido, los siguientes dias/horarios estan ocupados \n
      ${consumers[0].appointmentDate}
      ${consumers[1].appointmentDate}
      ${consumers[2].appointmentDate}
`);
    if (validInput(appointmentDate)) {
      askAgain = true;
    } else {
      askAgain = false;
      alert("Ingrese una fecha valida.");
    }
  }
  let option = Number(
    prompt(`Ingrese la opcion que desee: \n
        ${hairCut} - $${hairCutPrice} Corte de cabello. \n
        ${hairCutHighlights} - $${hairCutHighlightsPrice} Tintura (Reflejos) + corte de cabello. \n
        ${hairCutDye} - $${hairCutDyePrice} Tintura (Global) + corte de cabello.`)
  );
  switch (option) {
    case hairCut:
      barberDateConfirm(`${hairCutPrice}`);
      //  console.log("Corte de pelo");
      break;
    case hairCutHighlights:
      barberDateConfirm(`${hairCutHighlightsPrice}`);
      //  console.log("Corte de pelo con reflejos");
      break;
    case hairCutDye:
      barberDateConfirm(`${hairCutDyePrice}`);
      //  console.log("Corte de pelo + tintura global");
      break;
    default:
      alert("Su elección no es valida.");
  }

  let interactWithMenu = prompt("Si desea realizar otro ticket escriba: si");
  if (interactWithMenu === "si") {
    quitMenu = false;
  } else {
    quitMenu = true;
    alert("Elegiste salir del menú");
  }
} while (!quitMenu);
