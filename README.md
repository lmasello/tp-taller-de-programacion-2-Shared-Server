# tp-taller-de-programacion-2-Shared-Server
Shared server repository for the semestral project of the subject 'Taller de Programación II' of the University of Buenos Aires which consist of doing an application similar to Spotify.

## Run docker container
Execute the following commands at the root of the project:

 - Get the docker image
```bash
docker pull lmasello/music-io-shared-server
```
 - Run the image
```bash
docker run -p 8888:3000 lmasello/music-io-shared-server
```
