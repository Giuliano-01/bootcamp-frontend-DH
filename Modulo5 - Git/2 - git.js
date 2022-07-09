/*

    Surgue ante la necesidad de:
    - Tener un backup de nuestros archivos continuamente actualizados
    - Compartir nuestro trabajo con los demas colaboradores de nuestro equipo de trabajo
    
    Que es Git:
    Es un software de control de versiones que registra los cambios realizados sobre un
    archivo o conjunto de archivos a lo largo del tiempo. De esta forma, podemos recuperar
    y tener acceso a versiones específicas cuando queramos.
    
    Github (lugar en la nube):
    Es un sitio web con almacenamiento en la nube en donde podemos guardar los proyectos de
    programación de manera gratuita.
    Estos proyectos se almacentan en un repositorio
    - En un repositorio se almacenaran los archivos del proyecto a traves del cual se podra hacer seguimiento de los mismos
    - Repositorios remotos: los que viven en github
    - Repositorios locales: los que estan en tu dispositivo
    - Repo local y remoto tienen que tener un vinculo
    
    GIT:
    -commits : paquetes que nos van a permitir ir haciendo un seguimiento de los cambios que vamos realizando, 
    dado que cada uno de ellos tiene una timestamp, o fecha de creación, y un autor. 
    Los commits van a ser nuestro historial de cambios que se fueron haciendo en el proyecto.
    
    CREAR REPO LOCAL:
    git init                                                            -crea el repositorio
    git config user.name "mi nombre"                                    - agrega nuestra identidad
    git config user.email "name@example.com"                            - agrega nuestro email
    git remote add origin https://github.com/Giuliano-01/Reporemoto     - apunta al repo remoto
    //tengo que conectar mi repo local con el repo remoto para poder enlazarlos y asi actualizar el remoto con los del local
    le ponemos de nombre origin al repo remoto 
    
    //primero hacemos un git pull para traernos el readme y licence .txt
    //luego un merge para agregarlo a nuestro repo local
    
    //y finalmente podemos hacer el push 
    
    
    administracion de credenciales/credenciales de windows y buscar github o git para cambiar
    
    clear limpia la consola

 */