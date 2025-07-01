    let answer = Math.floor(Math.random() * 100) + 1;
    const submitButton = document.getElementById('submit-btn');
    const numberInput = document.getElementById('number-input');

    submitButton.addEventListener ('click', () => {
        console.log('submitButton clicked');
        if (isNaN(numberInput)) {
            alert('숫자를 입력해주세요.');
        } else if (numberInput < answer) {
            alert('UP');
        } else if (numberInput > answer) {
            alert('DOWN');
        } else {
            alert(`정답이에요! 정답: ${answer}`);
        }
    }
    )