export class Paciente{
    constructor(
        public _id: string, //1
        public rut: string,  //2
        public nombre: string,  //3
        public edad: Number,  //4
        public sexo: string, //5
        // public createdAt: any,
        public fotoPersonal: string,  //6
        public fechaIngreso: any,   //7 AQUI DEBO CAMBIAR AL DECLARAR
        public enfermedad: string,   //8
        public revisado: Boolean    //9
    ){}
}