
function validar() {
    
 //Datos del vehículo:
 let marca = document.getElementById("marca").value;
 let modelo = document.getElementById("modelo").value;
 let anio = document.getElementById("año").value;
 let dominio = document.getElementById("dominio").value;
 let nombre = document.getElementById("nombre").value;
 let importadoSi = document.getElementById("importadoSi").checked;
 let importadoNo = document.getElementById("importadoNo").checked;
 let planes = document.getElementById("planes").value;
 
 //Datos personales y de contacto:   
 let apellidos = document.getElementById("apellidos").value;
 let fechaDeNacimiento = document.getElementById("fechaDeNacimiento").value;
 let dni = document.getElementById("dni").value;
 let provincia = document.getElementById("provincia").value;
 let localidad = document.getElementById("localidad").value;
 let tel = document.getElementById("tel").value;
 let eMail = document.getElementById("eMail").value;

    

    expresion = /\w+@\w+\.+[a-z]/;

    if(marca === "" || modelo ==="" || anio === "" || dominio === "" || apellidos === "" ||
    fechaDeNacimiento === "" || dni === "" || provincia ==="" || localidad === "" || tel === ""
    || eMail === "" || planes === "" || (importadoSi == false && importadoNo == false)) {
       swal ( "Error!" ,  "Todos los campos son obligatorios" ,  "error" );
       return false;
    } else if(nombre.length > 30){
        swal ( "Error!" ,  "El nombre es muy largo" ,  "error" );
        return false;
    }
    else if(apellidos.length > 80){
        swal ( "Error!" ,  "Los apellidos son muy largos" ,  "error" );
        return false;
    }
    
    else if(tel.length > 11){
        swal ( "Error!" ,  "El teléfono es muy largo" ,  "error" );
        return false;
    }
    else if(isNaN(tel)){
        swal ( "Error!" ,  "El teléfono ingresado no es un número" ,  "error" );
        return false;
    }
    else if(!expresion.test(eMail)){
        swal ( "Error!" ,  "Ingrese un correo válido" ,  "error" );
        return false;
    }
    
    swal("Enviado!", "Se ha enviado el formulario con tus datos correctamente", "success");
    return false;
}

//Formulario

const DOMstrings = {
    stepsBtnClass: 'multisteps-form__progress-btn',
    stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
    stepsBar: document.querySelector('.multisteps-form__progress'),
    stepsForm: document.querySelector('.multisteps-form__form'),
    stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
    stepFormPanelClass: 'multisteps-form__panel',
    stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next' };
  
  
  const removeClasses = (elemSet, className) => {
  
    elemSet.forEach(elem => {
  
      elem.classList.remove(className);
  
    });
  
  };
  
  const findParent = (elem, parentClass) => {
  
    let currentNode = elem;
  
    while (!currentNode.classList.contains(parentClass)) {
      currentNode = currentNode.parentNode;
    }
  
    return currentNode;
  
  };
  
  const getActiveStep = elem => {
    return Array.from(DOMstrings.stepsBtns).indexOf(elem);
  };
  
  const setActiveStep = activeStepNum => {
  
    removeClasses(DOMstrings.stepsBtns, 'js-active');
  
    DOMstrings.stepsBtns.forEach((elem, index) => {
  
      if (index <= activeStepNum) {
        elem.classList.add('js-active');
      }
  
    });
  };
  
  const getActivePanel = () => {
  
    let activePanel;
  
    DOMstrings.stepFormPanels.forEach(elem => {
  
      if (elem.classList.contains('js-active')) {
  
        activePanel = elem;
  
      }
  
    });
  
    return activePanel;
  
  };
  
  const setActivePanel = activePanelNum => {
  
    removeClasses(DOMstrings.stepFormPanels, 'js-active');
  
    DOMstrings.stepFormPanels.forEach((elem, index) => {
      if (index === activePanelNum) {
  
        elem.classList.add('js-active');
  
        setFormHeight(elem);
  
      }
    });
  
  };
  
  const formHeight = activePanel => {
  
    const activePanelHeight = activePanel.offsetHeight;
  
    DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
  
  };
  
  const setFormHeight = () => {
    const activePanel = getActivePanel();
  
    formHeight(activePanel);
  };
  
  DOMstrings.stepsBar.addEventListener('click', e => {
  
    const eventTarget = e.target;
  
    if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
      return;
    }
  
    const activeStep = getActiveStep(eventTarget);
  
    setActiveStep(activeStep);
  
    setActivePanel(activeStep);
  });
  
  DOMstrings.stepsForm.addEventListener('click', e => {
  
    const eventTarget = e.target;
  
    if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))
    {
      return;
    }
  
    const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
  
    let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
  
    if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
      activePanelNum--;
  
    } else {
  
      activePanelNum++;
  
    }
  
    setActiveStep(activePanelNum);
    setActivePanel(activePanelNum);
  
  });
  
  window.addEventListener('load', setFormHeight, false);
  
  window.addEventListener('resize', setFormHeight, false);
  
  
  const setAnimationType = newType => {
    DOMstrings.stepFormPanels.forEach(elem => {
      elem.dataset.animation = newType;
    });
  };
  
  //changing animation
  const animationSelect = document.querySelector('.pick-animation__select');
  
  animationSelect.addEventListener('change', () => {
    const newAnimationType = animationSelect.value;
  
    setAnimationType(newAnimationType);
  });