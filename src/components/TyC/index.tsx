import { useEffect } from "react";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });
  return (
    <div className="modal-body text-start container mt-5">
      <h1>
        Política de Tratamiento de Datos Personales - Términos y condiciones
      </h1>

      <p>
        En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de la
        República de Colombia, y con el objetivo de garantizar la protección de
        los derechos fundamentales de privacidad, intimidad y buen nombre,
        ReWear adopta la presente Política de Tratamiento de Datos Personales,
        la cual describe los términos y condiciones bajo los cuales realizamos
        la recolección, almacenamiento, uso, circulación, transferencia y
        eliminación de datos personales.
      </p>
      <ol>
        <li>Responsable del Tratamiento de Datos Personales</li>
        <ul>
          <li>
            <b>Razón social: </b>
            ReWear
          </li>
          <li>
            <b>Correo electrónico: </b>
            contactorewear@gmail.com
          </li>
        </ul>

        <li>Definiciones</li>
        <p>Para efectos de esta política, se entiende por:</p>
        <ul>
          <li>
            <b>Dato personal: </b>
            Cualquier información vinculada o que pueda asociarse a una persona
            natural determinada.
          </li>
          <li>
            <b>Dato sensible: </b>
            Información que afecta la privacidad del titular o cuyo uso indebido
            puede generar discriminación (por ejemplo, datos sobre origen
            racial, orientación sexual, estado de salud, entre otros).
          </li>
          <li>
            <b>Titular: </b>
            Persona natural cuyos datos personales son objeto de tratamiento.
          </li>
          <li>
            <b>Tratamiento: </b>
            Cualquier operación sobre datos personales, como recolección,
            almacenamiento, uso, transferencia o eliminación.
          </li>
          <li>
            <b>Responsable: </b>
            Persona jurídica que decide sobre el tratamiento de los datos
            personales.
          </li>
        </ul>
        <li>Finalidades del tratamiento</li>
        <p>
          Los datos personales recolectados por ReWear serán utilizados
          únicamente para los siguientes fines:
        </p>
        <ol>
          <li>
            <b>Gestión de usuarios: </b>
            Registro, autenticación y administración de cuentas en la
            plataforma.
          </li>
          <li>
            <b>Comunicaciones: </b>Envío de información relevante sobre el uso
            de la plataforma, novedades, actualizaciones y promociones
          </li>
          <li>
            <b>Transacciones comerciales: </b>Procesamiento de compras, ventas y
            pagos en la plataforma.
          </li>
          <li>
            <b>Marketing y publicidad: </b>Envío de ofertas personalizadas
            basadas en preferencias del usuario, siempre bajo su consentimiento
            previo.
          </li>
          <li>
            <b>Cumplimiento normativo: </b>Satisfacción de requerimientos
            legales de entidades gubernamentales
          </li>
          <li>
            <b>Atención al cliente: </b>Resolución de quejas, peticiones y
            reclamos (PQRS).
          </li>
          <li>
            <b>Seguridad: </b>Prevención de fraudes, validación de identidad y
            protección de la plataforma.
          </li>
        </ol>
        <p>
          <b>
            Nota: En el caso de datos sensibles, sólo serán tratados con el
            consentimiento explícito del titular y para las finalidades
            autorizadas por ley.
          </b>
        </p>
        <li>Derechos de los titulares</li>
        <p>
          De conformidad con la Ley 1581 de 2012, los titulares de los datos
          tienen los siguientes derechos:
        </p>
        <ol>
          <li>
            <b>Acceso: </b>Conocer, actualizar y rectificar sus datos
            personales.
          </li>
          <li>
            <b>Revocatoria del consentimiento: </b>Solicitar en cualquier
            momento la supresión de sus datos o revocar la autorización otorgada
            para su tratamiento, siempre que no exista un deber legal o
            contractual que lo impida.
          </li>
          <li>
            <b>Prueba de autorización: </b>Solicitar prueba de la autorización
            otorgada para el tratamiento de datos.
          </li>
          <li>
            <b>Consulta y queja: </b>Presentar consultas o quejas relacionadas
            con el tratamiento de sus datos personales.
          </li>
          <li>
            <b>Reclamo ante la SIC: </b>Elevar reclamos ante la Superintendencia
            de Industria y Comercio (SIC) en caso de incumplimiento de las
            disposiciones legales por parte de ReWear.
          </li>
        </ol>
        <li>Principios aplicables al tratamiento</li>
        <p>
          El tratamiento de datos personales por parte de ReWear se regirá por
          los siguientes principios:
        </p>
        <ol>
          <li>
            <b>Legalidad: </b>Todo tratamiento se realizará conforme a las
            disposiciones legales.
          </li>
          <li>
            <b>Finalidad: </b>Los datos personales serán recolectados con una
            finalidad específica, explícita y legítima.
          </li>
          <li>
            <b>Libertad: </b>El tratamiento solo se realizará con el
            consentimiento previo, explícito e informado del titular.
          </li>
          <li>
            <b>Transparencia: </b>Se garantizará el derecho del titular a
            obtener información clara sobre el tratamiento de sus datos.
          </li>
          <li>
            <b>Seguridad: </b>Implementaremos medidas técnicas, administrativas
            y humanas para proteger los datos contra acceso no autorizado,
            pérdida, alteración o divulgación indebida.
          </li>
        </ol>
        <li>Seguridad de la Información</li>
        <p>
          ReWear adopta prácticas robustas para proteger los datos personales,
          incluyendo:
        </p>
        <ol>
          <li>
            <b>Encriptación de datos sensibles.</b>
          </li>
          <li>
            <b>Restricción de acceso: </b>Solo personal autorizado tendrá acceso
            a los datos.
          </li>
        </ol>
        <li>Cambios en la política</li>
        <p>
          Esta política podrá ser modificada en cualquier momento para adaptarse
          a cambios normativos o a nuevas necesidades del servicio. Los cambios
          serán informados a los titulares mediante [correo electrónico o
          notificación en la plataforma], otorgándoles la posibilidad de aceptar
          o rechazar los nuevos términos.
        </p>
        <li>Vigencia</li>
        <p>
          Esta política rige a partir de su fecha de publicación y se mantendrá
          vigente mientras ReWear lleve a cabo actividades de tratamiento de
          datos personales.
        </p>
      </ol>
      <p>Fecha de actualización: 13/01/2025</p>
    </div>
  );
}

export default index;
