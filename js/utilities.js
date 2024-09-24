function setMyBalance(amount) {
    const balance = document.getElementById('my-current-balance').innerText;
    document.getElementById('my-current-balance').innerText = parseFloat(balance) - parseFloat(amount);
}

function setTotalDonation(card, totalDonation) {
    const balance = card.querySelector('.total-donation').innerText;
    // console.log(balance);
    card.querySelector('.total-donation').innerText = parseFloat(totalDonation) + parseFloat(balance);
}
// total-donation
// user-donate
// donation-btn
// donation-sector
function checkValidity(amount) {
    const balance = document.getElementById('my-current-balance').innerText;
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid Input !");
        return false;
    }
    else if (parseFloat(amount) > parseFloat(balance)) {
        alert("You don't have sufficient balance !!");
        return false;
    }
    else {
        return true;
    }
}
function donationCardManagement(card) {
    const button = card.querySelector('.donation-btn');
    const sector = card.querySelector('.donation-sector').innerText;
    button.addEventListener('click', function () {
        const userDonated = card.querySelector('.user-donate').value.trim();
        card.querySelector('.user-donate').value = '';
        if (checkValidity(userDonated) && userDonated !== '') {
            setMyBalance(userDonated);
            setTotalDonation(card, userDonated);
            document.getElementById('confirmation-modal').classList.remove('hidden');
            addHistoryCard(sector, userDonated);
        }
        else return;
    })
}

// Donation History
// "border-2 border-gray-100 rounded-xl p-8"
function addHistoryCard(donationScetor, userDonated) {
    let donationDate = new Date();
    const newCard = document.createElement('div');
    newCard.setAttribute('class', 'border-2 border-gray-100 rounded-xl p-8 mb-4')
    newCard.innerHTML =
    `
        <h1 class="font-bold text-xl mb-4">
            ${userDonated} Taka is Donated for ${donationScetor}, Bangladesh
        </h1>
        <p class="font-light text-base text-[#111111] text-opacity-60">
            Date : ${donationDate}
        </p>
    `
    document.getElementById('history-container').prepend(newCard);
    // console.log(newCard.innerHTML);
}