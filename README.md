# Redes de Computadoras

## Reglas para el tipo de branch

Los tipos de ramas se clasificarán de la siguiente manera.

`feature`: Para desarrollos de nuevas características en el proyecto.
`hotfix`: Para fixes rápidos, que no conlleven complejidad, como cambiar un string en el proyecto.
`bugfix`: Para fixes más complejos, como cambiar el funcionamiento de algún método.

## Creación de branch

Todos los feature/hotfix/bugfix deben crearse en la rama `develop`, jamás en `master`.

La estructura de creación de una rama debe ser la siguiente:

`branch_type/short_user_name-short_description`

Se debe elegir un short_user_name al gusto, por ejemplo para Jonathan Rojas, puede ser jonrojas.
El short_description debe ser una pequeña descripción SIN espacios, los espacios deben ser sustituidos por guiones bajos. 
La descripción siempre será en inglés, quedando una branch de la siguiente manera:

`feature/jonrojas-adding_autoeval_to_module_3`
`hotfix/jonrojas-changing_module_name_to_module_1`
`bugfix/jonrojas-static_files_showing_in_iframe_not_local_window`

## Comandos para git

Para poder crear una branch desde develop (desde la terminal), se debe asegurar que se encuentra uno en develop, para esto escribir:

`git branch`

Después debes actualizar develop:

`git pull`

El comando para crear la branch es:

`git checkout -b branch_type/short_user_name-short_description`

Una vez que tengas los cambios commiteados, puedes hacer push con:

`git push -u origin branch_type/short_user_name-short_description`

## Reglas para commits

Todos los commits deben contener un mensaje, dicho mensaje comenzará con el short_user_name y una pequeña descripción en inglés con espacios que sea descriptiva (no debe contener carácteres especiales) y diferente al nombre de la branch, por ejemplo:

git commit -m "jonrojas adding ng description to readme file"

## Deploy en GitHub Pages

Para poder desplegar los cambios que se han hecho en `develop` para GitHub pages, es necesario que estos cambios estén en `master`, para esto, debes crear un merge request desde develop a master (recomiendo hacerlo desde el dashboard de GitHub), una vez que el merge se ha hecho (JAMÁS BORRAR LA RAMA DEVELOP EN EL MERGE REQUEST, ¡¡¡¡¡JAMÁS!!!!!) desde la terminal, debes cambiarte a la branch `master` y una vez que te encuentres en dicha rama, debes realizar un deploy con el siguiente comando:

`ng deploy --base-href=https://ServicioSocialAxel.github.io/RedesComputadoras/`

## NG

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
