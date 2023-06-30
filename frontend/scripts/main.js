const inputText = document.getElementById('inputText');
const result = document.getElementById('result');

function convertToMorse() {
    const text = inputText.value;

    axios.post('https://haxrfqe8w2.execute-api.us-east-1.amazonaws.com/prod/morsecode', { message: text })
        .then(response => {
            if (response && response.data && response.data.body) {
                const morseCode = response.data.body.replace(/\//g, ' / ');
                result.innerText = morseCode;
            } else {
                console.error('Unexpected response:', response);
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

inputText.addEventListener('input', convertToMorse);
