const inputElement = document.querySelector('.input-name-people');
const buttonElement = document.querySelector('.button-add-participant');
const elementDivContainer = document.querySelector('.participants-container');
const buttonGenerateWinner = document.querySelector('.button-generate-winner');
const loadingDiv = document.querySelector('.loading');

// Validação do input
const validateInput = () => inputElement.value.trim().length > 0;


const isValidIpunt = () => {
    const valueInput = validateInput();

    if (!valueInput) {
        return inputElement.classList.add('error');
    }

    console.log(inputElement.value);

    // Adicionar div

    const participantsContainer = document.createElement('div');
    participantsContainer.classList.add('participant-item');

    // Adicionando parágrafo
    const participantContent = document.createElement('p');
    participantContent.innerText = inputElement.value;

    // Adicionando iconi de lixeira
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('bx');
    deleteIcon.classList.add('bxs-trash');

    // Adicionar tudo na div participantsContainer
    participantsContainer.appendChild(participantContent);
    participantsContainer.appendChild(deleteIcon);

    console.log(participantsContainer);

    // Adicionar a div participantsContainer na div pai elementDivContainer

    elementDivContainer.appendChild(participantsContainer);

    inputElement.value = "";

    console.log(`O tamanho do array é ${elementDivContainer.childNodes.length}`);
    console.log(elementDivContainer.childNodes);


    // Remover participante
    deleteIcon.addEventListener("click", () => removeParticipant(participantsContainer, participantContent));


    const removeParticipant = (participantsContainer, participantContent) => {
        const participants = elementDivContainer.childNodes;

        for (const participantElement of participants) {

            const validateClickButton = participantElement.firstChild === participantContent;

            if (validateClickButton) {
                participantsContainer.remove();
            }
        }

    }

}

const removeError = () => {
    const valueInput = validateInput();

    if (valueInput) {
        return inputElement.classList.remove('error');
    }
}


// Gerar vencedor
buttonGenerateWinner.addEventListener("click", () => generateWinner());

const generateWinner = () => {
    const validateLengthDiv = elementDivContainer.childNodes.length === 0;

    if (validateLengthDiv) {
        return inputElement.classList.add('error');
    }

    loadingDiv.style.display="flex";
    const winner = Math.floor(Math.random() * elementDivContainer.childNodes.length);
    const people = elementDivContainer.childNodes[winner].firstChild.innerText;

    // Criar popup
    const popup = document.querySelector('.popup-wrapper');
    const textPeopleWinner = document.querySelector('.popup-content');

    textPeopleWinner.childNodes[3].innerText = `${people}`

    setTimeout(() => {
        popup.style.display='block';
        loadingDiv.style.display="none";
    },
     5000)

     popup.addEventListener('click', event => {
        const classNameOfClickedElement = event.target.classList[0];
        console.log(classNameOfClickedElement)
        const classNames = ["popup-wrapper", "bx"];
        const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement);

       if (shouldClosePopup) {
        popup.style.display='none';
       }
    })

}

inputElement.addEventListener('change', () => removeError());
buttonElement.addEventListener('click', () => isValidIpunt());