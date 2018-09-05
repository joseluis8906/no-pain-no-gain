# no-pain-no-gain
Api Rest of no-pain-no-gain app

Para instalar las dependencias
* npm install

Para ejecutar el api-service
* npm run start

# --Dependencias
Mongodb con una database de nombre NO_PAIN_NO_GAIN

# --Requerimientos

1). (Solucionado) Crear un modelo de datos para soportar los requerimientos del gimnasio usando MongoDB.

2). (Solucionado) Crear un endpoint que permita al usuario admin iniciar sesión.

3). (Solucionado) Crear un endpoint para el registro de las ciudades (Solo puede ser consumido por un admin que     este logueado).

4). (Solucionado) Crear un endpoint para el registro de sedes (Solo puede ser consumido por un admin que este       logueado).

5). (Solucionado) Crear un endpoint para el registro de usuarios. Validar si el usuario ya está registrado.

6). (Solucionado) Crear un endpoint que me permita consultar los usuarios registrados en una sede de una            determinada ciudad sedes (Solo puede ser consumido por un admin que este logueado).

7). (Sin Implementar) Agregar por lo menos 3 pruebas unitarias usando Jest.

8). (Solucionado) Crear una colección usando Postman (https://www.getpostman.com/)  que tenga el consumo de los     endpoints: https://www.getpostman.com/collections/685e71c36736ad763d90



# --Usage:

1). Crear dos usuarios con el metodo postman usuario/create, uno con role='admin' y otro con role='user';

2). Hacer login con el metodo postman auth/create y enviar los parametros de un usuario en especifico; copiar el toquen devuelto en el header "x-access-token".

-- Las siguientes peticiones deben tener definido el header x-access-token con el valor capturado en el metodo auth/create

3). Crear una ciudad con el metodo postman ciudad/create

4). Crear una sede con el metodo sede/create

5). Asociar un usuario a una sede con el metodo sede/addUsuario

6). Consultar la lista de usuarios con el metodo sede/getUsuarios

# --Nota:
Si al realizar una petición recibe una respuesta de permision denied, verifique que el la petición envía el header x-access-token y que el token fue generado con un usuario de role='admin'