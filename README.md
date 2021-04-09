# NegK-Test
Simple WhatsApp Bot

## Para usuarios de Termux

```bash
> pkg update && pkg upgrade
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> git clone https://github.com/NegK/NegK-Test
> cd NegK-Test
> npm install
```

---------

## Para usuarios de WINDOWS/VPS/RDP

* Descargar e instalar Git [`Click aqui`](https://git-scm.com/downloads)
* Descargar e instalar NodeJS [`Click aqui`](https://nodejs.org/en/download)
* Descargar e instalar FFMPEG [`Click aqui`](https://ffmpeg.org/download.html) (no olvide el path)
* Descargar e instalar ImageMagick [`Click aqui`](https://imagemagick.org/script/download.php) (por si gustas que nulis trabaje, lista de verificacion 1,2,3,5,6)

```bash
> git clone https://github.com/NegK/NegK-Test
> cd NegK-Test
> npm install
```

---------

## Run

```bash
> node . [<nombre de sesion>] (el nombre de sesion es opcional)
```

---------

## Argumentos `node . [--opcion] [<nombre de sesion>]`

### `--self`

Activar modo automático (ignora a otros)

### `--prefix <prefijos>`

Los 'prefijos' son seperados por cada carácter
Establecer prefijo

### `--server`

Se utiliza para [heroku](https://heroku.com/) o escanear a través del sitio web

### `--big-qr`

Por si el pequeño QR no es compatible

### `--restrict`

Permite plugins restringidos (pueden llevarlo hacer que su numero sea **prohibido** si se utiliza con demasiada frecuencia)

* Administracion de grupo `add, kick`

### `--img`

Habilitar inspector de imágenes a través del terminal

### `--nyimak`

Sin bot, simplemente imprima mensajes recibidos y agregue usuarios a la base de datos

### `--test`

**Development** Modo de prueba

---------

#### Funciona mediante : [`XTEAM`](https://api.xteam.xyz)

### Creador : [`Nurutomo`](https://GitHub.com/Nurutomo)

## Marca de agua por: [`DrawlNag`](https://youtube.com/c/DrawlNag)

## Reescrito al español : [`NegK`](https://github.com/NegK)
