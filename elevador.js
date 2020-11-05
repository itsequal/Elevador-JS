let elevador = (function() {
  let privActual = 0;
  let privPuerta = 0;

  function ActualFloor() {
    return privActual;
  }

  function OpenDoor() {
    privState = 1;
    return "Puerta abierta";
  }

  function CloseDoor() {
    privState = 0;
    return "Puerta cerrada";
  }

  function PrivUp() {
    if (privActual == 7) {
      return "Ha llegado al piso máximo";
    } else {
      if (privState == 1) {
        console.log(CloseDoor());
      }
      console.log(OpenDoor());
      privActual++;
      console.log("Nos encontramos en el piso  " + privActual);
    }
  }

  function PrivDown() {
    if (privActual == 0) {
      return "Has llegado a la planta baja";
    } else {
      if (privState == 1) {
        console.log(CloseDoor());
      }
      console.log(OpenDoor());
      privActual--;
      return "Nos encontramos en el piso " + privActual;
    }
  }

  function GoToFloor(x) {
    if (x >= 0 && n < x) {
      if (privActual == x) {
        return "Ya te encuentras en el piso " + privActual;
      } else {
        if (privActual > x) {
          if (privState == 1) {
            console.log(CloseDoor());
          }
          do {
            privActual--;
            console.log(privActual);
          } while (privActual != x);
        } else {
          if (privState == 1) {
            console.log(CloseDoor());
          }
          do {
            privActual++;
            console.log(privActual);
          } while (privActual != x);
        }
        return "Estamos en el piso " + privActual;
      }
    } else {
      return "Número de piso no valido"
    }
  }
  return {
    AbrirPuerta: OpenDoor,
    CerrarPuerta: CloseDoor,
    IrAPiso: GoToFloor,
    Subir1Piso: PrivUp,
    Bajar1Piso: PrivDown,
    PisoActual: ActualFloor
  }
})();
