import key from "../../assets/images/key1.png";
import pc from "../../assets/images/pc1.png";
import user from "../../assets/images/user1.png";
export const DataCardsHome = [
  {
    title: "Asignacion de Computadores",
    description: "Asignar un equipo portatil a un nuevo ingreso",
    url: "/asignacion",
    image: pc,
    btnText: "Asignar computador",
    rol: ["lider", "dev"],
  },
  {
    title: "Creacion de Usuario",
    description: "Registrar a una nueva persona en el equipo",
    url: "/Ingreso",
    image: user,
    btnText: "Registrar nuevo ingreso",
    rol: ["lider"],
  },
  {
    title: "Solicitud de Accesos",
    description: "Solicitar permisos para un nuevo miembro del equipo",
    url: "/Permisos",
    image: key,
    btnText: "Solicitar acceso",
    rol: ["lider", "dev"],
  },
];

export const DataCardsAsignacion = [
  {
    title: "Asignacion de Computadores",
    description: "",
    url: "/asignacion/AsignacionEquipo",
    image: "",
    btnText: "Asignar computador",
    rol: ["lider"],
  },
  {
    title: "Consulta de solicitud de equipo",
    description: "",
    url: "/asignacion/consulta",
    image: "",
    btnText: "Consultar",
    rol: ["lider", "dev"],
  },
];

export const DataCardsAccess = [
  {
    title: "Asignacion de Permisos",
    description: "",
    url: "/permisos/asignacionAccesos",
    image: "",
    btnText: "Solicitar",
    rol: ["lider"],
  },
  {
    title: "Consulta de solicitud",
    description: "",
    url: "/permisos/consultaAccesos",
    image: "",
    btnText: "Consultar",
    rol: ["lider", "dev"],
  },
];

export const ingresoInputs = [
  {
    name: "documento",
    type: "number",
    placeholder: "Ingresa cédula",
    required: true,
    className: "form-control",
  },
  {
    name: "nombre",
    type: "text",
    placeholder: "Ingresa Nombre Completo",
    required: true,
    className: "form-control",
  },
  {
    name: "correo",
    type: "email",
    placeholder: "Ingresa Correo",
    required: true,
    className: "form-control",
  },
  {
    name: "area",
    type: "text",
    placeholder: "Ingresa area",
    required: true,
    className: "form-control",
  },
  {
    name: "rol",
    type: "text",
    placeholder: "Ingresa rol",
    required: true,
    className: "form-control",
  },
];

export const PermisosInputs = [
  {
    name: "documento",
    type: "number",
    placeholder: "Ingresa cédula",
    required: true,
    className: "form-control",
  },
  {
    name: "rol",
    type: "text",
    placeholder: "Ingresa Nombre Completo",
    required: true,
    className: "form-control",
  },
  {
    name: "aws",
    type: "email",
    placeholder: "Ingresa Correo",
    required: true,
    className: "form-control",
  },
  {
    name: "github",
    type: "text",
    placeholder: "Ingresa area",
    required: true,
    className: "form-check-label",
  },
  {
    name: "Jira",
    type: "text",
    placeholder: "Ingresa rol",
    required: true,
    className: "form-control",
  },
  {
    name: "Jira tipo de acceso",
    type: "text",
    placeholder: "Ingresa rol",
    required: true,
    className: "form-control",
  },
];

export const permisosInputs = [
  {
    name: "documento",
    type: "number",
    placeholder: "Ingresa cédula",
    required: true,
  },
  {
    name: "nombre",
    type: "text",
    placeholder: "Ingresa Nombre Completo",
    required: true,
  },
  {
    name: "correo",
    type: "email",
    placeholder: "Ingresa Correo",
    required: true,
  },
  { name: "area", type: "text", placeholder: "Ingresa area", required: true },
  { name: "rol", type: "text", placeholder: "Ingresa rol", required: true },
];

export const inventarioEquipos = [
  {
    equipo: "MacBook Pro M1",
    numeroSerie: "MBP2021-001",
    capacidad: "512GB",
    memoria: "16GB",
  },
  {
    equipo: "Dell XPS 13",
    numeroSerie: "DX1322-014",
    capacidad: "1TB",
    memoria: "32GB",
  },
  {
    equipo: "Lenovo ThinkPad X1",
    numeroSerie: "LTPX1-998",
    capacidad: "512GB",
    memoria: "16GB",
  },
  {
    equipo: "HP Spectre x360",
    numeroSerie: "HPS360-223",
    capacidad: "1TB",
    memoria: "16GB",
  },
  {
    equipo: "MacBook Air M2",
    numeroSerie: "MBA2023-789",
    capacidad: "256GB",
    memoria: "8GB",
  },
  {
    equipo: "Asus ZenBook 14",
    numeroSerie: "AZB14-554",
    capacidad: "512GB",
    memoria: "16GB",
  },
  {
    equipo: "Acer Swift 3",
    numeroSerie: "ASW3-342",
    capacidad: "256GB",
    memoria: "8GB",
  },
];
