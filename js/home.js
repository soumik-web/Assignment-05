// Blog Button Linked
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = '/Assignment-05/blog.html'
})

// Donation Button
document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('donation-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
})

// History Button
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donation-container').classList.add('hidden');
})
// Modal Close
document.getElementById('confirmation-modal-close')
    .addEventListener('click', function(){
        document.getElementById('confirmation-modal').classList.add('hidden');
    })


// Donation Process
const donationCards = document.getElementById('donation-cards').children;
// console.log(donationCards);
for(const card of donationCards){
    donationCardManagement(card);
}


// Donation History