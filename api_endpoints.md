<div align="center">

# API - Sistema de Gestión de Cobertura Futbolística

</div>

| Endpoint | Método | Descripción |
|-----------|-----------|-----------|
| /partidos | GET | Obtiene el listado de partidos |
| /partidos | POST | Registra un nuevo partido |
| /partidos/{id} | PUT | Modifica un partido existente |
| /partidos/{id} | DELETE | Elimina un partido |
| /equipos | GET | Obtiene los equipos registrados |
| /equipos | POST | Registra un nuevo equipo |
| /equipos/{id} | PUT | Modifica un equipo |
| /equipos/{id} | DELETE | Elimina un equipo |
| /notas | GET | Obtiene las notas registradas |
| /notas | POST | Registra una nueva nota |
| /notas/{id} | PUT | Modifica una nota |
| /notas/{id} | DELETE | Elimina una nota |
| /eventos | GET | Obtiene los eventos de un partido |
| /eventos | POST | Registra eventos del partido |
| /articulos/generar | POST | Genera artículos desde notas |
| /estadisticas | GET | Obtiene estadísticas básicas |
| /predicciones/{idPartido} | GET | Genera predicciones simples |