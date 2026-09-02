# Super-Tetris 🕹️

**Trabajo Práctico - Paradigmas de Programación II**

Implementación de la lógica core del clásico juego Tetris en TypeScript. Este proyecto se centra en el modelado del dominio mediante el paradigma Orientado a Objetos (POO), aplicando rigurosas restricciones de diseño y buenas prácticas de ingeniería de software.

## 👥 Equipo de Desarrollo
* Fabrizio Graciosi
* Gonzalo Agustín Rodríguez
* Mariano Angel Cordeiro 

## 🎯 Características Arquitectónicas y Restricciones
Este proyecto fue desarrollado cumpliendo al 100% con los siguientes criterios de calidad y restricciones impuestas:

* **Encapsulamiento Estricto (Doble Encapsulamiento):** Todas las propiedades de las clases son privadas. La mutación del estado interno se realiza exclusivamente a través de métodos y `setters` protegidos (`protected`), mientras que la lectura de datos para las pruebas se expone mediante `getters` públicos (`public`).
* **Cero Condicionales (`if/switch`):** Toda la lógica de control de flujo, validación de colisiones, rotación y limpieza de líneas fue resuelta utilizando cadenas de operadores ternarios puros, eliminando por completo el uso de la palabra reservada `if`.
* **Ausencia de Diccionarios:** El sistema de puntuación y la validación de estados se implementó lógicamente sin recurrir a estructuras de datos de clave-valor (diccionarios/maps).
* **Herencia y Polimorfismo:** El sistema de piezas está modelado a partir de una clase abstracta `PieceBase`, de la cual heredan todas las variantes geométricas (`PieceSquare`, `PieceT`, `PieceStick`, etc.), permitiendo polimorfismo en la interacción con el tablero.

## 🧩 Estructura del Dominio
* `Board`: Gestiona la grilla de 20x10, detección de colisiones, bloqueo de piezas y cálculo de puntajes (100, 300, 500, 800 pts por líneas limpiadas).
* `Tetris`: Clase orquestadora que integra el tablero, la generación aleatoria de piezas y el estado general de la partida.
* `Clock`: Maneja los "ticks" de tiempo del juego que determinan la caída natural de las piezas.
* `Pieces`: Submódulo que contiene las matrices de forma y lógica de rotación de cada tetrominó.

## 🚀 Instalación y Ejecución

**1. Instalar dependencias:**
El proyecto requiere Node.js. Para instalar las herramientas de testing y tipado, ejecutar:
```bash
npm install
