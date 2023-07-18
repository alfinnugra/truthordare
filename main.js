let truthBtn = document.querySelector('.truth-btn');
let dareBtn = document.querySelector('.dare-btn');
let displaycontainer = document.querySelector('.display-container');

let truth = [
    "Siapa orang terdekat kamu?",
    "Siapa orang yang spesial di hidup kamu?",
    "Apa kebiasaan kamu?",
    "Hal yang belum orang lain ketahui tentang kamu?",
    "Sedang memiliki perasaan kepada seseorang? dan siapa orang nya?",
    "Kapan terakhir kali Anda berbohong?",
    "Kapan terakhir kali kamu menangis?",
    "apa ketakutan terbesar MU?",
    "Apa fantasi terbesarmu?",
    "Apakah Anda memiliki fetish?",
    "Hal apa yang membuatmu senang ibumu tidak tahu tentangmu?",
    "Apakah Anda pernah menipu seseorang?",
    "Apa hal terburuk yang pernah kamu lakukan?",
    "Apa kesulitan terbesar yang pernah Anda alami?",
    "Mengapa hubungan terakhir Anda putus?",
]

let dare = [
    "Push up 10x",
    "Meminta contact orang random",
    "Berkenalan dengan orang random",
    "Meminta social media orang random",
    "Mengajak orang berkenalan",
    "Tampilkan foto paling memalukan di ponsel Anda",
    "Tunjukkan lima orang terakhir yang Anda kirimi Chat dan isi pesan tersebut",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

truthBtn.addEventListener('click', () => {
    let trueValue = truth[Math.floor(Math.random() * truth.length)];
    displaycontainer.innerHTML = `<p class='text'> ${trueValue}`;
})

dareBtn.addEventListener('click', () => {
    let trueValue = dare[Math.floor(Math.random() * dare.length)];
    displaycontainer.innerHTML = `<p class='text'> ${trueValue}`;
})