// Mouse Events (Click, Over, Out)

const featheredButtons = document.getElementById('donation-history').children;
let currentButton = featheredButtons[0];
for (const targetButton of featheredButtons) {
    // Click
    targetButton.addEventListener('click', function (event) {
        // console.log(event.target);
        const buttons = event.target.parentNode.children;
        for (const button of buttons) {
            if (button === event.target) {
                currentButton = button;
                button.classList.remove('bg-white');
                button.classList.add('bg-[#B4F461]');
            }
            else {
                // console.log(button);
                button.classList.remove('bg-[#B4F461]');
                button.classList.add('bg-white');
            }
        }
        // console.log(currentButton);
    });

    // Mouse Over
    targetButton.addEventListener('mouseover', function (event) {
        // console.log(event.target);
        const buttons = event.target.parentNode.children;
        for (const button of buttons) {
            if (button !== event.target) {
                button.classList.remove('bg-[#B4F461]');
                button.classList.add('bg-white');
            }
        }
    });

    // Mouse Out
    targetButton.addEventListener('mouseout', function () {
        currentButton.classList.remove('bg-white');
        currentButton.classList.add('bg-[#B4F461]');
    })
}

