# Modulo 3 - Proyecto Integrador - Bpo Servicio Tecnico
### Desarrolladors y Contacto 
- Fernando Martin Gan ... ... Contacto : fmgsch@gmail.com

## Lecture 01 - TypeSCript

### Habilidades y competencias que desarrollaras en la lecture

- Planificación de estructura de proyecto Full Stack.
- Planificación de estructura de base de datos.

### Lineamientos - Requisitos

- Haber redactado las historias de usuario para la aplicación de gestión de turnos que vamos a desarrollar.
- Haber planteado la estructura de entidades y atributos para la aplicación. La misma debe contar con al menos las siguientes entidades: Usuarios, Turnos y Credenciales (usuario y contraseña de cada usuario).

## Lecture 01 - Actividad 01

### PUNTOS A TENER EN CUENTA

### ¡Bienvenidos al Proyecto Integrador del módulo 3!
### Notarás que este proyecto será mucho más robusto y desafiante que los anteriores, por lo cual será clave más que nunca contar con una correcta PLANIFICACIÓN.

### Para iniciar, pasamos en limpio lo que queremos lograr: una aplicación para la gestión de turnos. El usuario deberá poder, interactuando con el FrontEnd, agendar su turno en una fecha y hora determinados para asistir a ser atendido a un determinado lugar. 

### Para encarar este proyecto partiremos de algunas pautas y simplificaciones:

* Tú decides de qué lugar se trata: un banco, una peluquería, un restaurant, un consultorio médico, etc. Tendrás libertad para esta elección y luego la temática deberá verse reflejada en el diseño de tu aplicación de Frontend.

* Un usuario siempre debe estar autenticado para poder reservar un turno. No se agendará turnos a anónimos o invitados. 

* Los turnos deberán ser agendados siempre dentro del horario de atención del establecimiento, el cual también estará en tus manos decidir cuál es. También deberás tener en cuenta los fines de semana como días no laborables. 

* Asumimos que el establecimiento cuenta con “infinitos” recursos para atender a sus clientes. Es decir, si 10, 20, 50 o 100 usuarios agendaron un turno para las 10:00hs del día 11/12/24, asumimos que el lugar cuenta con capacidad para poder atenderlos a todos al mismo tiempo en este horario. 

* Los turnos reservados por los usuarios pueden ser cancelados hasta el día anterior al día de la reserva. No implementaremos la función de reprogramar. 

## EXTRA-CREDITS

### Asimismo, definiremos una serie de EXTRA-CREDITS, los cuales podrás incluir en tu proyecto en las cantidades y tiempos que estén dentro de tus posibilidades:

* Envío de confirmación vía email al usuario luego de reservar un turno o cancelarlo.

* Posibilidad de que el usuario “suba” una foto perfil a su cuenta a través de un archivo de imagen (.jpg, .png, etc).

## Lecture 01 - Actividad 02

### Ahora que tenemos estas pautas sobre la mesa, pasemos a la actividad del día: ¡a planificar!

* Redactar las “user stories” de tu proyecto. En el video que acompaña a esta consigna te explicamos qué son estos puntos y algunas estrategias para desarrollarlos.

* Define un primer esquema de tu base de datos. Probablemente luego encuentres que hay cosas que modificar o mejorar, pero al menos establece un punto de partida: entidades involucradas, relación entre las entidades, atributos que queremos describir y, muy importante, los tipos de datos de cada atributo. 



## Lecture 02 - TypeSCript II

### Habilidades y competencias que desarrollaras en la lecture

- Configuración de entorno de desarrollo con TypeScript.

### Lineamientos - Requisitos

- Haber creado correctamente el archivo `package.json`.
- Haber creado correctamente el archivo `tsconfig.json`.
- Haber creado correctamente la carpeta `src` y el modulo `index.ts` dentro de la carpeta.
- Haber configurado correctamente los comandos `build` y `start` para que funcionen de acuerdo a lo esperado en las consignas.

## Lecture 02 - Actividad 01

- En esta actividad nos centraremos en configurar nuestro entorno de desarrollo con TypeScript. Para ello haremos lo siguiente:

- Generar el archivo package.json con el comando correspondiente.

## Lecture 02 - Actividad 02

- Instalar TypeScript . Recuerda que te sugerimos hacer esta instalación de forma LOCAL.

## Lecture 02 - Actividad 03

- Generar el archivo tsconfig.json con el comando correspondiente.

## Lecture 02 - Actividad 04

- Ajustar en tsconfig.json las configuraciones que hemos visto en la clase.

## Lecture 02 - Actividad 05

- Configurar el comando build para que ejecute el compilador de TypeScript y el comando start para que ejecute dicho build.

## Lecture 02 - Actividad 06

- Crear la carpeta src del proyecto y el módulo index.ts.

## Lecture 02 - Actividad 07

- Realizar pruebas de variables, objetos, funciones y demás características de TypeScript vistas en clase dentro de este módulo index.ts.
