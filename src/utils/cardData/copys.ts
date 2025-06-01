import key from '../../assets/images/key1.png'
import pc from '../../assets/images/pc1.png'
import user from '../../assets/images/user1.png'
export const DataCardsHome =[
  {
    title: "Asignacion de Computadores",
    description: "Asignar un equipo portatil a un nuevo ingreso",
    url: "/asignacion",
    image: pc,
    btnText: "Asignar computador"
  },
  {
    title: "Creacion de Usuario",
    description: "Registrar a una nueva persona en el equipo",
    url: "/Ingreso",
    image: user,
    btnText: "Registrar nuevo ingreso"
  },
  {
    title: "Solicitud de Accesos",
    description: "Solicitar permisos para un nuevo miembro del equipo",
    url: "/Permisos",
    image: key,
    btnText: "Solicitar acceso"
  }
];

export const DataCardsAsignacion =[
  {
    title: "Asignacion de Computadores",
    description: "",
    url: "/asignacion/AsignacionEquipo",
    image: "",
    btnText: "Asignar computador"
  },
  {
    title: "Consulta de Usuario",
    description: "",
    url: "/asignacion/consulta",
    image: "",
    btnText: "Registrar nuevo ingreso"
  }
];

export const ingresoInputs = [
  { name: "documento", type: "number", placeholder: "Ingresa cédula", required: true, className:"form-control" },
  { name: "nombre", type: "text", placeholder: "Ingresa Nombre Completo", required: true, className:"form-control" },
  { name: "correo", type: "email", placeholder: "Ingresa Correo", required: true, className:"form-control" },
  { name: "area", type: "text", placeholder: "Ingresa area", required: true, className:"form-control" },
  { name: "rol", type: "text", placeholder: "Ingresa rol", required: true, className:"form-control" },
];

export const PermisosInputs = [
  { name: "documento", type: "number", placeholder: "Ingresa cédula", required: true, className:"form-control" },
  { name: "rol", type: "text", placeholder: "Ingresa Nombre Completo", required: true, className:"form-control" },
  { name: "aws", type: "email", placeholder: "Ingresa Correo", required: true, className:"form-control" },
  { name: "github", type: "text", placeholder: "Ingresa area", required: true, className:"form-check-label" },
  { name: "Jira", type: "text", placeholder: "Ingresa rol", required: true, className:"form-control" },
  { name: "Jira tipo de acceso", type: "text", placeholder: "Ingresa rol", required: true, className:"form-control" },
];

export const permisosInputs = [
  { name: "documento", type: "number", placeholder: "Ingresa cédula", required: true },
  { name: "nombre", type: "text", placeholder: "Ingresa Nombre Completo", required: true },
  { name: "correo", type: "email", placeholder: "Ingresa Correo", required: true },
  { name: "area", type: "text", placeholder: "Ingresa area", required: true },
  { name: "rol", type: "text", placeholder: "Ingresa rol", required: true },
];

