const inputElement = document.querySelector('.input-name-people');
const buttonElement = document.querySelector('.button-add-participant');
const elementDivContainer = document.querySelector('.participants-container');

// Validação do input
const validateInput = () => inputElement.value.trim().length > 0;


const isValidIpunt = () => {
    const valueInput = validateInput();

    if (!valueInput) {
        return inputElement.classList.add('error');
    }

    console.log(inputElement.value)

    // Adicionar div

    const participantsContainer = document.createElement('div');
    participantsContainer.classList.add('participant-item');

    // Adicionando parágrafo
    const participantContent = document.createElement('p');
    participantContent.innerText = inputElement.value;

    // Adicionando iconi de lixeira
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('bx');
    deleteIcon.classList.add('bxs-trash-alt');

    // Adicionar tudo na div participantsContainer
    participantsContainer.appendChild(participantContent);
    participantsContainer.appendChild(deleteIcon);

    console.log(participantsContainer);

    // Adicionar a div participantsContainer na div pai elementDivContainer

    elementDivContainer.appendChild(participantsContainer);

    inputElement.value = "";

    // Remover participante
    deleteIcon.addEventListener("click", () => removeParticipant(participantsContainer, participantContent))


    const removeParticipant = (participantsContainer, participantContent) => {
        const participants = elementDivContainer.childNodes

        for (const participantElement of participants) {

            const validateClickButton = participantElement.firstChild === participantContent;

            if (validateClickButton) {
                participantsContainer.remove()
            }
        }

    }

    // Gerar vencedor

}

const removeError = () => {
    const valueInput = validateInput();

    if (valueInput) {
        return inputElement.classList.remove('error');
    }
}

inputElement.addEventListener('change', () => removeError())
buttonElement.addEventListener('click', () => isValidIpunt())
