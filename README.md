# Proyecto de Automatización con Cypress y Cucumber

## Introducción ✨

Este proyecto es una demostración de un flujo de automatización usando [Cypress](https://www.cypress.io/) y [Cucumber](https://cucumber.io/). El objetivo de este proyecto es realizar pruebas sobre la  aplicación web [VetSys](http://vetsys.com.uy:3000/), asegurando la calidad del siguiente flujo:

Hacer login en la app:
              -Usuario: ******* 
              -Pass: *******
Ir a Clientes:
              -Apretar botón "+".
              -Dar de alta Cliente nuevo.
              -La cédula tiene que ser válida y modular.
              -El cliente dado de alta se debe visualizar en la grilla.
Seleccionar al Cliente dado de alta:
              -Presionar el botón sobre la grilla con icono de huella, para ingresar al mantenimiento de mascotas.
              -Apretar botón "+".
              -Dar de alta una mascota.
              -La mascota debe visualizarse en la grilla.

## Requisitos previos 📋

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes componentes:

* [Node.js](https://nodejs.org/) (v14.x o superior)
* [npm](https://www.npmjs.com/)
* [Cypress](https://www.cypress.io/) (se instalará automaticamente al ejecutar npm install)

Puedes comprobar si tienes Node.js y npm instalados ejecutando los siguientes comandos en la terminal:
```bash
node -v
npm -v
```

## Instalación 🛠

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

### Clonar el repositorio

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

```bash
git clone https://github.com/lpleoped/cypress-cucumber-vetsys.git
cd cypress-cucumber-vetsys
```

### Instalar dependencias

Dentro del directorio del proyecto, instala todas las dependencias requeridas ejecutando:

```bash
npm install
```

Esto descargará todas las dependencias listadas en el archivo package.json.

## Ejecución de las pruebas ▶️
Para ejecutar las pruebas automatizadas, utiliza uno de los siguientes comandos:

* **Opción 1**: Usar el Test Runner de Cypress

1. Abre el Test Runner ejecutando:

```bash
npx cypress open
```

2. Apertura del Test Runner de Cypress
Después de ejecutar el comando, se abrirá una ventana llamada "Cypress Test Runner". 
Esta interfaz gráfica te permitirá ejecutar las pruebas manualmente.

3. Selección del tipo de testing, "E2E Testing" que debería figurarte configurado.

4. Selecciona el navegador de tu preferencia y haz clic en "Start E2E Testing in Browser"

5. Selecciona el archivo de prueba disponible y haz clic para ejecutar las pruebas.

6. Observa las pruebas en tiempo real, donde Cypress interactuará con la aplicación y mostrará los resultados (pruebas exitosas en verde y fallidas en rojo).

8. Si deseas repetir las pruebas, puedes hacer clic en "Run All Tests" o seleccionar el archivo de prueba nuevamente.

* **Opción 2**: Ejecutar las pruebas en modo headless (sin interfaz gráfica)
***Esta forma no te permitirá ver tantos detalles de las interacciones del usuario y el flujo de la prueba.***

Para ejecutar las pruebas de forma automática en modo headless, utiliza:

```bash
npx cypress run
```

## Archivos importantes 📁

A continuación se describen los archivos y carpetas clave dentro del proyecto:

* **cypress/fixtures**: Contiene los archivos de datos de prueba.
* **cypress/integration/features**: Contiene el único feature implementado: client_management.feature
* **cypress/integration/features/client_managment**: Aquí se encuentra el archivo client_managementSteps.js, con los step definitions para ejecutar las pruebas.
* **cypress/page_objects/**: Contiene los archivos Page Object Model (POM) que gestionan los elementos de la aplicación web, Login, Clientes y Mascotas.
* **cypress/support/**: Incluye configuraciones globales y comandos personalizados para Cypress.
* **cypress/utils/**: Contiene funciones modulares reutilizables, como la generación de cédulas válidas.

## Configuración de variables de entorno 🛡
El proyecto requiere la configuración de variables de entorno para ejecutar las pruebas de login. 
Para esto, crea un archivo cypress.env.json en el directorio raíz con el siguiente contenido:

env: {
  user: '11111111',
  pass: '111111'
}

Estas credenciales se utilizan para realizar el login en la aplicación.

## Conclusión 👍

Gracias por tomarte el tiempo de llegar hasta aquí y revisar este proyecto! 
Espero que te haya sido útil y fácil de seguir, realmente le puse mucha empeño y para mi no es solo un honor sino un placer poder compartir alguna de las cosas que he aprendido. 
Cualquier pregunta, comentario o sugerencia que tengas, no dudes en hacérmelo saber! Todo feedback es bienvenido! 💻🌐